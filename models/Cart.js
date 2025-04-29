const Product = require('./Product');

class CartItem {
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }
}

class Cart {
  static #items = [];

  static add(productName) {
    const product = Product.findByName(productName);

    if (!product) {
      throw new Error(`Produkt "${productName}" nie istnieje.`);
    }

    const existingItem = Cart.#items.find(
      (item) => item.product.name === productName
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      Cart.#items.push(new CartItem(product, 1));
    }
  }

  static getItems() {
    return Cart.#items;
  }

  static getTotalPrice() {
    return Cart.#items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  static getProductsQuantity() {
    return Cart.#items.reduce((sum, item) => sum + item.quantity, 0);
  }

  static clearCart() {
    Cart.#items = [];
  }
}

module.exports = Cart;
