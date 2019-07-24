DROP DATABASE IF EXISTS planitDB;
CREATE DATABASE planitDB;

USE planitDB;

CREATE TABLE holiday(
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `month_name` VARCHAR(20) NOT NULL,
    `month_number` INTEGER NOT NULL,
    `day` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,
    PRIMARY KEY(id)
);


INSERT INTO holiday(`name`, `month_name`, `month_number`, `day`, `year`)
VALUES ("New Year's Day", "January",01, 01, 2019), ("Martin Luther King Day", "January",01, 21, 2019), ("President's Day", "February", 02, 18, 2019),
("Memeorial Day", "May",05, 27, 2019), ("Independance Day", "July",07, 04, 2019), ("Labor Day", "September", 09, 02, 2019), ("Columbus Day", "October", 10, 14, 2019),
("Vetern's Day", "November", 11, 11, 2019), ("Thanksgiving", "November", 11, 28, 2019), ("Christmas Day", "December", 12, 25, 2019), ("New Year's Day", "January",01, 01, 2020), ("Martin Luther King Day", "January",01, 20, 2020), ("President's Day", "February", 02, 17, 2020),
("Memeorial Day", "May",05, 25, 2020), ("Independance Day", "July",07, 04, 2020), ("Labor Day", "September", 09, 07, 2020), ("Columbus Day", "October", 10, 12, 2020),
("Vetern's Day", "November", 11, 11, 2020), ("Thanksgiving", "November", 11, 26, 2020), ("Christmas Day", "December", 12, 25, 2020);


CREATE TABLE developers(
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `month` VARCHAR(20) NOT NULL,
    `day` INTEGER NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE user_events(
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(60) NOT NULL,
    `month` VARCHAR(20) NOT NULL,
    `day` INTEGER NOT NULL,
    PRIMARY KEY(id)
);
