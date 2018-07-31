### Schema
DROP DATABASE IF EXISTS pets_db;
CREATE DATABASE pets_db;
USE pets_db;


INSERT INTO buyers (buyer_name, phone_number) VALUES ('Kevon', '7635558909');
INSERT INTO buyers (buyer_name, phone_number) VALUES ('Jane', '6125559809');

INSERT INTO pets (animal_type, animal_breed, animal_name, animal_sex, animal_size) VALUES ('Dog', 'Doberman Pinscher', 'Juliet', 'Female', 'Large');
INSERT INTO pets (animal_breed, animal_name, animal_gender, animal_size) VALUES ('Dog', 'American Bulldog', 'Sugar', 'Female', 'Large');
INSERT INTO pets (animal_breed, animal_name, animal_gender, animal_size) VALUES ('Cat', 'Manx', 'Gideon', 'Female', 'Medium');

SELECT * FROM buyers;
SELECT * FROM pets;
