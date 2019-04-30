import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import todoApp from './reducers/todoApp';


const store = createStore(todoApp);

let initialId = 0;
const getNextTodoId = () => {
    return initialId++;
}

const render = () => {
    ReactDOM.render(
        <App
            todos={store.getState().todos}
            visibilityFilter={store.getState().visibilityFilter}
            store={store}
            getNextTodoId={getNextTodoId} />,
        document.getElementById('root')
    );
}
store.subscribe(render);
render();


