CREATE DATABASE StudentDB;
use StudentDB;
SELECT * FROM Students;
SELECT * FROM Courses;
SELECT * FROM StudentCourses;


CREATE TABLE Students (
    StudentID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DOB DATE,
    Gender VARCHAR(10)
);
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY AUTO_INCREMENT,
    CourseName VARCHAR(100),
    Credits INT
);

INSERT INTO Students VALUES
    ('John', 'Doe', '2000-01-15', 'Male'),
    ('Jane', 'Smith', '1999-05-23', 'Female'),
    ('Michael', 'Johnson', '2001-07-08', 'Male'),
    ('Emily', 'Davis', '2000-12-14', 'Female'),
    ('David', 'Brown', '2002-03-30', 'Male');
    
INSERT INTO Courses VALUES
    ('Introduction to Computer Science', 3),
    ('Calculus I', 4),
    ('English Literature', 3),
    ('Physics I', 4),
    ('History of Art', 3);

CREATE TABLE StudentCourses (
    EnrollmentID INT PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    CourseID INT,
    EnrollmentDate DATE,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

INSERT INTO StudentCourses (StudentID, CourseID, EnrollmentDate)
VALUES
    (1, 1, '2023-09-01'),
    (1, 2, '2023-09-01'),
    (2, 3, '2023-09-02'),
    (2, 4, '2023-09-02'),
    (3, 1, '2023-09-03'),
    (3, 5, '2023-09-03'),
    (4, 2, '2023-09-04'),
    (4, 3, '2023-09-04'),
    (5, 4, '2023-09-05'),
    (5, 5, '2023-09-05');
    
UPDATE Students
SET LastName = 'Doof'
WHERE StudentID = 1;

DELETE FROM Courses
WHERE CourseID = 5;

SELECT s.StudentID, s.FirstName, s.LastName, c.CourseName
FROM Students s
JOIN StudentCourses sc ON s.StudentID = sc.StudentID
JOIN Courses c ON sc.CourseID = c.CourseID
WHERE c.CourseName = 'Calculus I';

INSERT INTO Courses (CourseName, Credits)
VALUES ('Introduction to Psychology', 3);

SELECT s.StudentID, s.FirstName, s.LastName, COUNT(sc.CourseID) AS NumberOfCourses
FROM Students s
JOIN StudentCourses sc ON s.StudentID = sc.StudentID
GROUP BY s.StudentID, s.FirstName, s.LastName
HAVING COUNT(sc.CourseID) >= 3;
