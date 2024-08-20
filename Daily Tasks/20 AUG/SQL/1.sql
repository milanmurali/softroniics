CREATE DATABASE StudentDB;

USE StudentDB;

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DOB DATE,
    Gender CHAR(1),
    Major VARCHAR(100)
);
SELECT * FROM Students;
INSERT INTO Students VALUES 
(1, 'John', 'Doe', '2000-01-15', 'M', 'Computer Science'),
(2, 'Jane', 'Smith', '1999-08-25', 'F', 'Electrical Engineering');

SELECT * FROM Students WHERE Major = 'Computer Science';

UPDATE Students 
SET 
    Major = 'Information Technology'
WHERE
    StudentID = 1;

DELETE FROM Students
WHERE StudentID = 2;

ALTER TABLE Students ADD Email VARCHAR (100);

SELECT FirstName, LastName, Major FROM Students WHERE DOB > '2000-1-1';

SELECT FirstName, Major FROM Students;