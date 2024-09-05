// Select the single element with the class 'LCD1'
const firstLCDEl = document.querySelector(".LCD1");

// Select the buttons
const button1 = document.querySelector('button[data-value="1"]');
const button2 = document.querySelector('button[data-value="2"]');
const button3 = document.querySelector('button[data-value="3"]');

const increaseHomeScoreCount = () => {
  // Parse the textContent of the element to an integer
  let firstCount = parseInt(firstLCDEl.textContent, 10);

  // Check if firstCount is a valid number
  if (isNaN(firstCount)) {
    console.error("firstCount is NaN");
    return;
  }

  // Increase the count by 1
  firstCount += 1;

  // Update the textContent of the element
  firstLCDEl.textContent = firstCount;
};

// Add event listener to button1
button1.addEventListener("click", increaseHomeScoreCount);
