let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"
const pushToMyLeads = () => {
    let lead = inputEl.value;
    myLeads.push(lead);
    inputEl.value = "";
}

inputBtn.addEventListener('click', pushToMyLeads);