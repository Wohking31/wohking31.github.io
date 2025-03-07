const ion = document.querySelector(".ion");
const bx = document.querySelector(".bx-x");
const show = document.querySelector(".show");

ion.addEventListener("click", function() {
    show.classList.add("active");
});
bx.addEventListener("click", function() {
    show.classList.remove("active");
});