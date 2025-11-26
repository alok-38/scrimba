export function getStockData() {
    const price = (Math.random() * 3).toFixed(2);

    const time = new Date()
        .toLocaleTimeString("en-US", { hour12: false })
        .replace(/:/g, "/");

    return {
        name: "QtechAI",
        sym: "QTA",
        price: Number(price),
        time
    };
}
