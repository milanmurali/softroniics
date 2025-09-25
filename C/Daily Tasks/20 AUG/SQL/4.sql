SHOW DATABASES;

CREATE DATABASE library;

USE library;

SHOW TABLES;

CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title VARCHAR(100) NOT NULL,
    Author VARCHAR(100) NOT NULL,
    PublishedYear INT NOT NULL,
    Genre VARCHAR(50) NOT NULL
);

CREATE TABLE Members (
    MemberID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth DATE NOT NULL,
    JoinDate DATE NOT NULL
);

INSERT INTO Books VALUES (1,'BOOK1', 'John Doe', 1965, 'Science Fiction');

UPDATE Books SET Author = 'James Carbon' WHERE BookID = 1;

DELETE FROM Books WHERE BookID = 1;

SELECT * FROM Books WHERE Genre = 'Science Fiction';

SELECT FirstName, LastName FROM Members WHERE JoinDate > '2020-01-01';

