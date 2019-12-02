import fetch from 'cross-fetch';

export const FilmListActionTypes = {
  GET_FILM_LIST: 'GET_FILM_LIST',
  GET_FILM_LIST_SUCCESS: 'GET_FILM_LIST_SUCCESS',
  GET_FILM_LIST_REJECT: 'GET_FILM_LIST_REJECT',
}

export function getFilmList(text) {
  return {
    type: FilmListActionTypes.GET_FILM_LIST,
  };
};

export function getFilmListSuccess(filmList) {
  return {
    type: FilmListActionTypes.GET_FILM_LIST_SUCCESS,
    filmList,
  };
};

export function getFilmListReject() {
  return {
    type: FilmListActionTypes.GET_FILM_LIST_REJECT,
  };
};

function fetchFilms() {
  return dispatch => {
    dispatch(getFilmList())
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(getFilmListSuccess(json)))
  }
}

export default fetchFilms;