import React, { Component } from 'react';
import FilmListItem from '../film-list-item/film-list-item';
import './film-list.css';
import logo from '../../../../assets/kill-bill.jpg';
import SearchResults from '../search-results/search-results';
import fetchFilms from '../actions/film-list.actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FilmList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchFilms());
  }
  render() {
      return (
        <React.Fragment>
          <SearchResults resultsAmount={this.props.films.length}></SearchResults>
          <div className="film-list">
            {this.props.films.map((film) => 
            <FilmListItem key={film.id} film={film}></FilmListItem>
            )}
          </div>
        </React.Fragment>
      )
  }

}

FilmList.propTypes = {
  filmList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {

  return {
    films: state.filmList,
    isFilmsFetching: state.filmListFetching,
    isFilmsError: state.filmListError,
  };
}

export default connect(mapStateToProps)(FilmList)