import { LikeDislike } from "../algorithms/LikeDislike";
import { getData } from "../lib/http.request";

export function Slider(item) {
  const slider_trailer = document.createElement("div");
  const movie_trailer = document.createElement("div");
  const play_btn = document.createElement("button");
  const title = document.createElement("h3");

  slider_trailer.classList.add("slider_trailer");
  movie_trailer.classList.add("movie_trailer");
  play_btn.classList.add("play_btn");

  title.innerHTML = item.title;
  movie_trailer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;

  slider_trailer.append(movie_trailer, title);
  movie_trailer.append(play_btn);

  slider_trailer.onclick = async () => {
    const iframe = document.querySelector("iframe");
    const trailer_title = document.querySelector(".footer_left h2");
    trailer_title.innerHTML = item.title;
    const res = await getData(`/movie/${item.id}/videos`);
    const finded = res.results.find((item) => item.type === "Trailer");
    iframe.src = "https://www.youtube.com/embed/" + finded.key;
    LikeDislike(item);
  };

  return slider_trailer;
}
