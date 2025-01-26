import "./style.css";
import loadAbout from "./pages/about/About";
import loadHome from "./pages/home/Home";
import loadMenu from "./pages/menu/Menu";

const tabButtons = document.querySelectorAll(".header__button");
const contentDiv = document.querySelector("#content");

function handleSwitchTab(e) {
	const tab = e.target.dataset.tab;

	contentDiv.textContent = "";

	switch (tab) {
		case "home":
			loadHome();
			break;

		case "menu":
			loadMenu();
			break;

		case "about":
			loadAbout();
			break;
	}
}

for (const btn of tabButtons) {
	btn.addEventListener("click", handleSwitchTab);
}

loadHome();
