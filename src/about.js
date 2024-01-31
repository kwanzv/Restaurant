import { SimpleVirtualDOM } from "./DOM.js";

export const aboutElement = new SimpleVirtualDOM("div", { id: "grid" }, [
  new SimpleVirtualDOM("div", { class: "about-info" }, [
    new SimpleVirtualDOM("p", { class: "subtitle" }, [
      "Founded in 1999 by a Chinese couple with a huge desire to bring Chinese cuisine to the world. New Ki Lee has been operating for over 20 years.",
    ]),
    new SimpleVirtualDOM("p", { class: "subtitle" }, [
      "Now with over 5 branches all across the country, we are ready to serve you.",
    ]),
  ]),
  new SimpleVirtualDOM("div", { class: "landing-image" }, [
    new SimpleVirtualDOM(
      "img",
      { class: "landing-img", src: "/src/cook.jpg", alt: "Wok Cooking" },
      []
    ),
  ]),
  new SimpleVirtualDOM(
    "iframe",
    {
      src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2485.381430737368!2d-2.5779152!3d51.4695126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718e15b4f0cd53%3A0xa875ea100cb65ecd!2sNew%20Ki-Lee%20Fish%20Bar!5e0!3m2!1sen!2s!4v1706705466032!5m2!1sen!2s",
      width: "600",
      height: "450",
      style: "border:0;",
      allowfullscreen: "",
      loading: "lazy",
      referrerpolicy: "no-referrer-when-downgrade",
    },
    []
  ),
  new SimpleVirtualDOM("p", { class: "subtitle" }, ["Find us on Google Maps"]),
]);
