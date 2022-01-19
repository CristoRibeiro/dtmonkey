import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => [
      {
        id: 1,
        title: 'Desenvolvimento de Software',
        amount: 'R$ 1.500',
        type: 'deposit',
        category: 'Trabalho',
        createAt: new Date(),
      },
      {
        id: 1,
        title: 'Aluguel',
        amount: '-R$ 400',
        type: 'without',
        category: 'Moradia',
        createAt: new Date(),
      },
      {
        id: 1,
        title: 'Burger King',
        amount: '-R$ 50',
        type: 'without',
        category: 'Food',
        createAt: new Date(),
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
