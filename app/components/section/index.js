'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const About = require('./about');
const Resume = require('./resume');
const Work = require('./work');
const Education = require('./education');
const Footer = require('./footer');

const Section = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics,
        work: ResumePropTypes.work_set,
        education: ResumePropTypes.education_set
    },

    render: function () {
        return (
            <div>
                <About content={this.props.basics}/>
                <Resume>
                    <Work content={this.props.work}/>
                    <Education content={this.props.education}/>
                </Resume>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
});

module.exports = Section;
