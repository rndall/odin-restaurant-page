import "./style.css";
import loadAbout from "./pages/about/About";
import loadHome from "./pages/home/Home";
import loadMenu from "./pages/menu/Menu";

const tabButtons = document.querySelectorAll(".header__button");
const contentDiv = document.querySelector("#content");

function handleSwitchTab(e) {
	const button = e.target;

	contentDiv.textContent = "";

	for (const tabBtn of tabButtons) {
		tabBtn.setAttribute("aria-current", "false");
	}

	switch (button.dataset.tab) {
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

	button.setAttribute("aria-current", "true");
}

for (const btn of tabButtons) {
	btn.addEventListener("click", handleSwitchTab);
}

tabButtons[0].click();
