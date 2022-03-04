import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ApolloProvider from './features/apollo/ApolloProvider';

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider />
  </BrowserRouter>,
  document.getElementById('root')
);
