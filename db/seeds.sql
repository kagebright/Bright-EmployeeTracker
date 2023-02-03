INSERT INTO department (id, name)
VALUES  (1, 'Manufacturing'),
        (2, 'R&D'),
        (3, 'IT'),
        (4, 'Shipping'),
        (5, 'Engineering');

INSERT INTO role (id, title ,salary, department_id)
VALUES  (6,'Technician', 45000, 1),
        (7,'Supervisor', 60000, 2),
        (8,'IT Specialist', 65000, 3),
        (9,'Warehouse manager', 50000, 4),
        (10,'Quality Engineer', 85000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (11,'John', 'Wick', 6, 11),
        (12, 'James', 'Bond', 7, 12),
        (13, 'Don', 'Toledo', 8, 13),
        (14, 'Bright', 'Abety', 9, 14),
        (15, 'Jane', 'Doe', 10, 15);
