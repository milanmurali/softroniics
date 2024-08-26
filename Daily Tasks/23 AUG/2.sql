CREATE DATABASE LibraryDB;
USE LibraryDB;
drop database LibraryDB;

CREATE TABLE Authors (
    AuthorID INT PRIMARY KEY AUTO_INCREMENT,
    AuthorName VARCHAR(100),
    Country VARCHAR(100)
);
CREATE TABLE Books (
    BookID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(255),
    AuthorID INT,
    PublishedYear YEAR,
    Genre VARCHAR(100),
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)
);

CREATE TABLE Borrowing (
    BorrowingID INT PRIMARY KEY AUTO_INCREMENT,
    BookID INT,
    BorrowDate DATE,
    ReturnDate DATE,
    BorrowerName VARCHAR(100),
    FOREIGN KEY (BookID) REFERENCES Books(BookID)
);

INSERT INTO Authors (AuthorName, Country)
VALUES
    ('John Doe', 'United States'),
    ('Jane Smith', 'United Kingdom'),
    ('Robert Brown', 'Canada'),
    ('Emily Johnson', 'Australia'),
    ('Michael Lee', 'New Zealand');
    
    
INSERT INTO Books (Title, AuthorID, PublishedYear, Genre)
VALUES
    ('Book1', 1, 2020, 'Adventure'),
    ('Book2', 2, 2018, 'Mystery'),
    ('Book3', 3, 2022, 'Science Fiction'),
    ('Book4', 4, 2019, 'Historical Fiction'),
    ('Book5', 5, 2021, 'Self-help'),
    ('Book6', 1, 2020, 'Adventure'),
    ('Book7', 2, 2018, 'Horror'),
    ('Book8', 3, 2022, 'Technology'),
    ('Book9', 4, 2019, 'Romance'),
    ('Book10', 5, 2021, 'Philosophy');
    
    
INSERT INTO Borrowing (BookID, BorrowDate, ReturnDate, BorrowerName)
VALUES
    (1, '2024-01-10', '2024-01-20', 'John Doe'),
    (2, '2024-02-15', '2024-02-25', 'Jane Smith'),
    (3, '2024-03-05', '2024-03-15', 'Robert Brown'),
    (4, '2024-04-12', '2024-04-22', 'Emily Johnson'),
    (5, '2024-05-18', '2024-04-22', 'Michael Lee');

UPDATE Borrowing
SET ReturnDate = '2024-01-25'
WHERE BorrowingID = 1;

DELETE FROM Authors
WHERE AuthorID = 1;

SELECT Books.Title, Books.Genre, Borrowing.BorrowDate, Borrowing.ReturnDate
FROM Borrowing
JOIN Books ON Borrowing.BookID = Books.BookID
WHERE Borrowing.BorrowerName = 'John Doe';

INSERT INTO Books (Title, AuthorID, PublishedYear, Genre)
VALUES ('New Book', 2, 2023, 'Thriller');

SELECT b.Title, b.Genre, b.PublishedYear
FROM Books b
LEFT JOIN Borrowing bo ON b.BookID = bo.BookID AND bo.BorrowDate >= CURDATE() - INTERVAL 1 YEAR
WHERE bo.BookID IS NULL;


