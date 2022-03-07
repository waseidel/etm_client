import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import ApolloProvider from './features/apollo/ApolloProvider';
import store from './app/store.js';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ApolloProvider />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
