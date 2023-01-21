let burger = document.querySelector(".burger");
let nav = document.querySelector(".navigation");

burger.addEventListener("click", mobileMenu);

function mobileMenu(header__navigation) {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
}

