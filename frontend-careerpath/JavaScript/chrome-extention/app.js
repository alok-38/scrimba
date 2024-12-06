let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const buttonEl = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

// Function to render the leads as an unordered list
const renderLeads = () => {
    for (let i = 0; i < myLeads.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = myLeads[i];
        ulEl.appendChild(liEl);
    }
};

buttonEl.addEventListener('click', renderLeads);