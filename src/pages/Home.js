import homeBanner from "../img/homeBanner.jpg";

function createHome() {
	const homePage = document.createElement("div");

	const banner = document.createElement("img");
	banner.src = homeBanner;
	banner.classList.add("home__banner");

	const h1 = document.createElement("h1");
	h1.textContent = "Lorem Ipsum Dolor";
	h1.classList.add("home__title", "home__title--large");

	const h2 = document.createElement("h2");
	h2.textContent = "Lorem Ipsum Dolor Sit";
	h2.classList.add("home__title", "home__title--bold");

	const p1 = document.createElement("p");
	p1.innerHTML =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum <strong>quidem</strong> vel nihil consectetur quod. Saepe sit illum incidunt doloribus natus maxime enim, id quo excepturi unde eum, ex porro sint repellendus atque! Ea, soluta saepe?";

	const p2 = document.createElement("p");
	p2.textContent =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, magni recusandae.";

	const button = document.querySelector("button");
	button.textContent = "Lorem Ipsum Dolor";

	homePage.append(banner, h1, h2, p1, p2, button);

	return homePage;
}

export default function loadHome() {
	const contentDiv = document.querySelector("#content");
	contentDiv.appendChild(createHome());
}
