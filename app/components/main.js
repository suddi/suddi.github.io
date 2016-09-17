'use strict';

const React = require('react');
const PropTypes = React.PropTypes;
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Main = React.createClass({
    propTypes: {
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired
        }).isRequired
    },

    render: function () {
        return (
            <div className='main-container'>
                <ReactCSSTransitionGroup transitionName='appear' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = Main;
