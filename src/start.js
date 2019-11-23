import React        from 'react';
import ReactDOM     from 'react-dom';
import App          from './components/app';
import { Provider }     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import AllReducers from './reducers/index';

const store = createStore(
    AllReducers,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

var elem = (
    <Provider store = { store } >
        <div className="cd-hero">
            <App />
        </div>
    </Provider>
);

ReactDOM.render(
    elem,
    document.querySelector('main')
);
