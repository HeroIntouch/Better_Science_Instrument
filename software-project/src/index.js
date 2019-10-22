import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './theme';
import Homepage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import allReducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={Theme} />
                <Route path="/homepage/" component={Homepage} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();