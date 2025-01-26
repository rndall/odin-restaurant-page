import "./menu.css";
import menuBannerImg from "../../img/menuBanner.jpg";
import shallotWafflePizzaImg from "../../img/shallotWafflePizza.jpg";

function createMenuCard(title, description, price, imageSrc) {
	const card = document.createElement("div");
	card.classList.add("menu__card");

	const itemTitle = document.createElement("h4");
	itemTitle.textContent = title;
	itemTitle.classList.add("menu__title");

	const itemDescription = document.createElement("p");
	itemDescription.textContent = description;
	itemDescription.classList.add("menu__text", "menu__text--color-gray");

	const itemHeader = document.createElement("div");
	itemHeader.append(itemTitle, itemDescription);

	const itemPrice = document.createElement("p");
	itemPrice.textContent = `$${price}`;
	itemPrice.classList.add("menu__text");

	const itemInfo = document.createElement("div");
	itemInfo.classList.add("menu__item-info");
	itemInfo.append(itemHeader, itemPrice);

	const itemImage = document.createElement("img");
	itemImage.src = imageSrc;
	itemImage.alt = title;
	itemImage.classList.add("menu__image");

	card.append(itemInfo, itemImage);

	return card;
}

function createMenu() {
	const menuPage = document.createElement("div");
	menuPage.classList.add("menu");

	const h1 = document.createElement("h1");
	h1.textContent = "Lorem Ipsum Dolor";
	h1.classList.add("menu__title", "menu__title--size-4xl");

	const banner = document.createElement("img");
	banner.src = menuBannerImg;
	banner.classList.add("menu__banner");

	const featuredItemsTitle = document.createElement("h3");
	featuredItemsTitle.textContent = "Featured Items";
	featuredItemsTitle.classList.add("menu__title", "menu__title--size-lg");

	const itemSection1 = document.createElement("div");
	itemSection1.classList.add("menu__cards-container");
	itemSection1.append(
		createMenuCard(
			"Shallot Waffle Pizza",
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, placeat nulla. Voluptatum corrupti quas dignissimos, in perferendis recusandae vitae? Vitae accusamus aut architecto aperiam neque incidunt eaque, quidem expedita nihil!",
			"12.00",
			shallotWafflePizzaImg,
		),
		createMenuCard(
			"Cheese Shallot",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae tempora repellat facere quibusdam consequuntur sequi sit blanditiis sint quidem quasi, cumque magnam accusamus, odit quaerat provident libero deserunt reiciendis?",
			"10.00",
			shallotWafflePizzaImg,
		),
	);

	const menuSection1 = document.createElement("div");
	menuSection1.classList.add("menu__item-section");
	menuSection1.append(featuredItemsTitle, itemSection1);

	const foodMenuTitle = document.createElement("h2");
	foodMenuTitle.textContent = "Food Menu";
	foodMenuTitle.classList.add("menu__title", "menu__title--size-xl");

	const dumplingsTitle = document.createElement("h3");
	dumplingsTitle.textContent = "Dumplings";
	dumplingsTitle.classList.add("menu__title", "menu__title--size-lg");

	const itemSection2 = document.createElement("div");
	itemSection2.classList.add("menu__cards-container");
	itemSection2.append(
		createMenuCard(
			"Calamansileaf Pig",
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure corrupti quas voluptatem unde ullam! Eveniet ab praesentium inventore, dolor nam pariatur fugit quos ad fugiat ducimus, repellendus, repellat tenetur modi!",
			"10.00",
			shallotWafflePizzaImg,
		),
		createMenuCard(
			"Turmeric Dalk",
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta quas laboriosam repellendus animi odit, repudiandae neque perspiciatis aut. Minus architecto voluptate distinctio possimus, ipsa necessitatibus eius laborum saepe harum.",
			"10.00",
			shallotWafflePizzaImg,
		),
	);

	const menuSection2 = document.createElement("div");
	menuSection2.classList.add("menu__item-section");
	menuSection2.append(dumplingsTitle, itemSection2);

	const menuItemsDiv = document.createElement("div");
	menuItemsDiv.classList.add("menu__items");
	menuItemsDiv.append(menuSection1, foodMenuTitle, menuSection2);

	menuPage.append(h1, banner, menuItemsDiv);

	return menuPage;
}

export default function loadMenu() {
	const contentDiv = document.querySelector("#content");
	contentDiv.appendChild(createMenu());
}
