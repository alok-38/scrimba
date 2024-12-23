const allBtnEl = document.querySelectorAll('button');

allBtnEl.forEach(button => {
    button.addEventListener('click', function (event) {
        console.log("Button clicked:", event.target);
    })
})

// Make a list
const ul = document.createElement("ul");
document.body.appendChild(ul);
const li1 = document.createElement("li");
const li2 = document.createElement("li");
li1.textContent = "List one";
li2.textContent = "List two";
ul.appendChild(li1);
ul.appendChild(li2);

function hide(event) {
    event.target.style.visibility = "hidden";
}

ul.addEventListener("click", hide);