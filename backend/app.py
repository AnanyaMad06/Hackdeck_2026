import gc
import sqlite3

from flask import Flask, jsonify, request
from flask import g

import information_extraction
import patrol_allocation
import zone

app: Flask = Flask(__name__)

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

@app.route("/api/patrol-deployment", methods=["POST"])
def suggest_patrol_deployment():
    data = request.json

    if "total_officers" not in data or not isinstance(data["total_officers"], int):
        return jsonify({"error": "incorrect payload"}), 400

    cursor = get_db().cursor()
    cursor.execute("SELECT crime_intensity FROM zones ORDER BY id;")
    crime_intensities = list(map(lambda e: e[0], cursor.fetchall()))
    cursor.close()

    return jsonify(patrol_allocation.allocate(data["total_officers"], crime_intensities, MIN_OFFICERS_PER_ZONE))

@app.route("/api/fir", methods=["POST"])
def submit_fir():
    data = request.json

    if "text" not in data or not isinstance(data["text"], str):
        return jsonify({"error": "incorrect payload"}), 400

    ner = get_ner()

    crime = "".join(map(lambda e: e["word"], filter(lambda e: e["entity_group"] == "CRIME", ner(data["text"]))))
    location = "".join(map(lambda e: e["word"], filter(lambda e: e["entity_group"] == "LOCATION", ner(data["text"]))))

    zone_id = zone.find_zone(location.lower())

    db = get_db()
    cursor = db.cursor()
    cursor.execute("UPDATE zones SET crime_intensity = crime_intensity + 1 WHERE id = ?;", (zone_id,))
    db.commit()
    cursor.close()

    return jsonify({ "crime": crime, "location": location })

@app.route("/api/stats", methods=["GET"])
def stats():
    cursor = get_db().cursor()
    cursor.execute("SELECT crime_intensity FROM zones ORDER BY id;")
    stats = list(map(lambda e: e[0], cursor.fetchall()))
    cursor.close()

    return jsonify(stats)
