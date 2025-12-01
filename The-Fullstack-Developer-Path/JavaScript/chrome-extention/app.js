// DOM elements
const buttonEl = document.querySelector("button");
const ulEl = document.getElementById("ul-el");
const inputEl = document.getElementById("input-el");

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

localStorage.setItem(myLeads, "www.awesomelead.com");

// State
let myLeads = [];
const starterLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

// Render function
function renderLeads(leads) {
    ulEl.innerHTML = "";

    for (const lead of leads) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = lead.startsWith("http") ? lead : `https://${lead}`;
        a.textContent = lead;
        a.target = "_blank"; // opens in new tab

        li.appendChild(a);
        ulEl.appendChild(li);
    }
}

// Add new lead
function addLead() {
    const value = inputEl.value.trim();
    if (!value) return;

    myLeads.push(value);
    renderLeads(myLeads);
    inputEl.value = "";
}

// Event listener
buttonEl.addEventListener("click", addLead);
