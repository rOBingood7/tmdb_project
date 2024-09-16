export function PeopleCard(item) {
  const actor_card = document.createElement("div");
  const rank = document.createElement("div");
  const actor_info = document.createElement("div");
  const actor_name = document.createElement("h2");
  const actor_english_name = document.createElement("p");

  actor_card.classList.add("actor_card");
  rank.classList.add("rank");
  actor_info.classList.add("actor_info");
  actor_name.classList.add("actor_name");
  actor_english_name.classList.add("actor_english_name");

  const currentRank = document.querySelectorAll(".actor_card").length + 1;
  rank.innerHTML = `Rank: ${currentRank}`;

  actor_card.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.profile_path})`;
  actor_name.innerHTML = item.name;
  actor_english_name.innerHTML = item.original_name;

  actor_card.append(rank, actor_info);
  actor_info.append(actor_name, actor_english_name);

  return actor_card;
}
