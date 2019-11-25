import React, { Component } from 'react';
import './search-component.css';
import Toggle from '../../shared/toggle/toggle';

class SearchComponent extends Component {

  constructor() {
    super();
    this.toggleOptions = {
      toggleName: 'SEARCH BY',
      toggleItems: ['TITLE', 'GENRE'],
    }
  }

  render() {
    return (
      <section className="search">
        <h1 className="search__header">FIND YOUR MOVIE</h1>
        <div className="search__row">
          <input 
            type="search"
            className="search__search-field"
          ></input>
          <button className="search__button">SEARCH</button>
        </div>
        <Toggle options={this.toggleOptions}></Toggle>
      </section>
    )
  }
}

export default SearchComponent