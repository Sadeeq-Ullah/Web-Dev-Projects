document.addEventListener("componentsLoaded", () => {
    const navlist = document.querySelector(".header__nav-list");
    const dropdown = document.querySelector(".header__dropdown-menu");
    const dropdownList = document.querySelector(".header__dropdown-list");
    const dropdownicon = document.querySelector(".dropdown-icon");

    document.addEventListener("click", (e) => {
        if (e.target.closest(".header__hamberger-menu__icon")) {
            navlist.classList.add("close-menu");
            document.body.classList.toggle('no-scroll');
        }
        if (e.target.closest("#cross-sign")) {
            navlist.classList.remove("close-menu");
            document.body.classList.remove('no-scroll');
        }
        if (e.target.closest(".header__dropdown-menu")) {
            dropdownList.classList.toggle("open");
            dropdown.classList.toggle("active-color");
            dropdownicon.classList.toggle("rotated");
        }
    });

});

window.addEventListener("scroll", () => {
    header.classList.toggle("add-background", window.scrollY > 20);
});

const testiCard = document.querySelectorAll(".testimonial-card");
const slider = document.querySelector(".testimonials__track");
const cardsLength = testiCard.length; 
let currentIdx = 0;
function updateSlider() {
    slider.style.transition = 'transform 500ms ease';
    slider.style.transform = `translateX(-${currentIdx * 100}%)`;
}

setInterval(() => {
    currentIdx++; 
    if (currentIdx === cardsLength) {
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
        }, 5000);
        currentIdx = 0;
    }
    updateSlider();
}, 5000);