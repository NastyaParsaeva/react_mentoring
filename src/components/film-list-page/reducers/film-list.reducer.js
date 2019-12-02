import { combineReducers } from 'redux'
import { FilmListActionTypes } from '../actions/film-list.actions';

const initialState = {
  filmList: [],
  filmListFetching: false,
  filmListError: false,
}

function filmListReducer(state = initialState, action) {
  switch (action.type) {
    case FilmListActionTypes.GET_FILM_LIST:
      return {
        ...state,
        filmList: [],
        filmListFetching: true,
        filmListError: false,
      };
    
    case FilmListActionTypes.GET_FILM_LIST_SUCCESS:
      return {
        ...state,
        filmList: action.payload.films,
        filmListFetching: false,
        filmListError: false,
      };
    
    case FilmListActionTypes.GET_FILM_LIST_REJECT:
      return {
        ...state,
        filmList: [],
        filmListFetching: false,
        filmListError: true,
      }
    
    default:
      return state
  }
};

export default filmListReducer;