import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class SideBar extends Component {

  render() {
    const categories = getCategories();
    console.log();

    return (
      <div>
        {
          categories.map((categorie) => {
            <input
              type="radio"
              
            />
          })
        }
      </div>
    );
  }
}
