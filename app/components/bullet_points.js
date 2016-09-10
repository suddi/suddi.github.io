'use strict';

const React = require('react');

const ResumePropTypes = require('../prop_types/resume');

const BulletPoints = React.createClass({
    propTypes: {
        points: ResumePropTypes.bullet_points
    },

    render: function () {
        return (
            <div>
                {this.props.points.map(function (point, index) {
                    return (
                        <p key={index} className='point'>
                            <span>&bull; </span>
                            {point}
                        </p>
                    );
                })}
            </div>
        );
    }
});

module.exports = BulletPoints;
