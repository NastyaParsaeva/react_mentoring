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

export function getFilmListSuccess(payload) {
  return {
    type: FilmListActionTypes.GET_FILM_LIST_SUCCESS,
    payload,
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
    return fetch('https://reactjs-cdp.herokuapp.com/movies')
			.then(filmListJson => filmListJson.json())
			.then(filmList => {
				dispatch(getFilmListSuccess(filmList.data));
			})
			.catch(error => dispatch(getFilmListReject(error)));
  }
}

export default fetchFilms;

