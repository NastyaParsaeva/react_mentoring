import React, { Component } from 'react';

class FilmListItem extends Component {

  render() {
    return (
      <div>
        <img src={this.props.film.imageUrl} alt={this.props.film.title} />
        <h2>{this.props.film.title}</h2>
        <h3>{this.props.film.releaseDate}</h3>
        <h3>{this.props.film.genre}</h3>
      </div>
    )
  }
}

export default FilmListItem