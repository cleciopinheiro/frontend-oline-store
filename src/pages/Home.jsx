import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import CategoriesList from '../components/CategoriesList';

import '../style/Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Online Store</h1>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            <button type="button">
              Carrinho de Compras
            </button>
          </Link>
        </div>
        <Search />
        <CategoriesList />
      </div>
    );
  }
}
