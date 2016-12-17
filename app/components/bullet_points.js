'use strict';

const React = require('react');

const ResumePropTypes = require('../prop_types/resume');

const BulletPoints = React.createClass({
    propTypes: {
        points: ResumePropTypes.bulletPoints
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
