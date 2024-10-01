// Exercise 14: Write a closure function `createCart` that returns an object with two methods: 
// `addItem(item)` to add an item to the cart, and `getItems()` to retrieve the list of added items.
// Example: const cart = createCart(); cart.addItem("apple"); cart.getItems(); // ["apple"]

function createCart () {

  return {
    items: [],
    addItem: function(item) {
      return this.items.push(item);
    },
    getItems: function() {
      return this.items;
    }
  }
}

const cart = createCart();
cart.addItem("apple");
cart.addItem("banana");
console.log(cart.getItems()); // Expected output: ["apple", "banana"]