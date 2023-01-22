let burger = document.querySelector(".burger");
let nav = document.querySelector(".navigation");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navigation__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    burger.classList.remove("active");
    nav.classList.remove("active");
}