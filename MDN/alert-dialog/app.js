const bodyEl = document.querySelector('body');
const deleteBtn = document.querySelector('button');
const modalEl = document.getElementById('modal-el');

deleteBtn.addEventListener('click', () => {
    bodyEl.classList.toggle('blur-active');
    modalEl
})