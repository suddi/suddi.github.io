'use strict';

var React = require('react');

var Link = require('./link');
var config = require('../../config');

var Navigation = React.createClass({
    render: function () {
        return (
            <nav id='nav-wrap' className='opaque'>
                <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
                <a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
                <ul id='nav' className='nav'>
                    {Object.keys(config.navigation).map(function (navigation_link, index) {
                        var navigation_name = config.navigation[navigation_link];
                        return (
                            <Link key={index} link={navigation_link} name={navigation_name}/>
                        );
                    })}
                </ul>
            </nav>
        );
    }
});

module.exports = Navigation;
