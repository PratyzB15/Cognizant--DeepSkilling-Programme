INSERT INTO department (id, name)
VALUES (1, 'IT'),
       (2, 'HR');

INSERT INTO skill (id, name)
VALUES (1, 'Java'),
       (2, 'Spring Boot'),
       (3, 'SQL');

INSERT INTO employee (id, name, salary, permanent, department_id)
VALUES (101, 'Rahul', 50000, true, 1),
       (102, 'Amit', 40000, false, 2),
       (103, 'Priya', 70000, true, 1);

INSERT INTO employee_skill (employee_id, skill_id)
VALUES (101, 1),
       (101, 2),
       (102, 3),
       (103, 1),
       (103, 3);