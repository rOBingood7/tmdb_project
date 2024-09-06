export function Slider(item) {
  const slider_trailer = document.createElement("div");
  const movie_trailer = document.createElement("div");
  const play_btn = document.createElement("button");
  const title = document.createElement("h3");

  slider_trailer.classList.add("slider_trailer");
  movie_trailer.classList.add("movie_trailer");
  play_btn.classList.add("play_btn");

  title.innerHTML = item.title
  movie_trailer.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.poster_path})`

  slider_trailer.append(movie_trailer, title);
  movie_trailer.append(play_btn);

  return slider_trailer;
}
