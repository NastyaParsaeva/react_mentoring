import React from 'react';
import './film-list-item.css';

const FilmListItem = ({ film }) => {
  return (
    <div className="film-item">
      <img 
        className="film-item__image"
        src={film.imageUrl} 
        alt={film.title} />
      <div className="film-item__title-row">
        <p className="film-item__title">{film.title}</p>
        <p className="film-item__date">{film.releaseDate}</p>
      </div>
      <p className="film-item__genre">{film.genre}</p>
    </div>
  );
};

export default FilmListItem;