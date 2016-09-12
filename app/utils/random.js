'use strict';

const Random = {
    shuffleArray: function (array) {
        var current = array.length;
        while (current !== 0) {
            const random = Math.floor(Math.random() * current);
            current -= 1;
            const temporary = array[current];
            array[current] = array[random];
            array[random] = temporary;
        }
        return array;
    }
};

module.exports = Random;
