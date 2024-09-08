import { LikeDislike } from "./algorithms/LikeDislike";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { getData } from "./lib/http.request";
import { reload } from "./lib/utills";
Header();
const cont = document.querySelector(".new_movies_cont");
const trailer_title = document.querySelector(".footer_left h2");
const show_more = document.querySelector(".show_more");
const back = document.querySelector(".back");
const slider = document.querySelector(".slider");
const popular_movies = document.querySelector(".popular_movies");
const iframe = document.querySelector("iframe");
const genres_list = document.querySelector(".new_movies_right");
const id = location.search.split("=").at(-1);

const new_movies = await getData("/movie/now_playing");
const genres = await getData("/genre/movie/list");
const popular = await getData("/movie/popular");
const top_rated = await getData("/movie/top_rated");
const video_res = await getData(`/movie/${top_rated.results[0].id}/videos`);

const trailer = video_res.results.find((item) => item.type === "Trailer");
iframe.src = "https://www.youtube.com/embed/" + trailer.key;

const first_movie = top_rated.results[0];
LikeDislike(first_movie);

genres_list.innerHTML = '<a href="/">All</a>';
trailer_title.innerHTML = first_movie.title;

genres.genres.forEach((genre) => {
  const genre_link = document.createElement("a");
  genre_link.href = `#${genre.id}`;
  genre_link.innerHTML = genre.name;

  genres_list.append(genre_link);
});

show_more.onclick = () => {
  reload(
    new_movies.results.slice(0, 8),
    (item) => Card(item, genres.genres),
    cont
  );
  show_more.style.display = "none";
  back.style.display = "block";
};
back.onclick = () => {
  reload(new_movies.results.slice(0, 8), Card, cont);
  back.style.display = "none";
  show_more.style.display = "block";
};

reload(
  new_movies.results.slice(0, 8),
  (item) => Card(item, genres.genres),
  cont
);
reload(top_rated.results.slice(1), Slider, slider);

reload(
  popular.results.slice(0, 4),
  (item) => Card(item, genres.genres),
  popular_movies
);

function filterMovies(genreId) {
  const filtered_movies = new_movies.results.filter((movie) =>
    movie.genre_ids.includes(Number(genreId))
  );

  reload(
    filtered_movies.slice(0, 8),
    (item) => Card(item, genres.genres),
    cont
  );
}

genres_list.onclick = (e) => {
  if (e.target.innerHTML === "All") {
    reload(
      new_movies.results.slice(0, 8),
      (item) => Card(item, genres.genres),
      cont
    );

    e.target.style.color = "white";
  } else {
    const genreId = Number(e.target.getAttribute("href").slice(1), 10);

    genres_list.querySelectorAll("a").forEach((link) => {
      link.style.color = "#6e717c";
    });

    e.target.style.color = "white";

    filterMovies(genreId);
  }
};
