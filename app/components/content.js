'use strict';

const React = require('react');

const ResumePropTypes = require('../prop_types/resume');
const WorkSection = require('./sections/work');
// const EducationSection = require('./sections/education');

const Content = React.createClass({
    propTypes: {
        work: ResumePropTypes.work_set,
        education: ResumePropTypes.education_set
    },

    render: function () {
        return (
            <div>
                <div className='clear'></div>
                <dl>
                    <WorkSection content={this.props.work}/>
                    {/* <EducationSection content={this.state.resume.education_set}/> */}
                </dl>
                <div className='clear'></div>
            </div>
        );
    }
});

module.exports = Content;
