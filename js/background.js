const BACKGROUND_CLASS_NAME = "background_image";
const images = [
  "0.jpeg",
  "2.jpeg",
  "3.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
];
const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
bgImg.classList.add(BACKGROUND_CLASS_NAME);

document.body.appendChild(bgImg);
