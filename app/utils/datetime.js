'use strict';

const moment = require('moment');

const Datetime = {
    getDisplayFromDate: function (datetime) {
        if (datetime === 'Present') {
            return datetime;
        } else if (typeof datetime === 'string') {
            const d = moment(datetime, 'YYYY-MM-DD');
            const date = d.date();
            if (date > 20) {
                return d.add(1, 'months').format('MMM YYYY');
            }
            return d.format('MMM YYYY');
        }
    }
};

module.exports = Datetime;
