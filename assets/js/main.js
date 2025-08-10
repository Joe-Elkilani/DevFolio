const navbar = document.getElementById("header");
const topEl = document.getElementById("top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
    if (window.scrollY > 800) {
        topEl.style.display = "block";
    } else {
        topEl.style.display = "none";
    }
});
let typed = new Typed('#work', {
    strings: ["Front End Developer", "Web Designer", "Freelancer", "Web Development"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});