import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import store from './store';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById('root')
);
