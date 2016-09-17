'use strict';

const React = require('react');

const Header = React.createClass({
    getInitialState: function () {
        return {
            window: {
                height: 0,
                width: 0
            }
        };
    },

    updateDimensions: function () {
        return this.setState({
            window: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        });
    },

    componentWillMount: function () {
        this.updateDimensions();
    },

    componentDidMount: function () {
        return window.addEventListener('resize', this.updateDimensions);
    },

    render: function () {
        const style = {
            height: this.state.window.height
        };
        return (
            <header id='home' style={style}>
                {this.props.children}
            </header>
        );
    }
});

module.exports = Header;
