export function PeopleCardOthers(item) {
  const person_item = document.createElement("div");
  const person_info = document.createElement("div");
  const person_name = document.createElement("h2");
  const person_english_name = document.createElement("p");
  const person_age = document.createElement("p");
  const person_rank = document.createElement("div");

  person_item.classList.add("person_item");
  person_info.classList.add("person_info");
  person_name.classList.add("person_name");
  person_english_name.classList.add("person_english_name");
  person_age.classList.add("person_age");
  person_rank.classList.add("person_rank");

  const currentRank = document.querySelectorAll(".person_item").length + 4;
  person_rank.innerHTML = `Rank: ${currentRank}`;
  person_name.innerHTML = item.name;
  person_english_name.innerHTML = item.original_name;

  person_info.append(person_name, person_english_name, person_age);
  person_item.append(person_info, person_rank);

  return person_item;
}
