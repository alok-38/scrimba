import { getStockData } from "./fakeStockAPI.js";

let previousPrice = null;

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById("name");
    const stockDisplaySymbol = document.getElementById("symbol");
    const stockDisplayPrice = document.getElementById("price");
    const stockDisplayPriceIcon = document.getElementById("price-icon");
    const stockDisplayTime = document.getElementById("time");

    // Update text
    stockDisplayName.textContent = stockData.name;
    stockDisplaySymbol.textContent = stockData.sym;
    stockDisplayPrice.textContent = stockData.price.toFixed(2);
    stockDisplayTime.textContent = stockData.time;

    // Update icon based on price movement
    if (previousPrice === null) {
        stockDisplayPriceIcon.textContent = "▶";
        stockDisplayPriceIcon.style.color = "grey";
    } else if (stockData.price > previousPrice) {
        stockDisplayPriceIcon.textContent = "▲";
        stockDisplayPriceIcon.style.color = "green";
    } else if (stockData.price < previousPrice) {
        stockDisplayPriceIcon.textContent = "▼";
        stockDisplayPriceIcon.style.color = "red";
    } else {
        stockDisplayPriceIcon.textContent = "▶";
        stockDisplayPriceIcon.style.color = "grey";
    }

    previousPrice = stockData.price;
}

// Auto-update every 1.5s
setInterval(() => {
    renderStockTicker(getStockData());
}, 1500);

// First render
renderStockTicker(getStockData());
