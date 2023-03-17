import { Component } from 'react';
import Search from '../components/Search';
import SideBar from '../components/SideBar';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container" data-testid="home-initial-message">
        <SideBar />
        <div className="main-page">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <Search />
        </div>
      </div>
    );
  }
}

export default Home;
