import React, { Component } from 'react';

import '../style/Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className="search-bar">
        <div>
          <input
            className="search-input"
            type="text"
            name="search-products"
            id="search-products"
            placeholder="Digite algum produto"
          />
        </div>
      </div>
    );
  }
}
