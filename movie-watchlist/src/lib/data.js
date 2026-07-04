export let movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010, watched: false },
  { id: 2, title: "The Godfather", genre: "Crime", year: 1972, watched: true },
  { id: 3, title: "Interstellar", genre: "Sci-Fi", year: 2014, watched: false },
];

export function getMovie(id) {
  return movies.find((m) => m.id === Number(id));
}

export function addMovie(title, genre, year) {
  const newMovie = {
    id: movies.length + 1,
    title,
    genre,
    year: Number(year),
    watched: false,
  };
  movies.push(newMovie);
}

export function toggleWatched(id) {
  const movie = movies.find((m) => m.id === Number(id));
  if (movie) movie.watched = !movie.watched;
}
