'use strict';

var React = require('react');

var ResumePropTypes = require('../../prop_types/resume');
var SocialMedia = require('../social_media');

var Footer = React.createClass({
    propTypes: {
        content: ResumePropTypes.basics
    },

    render: function () {
        return (
            <footer>
                <div className='row'>
                    <div className='twelve columns'>
                        <SocialMedia ul_class='social-links' profiles={this.props.content.profiles}/>
                    </div>
                    <div id='go-top'>
                        <a className='smoothscroll' title='Back to Top' href='#home'>
                            <i className='icon-up-open'></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;
