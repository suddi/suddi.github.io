'use strict';

const React = require('react');

const Header = React.createClass({
    render: function () {
        return (
            <header id='home'>
                {this.props.children}
            </header>
        );
    }
});

module.exports = Header;
