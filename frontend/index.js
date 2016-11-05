`use strict`;
// this is a better comment
import React from 'react';
import luke from 'Luke'
import ReactDOM from 'react-dom';
import Test from 'test'
import {IndexRoute, browserHistory, Router, Route} from 'react-router';
import App from './components/App';
import Boggle from './components/Boggle'

require('./resources/styles/style.scss');
require( 'bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min');

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="whatever">test</Route>
            <IndexRoute component={Boggle}/>
            <Route path="*" component={App}/>
        </Route>
    </Router>
), document.getElementById('root'));
