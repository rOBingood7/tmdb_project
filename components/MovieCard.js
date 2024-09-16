export function MovieCard(item) {
  const body = document.body;
  const movieCard = document.createElement("div");
  const titleEn = document.createElement("h2");
  const ratings = document.createElement("div");
  const titleRu = document.createElement("h1");
  const movieInfo = document.createElement("div");
  const description = document.createElement("p");
  const poster = document.createElement("div");
  const showMoreButton = document.createElement("button");
  const socialApps = document.createElement("div");
  const links = document.createElement("div");

  body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
  movieCard.classList.add("movie-card");
  poster.classList.add("poster_info");
  movieInfo.classList.add("movie-info");
  ratings.classList.add("ratings");
  description.classList.add("description");
  showMoreButton.classList.add("show_more");
  socialApps.classList.add("social_apps");
  links.classList.add("links");

  showMoreButton.innerHTML = "Смотреть трейлер";
  description.innerHTML = item.overview;
  titleRu.innerHTML = item.title;
  titleEn.innerHTML = item.original_title;

  poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.poster_path})`;

  links.append(showMoreButton, socialApps);
  movieInfo.append(titleRu, titleEn, ratings, description, links);
  movieCard.append(poster, movieInfo);

  document.querySelector(".people").append(movieCard);
}
