import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Router,Route,browserHistory} from 'react-router';

// ReactDOM.render(
//     <Router history={browserHistory}>
//         <Route path="/homepage" component={homepage}/>
//         <Route path="/product" component={Product}/>
//         <Route path="/user" component={User}/>
//         <Route path="/" component={Theme}/>
//     </Router>,document.getElememtByID('root')
//     );

ReactDOM.render(<Theme />, document.getElementById('root'));