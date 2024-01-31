import { SimpleVirtualDOM } from "./DOM.js";

export const menuElement = new SimpleVirtualDOM("div", { id: "grid" }, [
  new SimpleVirtualDOM("div", { class: "menu-info" }, [
    new SimpleVirtualDOM("h1", { class: "heading" }, ["Our Menu"]),

    new SimpleVirtualDOM("h2", { class: "food-category" }, ["Main Courses"]),
    new SimpleVirtualDOM("h3", { class: "food-item" }, [
      "Wonton Noodles",
      new SimpleVirtualDOM("span", { class: "price" }, ["$8.99"]),
    ]),
    new SimpleVirtualDOM("h3", { class: "food-item" }, [
      "Char Siu Rice",
      new SimpleVirtualDOM("span", { class: "price" }, ["$6.99"]),
    ]),
    new SimpleVirtualDOM("h3", { class: "food-item" }, [
      "Seafood Fried Rice",
      new SimpleVirtualDOM("span", { class: "price" }, ["$8.99"]),
    ]),
    new SimpleVirtualDOM("h3", { class: "food-item" }, [
      "Wonton Noodles",
      new SimpleVirtualDOM("span", { class: "price" }, ["$8.99"]),
    ]),

    new SimpleVirtualDOM("h2", { class: "food-category" }, ["Drinks"]),
    new SimpleVirtualDOM("h3", { class: "food-item" }, [
      "Chrysanthemum Tea",
      new SimpleVirtualDOM("span", { class: "price" }, ["$2.99"]),
    ]),
    new SimpleVirtualDOM("h3", { class: "food-item" }, [
      "Green Tea",
      new SimpleVirtualDOM("span", { class: "price" }, ["$2.99"]),
    ]),
    new SimpleVirtualDOM("h3", { class: "food-item" }, [
      "Tiger Beer (pint)",
      new SimpleVirtualDOM("span", { class: "price" }, ["$2.99"]),
    ]),
    new SimpleVirtualDOM("h3", { class: "food-item" }, [
      "Orange Juice",
      new SimpleVirtualDOM("span", { class: "price" }, ["$1.99"]),
    ]),
  ]),
]);
