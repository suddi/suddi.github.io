'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const ReactModal = require('react-modal');

const config = require('../../config');
const ResumePropTypes = require('../../prop_types/resume');

const Modal = React.createClass({
    propTypes: {
        entry: ResumePropTypes.publications,
        isOpen: PropTypes.bool.isRequired,
        onRequestClose: PropTypes.func.isRequired
    },

    render: function () {
        const parts = this.props.entry.name.split(':');
        const _name = parts[0];
        // const category = parts[1];
        const tools = parts[2];

        const style = {
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
            }
        };

        return (
            <ReactModal className='popup-modal mfp-hide' isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose} style={style}>
                <img className='scale-with-grid' src={config.portfolio.image[_name].modal} alt={_name}/>
                <div className='description-box'>
                    <h5>{_name}</h5>
                    <p>{this.props.entry.summary}</p>
                    <span className='categories'>
                        <i className='fa fa-tag'></i>
                        {tools}
                    </span>
                </div>
                <div className='link-box'>
                    <a href={this.props.entry.website} target='_blank'>Details</a>
                    <a className='popup-modal-dismiss' onClick={this.props.onRequestClose}>Close</a>
                </div>
            </ReactModal>
        );
    }
});

module.exports = Modal;
