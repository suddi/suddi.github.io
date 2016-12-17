'use strict';

const React = require('react');

const Link = require('./link');
const config = require('../../config');

const Navigation = React.createClass({
    render: function () {
        return (
            <nav id='nav-wrap' className='opaque'>
                <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
                <a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
                <ul id='nav' className='nav'>
                    {Object.keys(config.navigation).map(function (navigationLink, index) {
                        const navigationName = config.navigation[navigationLink];
                        return (
                            <Link key={index} link={navigationLink} name={navigationName}/>
                        );
                    })}
                </ul>
            </nav>
        );
    }
});

module.exports = Navigation;
