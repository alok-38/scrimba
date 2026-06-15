interface MenuItem {
    name: string;
    price: number;
}

const menu: MenuItem[] = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];

type Order = {
    id: number;
    items: string[];
};

let cashInRegister: number = 100;
const orderQueue: Order[] = [];

/**
 * Add a new pizza to the menu
 */
function addNewPizza(pizza: MenuItem) {
    menu.push(pizza);
}

// Usage
addNewPizza({ name: "Anchovy", price: 11 });
addNewPizza({ name: "CheeseBurst", price: 12 });

console.log(menu);