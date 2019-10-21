import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './theme';
import Homepage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
<Router>
    <Switch>
        <Route path="/" exact component={Theme}/>
        <Route path="/homepage/" component={Homepage}/>
    </Switch>
</Router>, document.getElementById('root'));
serviceWorker.unregister();