'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const Link = React.createClass({
    propTypes: {
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    },

    render: function () {
        return (
            <li>
                <a className='smoothscroll' href={`#${this.props.link}`}>{this.props.name}</a>
            </li>
        );
    }
});

module.exports = Link;
