let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");



let About = document.querySelector("#About");
let Team = document.querySelector("#Team");
let Privacy = document.querySelector("#Privacy");


button1.addEventListener("click", () => {
    if (About.style.display === "none") {
        About.style.display = "block";
        Team.style.display = "none";
        Privacy.style.display = "none";
    } else {
        About.style.display = "none"
    }
})
button2.addEventListener("click", () => {
    if (Team.style.display === "none") {
        Team.style.display = "block";
        About.style.display = "none";
        Privacy.style.display = "none";
    } else {
        Team.style.display = "none"
    }
})
button3.addEventListener("click", () => {
    if (Privacy.style.display === "none") {
        Privacy.style.display = "block";
        About.style.display = "none";
        Team.style.display = "none";
    } else {
        Privacy.style.display = "none"
    }
})






