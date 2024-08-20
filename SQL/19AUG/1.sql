CREATE DATABASE 19AUG1;
USE 19AUG1;
SHOW DATABASES;
SHOW TABLES;

CREATE TABLE author (
    author_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL
);
CREATE TABLE books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INT NOT NULL,
    publication_year INT NOT NULL,
    FOREIGN KEY (author_id)
        REFERENCES author (author_id)
);
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author_id INT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    membership_date DATE NOT NULL
);
CREATE TABLE Loans (
    loan_id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    user_id INT NOT NULL,
    loan_date DATE NOT NULL,
    return_date DATE,
    FOREIGN KEY (book_id)
        REFERENCES Books (book_id),
    FOREIGN KEY (user_id)
        REFERENCES users (user_id)
);