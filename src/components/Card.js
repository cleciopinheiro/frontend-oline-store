import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default class Card extends Component {
  render() {
    const { listSearch } = this.props;
    return (
      <div className="container-card">
        { listSearch.length === 0 && <p>Nenhum produto foi encontrado</p> }
        { listSearch.map((product) => (
          <div className="cards" data-testid="product" key={ product.id }>
            <h5>{ product.title }</h5>
            <img src={ product.thumbnail } alt={ product.title } />
            <h4>
              R$
              {' '}
              { product.price }
            </h4>
          </div>
        )) }
      </div>
    );
  }
}

Card.propTypes = {
  listSearch: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  ),
}.isRequired;
