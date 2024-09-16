import { LikeDislike } from "./algorithms/LikeDislike";
import { SwiperFunction } from "./algorithms/Swiper.js";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header";
import { PeopleCard } from "./components/PeopleCard";
import { PeopleCardOthers } from "./components/PeopleCardOthers.js";
import { Slider } from "./components/Slider";
import { getData } from "./lib/http.request";
import { reload } from "./lib/utills.js";

Header();
Footer();
SwiperFunction();

const new_movie_cont = document.querySelector(".new_movies_cont");
const trailer_title = document.querySelector(".footer_left h2");
const slider_cont = document.querySelector(".slider");
const trailer_iframe = document.querySelector("iframe");
const genres_cont = document.querySelector(".new_movies_right");
const year_links = document.querySelectorAll("#years a");
const actor_card_cont = document.querySelector(".actor_card_cont");
const other_actors_cont = document.querySelector(".other_actors");
const upcoming_cont = document.querySelector(".upcoming_cont");
const swiper_wrapper = document.querySelector(".swiper-wrapper");

const new_movies = await getData("/movie/now_playing");
const genres = await getData("/genre/movie/list");
const popular_movies = await getData("/movie/popular");
const top_rated_movies = await getData("/movie/top_rated");
const popular_people = await getData("/person/popular");
const upcoming_movies = await getData("/movie/upcoming");
const video_resources = await getData(
  `/movie/${top_rated_movies.results[0].id}/videos`
);

const trailer = video_resources.results.find((item) => item.type === "Trailer");
trailer_iframe.src = "https://www.youtube.com/embed/" + trailer.key;

const top_rated_movie = top_rated_movies.results[0];
LikeDislike(top_rated_movie);

genres_cont.innerHTML = '<a href="#">All</a>';
trailer_title.innerHTML = top_rated_movie.title;

const show_more_btn = document.querySelector(".show_more");
const back_btn = document.querySelector(".back");
let displayed_movies = new_movies.results;

show_more_btn.onclick = () => {
  reload(displayed_movies, (item) => Card(item, genres.genres), new_movie_cont);
  show_more_btn.style.display = "none";
  back_btn.style.display = "block";
};

back_btn.onclick = () => {
  reload(
    displayed_movies.slice(0, 8),
    (item) => Card(item, genres.genres),
    new_movie_cont
  );
  back_btn.style.display = "none";
  show_more_btn.style.display = "block";
};

genres.genres.forEach((genre) => {
  const genre_link = document.createElement("a");
  genre_link.href = `#${genre.id}`;
  genre_link.innerHTML = genre.name;

  genre_link.onclick = async (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "All") {
      reload(
        displayed_movies,
        (item) => Card(item, genres.genres),
        new_movie_cont
      );
    } else {
      const res = await getData(`/discover/movie?with_genres=${genre.id}`);
      displayed_movies = res.results;
      reload(
        displayed_movies.slice(0, 8),
        (item) => Card(item, genres.genres),
        new_movie_cont
      );
    }
  };

  genres_cont.append(genre_link);
});

year_links.forEach((year_link) => {
  year_link.onclick = async (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "All") {
      reload(
        popular_movies.results,
        (item) => Card(item, genres.genres),
        swiper_wrapper
      );
      e.target.style.color = "white";
    } else {
      const res = await getData(
        "/discover/movie?primary_release_year=" + e.target.innerHTML
      );
      reload(res.results, (item) => Card(item, genres.genres), swiper_wrapper);
    }
  };
});

reload(
  displayed_movies.slice(0, 8),
  (item) => Card(item, genres.genres),
  new_movie_cont
);
reload(
  popular_movies.results,
  (item) => Card(item, genres.genres),
  swiper_wrapper
);
reload(
  upcoming_movies.results.slice(0, 8),
  (item) => Card(item, genres, true),
  upcoming_cont
);

reload(top_rated_movies.results, Slider, slider_cont);
reload(popular_people.results.slice(0, 3), PeopleCard, actor_card_cont);
reload(popular_people.results.slice(4, 8), PeopleCardOthers, other_actors_cont);
