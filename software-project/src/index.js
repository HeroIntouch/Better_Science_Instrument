import React from 'react';
import ReactDOM from 'react-dom';
import EditTheme from './Theme/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import allReducer from './reducer';
import { Provider } from 'react-redux';
import { Login, DownloadUser, ProfileUser } from './LRPD';
import EditHomepage from './edit_homepage/App';
import Homepage from './Homepage';
import { Product } from './Product/Product';
import Test from './Animation/index.js'
<<<<<<< HEAD
import Generation from './Generate/Generate';
import PullCon from './edit_homepage/components/pull_contract';
=======
import Generation from './Generate';
>>>>>>> 2749da1deb24cbf30d5fde40385acbeec1d9d89c


import ProductEdit from './Product_Edit'; 
const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
<<<<<<< HEAD
                <Route path="/" exact component={EditHomepage} />
=======
                <Route path="/" exact component={Homepage} />
>>>>>>> 2749da1deb24cbf30d5fde40385acbeec1d9d89c
                <Route path="/edittheme" component={EditTheme} />
                <Route path="/generate" component={Generation} />
                <Route path="/profileUser" component={ProfileUser} />
                <Route path="/product/:iaun" component={Product} />
                <Route path="/login" component={Login} />
                <Route path="/downloadUser" component={DownloadUser} />
                <Route path="/edithomepage" component={EditHomepage} />
                <Route path="/productedit" component={ProductEdit} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));