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
  const movieDetails = document.createElement("div");
  // const detailsList = document.createElement("ul");
  body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
  movieCard.classList.add("movie-card");
  poster.classList.add("poster_info");
  movieInfo.classList.add("movie-info");
  ratings.classList.add("ratings");
  description.classList.add("description");
  showMoreButton.classList.add("show_more");
  socialApps.classList.add("social_apps");
  links.classList.add("links");
  movieDetails.classList.add("movie-details");

  showMoreButton.innerHTML = "Смотреть трейлер";
  description.innerHTML = item.overview;
  titleRu.innerHTML = item.title;
  titleEn.innerHTML = item.original_title;

  poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.poster_path})`;
  links.append(showMoreButton, socialApps);

  //   const detailsItems = [
  //     { label: "Год:", value: "2020" },
  //     { label: "Страна:", value: "Великобритания, Австралия" },
  //     { label: "Слоган:", value: '"Подбери ключ к свободе"' },
  //     { label: "Режиссер:", value: "Фрэнсис Аннан" },
  //     { label: "Жанр:", value: "триллер, драма" },
  //     { label: "Премьера:", value: "6 марта 2020" },
  //     { label: "Продолжительность:", value: "106 минут" },
  //   ];

  //   detailsItems.forEach((item) => {
  //     const li = document.createElement("li");
  //     const strong = document.createElement("strong");
  //     strong.innerHTML = item.label;

  //     const a = document.createElement("a");
  //     a.href = "#";
  //     a.innerHTML = item.value;

  //     li.append(strong, a);
  //     detailsList.appendChild(li);
  //   });

  //   movieDetails.appendChild(detailsList);

  movieInfo.append(titleRu, titleEn, ratings, description, links);

  movieCard.append(poster, movieInfo);

  document.querySelector(".people").append(movieCard);
}
