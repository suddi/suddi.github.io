'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const Random = require('../../utils/random');
const Modal = require('./modal');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.projects
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
        return (
            <div className='columns portfolio-item'>
                <div className='item-wrap' onClick={this.handleOpenModal}>
                    <img
                        src={this.props.entry.image.thumb}
                        alt={this.props.entry.name}/>
                    <div className='overlay'>
                        <div className='portfolio-item-meta'>
                            <h5>{this.props.entry.name}</h5>
                            <p>{this.props.entry.category}</p>
                        </div>
                    </div>
                    <div className='link-icon'>
                        <i className='icon-down-open'/>
                    </div>
                </div>
                <Modal entry={this.props.entry} isOpen={this.state.modalOpen} onRequestClose={this.handleCloseModal}/>
            </div>
        );
    }
});

const Portfolio = React.createClass({
    propTypes: {
        content: ResumePropTypes.projectsSet
    },

    render: function () {
        const portfolio = Random.shuffleArray(this.props.content).slice(0, 8);
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
