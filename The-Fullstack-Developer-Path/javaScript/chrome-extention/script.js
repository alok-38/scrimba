// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

const saveLead = () => {
  console.log("Button clicked!");
};

const inputBtn = document.getElementById('input-btn');

inputBtn.addEventListener('click', saveLead);