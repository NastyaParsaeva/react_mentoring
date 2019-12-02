import { createStore } from 'redux';
import filmListReducer from './film-list-page/reducers/film-list.reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const loggerMiddleware = createLogger();

const store = createStore(
  filmListReducer,
  applyMiddleware(
    thunkMiddleware.
    loggerMiddleware
  )
);

// store.dispatch(selectSubreddit('reactjs'))
// store.dispatch(fetchPosts('reactjs')).then(() => console.log(store.getState()))