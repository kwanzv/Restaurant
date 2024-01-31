import "./styles.css";
import { SimpleVirtualDOM } from "./DOM.js";
import { aboutElement } from "./about.js";
import { homeElement } from "./home.js";
import { menuElement } from "./menu.js";
const content = document.querySelector("#content");

function tabbedContent() {
  const tabs = document.querySelectorAll("button");

  tabs.forEach((tab) => {
    tab.classList.add(tab.innerHTML);
    tab.addEventListener("click", () => {
      switch (tab.innerHTML) {
        case "Home":
          content.replaceChildren(homeElement.render());
          break;
        case "Menu":
          content.replaceChildren(menuElement.render());
          break;
        case "About":
          content.replaceChildren(aboutElement.render());
      }
    });
  });
}

content.appendChild(homeElement.render());

tabbedContent();
