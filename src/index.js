import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

const rootEl = document.getElementById('app');

render(
	<Provider store={store}>
		<App style="width:90%;max-width:1250px"/>
	</Provider>,
	rootEl);

if (module.hot) {
	module.hot.accept();
}

