'use strict';

const React = require('react');
const ReactRouter = require('react-router');

const config = require('./config');

const Main = require('./components/main');
const Home = require('./components/home');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute resume={config.path.resume} component={Home}/>
            {/* <Route path='*' component={ErrorPages.NOT_FOUND}/> */}
        </Route>
    </Router>
);
