import React, { Component } from 'react';
import { getCategories } from '../services/api';

import '../style/CategoriesList.css';

export default class CategoriesList extends Component {
  state = {
    categoriesList: [],
  };

  async componentDidMount() {
    const data = await getCategories();
    this.setState({
      categoriesList: data,
    });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div className="categories__container">
        <h3>Categorias</h3>
        <ul className="categories-list">
          {
            categoriesList.map((category) => (
              <li key={ category.id }>
                <button type="button" data-testid="category">
                  {category.name}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
