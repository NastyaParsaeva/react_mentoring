import React from 'react';
import './film-list-item.css';

const FilmListItem = ({ film }) => {
  return (
    <div className="film-item">
      <img 
        className="film-item__image"
        src={film.poster_path} 
        alt={film.title} />
      <div className="film-item__title-row">
        <p className="film-item__title">{film.title}</p>
        <p className="film-item__date">{film.release_date}</p>
      </div>
      <p className="film-item__genre">{mapGenresToString(film.genres)}</p>
    </div>
  );
};

const mapGenresToString = (genres) => {
  return genres.join(', ');
}

export default FilmListItem;