import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

import '../style/Home.css';

import Search from '../components/Search';
import CategoriesList from '../components/CategoriesList';
import ProductCard from '../components/ProductCard';

export default class Home extends React.Component {
  state = {
    categoriesList: [],
    searchInput: '',
    categoryInput: '',
    productsList: [],
  };

  async componentDidMount() {
    const data = await getCategories();
    this.setState({
      categoriesList: data,
    });
  }

  searchProducts = async () => {
    const { categoryInput, searchInput } = this.state;
    const data = await getProductsFromCategoryAndQuery(categoryInput, searchInput);
    this.setState({
      productsList: data.results,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      categoriesList,
      searchInput,
      productsList,
      categoryInput } = this.state;
    return (
      <div>
        <div className="header">
          <h1>Online Store</h1>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            <button type="button">
              Carrinho de Compras
            </button>
          </Link>
        </div>
        <div className="main__container">
          <CategoriesList
            categoriesList={ categoriesList }
            categoryInput={ categoryInput }
          />
          <div className="search-and-cards__container">
            <Search
              searchInput={ searchInput }
              handleChange={ this.handleChange }
              searchClick={ this.searchProducts }
            />
            <div className="products-cards__container">
              <ProductCard productsList={ productsList } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
