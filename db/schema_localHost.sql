DROP DATABASE IF EXISTS `burger_db`;
CREATE DATABASE `burger_db`;
USE `burger_db`;
CREATE TABLE `burgers` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `burgerName` VARCHAR(200) NOT NULL,
    `devoured` BOOLEAN DEFAULT false NOT NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(`id`)
);