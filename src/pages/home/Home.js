import "./home.css";
import homeBannerImg from "../../img/homeBanner.jpg";

function createHome() {
	const homePage = document.createElement("div");
	homePage.classList.add("home");

	const banner = document.createElement("img");
	banner.src = homeBannerImg;
	banner.classList.add("home__banner");

	const h1 = document.createElement("h1");
	h1.textContent = "Lorem Ipsum Dolor";
	h1.classList.add(
		"home__title",
		"home__title--size-6xl",
		"home__title--weight-normal",
	);

	const h2 = document.createElement("h2");
	h2.textContent = "Lorem Ipsum Dolor Sit";
	h2.classList.add("home__title");

	const p1 = document.createElement("p");
	p1.innerHTML =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum <strong>quidem</strong> vel nihil consectetur quod. Saepe sit illum incidunt doloribus natus maxime enim, id quo excepturi unde eum, ex porro sint repellendus atque! Ea, soluta saepe?";
	p1.classList.add("home__text");

	const p2 = document.createElement("p");
	p2.textContent =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, magni recusandae.";
	p2.classList.add("home__text");

	const button = document.createElement("button");
	button.textContent = "Lorem Ipsum Dolor";
	button.classList.add("home__button");

	homePage.append(banner, h1, h2, p1, p2, button);

	return homePage;
}

export default function loadHome() {
	const contentDiv = document.querySelector("#content");
	contentDiv.appendChild(createHome());
}
