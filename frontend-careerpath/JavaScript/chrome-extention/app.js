let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"
const pushToMyLeads = () => {
    let lead = inputEl.value;
    myLeads.push(lead);
    // Log out the items in the myLeads array using a for loop 
    for (let count = 0; count < myLeads.length; count++) {
        console.log(myLeads[count]);
    }
    inputEl.value = "";
}

inputBtn.addEventListener('click', pushToMyLeads);