'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const SocialMedia = require('../social_media');

const Footer = React.createClass({
    propTypes: {
        content: ResumePropTypes.basics
    },

    render: function () {
        return (
            <footer>
                <div className='row'>
                    <div className='twelve columns'>
                        <SocialMedia ul_class='social-links' profiles={this.props.content.profiles}/>
                        <ul className='copyright'>
                            <li>
                                This site is developed in React.js from the original design of Ceevee from&nbsp;
                                <a href='http://www.styleshout.com/' title='Styleshout' target='_blank'>
                                    Styleshout
                                </a>
                            </li>
                        </ul>
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
