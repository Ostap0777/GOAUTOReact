import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeApp from './HomeApp';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <HomeApp />
  </Provider>,
  document.getElementById('root')
);
