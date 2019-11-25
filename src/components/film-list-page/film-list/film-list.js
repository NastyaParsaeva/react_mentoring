import React, { Component } from 'react';
import FilmListItem from '../film-list-item/film-list-item';
import './film-list.css';
import logo from '../../../../assets/kill-bill.jpg';

class FilmList extends Component {

  constructor() {
    super();
    this.state = {films: []};
  }

  componentDidMount() {
    this.setState({ films: [
      {
        imageUrl: logo,
        releaseDate: '2003',
        genre: 'Action & Adventure',
        title: 'Kill Bill: Vol 1',
        id: '151'
      },
      {
        imageUrl: logo,
        releaseDate: '2004',
        genre: 'Action & Adventure',
        title: 'Kill Bill: Vol 2',
        id: '152'
      },
      {
        imageUrl: logo,
        releaseDate: '1994',
        genre: 'Oscar Winning Movie',
        title: 'Pulp Fiction',
        id: '153'
      },
      {
        imageUrl: logo,
        releaseDate: '2004',
        genre: 'Oscar Winning Movie',
        title: 'Jackie Brown',
        id: '154'
      },
      {
        imageUrl: logo,
        releaseDate: '2003',
        genre: 'Action & Adventure',
        title: 'Four Rooms',
        id: '155'
      },
      {
        imageUrl: logo,
        releaseDate: '1994',
        genre: 'Oscar Winning Movie',
        title: 'Reservoir Dogs',
        id: '156'
      }
    ]})
  }
  render() {
      return (
        <div className="film-list">
          {this.state.films.map((film) => 
          <FilmListItem key={film.id} film={film}></FilmListItem>
          )}
        </div>
      )
  }
}

export default FilmList;