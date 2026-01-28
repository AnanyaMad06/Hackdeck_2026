import gc
import sqlite3

from flask import Flask, jsonify, request
from flask import g
from flask_cors import CORS

import information_extraction
import intensity
import patrol_allocation
import zone

app = Flask(__name__)
_ = CORS(app)

DATABASE = 'database.db'
MIN_OFFICERS_PER_ZONE = 5

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

def get_ner():
    ner = getattr(g, '_ner_pipeline', None)
    if ner is None:
        ner = g._ner_pipeline = information_extraction.build_pipeline()
    return ner

@app.teardown_appcontext
def teardown(_exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

    ner = getattr(g, '_ner_pipeline', None)
    if ner is not None:
        del ner

    gc.collect()

@app.route("/api/alert", methods=["POST"])
def alert():
    data = request.json
    print(data)

    if "zone" not in data or not isinstance(data["zone"], int) or "message" not in data or not isinstance(data["message"], str):
        return jsonify({"error": "incorrect payload"}), 400

    message = data["message"]

    db = get_db()
    cursor = db.cursor()
    cursor.execute("INSERT INTO alerts (message, zone_id) VALUES (?, ?)", (message, data["zone"]))
    db.commit()
    cursor.close()

    return jsonify({"status": "ok"})

@app.route("/api/alerts.json", methods=["GET"])
def alerts():
    cursor = get_db().cursor()
    cursor.execute("SELECT message, zone_id FROM alerts;")
    alerts = list(map(lambda e: {"message": e[0], "zone": e[1]}, cursor.fetchall()))
    cursor.close()

    return jsonify(alerts)

@app.route("/api/firs.json", methods=["GET"])
def firs():
    cursor = get_db().cursor()
    cursor.execute("SELECT id, description, DATETIME(datetime, 'localtime') FROM crimes;")
    firs = list(map(lambda e: {"id": e[0], "description": e[1], "timestamp": e[2]}, cursor.fetchall()))
    cursor.close()

    return jsonify(firs)

@app.route("/api/submit-fir", methods=["POST"])
def submit_fir():
    data = request.json

    if "text" not in data or not isinstance(data["text"], str):
        return jsonify({"error": "incorrect payload"}), 400

    description = data["text"]
    ner = get_ner()

    crime = "".join(map(lambda e: e["word"], filter(lambda e: e["entity_group"] == "CRIME", ner(description))))
    location = "".join(map(lambda e: e["word"], filter(lambda e: e["entity_group"] == "LOCATION", ner(description))))

    zone_id = zone.find_zone(location.lower())
    crime_intensity = intensity.calculate_intensity(crime)

    db = get_db()
    cursor = db.cursor()
    cursor.execute("UPDATE zones SET crime_count = crime_count + 1, crime_intensity = crime_intensity + ? WHERE id = ?;", (crime_intensity, zone_id,))
    cursor.execute("INSERT INTO crimes (description, datetime) VALUES (?, DATETIME('now'))", (description,))
    db.commit()
    cursor.close()

    return jsonify({ "crime": crime, "location": location })

@app.route("/api/suggest-patrol-deployment", methods=["POST"])
def suggest_patrol_deployment():
    data = request.json

    if "total_officers" not in data or not isinstance(data["total_officers"], int):
        return jsonify({"error": "incorrect payload"}), 400

    cursor = get_db().cursor()
    cursor.execute("SELECT crime_count, crime_intensity FROM zones ORDER BY id;")
    crime_intensities = list(map(lambda e: e[1] / e[0], cursor.fetchall()))
    cursor.close()

    return jsonify(patrol_allocation.allocate(data["total_officers"], crime_intensities, MIN_OFFICERS_PER_ZONE))

@app.route("/api/stats.json", methods=["GET"])
def stats():
    cursor = get_db().cursor()
    cursor.execute("SELECT crime_intensity FROM zones ORDER BY id;")
    stats = list(map(lambda e: e[0], cursor.fetchall()))
    cursor.close()

    return jsonify(stats)
