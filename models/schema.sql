DROP DATABASE IF EXISTS planitDB;
CREATE DATABASE planitDB;

USE planitDB;

CREATE TABLE `event`(
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `moment` VARCHAR(13),
    `event` VARCHAR(30) NOT NULL,
    `year` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,
    `day` INTEGER NOT NULL,
    `finished` BOOLEAN NOT NULL DEFAULT FALSE,
    `important` BOOLEAN NOT NULL DEFAULT FALSE ,
    PRIMARY KEY(id)
);

INSERT INTO `event`(`event`,`year`,`month`, `day`) 
VALUES("Independence Day", 2019, 07, 04), ("Division/Clinton Street Fair", 2019, 07, 27),("Adult Party at Omsi", 2019, 07, 31),("Cold Coffe Festival", 2019, 08, 03),
("Alberta Street Fair", 2019, 08, 10), ("Bike Or Walk The Bridges", 2019, 08, 23), ("Bike Or Walk The Bridges", 2019, 08, 24), ("Bike Or Walk The Bridges", 2019, 08, 25),
("Camera Show", 2019, 08, 24), ("Air and vehicle show", 2019, 08, 17), ("Brunchy booze festival", 2019, 08, 10), ("Hawaiian festival", 2019, 07, 27), ("Hawaiian festival", 2019, 07 ,28)

CREATE TABLE user_info(
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `password` VARCHAR NOT NULL,
    PRIMARY KEY(id)
);
