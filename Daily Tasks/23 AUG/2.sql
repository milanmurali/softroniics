CREATE DATABASE CompanyDB;
USE CompanyDB;

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY AUTO_INCREMENT,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    HireDate DATE,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

CREATE TABLE Salaries (
    SalaryID INT PRIMARY KEY AUTO_INCREMENT,
    EmployeeID INT,
    SalaryAmount DECIMAL(10, 2),
    SalaryDate DATE,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);

INSERT INTO Departments (DepartmentName) VALUES 
('HR'),
('Finance'),
('Engineering'),
('Marketing'),
('Sales');

INSERT INTO Employees (FirstName, LastName, DepartmentID, HireDate) VALUES
('John', 'Doe', 1, '2018-01-15'),
('Jane', 'Smith', 2, '2017-03-22'),
('Michael', 'Brown', 3, '2016-07-18'),
('Emily', 'Davis', 4, '2019-11-05'),
('David', 'Wilson', 5, '2020-06-21');


INSERT INTO Salaries (EmployeeID, SalaryAmount, SalaryDate) VALUES
(1, 55000.00, '2023-01-01'),
(2, 65000.00, '2023-01-01'),
(3, 85000.00, '2023-01-01'),
(4, 50000.00, '2023-01-01'),
(5, 45000.00, '2023-01-01');


UPDATE Departments 
SET DepartmentName = 'Human Resources' 
WHERE DepartmentID = 1;


SELECT Employees.FirstName, Employees.LastName, Departments.DepartmentName 
FROM Employees
JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

SELECT Departments.DepartmentName, AVG(Salaries.SalaryAmount) AS AverageSalary
FROM Employees
JOIN Salaries ON Employees.EmployeeID = Salaries.EmployeeID
JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID
GROUP BY Departments.DepartmentName;

SELECT Employees.FirstName, Employees.LastName
FROM Employees
JOIN Salaries ON Employees.EmployeeID = Salaries.EmployeeID
WHERE Salaries.SalaryAmount > (SELECT AVG(SalaryAmount) FROM Salaries);

ALTER TABLE Employees ADD LeaveDate DATE;  -- Add the LeaveDate column if it doesn't exist

DELETE FROM Salaries
WHERE EmployeeID IN (
    SELECT EmployeeID FROM Employees WHERE LeaveDate IS NOT NULL
);


SELECT E.FirstName, E.LastName, S.SalaryAmount, D.DepartmentName
FROM Employees E
JOIN Salaries S ON E.EmployeeID = S.EmployeeID
JOIN Departments D ON E.DepartmentID = D.DepartmentID
WHERE 
    E.HireDate <= CURDATE() - INTERVAL 5 YEAR
    AND S.SalaryAmount > (
        SELECT AVG(Salaries.SalaryAmount)
        FROM Salaries
        JOIN Employees ON Salaries.EmployeeID = Employees.EmployeeID
        WHERE Employees.DepartmentID = E.DepartmentID
    );


START TRANSACTION;

BEGIN;

-- Insert new department
INSERT INTO Departments (DepartmentName) VALUES ('Research and Development');

-- Get the last inserted DepartmentID
SET @NewDeptID = LAST_INSERT_ID();

-- Insert associated employees
INSERT INTO Employees (FirstName, LastName, DepartmentID, HireDate) VALUES
('Alice', 'Johnson', @NewDeptID, '2024-08-01'),
('Bob', 'Lee', @NewDeptID, '2024-08-01');

-- Commit the transaction
COMMIT;

-- If anything fails, roll back the transaction
ROLLBACK;


CREATE VIEW EmployeeOverview AS
SELECT E.FirstName, E.LastName, D.DepartmentName, S.SalaryAmount, S.SalaryDate
FROM Employees E
JOIN Departments D ON E.DepartmentID = D.DepartmentID
JOIN Salaries S ON E.EmployeeID = S.EmployeeID
WHERE S.SalaryDate = (SELECT MAX(SalaryDate) FROM Salaries WHERE EmployeeID = E.EmployeeID);


SELECT * FROM EmployeeOverview;


