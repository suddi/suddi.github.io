'use strict';

const React = require('react');

const Resume = React.createClass({
    render: function () {
        return (
            <section id='resume'>
                {this.props.children}
            </section>
        );
    }
});

module.exports = Resume;
