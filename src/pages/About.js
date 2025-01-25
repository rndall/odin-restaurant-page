function createAbout() {
	const aboutPage = document.createElement("div");

	const h1 = document.createElement("h1");
	h1.textContent = "Our Story";
	h1.classList.add(
		"about__title",
		"about__title--color-white",
		"about__title--6xl",
	);

	const headingSection = document.createElement("div");
	headingSection.classList.add("about__section", "about__section--banner");
	headingSection.appendChild(h1);

	const h2 = document.createElement("h2");
	h2.textContent = "Meet The Partners";
	h2.classList.add(
		"about__title",
		"about__title--color-orange",
		"about__title--weight-thin",
	);

	const p1 = document.createElement("p");
	p1.textContent =
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit amet ipsam sit reiciendis corrupti totam itaque at. Labore similique quis magnam error at consectetur rerum? Excepturi aut facilis numquam quas.";

	const p2 = document.createElement("p");
	p2.textContent =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias, laboriosam a provident dolore dolorum facere in unde quaerat corporis nam modi nisi sapiente atque mollitia tempore tempora nemo ea.";

	const p3 = document.createElement("p");
	p3.textContent =
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quis optio accusamus voluptates deserunt laboriosam nobis, praesentium ratione eum inventore!";

	aboutPage.append(headingSection, h2, p1, p2, p3);

	return aboutPage;
}

export default function loadAbout() {
	const contentDiv = document.querySelector("#content");
	contentDiv.appendChild(createAbout());
}
