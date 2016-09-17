'use strict';

var React = require('react');

var ResumePropTypes = require('../prop_types/resume');
var SocialMedia = require('./social_media');

var Banner = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics
    },

    render: function () {
        return (
            <div className='row banner'>
                <div className='banner-text'>
                    <h1 className='responsive-headline'>{this.props.basics.name}</h1>
                    {/*
                        <h3>{this.props.basics.summary}</h3>
                    */}
                    <br/>
                    <hr/>
                    <SocialMedia ul_class='social' profiles={this.props.basics.profiles}/>
                </div>
            </div>
        );
    }
});

module.exports = Banner;
