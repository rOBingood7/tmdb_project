export function Card(item, allGenres) {
  const body = document.body;
  const movie_card = document.createElement("div");
  const poster = document.createElement("div");
  const rating = document.createElement("span");
  const details = document.createElement("div");
  const title = document.createElement("h2");
  const genre = document.createElement("p");

  movie_card.classList.add("movie_card");
  poster.classList.add("poster");
  rating.classList.add("rating");
  details.classList.add("details");
  title.classList.add("title");
  genre.classList.add("genre");

  poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.poster_path})`;
  rating.innerHTML = item.vote_average.toFixed(1);
  title.innerHTML = item.title;

  const genreNames = item.genre_ids
    .map((id) => {
      const genreObj = allGenres.find((genre) => genre.id === id);
      return genreObj ? genreObj.name : "";
    })
    .join(", ");

  genre.innerHTML = genreNames;

  movie_card.append(poster, details);
  poster.append(rating);
  details.append(title, genre);

  movie_card.onmousemove = () => {
    body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
  };

  movie_card.onmouseout = () => {
    body.style.backgroundColor = "#1e2538";
    body.style.backgroundImage = "none";
  };
  return movie_card;
}
