'use strict';

const React = require('react');

const ScrollDown = React.createClass({
    render: function () {
        return (
            <p className='scrolldown'>
                <a className='smoothscroll' href='#about'>
                    <i className='icon-down-circle'></i>
                </a>
            </p>
        );
    }
});

module.exports = ScrollDown;
