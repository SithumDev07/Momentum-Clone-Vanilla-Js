const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// * Setting Source
const section = document.querySelector("section");
section.style.backgroundImage = `url('images/${chosenImage}')`;
// section.src = `images/${chosenImage}`;
