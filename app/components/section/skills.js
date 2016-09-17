'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var ResumePropTypes = require('../../prop_types/resume');

function filterSkills(input, filter) {
    var reduced = input.reduce(function (previousValue, currentValue) {
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

var Entry = React.createClass({
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
                <span className={'bar-expand percentage' + this.props.entry.level} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={this.state.style}></span>
                <em>{this.props.entry.name}</em>
            </li>
        );
    }
});

var Skill = React.createClass({
    propTypes: {
        title: PropTypes.string.isRequired,
        content: ResumePropTypes.languages_set,
        summary: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired
    },

    render: function () {
        var summary = this.props.summary.map(function (point, index) {
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

var Skills = React.createClass({
    propTypes: {
        content: PropTypes.shape({
            skills: ResumePropTypes.skills_set,
            languages: ResumePropTypes.languages_set
        }).isRequired
    },

    render: function () {
        var programming_summary = [
            'Worked primarily with JavaScript, Python and C++, with frameworks such as Express.js, Koa.js, React.js, Django and Flask.',
            'Interested in functional programming and serverless architectures, exploring with Erlang and AWS Lambda respectively.'
        ];
        var database_summary = [
            'Experienced in both SQL and NoSQL, having worked in companies making use of DynamoDB, MongoDB, PostgreSQL and Aurora RDS flavour of MySQL, ' +
            'with personal further projects utilizing RethinkDB'
        ];

        var programming_skills = filterSkills(this.props.content.skills, 'programming');
        var database_skills = filterSkills(this.props.content.skills, 'database');
        return (
            <section id='skill'>
                <div className='row skill'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        <Skill title='Programming Languages' content={programming_skills} summary={programming_summary}/>
                        <Skill title='Database Systems' content={database_skills} summary={database_summary}/>
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
