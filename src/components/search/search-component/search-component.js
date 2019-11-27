import React, { Component } from 'react';
import './search-component.css';
import Toggle from '../../shared/toggle/toggle';

class SearchComponent extends Component {

  constructor() {
    super();
    this.state = {toggleOptions: {
      toggleName: '',
      toggleItems: [],
    }};
  }

  componentDidMount() {
    this.setState({toggleOptions: {
      toggleName: 'SEARCH BY',
      toggleItems: [{
        name: 'TITLE',
        selected: true
      },{
        name: 'GENRE',
        selected: false,
      }],
    }})
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
        <Toggle options={this.state.toggleOptions}></Toggle>
      </section>
    )
  }
}

export default SearchComponent