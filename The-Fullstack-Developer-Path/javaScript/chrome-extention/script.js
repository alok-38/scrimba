// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const errorEl = document.getElementById("error-el");
const ulEl = document.getElementById('ul-el');

const saveLead = () => {
  const inputValue = inputEl.value.trim();

  if (inputValue === "") {
    errorEl.textContent = "Leads cannot be empty!";
    errorEl.style.color = "red";
    return;
  }

  myLeads.push(inputValue);

  ulEl.innerHTML = ""; // clear list first

  // Log out the items in the myLeads array using a for loop
  for (let index = 0; index < myLeads.length; index++) {
    const leads = myLeads[index];
    const liEl = document.createElement('li');
    liEl.textContent = leads;
    ulEl.appendChild(liEl);
  }

  inputEl.value = "";
  errorEl.textContent = "";
};

inputBtn.addEventListener("click", saveLead);
