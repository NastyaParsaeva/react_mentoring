import React, { Component } from 'react';
import './search-results.css';
import Toggle from '../../shared/toggle/toggle';

class SearchResults extends Component {

  constructor() {
    super();
    this.toggleOptions = {
      toggleName: 'SORT BY',
      toggleItems: ['RELEASE DATE', 'RATING'],
    }
  }

  render() {
    return (
      <section className="search-results">
        <p className="search-results__amount">
          {this.props.resultsAmount} movie found
        </p>
        <Toggle options={this.toggleOptions}></Toggle>
      </section>
    )
  }
}

export default SearchResults;