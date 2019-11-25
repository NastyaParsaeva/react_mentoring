import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

const rootEl = document.getElementById('app');

render(<App style="width:90%;max-width:1250px"/>, rootEl);

if (module.hot) {
    module.hot.accept();
}