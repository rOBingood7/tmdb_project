export function MovieCardCredits(item, dir) {
  const createDetailItem = (label, value) => {
    const detailItem = document.createElement("div");
    detailItem.classList.add("movie-detail-item");

    const labelElement = document.createElement("p");
    labelElement.textContent = `${label}:`;

    const valueElement = document.createElement("a");
    valueElement.href = "#";
    valueElement.innerHTML = value;

    detailItem.appendChild(labelElement);
    detailItem.appendChild(valueElement);

    return detailItem;
  };
  const movie_details = document.querySelector(".movie-details");
  const director = dir.find((item) => item.job === "Director");
  const producer = dir.find((item) => item.job === "Producer");

  movie_details.append(
    createDetailItem("Year", item.release_date.split("-")[0]),
    createDetailItem(
      "Country",
      item.production_countries.map((c) => c.name).join(", ")
    ),
    createDetailItem("Tagline", item.tagline),
    createDetailItem("Genres", item.genres.map((g) => g.name).join(", ")),
    createDetailItem("Revenue", item.revenue),
    createDetailItem("Runtime", item.runtime),
    createDetailItem("Director", director.name),
    createDetailItem("Producer", producer.name)
  );
  return;
}
