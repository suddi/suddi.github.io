'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const BulletPoints = require('../bullet_points');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.work
    },

    render: function () {
        return (
            <div>
                <h2>{this.props.entry.position} <span>{this.props.entry.company}</span></h2>
                <p>{this.props.entry.summary}</p>
                <BulletPoints points={this.props.entry.highlights}/>
            </div>
        );
    }
});

const Content = React.createClass({
    propTypes: {
        content: ResumePropTypes.work_set
    },

    render: function () {
        const title = 'Professional Experience';
        return (
            <div>
                <dd className='clear'></dd>
                <dt>{title}</dt>
                <dd>
                    {this.props.content.map(function (entry, index) {
                        return (
                            <div key={index}>
                                <Entry entry={entry}/>
                            </div>
                        );
                    })}
                </dd>
                <dd className='clear'></dd>
            </div>
        );
    }
});

module.exports = Content;
