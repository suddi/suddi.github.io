'use strict';

var React = require('react');

var Carousel = require('nuka-carousel');

var ResumePropTypes = require('../../prop_types/resume');

var Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.references
    },

    render: function () {
        var parts = this.props.entry.name.split(':');
        var _name = parts[0];
        var position = parts[1];
        var company = parts[2];

        return (
            <div>
                <blockquote>
                    <p>{this.props.entry.reference}</p>
                    <cite>
                        {_name}
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {position + ', ' + company}
                    </cite>
                </blockquote>
            </div>
        );
    }
});

var References = React.createClass({
    propTypes: {
        content: ResumePropTypes.references_set
    },

    render: function () {
        var carousel_config = {
            autoplay: true,
            decorators: [],
            framePadding: '10px',
            cellSpacing: 30,
            wrapAround: true
        };
        return (
            <section id='testimonials'>
                <div className='text-container'>
                    <div className='row'>
                        <div className='two columns header-col'>
                            <h1>
                                <span>References</span>
                            </h1>
                        </div>
                        <div className='ten columns flex-container'>
                            <div className='flexslider'>
                                <Carousel
                                    autoplay={carousel_config.autoplay}
                                    decorators={carousel_config.decorators}
                                    wrapAround={carousel_config.wrapAround}>
                                    {this.props.content.map(function (entry, index) {
                                        return (
                                            <Entry key={index} entry={entry}/>
                                        );
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = References;
