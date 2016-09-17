'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var request = require('superagent');

var Header = require('./header');
var Navigation = require('./navigation');
var Banner = require('./banner');
var ScrollDown = require('./scrolldown');
var Section = require('./section');
var Loading = require('./loading');

var Home = React.createClass({
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
        return request
            .get(this.props.route.resume)
            .end(function (error, response) {
                return error ? error : this.setState({
                    resume: response.data
                });
            }.bind(this));
    },

    onLoad: function () {
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
                    portfolio={this.state.resume.publications}
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
