import { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
