/***************** Arrow function ******************/

// A)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = (arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }                                   
    });
};

printOddNumbers(numbers);

// B)

const strings = ["hi gokul ", "good morning", "how are you ?"];

const toTitleCase = str => str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

const convertToTitleCaps = arr => arr.map(toTitleCase);

const titleCapsArray = convertToTitleCaps(strings);

console.log("Title Caps Array:", titleCapsArray);

// Output: [ 'Hi Gokul ', 'Good Morning', 'How Are You ?' ]

// C) 

const Numbers = [1, 2, 3, 4, 5, 10];

const sumOfNumbers = arr => arr.reduce((acc, num) => acc + num, 0);

const totalSum = sumOfNumbers(Numbers);

console.log("Sum of total:", totalSum);

// output:   25

// D)


const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};

const findPrimeNumbers = arr => arr.filter(num => isPrime(num));

const Prime_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = findPrimeNumbers(Prime_Numbers);

console.log("Prime numbers:", primeNumbers);

// output: [ 2, 3, 5, 7 ]

// E)

const isPalindrome = input => {
    const str = String(input).toLowerCase().replace(/[^a-z0-9]/g, ''); 
    return str === str.split('').reverse().join('');
};


const findPalindromes = arr => arr.filter(item => isPalindrome(item));

const mixedArray = ["Mom", 12321, "level", "Dad", 1331, "sister", 12345];

const palindromes = findPalindromes(mixedArray);

console.log("Palindromes:", palindromes);

// output: [ 'Mom', 12321, 'level', 'Dad', 1331 ]





