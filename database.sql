CREATE TABLE Genre (
    genre_id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO Genre (name) VALUES
('Action'),
('Comedy'),
('Horror'),
('Thriller'),
('Scifi'),
('Fantasy');

CREATE TABLE Movie (
    movie_id SERIAL PRIMARY KEY,
    movie_name VARCHAR(255),
    movie_year INT,
    genre_id INT,
    FOREIGN KEY (genre_id) REFERENCES Genre(genre_id)
);

INSERT INTO Movie (movie_name, movie_year, genre_id) VALUES
('Die Hard', 1988, 1),
('Mad Max: Fury Road', 2015, 1),
('Superbad', 2007, 2),
('Anchorman: The Legend of Ron Burgundy', 2004, 2),
('A Nightmare on Elm Street', 1984, 3),
('Hereditary', 2018, 3),
('Se7en', 1995, 4),
('Gone Girl', 2014, 4),
('Blade Runner 2049', 2017, 5),
('Dune', 2021, 5),
('Harry Potter and the Sorcerers Stone', 2001, 6),
('The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', 2005, 6);

CREATE TABLE Reviewer (
    reviewer_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    birthyear INT
);

INSERT INTO Reviewer (name, username, password, birthyear) VALUES
('Heikki Takalo', 'heikkitak', 'salasana123', 2000),
('Homer Simpson', 'homersim', 'salasana321', 1956),
('Bart Simpson', 'bartsim', 'password123', 1979),
('Marge Simpson', 'margesim', 'password321', 1955);

CREATE TABLE Review (
    review_id INT PRIMARY KEY,
    reviewer_id INT,
    movie_id INT,
    stars INT,
    review_text TEXT,
    FOREIGN KEY (reviewer_id) REFERENCES Reviewer(reviewer_id),
    FOREIGN KEY (movie_id) REFERENCES Movie(movie_id)
);

CREATE TABLE FavoriteMovies (
    reviewer_id INT,
    movie_id INT,
    FOREIGN KEY (reviewer_id) REFERENCES Reviewer(reviewer_id),
    FOREIGN KEY (movie_id) REFERENCES Movie(movie_id)
);
