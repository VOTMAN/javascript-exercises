const removeFromArray = function(arr, ...num) {
    let newArr = []
    for (item of arr) {
        if (!num.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
