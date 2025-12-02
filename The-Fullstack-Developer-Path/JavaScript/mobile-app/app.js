import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
import { DB_URL } from "./config.js";

const firebaseConfig = {
    databaseURL: DB_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Challenge: Create a const called 'referenceInDB' and use the ref function to create a reference called 'leads' in the database
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

// Add a lead from input
inputBtn.addEventListener("click", () => {
    let inputLead = inputEl.value.trim();
    if (!inputLead) return;

    const formattedLead = formatUrl(inputLead);

    // Push to DB
    push(referenceInDB, formattedLead);
    // Render only the new lead
    renderLead(formattedLead);

    inputEl.value = "";
});

// Clear the entire list
deleteBtn.addEventListener("click", () => {
    ulEl.innerHTML = "";
});

// Render one lead without using an array
function renderLead(lead) {
    const liEl = document.createElement("li");
    const aEl = document.createElement("a");

    aEl.href = lead;
    aEl.textContent = lead;
    aEl.target = "_blank";

    liEl.appendChild(aEl);
    ulEl.appendChild(liEl);
}

// Optional: ensure URLs have protocol
function formatUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return "https://" + url;
    }
    return url;
}

