const navbar = document.getElementById("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
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