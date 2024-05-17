// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3,9,23,64,2,8,28,93]

//  Programmatically subtract the value of the first 
// element in the array from the value in the last element of the array.

let lastAge = ages[ages.length -1]
let firstAge = ages[0]
let ageDifference = lastAge - firstAge;
console.log ('The difference between the first and last age is ' + ageDifference);

// Add a new age to your array
//repeat the step above to ensure it is dynamic
ages.push(70);
lastAge = ages[ages.length-1];
ageDifference = lastAge - firstAge;
console.log ("The difference in the new last age and the first age is " +ageDifference);

// Use a loop to iterate through the array and calculate the average age.
let sumAges = 0;
for (let i =0; i<ages.length; i++){
    sumAges += ages[i]
}
let averageAge = sumAges / ages.length;
console.log ('The average age is ' + averageAge)
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
// Use a loop to iterate through the array and calculate the average number of letters per name.
let letters = 0;
for (i=0; i < names.length; i++) {
    letters += names[i].length;
}
let averageLetters = letters / names.length;
console.log ('The average number of letters per name is ' + averageLetters)
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let concatenatedNames = "";
for (i=0; i < names.length; i++) {
    concatenatedNames += names[i];
    if (i < names.length - 1) {
        concatenatedNames += ' '; //Adds space
    }
}
//can kind of be done with let concatenatedNames = names.concat()
console.log (concatenatedNames)

// How do you access the last element of any array?
console.log ('You can access the last element of an array by using array[array.length -1]')

// How do you access the first element of any array?
console.log ('You can access the first element of an array by using array[0]')

// Create a new array called nameLengths. Write a loop to iterate over the previously
// created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

let namesLength = []
for (i=0; i < names.length; i++) {
    namesLength.push(names[i].length)
}
console.log(namesLength)


// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sumNameLengths = 0;
for (i=0; i < namesLength.length; i++) {
    sumNameLengths += namesLength[i]
}
console.log('The sum of all elements in nameLength is ' +sumNameLengths)

// Write a function that takes two parameters, word and n, as arguments and
// returns the word concatenated to itself n number of times.
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
let concatFunction = (word, n) =>{
    let result= "";
    for (i=0; i < n; i++){
        result += word;
    }
    return result;
}
console.log(concatFunction('Hello', 5))
// Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.
let fullName = (firstName, lastName) => firstName + ' ' + lastName;
console.log (fullName('Ethan', 'Bushman'))
// Write a function that takes an array of numbers and
// returns true if the sum of all the numbers in the array is greater than 100.
let greaterThanHundred = (a) => a >100
   

console.log ('109 is greater than one hundred: ' + greaterThanHundred(109))
console.log('15 is greater than one hundred: ' + greaterThanHundred(15))
// Write a function that takes an array of numbers and returns the average of all the elements in the array.

let returnAverage = (array) => {
    let sumArray= 0;
    for (let i = 0; i < array.length; i++){
        sumArray += array[i];
    }
    return sumArray / array.length;
}
let myNumbers = [1, 4, 5, 6, 33, 4]
console.log('The average of the array is ' + returnAverage(myNumbers))
// Write a function that takes two arrays of numbers and returns true
// if the average of the elements in the first array is greater than the average of the elements in the second array.

let returnAverageSize = (array1, array2) => {
    let sumArray= 0;
    for (let i = 0; i < array1.length; i++){
        sumArray += array1[i];
        arrayOneAvg= (sumArray / array1.length);
    }
    let sumArrayTwo= 0;
    for (let i = 0; i < array2.length; i++){
        sumArrayTwo += array2[i];
        arrayTwoAvg= (sumArrayTwo / array2.length);
    }
 return arrayTwoAvg < arrayOneAvg

}
let myNumbersTwo = [1,2,2,3,2,5]
console.log('The average of array one is larger than the average of array two: ' + returnAverageSize(myNumbers,myNumbersTwo))

// Write a function called willBuyDrink that takes a boolean isHotOutside,
// and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside = true && moneyInPocket > 10.50
console.log ('I can buy a drink because it is hot outside and I have more than 10.50: ' + willBuyDrink(true, 120))
console.log ('I can buy a drink because it is cold outside and I have less than 10.50: ' + willBuyDrink(false, 10))
// Create a function of your own that solves a problem. In the comments,
// write what the function does and why you created it.
let avgTwoArrays = (array1,array2) => {   let sumArray= 0;
    for (let i = 0; i < array1.length; i++){
        sumArray += array1[i];
        arrayOneAvg= (sumArray / array1.length);
    }
    let sumArrayTwo= 0;
    for (let i = 0; i < array2.length; i++){
        sumArrayTwo += array2[i];
        arrayTwoAvg= (sumArrayTwo / array2.length);
    }
 return arrayTwoAvg * arrayOneAvg

}

console.log('The average of both arrays is ' +  avgTwoArrays(myNumbers, myNumbersTwo))
//My function finds the average of the averages of two seperate arrays.