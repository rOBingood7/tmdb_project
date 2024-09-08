export function Header() {
  const head_container = document.createElement("div");
  const logo_div = document.createElement("div");
  const logo_imgs = document.createElement("div");
  const logo_link = document.createElement("a");
  const kino_span = document.createElement("span");
  const area_span = document.createElement("span");
  const social_apps = document.createElement("div");
  const nav_links = document.createElement("nav");
  const search_login = document.createElement("div");
  const search_box = document.createElement("div");
  const search_button = document.createElement("button");
  const login_btn = document.createElement("a");

  const nav_items = [
    "Афиша",
    "Медиа",
    "Фильмы",
    "Актёры",
    "Новости",
    "Подборки",
    "Категории",
  ];

  head_container.classList.add("head", "container");
  logo_div.classList.add("logo");
  logo_imgs.classList.add("logo_imgs");
  logo_link.href = "/";
  kino_span.classList.add("kino");
  kino_span.innerHTML = "Kino";
  area_span.classList.add("area");
  area_span.innerHTML = "area";
  social_apps.classList.add("social_apps");
  nav_links.classList.add("nav-links");
  search_login.classList.add("search-login");
  search_box.classList.add("search-box");
  search_button.type = "submit";
  login_btn.classList.add("login-btn");
  login_btn.href = "#";
  login_btn.innerHTML = "Sign in";

  logo_div.append(logo_imgs, social_apps);
  logo_imgs.append(logo_link, kino_span, area_span);

  nav_items.forEach((item) => {
    const link = document.createElement("a");
    link.href = "#";
    link.innerHTML = item;
    nav_links.appendChild(link);
  });

  search_login.append(search_box, login_btn);
  search_box.append(search_button);

  head_container.append(logo_div, nav_links, search_login);

  const header = document.querySelector(".main_header");
  header.appendChild(head_container);
}
