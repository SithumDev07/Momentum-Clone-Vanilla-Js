const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// * First Create
const image = document.createElement("img");

// * Setting Source
image.src = `images/${chosenImage}`;

// * Then Append
document.body.appendChild(image);
// document.body.prepend(image);
