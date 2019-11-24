import React, { Component } from 'react';
import FilmListItem from './film-list-item';

class FilmList extends Component {

  constructor() {
    super();
    this.state = {films: []};
  }

  componentDidMount() {
    this.setState({ films: [
      {
        imageUrl: '../../../assets/kill-bill.jpg',
        releaseDate: '2003',
        genre: 'Action & Adventure',
        title: 'Kill Bill: Vol 1',
        id: '151'
      },
      {
        imageUrl: '../../../assets/kill-bill.jpg',
        releaseDate: '2004',
        genre: 'Action & Adventure',
        title: 'Kill Bill: Vol 2',
        id: '152'
      },
      {
        imageUrl: '../../../assets/kill-bill.jpg',
        releaseDate: '1994',
        genre: 'Oscar Winning Movie',
        title: 'Pulp Fiction',
        id: '153'
      },
      {
        imageUrl: '../../../assets/kill-bill.jpg',
        releaseDate: '2004',
        genre: 'Oscar Winning Movie',
        title: 'Jackie Brown',
        id: '154'
      },
      {
        imageUrl: '../../../assets/kill-bill.jpg',
        releaseDate: '2003',
        genre: 'Action & Adventure',
        title: 'Four Rooms',
        id: '155'
      },
      {
        imageUrl: '../../../assets/kill-bill.jpg',
        releaseDate: '1994',
        genre: 'Oscar Winning Movie',
        title: 'Reservoir Dogs',
        id: '156'
      }
    ]})
  }
  render() {
      return (
        this.state.films.map((film) => 
        <FilmListItem key={film.id} film={film}></FilmListItem>
        )
      )
  }
}

export default FilmList;