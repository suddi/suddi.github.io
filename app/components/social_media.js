'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const ResumePropTypes = require('../prop_types/resume');

function mapIcon(social_media) {
    const media = social_media.replace(/ /g, '-');
    switch (social_media) {
        case 'email':
            return (
                <i className={'fa fa-envelope'}></i>
            );
        case 'quora':
            return (
                <i className='fa fa-fw'>
                    <strong className='fa-quora'>Q</strong>
                </i>
            );
        default:
            return (
                <i className={'fa fa-' + media}></i>
            );
    }
}

const SocialMedia = React.createClass({
    propTypes: {
        ul_class: PropTypes.string.isRequired,
        profiles: ResumePropTypes.profiles
    },

    render: function () {
        return (
            <ul className={this.props.ul_class}>
                {this.props.profiles.map(function (profile, index) {
                    const icon = mapIcon(profile.network.toLowerCase());
                    return (
                        <li key={index}>
                            <a href={profile.url}>
                                {icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
});

module.exports = SocialMedia;
