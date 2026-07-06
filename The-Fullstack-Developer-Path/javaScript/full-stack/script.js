const buttonEl = document.getElementById("btn");
const h1El = document.getElementById("title");

buttonEl.addEventListener("click", async () => {
  const response = await fetch("http://localhost:3000/api");
  const data = await response.text();
});
