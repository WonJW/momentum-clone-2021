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

const slogans = [
    {
        slogan: "Glory Glory Manchester United!",
        teamName: "Manchester United F.C.",
    },
    {
        slogan: "City Till I Die!",
        teamName: "Manchester City F.C.",
    },
    {
        slogan: "Forza Milan! Forza Italia!",
        teamName: "A.C. Milan"
    },
    {
        slogan: "Visca el Barca!",
        teamName: "F.C. Barcelona",
    },
    {
        slogan: "Keep The Blue Flag Flying High!",
        teamName: "Chelsea F.C.",
    },
    {
        slogan: "Leicester' Til I Die!",
        teamName: "Leicester City F.C.",
    },
    {
        slogan: "You'll Never Walk Alone!",
        teamName: "Liverpool F.C.",
    },
    {
        slogan: "Mia San Mia!",
        teamName: "FC Bayern München",
    },
    {
        slogan: "Allez Paris, Paris est magique!",
        teamName: "Paris Saint-Germain F.C.",
    },
    {
        slogan: "Hala Madrid!",
        teamName: "Real Madrid C.F.",
    }
]

const randomNum = Math.floor(Math.random() * backgroundImage.length)
const randomImage = backgroundImage[randomNum];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;
bgImage.classList.add("background-image")

document.body.appendChild(bgImage);


const slogan = document.querySelector(".team-slogan__text");
const teamName = document.querySelector(".team-slogan__team-name");
const randomSlogan = slogans[randomNum];

slogan.innerText = randomSlogan.slogan
teamName.innerText = `- ${randomSlogan.teamName}`