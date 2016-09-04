'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const axios = require('axios');

const Contact = require('./contact');
const Statement = require('./statement');
const Content = require('./content');
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
        axios
            .get(this.props.route.resume)
            .then(function (response) {
                this.setState({
                    resume: response.data
                });
            }.bind(this));
    },

    render: function () {
        if (this.state.resume) {
            return (
                <div>
                    <img src={this.state.resume.basics.picture} alt={this.state.resume.basics.name} id='pic'/>
                    <Contact basics={this.state.resume.basics}/>
                    <Statement basics={this.state.resume.basics}/>
                    <Content work={this.state.resume.work} education={this.state.resume.education}/>
                </div>
            );
        } else {
            return (
                <Loading/>
            );
        }
    }
});

module.exports = Home;
