const inputEl = document.getElementById('input-el');
const formEl = document.getElementById('lead-form');
const leadsList = document.getElementById('leads-list');
const myLeads = [];

// 🧩 Load saved leads when popup opens
chrome.storage.local.get(['myLeads'], (result) => {
    if (result.myLeads) {
        myLeads.push(...result.myLeads);
        renderLeads(myLeads);
    }
});

// 🧩 Handle form submission
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputLead = inputEl.value.trim();

    if (inputLead) {
        myLeads.push(inputLead);
        chrome.storage.local.set({ myLeads }, () => {
            console.log('Lead saved:', inputLead);
        });

        renderLeads(myLeads);
        inputEl.value = '';
    } else {
        console.log('Please enter a lead');
    }
});

// 🧩 Render leads in the list
function renderLeads(leads) {
    leadsList.innerHTML = ''; // clear current list

    leads.forEach((lead) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = lead;
        link.textContent = lead;
        link.target = '_blank'; // open in new tab
        li.appendChild(link);
        leadsList.appendChild(li);
    });
}
