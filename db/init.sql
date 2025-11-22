CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL
);

INSERT INTO students (username, password, name)
VALUES ('student1', 'secret123', 'Alice Johnson');

