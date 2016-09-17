'use strict';

var React = require('react');

var ResumePropTypes = require('../prop_types/resume');

var BulletPoints = React.createClass({
    propTypes: {
        points: ResumePropTypes.bullet_points
    },

    render: function () {
        return (
            <div>
                {this.props.points.map(function (point, index) {
                    return (
                        <p key={index} className='point'>
                            <span className='bullet-point'>&bull; </span>
                            {point}
                        </p>
                    );
                })}
            </div>
        );
    }
});

module.exports = BulletPoints;
