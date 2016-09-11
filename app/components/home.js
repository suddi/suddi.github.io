'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const axios = require('axios');

const Header = require('./header');
const Navigation = require('./navigation');
const Banner = require('./banner');
const ScrollDown = require('./scrolldown');
const Section = require('./section');
const Loading = require('./loading');

const Home = React.createClass({
    propTypes: {
        route: PropTypes.shape({
            resume: PropTypes.string.isRequired
        }).isRequired
    },

    getInitialState: function () {
        return {
            resume: false
        };
    },

    componentDidMount: function () {
        return axios
            .get(this.props.route.resume)
            .then(function (response) {
                this.setState({
                    resume: response.data
                });
            }.bind(this));
    },

    render: function () {
        if (!this.state.resume) {
            return (
                <Loading/>
            );
        }

        return (
            <div>
                <Header>
                    <Navigation/>
                    <Banner basics={this.state.resume.basics}/>
                    <ScrollDown/>
                </Header>
                <Section
                    basics={this.state.resume.basics}
                    work={this.state.resume.work}
                    education={this.state.resume.education}
                    skills={this.state.resume.skills}
                    languages={this.state.resume.languages}
                    references={this.state.resume.references}/>
            </div>
        );
    }
});

module.exports = Home;
