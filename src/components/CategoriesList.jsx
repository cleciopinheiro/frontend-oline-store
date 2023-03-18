import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/CategoriesList.css';

export default class CategoriesList extends Component {
  render() {
    const { categoriesList } = this.props;
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

CategoriesList.propTypes = {
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
