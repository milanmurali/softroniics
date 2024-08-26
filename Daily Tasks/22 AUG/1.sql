USE employee;

CREATE TABLE employees_details (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    age INT,
    salary DECIMAL(10 , 2 ),
    address VARCHAR(100)
);


CREATE TABLE working_hours (
    emp_id INT,
    emp_name VARCHAR(50),
    working_date DATE,
    working_hours INT,
    FOREIGN KEY (emp_id)
        REFERENCES employees_details (emp_id)
);

INSERT INTO employees_details (emp_id, emp_name, age, salary, address) VALUES
(1, 'Ajeet', 29, 75000.00, '123 Main St, Springfield'),
(2, 'Ayan', 32, 82000.00, '456 Elm St, Springfield'),
(3, 'Milan', 28, 67000.00, '789 Oak St, Springfield'),
(4, 'Ruchi', 31, 90000.00, '101 Maple St, Springfield'),
(5, 'Sneha', 27, 58000.00, '202 Pine St, Springfield');

INSERT INTO working_hours (emp_id, emp_name, working_date, working_hours) VALUES
(1, 'Ajeet', '2015-01-24', 12),
(2, 'Ayan', '2015-01-24', 10),
(3, 'Milan', '2015-01-25', 9),
(4, 'Ruchi', '2015-01-25', 6),
(5, 'Sneha', '2015-01-26', 8);

SELECT * FROM working_hours;

SELECT * FROM working_hours WHERE working_date = '2015-01-25' AND working_hours > 8;

SELECT * FROM working_hours WHERE working_date = '2015-01-25' OR working_hours < 10;

SELECT * FROM working_hours WHERE emp_id =1 AND working_date = '2015-01-25' OR working_hours > 10;

SELECT DISTINCT emp_name FROM working_hours WHERE working_date = '2015-01-24';

SELECT * FROM working_hours ORDER BY working_hours ASC;

SELECT * FROM working_hours ORDER BY working_date DESC;

SELECT emp_name, SUM(working_hours) AS total_hours FROM working_hours GROUP BY emp_name ORDER BY total_hours DESC;

SELECT emp_name, COUNT(*) AS work_days FROM working_hours GROUP BY emp_name ORDER BY work_days ASC;

SELECT emp_name, MIN(working_hours) AS min_hours FROM working_hours GROUP BY emp_name ORDER BY min_hours ASC;

SELECT emp_name, MAX(working_hours) AS max_hours FROM working_hours GROUP BY emp_name ORDER BY max_hours DESC;

SELECT emp_name, AVG(working_hours) AS avg_hours FROM working_hours GROUP BY emp_name ORDER BY avg_hours ASC;





