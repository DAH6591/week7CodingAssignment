/* 1: a) Create an array called ages that contains the following values:
 3, 9, 23, 64, 2, 8, 28, 93.
b) Programmatically subtract the value of the first element in the array from the value
 in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
c) Add a new age to your array and repeat the step above to ensure it is dynamic.
 (works for arrays of different lengths).
d) Use a loop to iterate through the array and calculate the average age. */

// a)
const ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages)
// b)
console.log(ages[ages.length - 1] - ages[0])
// c)
console.log(ages.push(21), ages)
console.log(ages[ages.length - 1] - ages[0])
// d)
let sum = 0;
let avg;
for (let age of ages) {
    sum += age
}
avg = sum / ages.length
console.log(avg)

/*2: a) Create an array called names that contains the following values:
 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
b) Use a loop to iterate through the array and calculate
 the average number of letters per name.
c) Use a loop to iterate through the array again and concatenate
 all the names together, separated by spaces.  */
// a)
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
// b)
let totalNumberOfLetters = 0
let averageNumberOfLetters
for (let name of names) {
    totalNumberOfLetters += name.length
}
averageNumberOfLetters = totalNumberOfLetters / names.length
console.log(totalNumberOfLetters, averageNumberOfLetters)
// c)
let concatNames = ''
for (let name of names) {
    concatNames += name + ' '
}
console.log(concatNames)
console.log(names)
//Another way to concat all the names together is to use the join method but inside the loop,
//  have to push names into a new array and then use join to concat them
//The join method operates on the ENTIRE ARRAY, it doesn't work within the loop directly.
/* let concatNames2 = []
let result = ''
for (let name of names) {
    concatNames2.push(name)
    result = concatNames2.join(" ")
}
console.log(concatNames2, result) */

/* 3: How do you access the last element of any array?  */
//Example:
const example = [2, 3, 4, 5, 6]
console.log(example[example.length-1])

//4: How do you access the first element of any array?
const example2 = [7, 8, 9, 10, 11]
console.log(example2[0])

/* 5: Create a new array called nameLengths. Write a loop to iterate over the previously created
 names array and add the length of each name to the nameLengths array.
For example:
let names = ["Kelly", "Sam", "Kate"];   starting with this array
let nameLengths = [5, 3, 4];            create a new array */

const names2 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']   
let name2Lengths = []

for(let name2 of names2) {
 name2Lengths.push(name2.length)
}
console.log(name2Lengths)

//6: Write a loop to iterate over the nameLengths array and calculate
//  the sum of all the elements in the array.
let sum2 = 0
for (sumLength of name2Lengths) {
    sum2 += sumLength
}
console.log(sum2)

//7: Write a function that takes two parameters, word and n, as arguments and returns
//  the word concatenated to itself n number of times.
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
//name + ' '
const concatRepeat = (word, n) => word.repeat(n)
console.log(concatRepeat('Hello', 3))

//Code below is how to do Question 7 but adding a space between the repeating string
/* const concatRepeat = (word, n) => Array(n).fill(word).join(' ');
console.log(concatRepeat('Hello', 3)) */

//8: Write a function that takes two parameters, firstName and lastName, and returns
//  a full name.The full name should be the first and the last name separated by a space.
const fullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(fullName('Dora', 'Smith'))

//9: Write a function that takes an array of numbers and returns true
// if the sum of all the numbers in the array is greater than 100.

const greaterThan100 = (array) => {
    let total = 0
    for(let num of array) {
        total += num
    }
    if(total > 100) {
        return true
    }
    else {
        return false
    }
}
console.log(greaterThan100([25, 50, 10]))

/* This code uses reduce to sum values in a numbers array:
 const greaterThan100 = array => array.reduce((acc, val) => acc + val, 0)
console.log(greaterThan100([25, 50, 25])) */

/* 10: Write a function that takes an array of numbers and returns
 the average of all the elements in the array. */

const avgArray = (numArray) => {
    let sumArray = 0
    let avg
    for(let numA of numArray) {
        sumArray += numA
    }
    return avg = sumArray / numArray.length
}
console.log(avgArray([2, 4, 6, 8]))

// 11: Write a function that takes two arrays of numbers and returns
//  true if the average of the elements in the first array
// is greater than the average of the elements in the second array.

const greaterThan = (arrayA, arrayB) => {
    let sumArrayA = 0
    let sumArrayB = 0
    let avgarrayA
    let avgArrayB
   for(let numA of arrayA){
        sumArrayA += numA
    }
    avgarrayA = sumArrayA / arrayA.length
    console.log(avgarrayA)
    
    for (let numB of arrayB){
        sumArrayB += numB
    }
    avgArrayB = sumArrayB / arrayB.length
    console.log(avgArrayB)
    
    if(avgarrayA > avgArrayB) {
        return true
    }
    else {
        return false
    }
 }
 console.log(greaterThan([2,3,4], [5,6,7]),)

// 12: Write a function called willBuyDrink that takes a boolean isHotOutside,
//  and a number moneyInPocket, and returns true
//  if it is hot outside and if moneyInPocket is greater than 10.50. 
const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside && moneyInPocket > 10.50
console.log(willBuyDrink(true, 9.50))
