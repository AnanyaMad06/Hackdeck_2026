CREATE TABLE zones (
    id INTEGER PRIMARY KEY,
    crime_count INTEGER,
    crime_intensity INTEGER
) WITHOUT ROWID;

CREATE TABLE crimes (
    id INTEGER PRIMARY KEY,
    description TEXT NOT NULL,
    datetime TEXT NOT NULL
);

INSERT INTO zones (id, crime_count, crime_intensity) VALUES (0, 0, 0);
INSERT INTO zones (id, crime_count, crime_intensity) VALUES (1, 0, 0);
INSERT INTO zones (id, crime_count, crime_intensity) VALUES (2, 0, 0);
INSERT INTO zones (id, crime_count, crime_intensity) VALUES (3, 0, 0);
INSERT INTO zones (id, crime_count, crime_intensity) VALUES (4, 0, 0);
INSERT INTO zones (id, crime_count, crime_intensity) VALUES (5, 0, 0);
INSERT INTO zones (id, crime_count, crime_intensity) VALUES (6, 0, 0);
INSERT INTO zones (id, crime_count, crime_intensity) VALUES (7, 0, 0);
INSERT INTO zones (id, crime_count, crime_intensity) VALUES (8, 0, 0);
