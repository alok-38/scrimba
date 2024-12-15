let myLeads = []  // Array to store leads temporarily
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Load leads from localStorage when the page loads
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage  // If there are leads in localStorage, restore them
    renderLeads()  // Render the leads list
} else {
    console.log("No leads in localStorage.")
}

// Event listener to add a new lead
inputBtn.addEventListener("click", function () {
    if (inputEl.value) {  // Make sure the input is not empty
        myLeads.push(inputEl.value) // Add the new lead to the array
        inputEl.value = "" // Clear the input field
        localStorage.setItem("myLeads", JSON.stringify(myLeads)) // Save the array to localStorage
        renderLeads() // Re-render the list
        console.log("Lead added and saved:", inputEl.value);
    }
})

// Function to render the leads list
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems
}
