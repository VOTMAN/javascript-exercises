const sumAll = function(num1, num2) {
    let finalNum = 0;
    if (num1 === Number(num1) && num2 === Number(num2)) {
        if (num1 < 0 || num2 < 0) {
            return "ERROR"
        } else {
            if (num1 < num2) {
                for (num1; num1 <= num2; num1++) {
                    finalNum += num1
                }
            } else {
                for (num2; num2 <= num1; num2++) {
                    finalNum += num2;
                }
            }
            return finalNum;
        }
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
