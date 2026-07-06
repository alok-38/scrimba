let count = 0;

const root = document.querySelector('#root');

function render() {
  root.innerHTML = `
    <h1>Counter: ${count}</h1>
    <button id="increase">+</button>
    <button id="decrease">-</button>
    <button id="reset">Reset</button>
  `;

  const increaseBtn = document.getElementById('increase');
  const decreaseBtn = document.getElementById('decrease');
  const resetBtn = document.getElementById('reset');

  increaseBtn.onclick = () => {
    count++;
    render();
  };

  decreaseBtn.onclick = () => {
    count--;
    render();
  };

  resetBtn.onclick = () => {
    count = 0;
    render();
  };
}

render();