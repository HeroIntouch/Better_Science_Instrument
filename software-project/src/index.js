import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Theme />, document.getElementById('root'));
serviceWorker.unregister();