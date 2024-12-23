const allBtnEl = document.querySelectorAll('button');
allBtnEl.forEach(button => {
    button.addEventListener('click', () => {
        console.log(parseInt(button.dataset.clicks));
    })
})