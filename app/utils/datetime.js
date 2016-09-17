'use strict';

var moment = require('moment');

var Datetime = {
    getDisplayFromDate: function (datetime) {
        var applyFunc = function () {
            var d = moment(datetime, 'YYYY-MM-DD');
            var date = d.date();
            if (date > 20) {
                return d.add(1, 'months').format('MMM YYYY');
            }
            return d.format('MMM YYYY');
        };
        return datetime === 'Present' ? datetime : applyFunc();
    }
};

module.exports = Datetime;
