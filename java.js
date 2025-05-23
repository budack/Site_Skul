const tabs = document.querySelectorAll(".navlink");
const contents = document.querySelectorAll(".maincontent");
const background = document.querySelectorAll(".background");
tabs.forEach((tab, idx, bdy) => {
tab.addEventListener("click", () => {
    document.querySelector(".navlink.active").classList.remove("active");
    tab.classList.add("active");

    document
    .querySelector(".maincontent.active")
    .classList.remove("active");
    contents[idx].classList.add("active");

    document
    .querySelector(".background.active")
    .classList.remove("active");
    background[idx].classList.add("active");
});
});