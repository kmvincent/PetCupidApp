-- Schema for local use
DROP DATABASE IF EXISTS pets_db;
CREATE DATABASE pets_db;
USE pets_db;

--for inspecting what's in DB, not necessary for schema to work
SELECT * FROM adopters;
SELECT * FROM pets;
SELECT * FROM interests;