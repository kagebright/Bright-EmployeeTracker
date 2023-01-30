DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employee_db;

DROP TABLE IF EXISTS department;

CREATE TABLE department (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);


DROP TABLE IF EXISTS role;

CREATE TABLE role (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary decimal(10,2) NOT NULL,
  department_id int NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(id)
);


DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  first_name varchar(30) DEFAULT NULL,
  last_name varchar(30) DEFAULT NULL,
  role_id int DEFAULT NULL,
  manager_id int DEFAULT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);