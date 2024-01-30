import { SimpleVirtualDOM } from "./DOM.js";

export const aboutElement = new SimpleVirtualDOM("div", { id: "grid" }, [
  new SimpleVirtualDOM("div", { class: "landing-info" }, [
    new SimpleVirtualDOM("p", { class: "subtitle" }, [
      "Indulge your taste buds in an exquisite journey of flavors at New Ki Lee, your go-to destination for authentic Chinese cuisine.",
    ]),
    new SimpleVirtualDOM("p", { class: "subtitle" }, [
      "Immerse yourself in a symphony of tastes, textures, and aromas that transport you to the bustling streets of Beijing.",
    ]),
  ]),
  new SimpleVirtualDOM("div", { class: "landing-image" }, [
    new SimpleVirtualDOM(
      "img",
      { class: "landing-img", src: "/src/cook.jpg", alt: "Wok Cooking" },
      []
    ),
  ]),
]);
