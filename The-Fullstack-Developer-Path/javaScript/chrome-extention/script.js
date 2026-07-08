const myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById('input-el');
const saveInputEl = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

const renderLeads = () => {
  ulEl.innerHTML = "";
  myLeads.forEach(lead => {
    const liEl = document.createElement('li');
    liEl.textContent = lead;
    ulEl.appendChild(liEl);
  });
}

saveInputEl.addEventListener('click', saveLeads);