import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/Search.css';

export default class Search extends Component {
  render() {
    const { searchInput, handleChange, searchClick } = this.props;
    return (
      <div className="search__container">
        <div className="search-bar">
          <input
            value={ searchInput.toString() }
            onChange={ handleChange }
            className="search-input"
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="Digite algum produto"
            data-testid="query-input"
          />
          <button
            onClick={ searchClick }
            name="searchClick"
            id="searchClick"
            type="button"
            className="search-btn"
            data-testid="query-button"
          >
            Buscar
          </button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchClick: PropTypes.func.isRequired,
};
