import React, { Component } from 'react';
import FilmListItem from '../film-list-item/film-list-item';
import './film-list.css';
import logo from '../../../../assets/kill-bill.jpg';
import SearchResults from '../search-results/search-results';
import fetchFilms from '../actions/film-list.actions';

class FilmList extends Component {

  constructor(props) {
    super(props);
    this.state = {films: []};
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    // dispatch(fetchPostsIfNeeded(selectedSubreddit))
    dispatch(fetchFilms())
      .then(() => console.log(store.getState()))

    // this.setState({ films: [
    //   {
    //     imageUrl: logo,
    //     releaseDate: '2003',
    //     genre: 'Action & Adventure',
    //     title: 'Kill Bill: Vol 1',
    //     id: '151'
    //   },
    //   {
    //     imageUrl: logo,
    //     releaseDate: '2004',
    //     genre: 'Action & Adventure',
    //     title: 'Kill Bill: Vol 2',
    //     id: '152'
    //   },
    //   {
    //     imageUrl: logo,
    //     releaseDate: '1994',
    //     genre: 'Oscar Winning Movie',
    //     title: 'Pulp Fiction',
    //     id: '153'
    //   },
    //   {
    //     imageUrl: logo,
    //     releaseDate: '2004',
    //     genre: 'Oscar Winning Movie',
    //     title: 'Jackie Brown',
    //     id: '154'
    //   },
    //   {
    //     imageUrl: logo,
    //     releaseDate: '2003',
    //     genre: 'Action & Adventure',
    //     title: 'Four Rooms',
    //     id: '155'
    //   },
    //   {
    //     imageUrl: logo,
    //     releaseDate: '1994',
    //     genre: 'Oscar Winning Movie',
    //     title: 'Reservoir Dogs',
    //     id: '156'
    //   }
    // ]})
  }
  render() {
      return (
        <React.Fragment>
          <SearchResults resultsAmount={this.state.films.length}></SearchResults>
          <div className="film-list">
            {this.state.films.map((film) => 
            <FilmListItem key={film.id} film={film}></FilmListItem>
            )}
          </div>
        </React.Fragment>
      )
  }

  // const mapStateToProps = (state, ownProps) => ({
  //   active: ownProps.filter === state.visibilityFilter
  // })
  
  // const mapDispatchToProps = (dispatch, ownProps) => ({
  //   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  // })
}

export default FilmList;