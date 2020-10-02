const emptyArray = [];

exports.min = function min (array) {
    if (array && array.length) {
        return Math.min.apply(Math, array);
    } else {
        return 0;
    };
};

exports.max = function max (array) {
    if (array && array.length) {
        return Math.max.apply(Math, array);
    } else {
        return 0;
    };
};

exports.avg = function avg (array) {
    let sum = 0;
    if (array && array.length) {
        for (i = 0; i < array.length; i++) {
            sum = sum + array[i];
        };
    } else {
        return 0;
    };
    let average = sum / array.length;
    return average;
};
