import { PageFlip } from "https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.module.js";

const pageFlip = new PageFlip(document.getElementById("book"), {
  width: 450,
  height: 650,

  size: "stretch",
  minWidth: 315,
  maxWidth: 1000,
  minHeight: 420,
  maxHeight: 1533,

  showCover: true,
  flippingTime: 700,
  drawShadow: true,
  maxShadowOpacity: 0.55,
  mobileScrollSupport: true,
});

pageFlip.loadFromImages([
  "./pages/封面.png",

  "./pages/内页1.png",
  "./pages/内页2.png",
  "./pages/内页3.png",
  "./pages/内页4.png",
  "./pages/内页5.png",
  "./pages/内页6.png",
  "./pages/内页7.png",
  "./pages/内页8.png",

  "./pages/封底.png",
]);

window.addEventListener("resize", () => pageFlip.update());
