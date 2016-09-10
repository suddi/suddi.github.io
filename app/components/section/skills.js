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

    render: function () {
        return (
            <li>
                <span className={'bar-expand percentage' + this.props.entry.level}></span>
                <em>{this.props.entry.name}</em>
            </li>
        );
    }
});

const Skill = React.createClass({
    propTypes: {
        title: PropTypes.string.isRequired,
        content: ResumePropTypes.languages_set
    },

    render: function () {
        return (
            <div>
                <h3>{this.props.title}</h3>
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
            skills: ResumePropTypes.skills_set,
            languages: ResumePropTypes.languages_set
        }).isRequired
    },

    render: function () {
        const programming_skills = filterSkills(this.props.content.skills, 'programming');
        const database_skills = filterSkills(this.props.content.skills, 'database');
        return (
            <div className='row skill'>
                <div className='three columns header-col'>
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>
                <div className='nine columns main-col'>
                    <Skill title='Programming Languages' content={programming_skills}/>
                    <Skill title='Database Systems' content={database_skills}/>
                    <Skill title='Languages' content={this.props.content.languages}/>
                </div>
            </div>
        );
    }
});

module.exports = Skills;
