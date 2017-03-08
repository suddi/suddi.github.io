'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');

const About = React.createClass({
    propTypes: {
        content: ResumePropTypes.basics
    },

    render: function () {
        return (
            <section id='about'>
                <div className='row'>
                    <div className='two columns'>
                        <img className='profile-pic' src={this.props.content.picture} alt={this.props.content.name}/>
                    </div>
                    <div className='ten columns main-col'>
                        <h2>About Me</h2>
                        {this.props.content.summary.map(function (content, index) {
                            return (
                                <p key={index}>
                                    {content}
                                </p>
                            );
                        })}
                        <div className='row'>
                            <div className='columns contact-details'>
                                <h2>Contact Details</h2>
                                <p className='address'>
                                    {/*
                                    <span>{this.props.content.location.address}</span>
                                    <br/>
                                    */}
                                    <span>{this.props.content.location.city}</span>
                                    <br/>
                                    <span>{this.props.content.location.countryCode}</span>
                                    <br/>
                                    <a href={'skype:' + this.props.content.phone}>
                                        <span>{this.props.content.phone}</span>
                                    </a>
                                    <br/>
                                    <a href={'mailto:' + this.props.content.email}>
                                        <span>{this.props.content.email}</span>
                                    </a>
                                </p>
                            </div>
                            {/*
                            <div className='columns download'>
                                <p>
                                    <a href='#' className='button'>
                                        <i className='fa fa-download'></i>
                                        Download Resume
                                    </a>
                                </p>
                            </div>
                            */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = About;
