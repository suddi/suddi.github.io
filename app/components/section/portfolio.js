'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var config = require('../../config');
var ResumePropTypes = require('../../prop_types/resume');
var Random = require('../../utils/random');
var Modal = require('./modal');

var Entry = React.createClass({
    propTypes: {
        index: PropTypes.number.isRequired,
        entry: ResumePropTypes.publications
    },

    getInitialState: function () {
        return {
            modalOpen: false
        };
    },

    handleOpenModal: function () {
        return this.setState({
            modalOpen: true
        });
    },

    handleCloseModal: function () {
        return this.setState({
            modalOpen: false
        });
    },

    render: function () {
        var parts = this.props.entry.name.split(':');
        var _name = parts[0];
        var category = parts[1];
        // var tools = parts[2];
        // config.portfolio.image[_name].src

        return (
            <div className='columns portfolio-item'>
                <div className='item-wrap' onClick={this.handleOpenModal}>
                    <img src={config.portfolio.image[_name].thumb} alt={_name}/>
                    <div className='overlay'>
                        <div className='portfolio-item-meta'>
                            <h5>{_name}</h5>
                            <p>{category}</p>
                        </div>
                    </div>
                    <div className='link-icon'>
                        <i className='icon-down-open'></i>
                    </div>
                </div>
                <Modal entry={this.props.entry} isOpen={this.state.modalOpen} onRequestClose={this.handleCloseModal}/>
            </div>
        );
    }
});

var Portfolio = React.createClass({
    propTypes: {
        content: ResumePropTypes.publications_set
    },

    render: function () {
        var portfolio = Random.shuffleArray(this.props.content).slice(0, 8);
        return (
            <section id='portfolio'>
                <div className='row'>
                    <div className='twelve columns collapsed'>
                        <h1>Portfolio</h1>
                        <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                            {portfolio.map(function (entry, index) {
                                return (
                                    <Entry key={index} index={index} entry={entry}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Portfolio;
