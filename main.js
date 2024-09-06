import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { getData } from "./lib/http.request";
import { reload } from "./lib/utills";
Header();

const new_movies = await getData("/movie/now_playing?language=ru-US&page=1");
const genres = await getData("/genre/movie/list");
const popular = await getData("/movie/popular?language=ru-US&page=1");
const top_rated = await getData("/movie/top_rated?language=ru-US&page=1");

console.log(top_rated);

const cont = document.querySelector(".new_movies_cont");
const show_more = document.querySelector(".show_more");
const slider = document.querySelector(".slider");
const popular_movies = document.querySelector(".popular_movies");

const id = location.search.split("=").at(-1);

show_more.onclick = () => {
  reload(new_movies.results, (item) => Card(item, genres.genres), cont);
  show_more.style.display = "none";
};

reload(
  new_movies.results.slice(0, 8),
  (item) => Card(item, genres.genres),
  cont
);

reload(top_rated.results, Slider, slider);

reload(
  popular.results.slice(0, 4),
  (item) => Card(item, genres.genres),
  popular_movies
);
