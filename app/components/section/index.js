'use strict';

var React = require('react');

var ResumePropTypes = require('../../prop_types/resume');
var About = require('./about');
var Work = require('./work');
var Education = require('./education');
var Skills = require('./skills');
var Portfolio = require('./portfolio');
var References = require('./references');
var Footer = require('./footer');

var Section = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics,
        work: ResumePropTypes.work_set,
        education: ResumePropTypes.education_set,
        skills: ResumePropTypes.skills_set,
        languages: ResumePropTypes.languages_set,
        portfolio: ResumePropTypes.publications_set,
        references: ResumePropTypes.references_set
    },

    render: function () {
        var skills_content = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Education content={this.props.education}/>
                <Skills content={skills_content}/>
                <Portfolio content={this.props.portfolio}/>
                <References content={this.props.references}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
});

module.exports = Section;
