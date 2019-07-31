DROP DATABASE IF EXISTS `cvvjamnkiu5fjxdi`;
CREATE DATABASE `cvvjamnkiu5fjxdi`;

USE `cvvjamnkiu5fjxdi`;

CREATE TABLE `events` (
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `moment` VARCHAR(13),
    `event` VARCHAR(30) NOT NULL,
    `year` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,
    `day` INTEGER NOT NULL,
    `finished` BOOLEAN NOT NULL DEFAULT FALSE,
    `important` BOOLEAN NOT NULL DEFAULT FALSE ,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

<<<<<<< HEAD
INSERT INTO `events` (`event`,`year`,`month`, `day`) 
VALUES("Independence Day", 2019, 07, 04), ("Division/Clinton Street Fair", 2019, 07, 27),("Adult Party at Omsi", 2019, 07, 31),("Cold Coffe Festival", 2019, 08, 03),
("Alberta Street Fair", 2019, 08, 10), ("Bike Or Walk The Bridges", 2019, 08, 23), ("Bike Or Walk The Bridges", 2019, 08, 24), ("Bike Or Walk The Bridges", 2019, 08, 25),
("Camera Show", 2019, 08, 24), ("Air and vehicle show", 2019, 08, 17), ("Brunchy booze festival", 2019, 08, 10), ("Hawaiian festival", 2019, 07, 27), ("Hawaiian festival", 2019, 07 ,28);
=======
INSERT INTO `events`(`event`,`year`,`month`, `day`,false, false, 20150414, 20150414) 
VALUES("Independence Day", 2019, 07, 04,false, false, 20150414, 20150414), ("Division/Clinton Street Fair", 2019, 07, 27,false, false, 20150414, 20150414),("Adult Party at Omsi", 2019, 07, 31,false, false, 20150414, 20150414),("Cold Coffe Festival", 2019, 08, 03,false, false, 20150414, 20150414),
("Alberta Street Fair", 2019, 08, 10,false, false, 20150414, 20150414), ("Bike Or Walk The Bridges", 2019, 08, 23,false, false, 20150414, 20150414), ("Bike Or Walk The Bridges", 2019, 08, 24,false, false, 20150414, 20150414), ("Bike Or Walk The Bridges", 2019, 08, 25,false, false, 20150414, 20150414),
("Camera Show", 2019, 08, 24,false, false, 20150414, 20150414), ("Air and vehicle show", 2019, 08, 17,false, false, 20150414, 20150414), ("Brunchy booze festival", 2019, 08, 10,false, false, 20150414, 20150414), ("Hawaiian festival", 2019, 07, 27,false, false, 20150414, 20150414), ("Hawaiian festival", 2019, 07 ,28,false, false, 20150414, 20150414)

>>>>>>> 6b753fd6ca1c4f2e5ec6db2f2f3a2ed5a5ef7e12

CREATE TABLE `user_info` (
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `password` VARCHAR(32) NOT NULL,
    PRIMARY KEY(id)
);
