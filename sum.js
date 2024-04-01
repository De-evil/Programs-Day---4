// Do the below programs in anonymous function & IIFE
// Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += function(number) {
        return number;
    }(numbers[i]);
}

console.log("Sum of all numbers:", sum); 

// Output the sum:  55

var numbers = [1, 2, 3, 4, 5];


var sum = (function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
})(numbers);

// Output the sum
console.log("Sum of all numbers:", sum); 

// Output the sum: 15

