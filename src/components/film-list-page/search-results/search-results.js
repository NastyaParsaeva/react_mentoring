import React, { Component } from 'react';
import './search-results.css';
import Toggle from '../../shared/toggle/toggle';

class SearchResults extends Component {

  constructor() {
    super();
    this.state = {toggleOptions: {
      toggleName: '',
      toggleItems: [],
    }};
    // this.toggleOptions = {
    //   toggleName: 'SORT BY',
    //   toggleItems: ['RELEASE DATE', 'RATING'],
    // }
  }

  componentDidMount() {
    this.setState({toggleOptions: {
      toggleName: 'SORT BY',
      toggleItems: [{
        name: 'RELEASE DATE',
        selected: false,
      }, {
        name: 'RAITING',
        selected: true,
      }]
    }})
  }

  render() {
    return (
      <section className="search-results">
        <p className="search-results__amount">
          {this.props.resultsAmount} movie found
        </p>
        <Toggle options={this.state.toggleOptions}></Toggle>
      </section>
    )
  }
}

export default SearchResults;