import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { saveProductToCart, saveProductsReviews,
  getProductReview } from '../services/localStorage';
import '../style/ProductDetails.css';

export default class ProductDetails extends Component {
  state = {
    productDetails: {},
    inputEmail: '',
    inputRadio: '',
    inputDetail: '',
    invalidInfo: false,
    reviewProduct: [],
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const productReview = getProductReview(id);
    const data = await getProductById(id);
    this.setState({
      productDetails: data,
      reviewProduct: productReview || [],
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { inputEmail, inputRadio, inputDetail, invalidInfo } = this.state;
    const emailFormat = /^\S+@\S+\.\S+$/;
    if (!inputEmail.match(emailFormat)
      || inputRadio === '') { return this.setState({ invalidInfo: true }); }
    this.setState({ invalidInfo: false });
    if (invalidInfo === false) {
      saveProductsReviews(
        id,
        {
          email: inputEmail,
          text: inputDetail,
          rating: inputRadio },
      );
      const productReview = getProductReview(id);
      this.setState({
        inputEmail: '', inputDetail: '', inputRadio: '', reviewProduct: productReview,
      });
    }
  };

  render() {
    const {
      productDetails: { thumbnail, title, price, condition },
      productDetails,
      inputDetail,
      inputEmail,
      invalidInfo,
      reviewProduct,
    } = this.state;
    return (
      <>
        <div className="product-details__container">
          <h1>Detalhes do Produto</h1>
          <h2 data-testid="product-detail-name">{title}</h2>
          <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
          <h3 data-testid="product-detail-price">{price}</h3>
          <h5>{condition}</h5>
          <Link to="/shoppingcart">
            <button
              type="button"
              data-testid="shopping-cart-button"
            >
              Comprar
            </button>
          </Link>
          <button
            onClick={ () => saveProductToCart(productDetails) }
            type="button"
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
        <div className="form-rating__container">
          <input
            value={ inputEmail }
            onChange={ this.handleChange }
            type="email"
            name="inputEmail"
            id="inputEmail"
            placeholder="Email"
            className="input-email"
            data-testid="product-detail-email"
          />
          <p>Avaliação</p>
          <div className="input-radio__container">
            <input
              onChange={ this.handleChange }
              value="1"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              data-testid="1-rating"
            />
            <input
              onChange={ this.handleChange }
              value="2"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              data-testid="2-rating"
            />
            <input
              onChange={ this.handleChange }
              value="3"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              data-testid="3-rating"
            />
            <input
              onChange={ this.handleChange }
              value="4"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              data-testid="4-rating"
            />
            <input
              onChange={ this.handleChange }
              value="5"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              data-testid="5-rating"
            />
          </div>
          <textarea
            value={ inputDetail }
            onChange={ this.handleChange }
            name="inputDetail"
            id="inputDetail"
            placeholder="Mensagem (opcional)"
            data-testid="product-detail-evaluation"
          />
          <button
            onClick={ this.validateForm }
            className="button-review"
            type="button"
            data-testid="submit-review-btn"
          >
            Enviar
          </button>
          {invalidInfo && (
            <p className="invalid-info" data-testid="error-msg">
              Campos inválidos
            </p>
          )}
        </div>
        { reviewProduct.length > 0
        && reviewProduct.map((review, index) => (
          <div key={ index }>
            <h5 data-testid="review-card-email">{review.email}</h5>
            <p data-testid="review-card-evaluation">{review.text}</p>
            <p data-testid="review-card-rating">{review.rating}</p>
          </div>
        ))}
      </>
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
