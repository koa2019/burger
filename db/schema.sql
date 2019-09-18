DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id Int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burgerName VARCHAR(200) NULL,
    devoured BOOLEAN
);