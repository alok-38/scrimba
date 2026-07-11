const popup = document.getElementById("sales-popup");
const popupText = document.getElementById("popup-text");

const names = ["Dhaval", "Rahul", "Ankit", "Sneha", "Priya"];
const cities = ["Ahmedabad", "Bangalore", "Mumbai", "Delhi", "Pune"];
const products = [
  "Premium Cotton T-Shirt",
  "Oversized Hoodie",
  "Heavy GSM Tee",
  "Classic Polo",
  "Casual Shirt"
];

function getRandomData(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function showNotification() {
    const name = getRandomData(names);
    const city = getRandomData[cities];
    const product = getRandomData(products);

    popupText.textContent = `${name} from ${city} bought ${product}`;
    popup.classList.remove("hidden"); 
}

showNotification();