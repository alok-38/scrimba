const allBtnEl = document.querySelectorAll('button');

allBtnEl.forEach(button => {
    button.addEventListener('click', function (event) {
        console.log("Button clicked:", event.target);
    })
})