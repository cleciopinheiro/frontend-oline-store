import React, { Component } from 'react';
import './Search.css';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';

export default class Search extends Component {
  state = {
    inputSearch: '',
    listSearch: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  getFetch = async () => {
    const { inputSearch } = this.state;
    const products = await getProductsFromCategoryAndQuery(1, inputSearch);
    this.setState({
      listSearch: products.results,
    });
  };

  render() {
    const { inputSearch, listSearch } = this.state;
    return (
      <section className="main-search">
        <div className="search-content">
          <input
            name="inputSearch"
            value={ inputSearch }
            onChange={ this.onInputChange }
            data-testid="query-input"
            type="text"
            placeholder="Pesquise aqui"
          />
          <button
            onClick={ this.getFetch }
            type="button"
            data-testid="query-button"
          >
            Pesquisar

          </button>
        </div>
        <div>
          <Card
            listSearch={ listSearch }
          />
        </div>
      </section>
    );
  }
}
