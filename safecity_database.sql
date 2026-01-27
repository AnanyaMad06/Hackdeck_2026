CREATE DATABASE safecity;
USE safecity;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    password VARCHAR(255) NOT NULL
    );


INSERT INTO users (id,name, username, phone, password) VALUES
(1,'Aarav Patil', 'aarav.patil@gmail.com', '9876543210', 'hashed_pass_1'),
(2,'Riya Sharma', 'riya.sharma@gmail.com', '9123456780', 'hashed_pass_2'),
(3,'Kunal Mehta', 'kunal.mehta@gmail.com', '9988776655', 'hashed_pass_3'),
(4,'Neha Verma', 'neha.verma@gmail.com', '9012345678', 'hashed_pass_4'),
(5,'Aditya Kulkarni', 'aditya.k@gmail.com', '8899776655', 'hashed_pass_5');



CREATE TABLE zones (
    zone_id INT AUTO_INCREMENT PRIMARY KEY,
    zone_name VARCHAR(150) NOT NULL,
    risk_level VARCHAR(20) DEFAULT 'Low',
    no_of_police INT NOT NULL
    );


INSERT INTO zones (zone_name, no_of_police) VALUES
('Jawahar Nagar & City Centre', 120),
('Best Nagar & Motilal Nagar', 85),
('Bangur Nagar & Link Road', 95),
('Aarey Colony', 60),
('Film City & IT Parks', 140),
('Gokuldham & Yashodham', 90),
('Dindoshi & Nagari Niwas', 80),
('Oshiwara District Centre (ODC)', 110),
('Goregaon-Mulund Link Road', 130);


CREATE TABLE alerts (
    alert_id INT AUTO_INCREMENT PRIMARY KEY,
    zone_id INT,
    alert_message VARCHAR(255),
    level VARCHAR(20),
	FOREIGN KEY (zone_id) REFERENCES zones(zone_id)
);



INSERT INTO alerts (zone_id, alert_message, level) VALUES
(1, 'High theft incidents reported near City Centre market area', 'High'),
(2, 'Increase in chain-snatching cases during evening hours', 'Medium'),
(3, 'Frequent traffic violations and hit-and-run incidents reported', 'Medium'),
(4, 'Suspicious movement detected near forest boundary at night', 'Low'),
(5, 'Cybercrime and vehicle theft cases reported near IT Parks', 'High');



CREATE TABLE firs (
    fir_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    zone_id INT,
    crime_type VARCHAR(100),
    description TEXT,
    status VARCHAR(20),  
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (zone_id) REFERENCES zones(zone_id)
);


ALTER TABLE users
ADD COLUMN city VARCHAR(30) DEFAULT "Goregoan",
ADD COLUMN location VARCHAR(30) NOT NULL;
