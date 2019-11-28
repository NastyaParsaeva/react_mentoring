import React, { Component } from 'react';
import './search-component.css';
import Toggle from '../../shared/toggle/toggle';

class SearchComponent extends Component {

  constructor() {
    super();
    this.handleToggleItemClick = this.handleToggleItemClick.bind(this);
    this.state = {
      toggleName: '',
      toggleItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      toggleName: 'SEARCH BY',
      toggleItems: [{
        name: 'TITLE',
        selected: true
      },{
        name: 'GENRE',
        selected: false,
      }],
    })
  }

  handleToggleItemClick(item) {
    this.setState({
      toggleName: this.state.toggleName,
      toggleItems: this.state.toggleItems.map((stateItem) => {
        if (stateItem.name === item.name) {
          return {...stateItem, selected: true}
        } else {
          return {...stateItem, selected: false}
        }
      })
    })
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
        <Toggle 
          options={this.state}
          onToggleItemClick={this.handleToggleItemClick}
        ></Toggle>
      </section>
    )
  }
}

export default SearchComponent