const liEl = document.querySelector("ul li:first-child");

liEl.addEventListener("mouseover", () => {
    liEl.style.backgroundColor = "orange";
    liEl.style.color = "white";
});

liEl.addEventListener("mouseout", () => {
    liEl.style.backgroundColor = "";
    liEl.style.color = "";
});
