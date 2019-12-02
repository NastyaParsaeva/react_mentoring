import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import filmListReducer from './components/film-list-page/reducers/film-list.reducer';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('app');

const store = createStore(
  filmListReducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);

render(
	<Provider store={store}>
		<App style="width:90%;max-width:1250px"/>
	</Provider>,
	rootEl);

if (module.hot) {
	module.hot.accept();
}

