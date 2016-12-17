'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const ResumePropTypes = require('../../prop_types/resume');
const BulletPoints = require('../bullet_points');
const Datetime = require('../../utils/datetime');

const Entry = React.createClass({
    propTypes: {
        index: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        entry: ResumePropTypes.work
    },

    render: function () {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        const index = this.props.index + 1;
        const divider = index === this.props.total ? (<br/>) : (<hr/>);

        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>
                        <a href={this.props.entry.website}>{this.props.entry.company}</a>
                    </h3>
                    <p className='info'>
                        {this.props.entry.position}
                        <span> &bull; </span>
                        <span className='info-summary'>{this.props.entry.summary}</span>
                        <span> &bull; </span>
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                    <BulletPoints points={this.props.entry.highlights}/>
                </div>
                {divider}
            </div>
        );
    }
});

const Work = React.createClass({
    propTypes: {
        content: ResumePropTypes.workSet
    },

    render: function () {
        const numEntries = this.props.content.length;
        return (
            <section id='work'>
                <div className='row work'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} index={index} total={numEntries} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Work;
