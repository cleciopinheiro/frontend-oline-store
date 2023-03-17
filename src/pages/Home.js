import { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar'; 

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <Link to="/shopping-cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho

          </button>
        </Link>
        <p>Categorias</p>
        <SideBar />
      </div>
    );
  }
}

export default Home;
