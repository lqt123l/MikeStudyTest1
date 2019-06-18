import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import todos from './reducers/index';



const configureStore = () => {

    const middlewares = [thunk];

    middlewares.push(createLogger());

    return createStore(
        todos,
        applyMiddleware(...middlewares)
    );
}

export default configureStore;