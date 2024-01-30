import { SimpleVirtualDOM } from "./DOM.js";

export const homeElement = new SimpleVirtualDOM("div", { id: "landing" }, [
  new SimpleVirtualDOM("div", { class: "landing-info" }, [
    new SimpleVirtualDOM("p", { class: "subtitle" }, [
      "Indulge your taste buds in an exquisite journey of flavors at New Ki Lee, your go-to destination for authentic Chinese cuisine.",
    ]),
    new SimpleVirtualDOM("p", { class: "subtitle" }, [
      "Immerse yourself in a symphony of tastes, textures, and aromas that transport you to the bustling streets of Beijing.",
    ]),
  ]),
]);
