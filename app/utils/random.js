'use strict';

var Random = {
    shuffleArray: function (array) {
        function applyFunc(current_index, old_array) {
            if (!current_index) {
                return old_array;
            }

            var random_index = Math.floor(Math.random() * current_index);
            var new_array = JSON.parse(JSON.stringify(old_array));
            var temporary_value = old_array[current_index];
            new_array[current_index] = old_array[random_index];
            new_array[random_index] = temporary_value;
            return applyFunc(current_index - 1, new_array);
        }
        return applyFunc(array.length - 1, array);
    }
};

module.exports = Random;
