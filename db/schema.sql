### Schema
DROP DATABASE IF EXISTS pets_db;
CREATE DATABASE pets_db;
USE pets_db;

CREATE TABLE buyers
(
	id int NOT NULL AUTO_INCREMENT,
	buyer_name varchar(255) NOT NULL,
    phone_number varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE pets
(
	id int NOT NULL AUTO_INCREMENT,
	animal_type varchar(255) NOT NULL,
    animal_breed varchar(255) NOT NULL,
	animal_name varchar(255) NOT NULL,
    animal_gender varchar(6) NULL,
    animal_size varchar(30) NULL,
	buyer_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (buyer_id) REFERENCES buyers(id)
);

INSERT INTO buyers (buyer_name, phone_number) VALUES ('Kevon', '7635558909');
INSERT INTO buyers (buyer_name) VALUES ('Jane', '6125559809');

INSERT INTO pets (animal_type, animal_breed, animal_name, animal_gender, animal_size) VALUES ('Dog', 'Doberman Pinscher', 'Juliet', 'Female', 'Large');
INSERT INTO pets (animal_breed, animal_name, animal_gender, animal_size) VALUES ('Dog', 'American Bulldog', 'Sugar', 'Female', 'Large');
INSERT INTO pets (animal_breed, animal_name, animal_gender, animal_size) VALUES ('Cat', 'Manx', 'Gideon', 'Female', 'Medium');