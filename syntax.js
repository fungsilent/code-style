/*
 * Syntax
 */
const allProducts = {
    pen: [
        { name: 'red-pen', price: 7, inventory: 20 },
        { name: 'blue-pen', price: 8, inventory: 30 },
    ],
    ruler: [
        { name: '15cm-ruler', price: 10, inventory: 40 },
        { name: '30cm-ruler', price: 20, inventory: 60 },
    ],
}

function countInventory(productType) {
    const products = allProducts[productType]

    let count = 0
    // Lam for loop
    for (i = 0; i < products.length; i++) {
        count += products[i].inventory
    }
    return count
}

function listInventory() {
    return {
        penInventory: countInventory('pen'),
        rulerInventory: countInventory('ruler'),
    }
}
console.log(listInventory())
