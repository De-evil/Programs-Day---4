/************** Anonymous Function **************/

var isPalindrome = function(input) {
    var str = String(input).toLowerCase().replace(/[^a-z0-9]/g, ''); 
    return str === str.split('').reverse().join('');
};
var findPalindromes = function(array) {
    return array.filter(function(item) {
        return isPalindrome(item);
    });
};

var mixedArray = ["Mom", 12321, "level", "Dad", 1331, "sister", 12345];

var palindromes = findPalindromes(mixedArray);

console.log("Palindromes:", palindromes);

// Output: [ 'Mom', 12321, 'level', 'Dad', 1331 ]


/*********** IIFE Function  *************/

var isPalindrome = (function() {
    return function(input) {
        var str = String(input).toLowerCase().replace(/[^a-z0-9]/g, ''); 
        return str === str.split('').reverse().join('');
    };
})();

var findPalindromes = (function() {
    return function(array) {
        return array.filter(function(item) {
            return isPalindrome(item);
        });
    };
})();

var mixedArray = ["Malayam", 2143, "level", "Noon", 1331, "Deed", 43124];

var palindromes = findPalindromes(mixedArray);

console.log("Palindromes:", palindromes);

// Output: [ 'level', 'Noon', 1331, 'Deed' ]
