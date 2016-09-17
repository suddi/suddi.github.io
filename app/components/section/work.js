'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var ResumePropTypes = require('../../prop_types/resume');
var BulletPoints = require('../bullet_points');
var Datetime = require('../../utils/datetime');

var Entry = React.createClass({
    propTypes: {
        index: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        entry: ResumePropTypes.work
    },

    render: function () {
        var startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        var endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        var index = this.props.index + 1;
        var divider = index === this.props.total ? (<br/>) : (<hr/>);

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

var Work = React.createClass({
    propTypes: {
        content: ResumePropTypes.work_set
    },

    render: function () {
        var num_entries = this.props.content.length;
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
                                <Entry key={index} index={index} total={num_entries} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Work;
