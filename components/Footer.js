export function Footer() {
  const inner_container = document.createElement("div");
  const social_links = document.createElement("a");
  const footer_links = document.createElement("div");
  const footer_text = document.createElement("p");
  const privacy_policy = document.createElement("a");

  const link_items = [
    "Poster",
    "News",
    "People",
    "Ratings",
    "Reviews",
    "Movie Catalog",
  ];

  inner_container.classList.add("footer-container");
  social_links.classList.add("footer_social_links");
  social_links.href = "#";
  footer_links.classList.add("footer-links");
  footer_text.innerHTML = "2024 © Kinoarea. All rights reserved";
  privacy_policy.classList.add("privacy-policy");
  privacy_policy.href = "#";
  privacy_policy.innerHTML = "Privacy Policy";

  link_items.forEach((item) => {
    const link = document.createElement("a");
    link.href = "#";
    link.innerHTML = item;
    footer_links.append(link);
  });

  inner_container.append(
    social_links,
    footer_links,
    footer_text,
    privacy_policy
  );

  const footer_container = document.querySelector("footer");
  footer_container.append(inner_container);
}
