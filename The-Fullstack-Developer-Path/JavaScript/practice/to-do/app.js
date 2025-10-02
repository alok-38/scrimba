const formEl = document.getElementById('input-form');
const inputEl = document.getElementById('input-item');
const ulEl = document.querySelector('ul');

function addItem(event) {
    event.preventDefault();

    const inputValue = inputEl.value.trim();
    if (inputValue === '') return;

    const liEl = document.createElement('li');

    // ✅ Create span for the text
    const textSpan = document.createElement('span');
    textSpan.textContent = inputValue;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent li click effect
        ulEl.removeChild(liEl);
    });

    // ✅ Only apply style to the span, not the button
    liEl.addEventListener('click', () => {
        const isStruck = textSpan.style.textDecoration === 'line-through';
        textSpan.style.textDecoration = isStruck ? 'none' : 'line-through';
        textSpan.style.fontSize = '32px'; // Just styling the text, not the button
    });

    liEl.appendChild(textSpan);
    liEl.appendChild(deleteBtn);
    ulEl.appendChild(liEl);

    inputEl.value = '';
}

formEl.addEventListener('submit', addItem);
