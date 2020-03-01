DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

create table burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name varchar(45) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);