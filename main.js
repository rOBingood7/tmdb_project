import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { getData } from "./lib/http.request";
import { reload } from "./lib/utills";
Header();

const new_movies = await getData("/movie/now_playing?language=ru-US&page=1");
const cont = document.querySelector(".new_movies_cont");
const show_more = document.querySelector(".show_more");
show_more.onclick = () => {
  reload(new_movies.results, Card, cont);
  show_more.style.display = "none";
};

reload(new_movies.results.slice(0, 8), Card, cont);
console.log(new_movies.results);
