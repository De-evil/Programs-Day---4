// ------------------ Anonymous Function -----------------------//

var isPrime = function(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};

var findPrimeNumbers = function(array) {
    return array.filter(function(num) {
        return isPrime(num);
    });
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers = findPrimeNumbers(numbers);
console.log("Prime numbers:", primeNumbers);
// Output : [2, 3, 5, 7]

// -------------------- IIFE Function ------------------------//


var isPrime = (function() {
    return function(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (var i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    };
})();

var findPrimeNumbers = (function() {
    return function(array) {
        var primeNumbers = [];
        for (var i = 0; i < array.length; i++) {
            if (isPrime(array[i])) {
                primeNumbers.push(array[i]);
            }
        }
        return primeNumbers;
    };
})();


var numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var primeNumbers = findPrimeNumbers(numbers);
console.log("Prime numbers:", primeNumbers);

// Output: [11, 13, 17, 19]
