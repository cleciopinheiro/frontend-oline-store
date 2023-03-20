import React, { Component } from 'react';
import { getProductCart } from '../services/localStorage';
// import { getLocalStorage } from '../services/localStorage';

export default class ShoppingCart extends Component {
  state = {
    listCart: [],
  };

  componentDidMount() {
    const data = getProductCart();
    this.setState({
      listCart: data,
    });
  }

  render() {
    const { listCart } = this.state;
    return (
      <>
        <div>
          <h2>Carrinho de Compras</h2>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
        <div>
          {
            listCart.map((product) => (
              <div key={ product.id }>
                <p data-testid="shopping-cart-product-name">{ product.title }</p>
                <p>{ product.price }</p>
              </div>
            ))
          }
        </div>
        <p data-testid="shopping-cart-product-quantity">{ listCart.length }</p>
      </>
    );
  }
}
