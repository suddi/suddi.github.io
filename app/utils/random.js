'use strict';

const Random = {
    shuffleArray: function (array) {
        function applyFunc(currentIndex, oldArray) {
            if (!currentIndex) {
                return oldArray;
            }

            const randomIndex = Math.floor(Math.random() * currentIndex);
            const newArray = JSON.parse(JSON.stringify(oldArray));
            const temporaryValue = oldArray[currentIndex];
            newArray[currentIndex] = oldArray[randomIndex];
            newArray[randomIndex] = temporaryValue;
            return applyFunc(currentIndex - 1, newArray);
        }
        return applyFunc(array.length - 1, array);
    }
};

module.exports = Random;
