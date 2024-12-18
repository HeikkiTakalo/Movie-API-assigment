const dummyResponses = {
    genres: [
      { genre_id: 1, name: "Action" },
      { genre_id: 2, name: "Comedy" },
      { genre_id: 3, name: "Horror" },
      { genre_id: 4, name: "Thriller" },
      { genre_id: 5, name: "Scifi" },
      { genre_id: 6, name: "Fantasy" },
    ],
    movies: [
      { movie_id: 1, movie_name: "Die Hard", movie_year: 1988, genre_id: 1 },
      { movie_id: 2, movie_name: "Superbad", movie_year: 2007, genre_id: 2 },
      { movie_id: 3, movie_name: "A Nightmare on Elm Street", movie_year: 1984, genre_id: 3 },
      { movie_id: 4, movie_name: "Se7en", movie_year: 1995, genre_id: 4 },
      { movie_id: 5, movie_name: "Blade Runner 2049", movie_year: 2017, genre_id: 5 },
      { movie_id: 6, movie_name: "Harry Potter and the Sorcerer's Stone", movie_year: 2001, genre_id: 6 },
    ],
    reviewers: [
      { reviewer_id: 1, name: "Heikki Takalo", username: "heikkitak", password: "salasana123", birthyear: 2000 },
      { reviewer_id: 2, name: "Homer Simpson", username: "homersim", password: "salasana321", birthyear: 1956 },
    ],
    reviews: [
      { review_id: 1, reviewer_id: 1, movie_id: 1, stars: 5, review_text: "Amazing action movie!" },
      { review_id: 2, reviewer_id: 2, movie_id: 2, stars: 4, review_text: "Hilarious!" },
    ],
    favorites: [
      { reviewer_id: 1, movie_id: 1 },
      { reviewer_id: 2, movie_id: 3 },
    ],
  };
  
  export default dummyResponses;
  