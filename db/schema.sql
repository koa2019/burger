CREATE TABLE `burgers` (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `burgerName` VARCHAR(200) NOT NULL,
    `devoured` BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY(`id`)
);