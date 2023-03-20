import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class ProductDetails extends Component {
  state = {
    productDetails: {},
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const data = await getProductById(id);
    this.setState({
      productDetails: data,
    });
  }

  render() {
    const { productDetails: { thumbnail, title, price, condition } } = this.state;
    return (
      <div className="product-details__container">
        <h1>Detalhes do Produto</h1>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <h3 data-testid="product-detail-price">{price}</h3>
        <h5>{condition}</h5>
        <button
          type="button"
          data-testid="shopping-cart-button"
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape(
    PropTypes.shape(
      PropTypes.number.isRequired,
    ).isRequired,
  ).isRequired,
};
