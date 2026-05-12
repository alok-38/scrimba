const screenEl = document.getElementById("screen");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const color = button.dataset.color;

      if (color) {
        screenEl.style.backgroundColor = color;
      } else {
        screenEl.style.backgroundColor = "white"; // fallback
      }
    });
  });
});
