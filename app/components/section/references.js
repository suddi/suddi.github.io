'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.references
    },

    render: function () {
        const parts = this.props.entry.name.split(':');
        const _name = parts[0];
        const position = parts[1];
        const company = parts[2];
        return (
            <li>
                <blockquote>
                    <p>{this.props.entry.reference}</p>
                    <cite>{_name}</cite>
                    <cite>{position + ', ' + company}</cite>
                </blockquote>
            </li>
        );
    }
});

const References = React.createClass({
    propTypes: {
        content: ResumePropTypes.references_set
    },

    render: function () {
        return (
            <section id='testimonials'>
                <div className='text-container'>
                    <div className='row'>
                        <div className='two columns header-col'>
                            <h1>
                                <span>References</span>
                            </h1>
                        </div>
                        <div className='ten columns flex-container'>
                            <div className='flexslider'>
                                <ul className='slides'>
                                    {this.props.content.map(function (entry, index) {
                                        return (
                                            <Entry key={index} entry={entry}/>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = References;
