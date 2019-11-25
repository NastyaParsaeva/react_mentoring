import React, { Component } from 'react';
import './film-list-item.css';

class FilmListItem extends Component {

  render() {
    return (
      <div className="film-item">
        <img 
          className="film-item__image"
          src={this.props.film.imageUrl} 
          alt={this.props.film.title} />
        <div className="film-item__title-row">
          <p className="film-item__title">{this.props.film.title}</p>
          <p className="film-item__date">{this.props.film.releaseDate}</p>
        </div>
        <p className="film-item__genre">{this.props.film.genre}</p>
      </div>
    )
  }
}

export default FilmListItem