'use strict';

const React = require('react');

const ResumePropTypes = require('../prop_types/resume');

const Statement = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics
    },

    render: function () {
        return (
            <div id='objective'>
                <p>{this.props.basics.summary}</p>
            </div>
        );
    }
});

module.exports = Statement;
