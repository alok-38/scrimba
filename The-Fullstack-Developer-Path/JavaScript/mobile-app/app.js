import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
import { DB_URL } from "./config.js";

const firebaseConfig = {
    databaseURL: DB_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// Load leads from localStorage on startup
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

// Render all leads in the UI
function renderLeads() {
    ulEl.innerHTML = ""; // Clear existing list
    myLeads.forEach((lead) => {
        const liEl = document.createElement("li");
        const aEl = document.createElement("a");
        aEl.href = lead;
        aEl.textContent = lead;
        aEl.target = "_blank"; // Open in new tab
        liEl.appendChild(aEl);
        ulEl.appendChild(liEl);
    });
}

// Add a lead from input
inputBtn.addEventListener("click", () => {
    const inputLead = inputEl.value.trim();
    if (!inputLead) return;

    const formattedLead = formatUrl(inputLead);

    myLeads.push(formattedLead);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
    inputEl.value = "";
});

// Delete all leads
deleteBtn.addEventListener("click", () => {
    myLeads = [];
    localStorage.removeItem("myLeads"); // safer than clear()
    renderLeads();
});

// Save the current active tab (Chrome Extension only)
tabBtn.addEventListener("click", () => {
    // Only works inside Chrome Extension popup
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTabUrl = tabs[0].url;
        myLeads.push(activeTabUrl);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
    });
});

// Optional: ensure URLs have protocol
function formatUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return "https://" + url;
    }
    return url;
}
