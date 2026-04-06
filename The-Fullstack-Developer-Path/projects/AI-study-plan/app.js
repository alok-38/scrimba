const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputEls = formEl.querySelectorAll('input');

    inputEls.forEach(input => {
        console.log(input.value);
        input.value = "";
    });
});