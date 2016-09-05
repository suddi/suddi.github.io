'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const BulletPoints = require('../bullet_points');
const Datetime = require('../../utils/datetime');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.work
    },

    render: function () {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>{this.props.entry.company}</h3>
                    <p className='info'>
                        {this.props.entry.position}
                        <span> &bull; </span>
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                    <BulletPoints points={this.props.entry.highlights}/>
                </div>
                <hr/>
            </div>
        );
    }
});

const Work = React.createClass({
    propTypes: {
        content: ResumePropTypes.work_set
    },

    render: function () {
        return (
            <div className='row work'>
                <div className='three columns header-col'>
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>
                <div className='nine columns main-col'>
                    {this.props.content.map(function (entry, index) {
                        return (
                            <Entry key={index} entry={entry}/>
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Work;
