import React, { Component } from 'react';
import { getCategories } from '../services/api';
import './SideBar.css';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {

  state = {
    categories: [],
  }

  async componentDidMount() {
    const data = await getCategories();
    this.setState({
      categories: data,
    })
  }

  render() {
    const { categories } = this.state
    return (
      <form className="side-bar">
        <h2>Categorias</h2>
      { categories.map((categorie) => (
        <label 
          htmlFor={ categorie.id }
          key={ categorie.id }
          data-testid="category"
        >
          <input
          id={ categorie.id }
          name='categories'
          type="radio" />
          { categorie.name }
        </label>

      )) }
              <Link to="/shopping-cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Ir para o carrinho
          </button>
        </Link>
      </form>
    );
  }
}