INSERT INTO department (id, name)
VALUES (1, 'Manufacturing'),
        (2, 'R&D'),
        (3, 'IT'),
        (4, 'Shipping')
        (5, 'Engineering');

INSERT INTO role (id, title ,salary, department_id)
VALUES  (1,'Technician', 45000, 1),
        (2,'Supervisor', 60,000, 1),
        (3,'Manufacturing Engineer', 80,000, 2)
        (3,'IT Specialist', 65000, 3),
        (4,'Warehouse manager', 50,000, 4),
        (5,'Quality Engineer', 85,000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1,'John', 'Wick', 1, 1),
        (2, 'James', 'Bond', 2, 2),
        (3, 'Don', 'Toledo', 3, 3),
        (4, 'Bright', 'Abety', 4, 4);