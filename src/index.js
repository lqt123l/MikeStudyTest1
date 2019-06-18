import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './configureStore';
import Root from './containers/Root'
import { fetchTodos } from './api/index';

fetchTodos('all').then(todos => {
    console.log(todos);
})

const store = configureStore();

ReactDOM.render(
    <Root store={store}></Root>,
    document.getElementById('root')
);








