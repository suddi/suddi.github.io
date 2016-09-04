'use strict';

const React = require('react');

const ResumePropTypes = require('../prop_types/resume');

const Contact = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics
    },

    render: function () {
        return (
            <div id='contact-info' className='vcard'>
                <h1 className='fn'>{this.props.basics.name}</h1>
                <p>
                    Cell: <a className='tel' href={'skype:' + this.props.basics.phone}>{this.props.basics.phone}</a>
                    <br/>
                    Email: <a className='email' href={'mailto:' + this.props.basics.email}>{this.props.basics.email}</a>
                </p>
            </div>
        );
    }
});

module.exports = Contact;
