'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const request = require('superagent');

const Header = require('./header');
const Navigation = require('./navigation');
const Banner = require('./banner');
const ScrollDown = require('./scrolldown');
const Section = require('./section');
const Loading = require('./loading');

const Home = React.createClass({
    propTypes: {
        route: PropTypes.shape({
            config: PropTypes.shape({
                resumePath: PropTypes.string.isRequired,
                navigation: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    },

    getInitialState: function () {
        return {
            resume: false
        };
    },

    componentDidMount: function () {
        return request
            .get(this.props.route.config.resumePath)
            .end(function (error, response) {
                return error ? error : this.setState({
                    resume: response.body
                });
            }.bind(this));
    },

    onLoad: function () {
        return (
            <div>
                <Header>
                    <Navigation navigation={this.props.route.config.navigation}/>
                    <Banner basics={this.state.resume.basics}/>
                    <ScrollDown/>
                </Header>
                <Section
                    basics={this.state.resume.basics}
                    work={this.state.resume.work}
                    education={this.state.resume.education}
                    skills={this.state.resume.skills}
                    languages={this.state.resume.languages}
                    portfolio={this.state.resume.projects}
                    references={this.state.resume.references}/>
            </div>
        );
    },

    beforeLoad: function () {
        return (
            <Loading/>
        );
    },

    render: function () {
        return this.state.resume ? this.onLoad() : this.beforeLoad();
    }
});

module.exports = Home;
