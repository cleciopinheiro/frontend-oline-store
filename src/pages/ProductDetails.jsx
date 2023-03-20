import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { saveProductToCart } from '../services/localStorage';

export default class ProductDetails extends Component {
  state = {
    productDetails: {},
    inputEmail: '',
    textArea: '',
    inputRadio: '',
    btnDisable: false,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const data = await getProductById(id);
    this.setState({
      productDetails: data,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  verifyForm = () => {
    const { inputEmail, textArea, inputRadio } = this.state;
    const emailFormat = /^\S+@\S+\.\S+$/;

    if (textArea.length === 0 || !inputEmail.match(emailFormat
      || inputRadio.length === 0)) {
      return this.setState({ btnDisable: true });
    }
  };

  render() {
    const { productDetails: { thumbnail, title, price, condition },
      productDetails, inputEmail, textArea, btnDisable } = this.state;
    return (
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
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => saveProductToCart(productDetails) }
        >
          Adicionar ao carrinho

        </button>

        <form action="">
          <input
            data-testid="product-detail-email"
            type="email"
            name="inputEmail"
            id=""
            value={ inputEmail }
            onChange={ this.handleChange }
          />
          <textarea
            data-testid="product-detail-evaluation"
            name="textArea"
            id=""
            value={ textArea }
            onChange={ this.handleChange }
          />
          <label htmlFor="inputRadio">
            <input
              data-testid="1-rating"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              value={ 1 }
              onChange={ this.handleChange }
            />

            <input
              data-testid="2-rating"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              value={ 2 }
              onChange={ this.handleChange }
            />

            <input
              data-testid="3-rating"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              value={ 3 }
              onChange={ this.handleChange }
            />

            <input
              data-testid="4-rating"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              value={ 4 }
              onChange={ this.handleChange }
            />

            <input
              data-testid="5-rating"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              value={ 5 }
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="submit-review-btn"
            type="button"
            onClick={ this.verifyForm }
          >
            Avaliar

          </button>
        </form>
        { btnDisable && <p data-testid="error-msg">Campos inválidos</p> }
        {/* <div>
          {

          }
        </div> */}
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
