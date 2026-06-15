"use strict";
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
let cashInRegister = 100;
const orderQueue = [];
/**
 * Add a new pizza to the menu
 */
function addNewPizza(pizza) {
    menu.push(pizza);
}
// Usage
addNewPizza({ name: "Anchovy", price: 11 });
addNewPizza({ name: "CheeseBurst", price: 12 });
console.log(menu);
