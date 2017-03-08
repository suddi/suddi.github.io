'use strict';

const moment = require('moment');

const Datetime = {
    getDisplayFromDate: function (datetime) {
        if (datetime === 'Present') {
            return datetime;
        }

        const applyFunc = function (dt) {
            const d = moment(dt, 'YYYY-MM-DD');
            const date = d.date();
            if (date > 20) {
                return d.add(1, 'months').format('MMM YYYY');
            }
            return d.format('MMM YYYY');
        };
        const value = applyFunc(datetime);
        return value === 'Invalid date' ? datetime : value;
    }
};

module.exports = Datetime;
