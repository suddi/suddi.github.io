'use strict';

const React = require('react');

const ResumePropTypes = require('../prop_types/resume');

const BulletPoints = React.createClass({
    propTypes: {
        points: ResumePropTypes.bullet_points
    },

    render: function () {
        return (
            <ul>
                {this.props.points.map(function (point, index) {
                    return (
                        <li key={index}>{point}</li>
                    );
                })}
            </ul>
        );
    }
});

module.exports = BulletPoints;
