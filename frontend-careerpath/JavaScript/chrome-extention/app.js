let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// Push the value from the inputEl into the myLeads array
const pushToMyLeads = () => {
    let lead = inputEl.value;

    // Add the lead to the array only if it's not empty
    if (lead) {
        myLeads.push(lead);

        // Clear the list before appending new leads
        ulEl.innerHTML = "";

        // Loop through the array and append the new list item
        for (let i = 0; i < myLeads.length; i++) {
            let liEl = document.createElement("li");
            liEl.textContent = myLeads[i];
            ulEl.appendChild(liEl);
        }

        // Clear the input field
        inputEl.value = "";
    }
};

inputBtn.addEventListener('click', pushToMyLeads);
