'use strict';

const Random = {
    shuffleArray: function (array) {
        function applyFunc(current_index, old_array) {
            if (!current_index) {
                return old_array;
            }

            const random_index = Math.floor(Math.random() * current_index);
            const new_array = Object.assign([], old_array);
            const temporary_value = old_array[current_index];
            new_array[current_index] = old_array[random_index];
            new_array[random_index] = temporary_value;
            return applyFunc(current_index - 1, new_array);
        }
        return applyFunc(array.length - 1, array);
    }
};

module.exports = Random;
