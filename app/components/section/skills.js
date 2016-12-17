'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const ResumePropTypes = require('../../prop_types/resume');

function filterSkills(input, filter) {
    const reduced = input.reduce(function (previousValue, currentValue) {
        return {
            output: currentValue.keywords.indexOf(filter) === -1 ? previousValue.output : previousValue.output.concat(currentValue),
            filter: filter
        };
    }, {
        output: [],
        filter: filter
    });
    return reduced.output;
}

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.languages
    },

    getInitialState: function () {
        return {
            style: {
                background: '#313131'
            }
        };
    },

    handleMouseEnter: function () {
        return this.setState({
            style: {
                background: '#11ABB0'
            }
        });
    },

    handleMouseLeave: function () {
        return this.setState({
            style: {
                background: '#313131'
            }
        });
    },

    render: function () {
        return (
            <li>
                <span
                    className={'bar-expand percentage' + this.props.entry.level}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    style={this.state.style}/>
                <em>{this.props.entry.name}</em>
            </li>
        );
    }
});

const Skill = React.createClass({
    propTypes: {
        title: PropTypes.string.isRequired,
        content: ResumePropTypes.languagesSet,
        summary: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired
    },

    render: function () {
        const summary = this.props.summary.map(function (point, index) {
            return (
                <p key={index} className='skill-summary'>{point}</p>
            );
        });
        return (
            <div className='row inside'>
                <h3>{this.props.title}</h3>
                {summary}
                <div className='bars'>
                    <ul className='skills'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} entry={entry}/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
});

const Skills = React.createClass({
    propTypes: {
        content: PropTypes.shape({
            skills: ResumePropTypes.skillsSet,
            languages: ResumePropTypes.languagesSet
        }).isRequired
    },

    render: function () {
        const programmingSummary = [
            'Worked primarily with JavaScript, Python and C++, with frameworks such as Express.js, Koa.js, React.js, Django and Flask.',
            'Interested in functional programming and serverless architectures, exploring with Erlang and AWS Lambda respectively.'
        ];
        const databaseSummary = [
            'Experienced in both SQL and NoSQL, having worked in companies making use of DynamoDB, MongoDB, PostgreSQL and Aurora RDS flavour of MySQL, ' +
            'with personal further projects utilizing RethinkDB'
        ];

        const programmingSkills = filterSkills(this.props.content.skills, 'programming');
        const databaseSkills = filterSkills(this.props.content.skills, 'database');
        return (
            <section id='skill'>
                <div className='row skill'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        <Skill title='Programming Languages' content={programmingSkills} summary={programmingSummary}/>
                        <Skill title='Database Systems' content={databaseSkills} summary={databaseSummary}/>
                        {/*
                            <Skill title='Languages' content={this.props.content.languages}/>
                        */}
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Skills;
