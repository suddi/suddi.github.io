'use strict';

const React = require('react');

const NotFound = React.createClass({
    render: function () {
        return (
            <div className='not-found'>
                404: It appears you have lost your way
                <br/>
                <span>
                    Return to safety <a href='/'>here.</a>
                </span>
            </div>
        );
    }
});

module.exports = NotFound;
