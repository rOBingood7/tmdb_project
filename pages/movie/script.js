import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";
import { MovieCardCredits } from "../../components/MovieCardCredits";
import { getData } from "../../lib/http.request";

Header();
const id = Number(location.search.split("=").at(-1));
const res = await getData(`/movie/` + id);
const res_credits = await getData(`/movie/${id}/credits`);
const director_container = document.querySelector(".director-container");
console.log(res_credits);
console.log(res);

director_container.innerHTML = `
<div class="director-profile">
  <div></div>
   <p>Фрэнсис Аннан</p>
    <p class="person_english_name">${res}</p>
    <p class="job-title">Режиссёр</p>
  </div>
  <div class="movie-details-item">
    <p>Студия дубляжа:</p>
    <a href="#">1. Пифагор</a>
  </div>
   <div class="movie-details-item">
    <p>Производство:</p>
    <a href="#">1. Arclight Films</a><br />
    <a href="#">2. Beagle Pug Films</a><br />
    <a href="#">3. Footprint Films</a>
   </div>
    <div class="movie-details-item">
    <p>Спецэффекты:</p>
    <a href="#">1. Particular Crowd</a><br />
     <a href="#">2. Premiere Picture</a><br />
    <a href="#">3. Spier Films</a>
   </div>`;
MovieCardCredits(res, res_credits.crew);
MovieCard(res);
