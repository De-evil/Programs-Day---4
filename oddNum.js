// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array 


// IIFE Function

(function(array){ 
    for(var i = 0; i< array.length; i++){
        // Iterate the array to find odd numbers
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4,5]) // output: 1, 3


// Anonymous Function

var numbers = [1, 2, 3, 4, 5, 6, 7]; // Array of Numbers

var oddNumbers = [];  // An empty array to store odd numbers
for( var i= 0; i< numbers.length; i++ ) {
    // Using for loop to iterate the array
        if (function(number) { 
            return number %2 != 0;
        }            (numbers[i])) {
                    oddNumbers.push(numbers[i]);
            }
}

console.log(oddNumbers); // output: 1, 3, 5, 7
