import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveProductToCart } from '../services/localStorage';

import '../style/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { productsList } = this.props;
    return (
      productsList.length === 0 ? (
        <h3>Nenhum produto foi encontrado</h3>
      ) : (
        productsList.map((product) => (
          <div key={ product.id }>
            <Link
              to={ `/product-details/${product.id}` }
              data-testid="product-detail-link"
            >
              <div
                key={ product.id }
                className="product-card"
                data-testid="product"
              >
                <h4 className="product-title">{product.title}</h4>
                <img src={ product.thumbnail } alt={ product.title } />
                <h4 className="product-price">
                  R$
                  {' '}
                  {product.price}
                </h4>
              </div>
            </Link>
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => saveProductToCart(product) }
            >
              Adicionar ao carrinho

            </button>
          </div>
        ))
      )
    );
  }
}

ProductCard.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
