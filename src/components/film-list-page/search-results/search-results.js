import React, { Component } from 'react';
import './search-results.css';
import Toggle from '../../shared/toggle/toggle';

class SearchResults extends Component {

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
      toggleName: 'SORT BY',
      toggleItems: [{
        name: 'RELEASE DATE',
        selected: false,
      }, {
        name: 'RAITING',
        selected: true,
      }]
    });
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
      <section className="search-results">
        <p className="search-results__amount">
          {this.props.resultsAmount} movie found
        </p>
        <Toggle
          options={this.state}
          onToggleItemClick={this.handleToggleItemClick}
        ></Toggle>
      </section>
    )
  }
}

export default SearchResults;