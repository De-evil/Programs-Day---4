var strings = ["hi manoj", "good morning", "have a nice day"];

var titleCapsArray = strings.map(function(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});

console.log("Here we go:", titleCapsArray);

// output:  [ 'Hi Manoj', 'Good Morning', 'Have A Nice Day' ]

/************ IIFE Function *************/

var strings = ["hi students", "good morning", "have a nice day"];

var titleCapsArray = (function(array) {
    return array.map(function(str) {
        return str.toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    });
})(strings);

console.log("Here we go:", titleCapsArray);

// output:  [ 'Hi Students', 'Good Morning', 'Have A Nice Day' ]
