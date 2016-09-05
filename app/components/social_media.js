'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const ResumePropTypes = require('../prop_types/resume');

function mapIcon(social_media) {
    switch (social_media) {
        case 'email':
            return 'envelope';
        default:
            return social_media;
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
                                <i className={'fa fa-' + icon}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
});

module.exports = SocialMedia;
