const backgroundImage = [
    "man-utd.jpg",
    "man-city.jpg",
    "ac-milan.jpg",
    "barca.jpg",
    "chelsea.jpg",
    "leicester.jpg",
    "liverpool.jpg",
    "munchen.jpg",
    "psg.jpg",
    "real.jpg"
];


const randomImage = backgroundImage[Math.floor(Math.random() * backgroundImage.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);