'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var config = require('./config');

var Main = require('./components/main');
var Home = require('./components/home');
var NotFound = require('./components/errors/not_found');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute resume={config.path.resume} component={Home}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
);
