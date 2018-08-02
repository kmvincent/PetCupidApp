-- Schema
DROP DATABASE IF EXISTS pets_db;
CREATE DATABASE pets_db;
USE pets_db;


SELECT * FROM adopters;
SELECT * FROM pets;
SELECT * FROM interests;


INSERT INTO `Adopters` (`id`,`adopter_first_name`,`adopter_last_name`,`adopter_email`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'adae','awefwe','efae@c.com','2018-08-02 16:24:14','2018-08-02 16:24:14');
INSERT INTO `Pets` (`id`,`pf_id`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'42214712','2018-08-02 16:24:06','2018-08-02 16:24:06');