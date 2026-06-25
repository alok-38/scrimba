let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
  const values = inputEl.value.trim();
  myLeads.push(values);
  renderLeads();
  inputEl.value = "";
});

const renderLeads = () => {
  let listItems = "";
  for (let index = 0; index < myLeads.length; index++) {
    listItems += `
         <li>
                <a target='_blank' href='${myLeads[index]}'>
                    ${myLeads[index]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
};
