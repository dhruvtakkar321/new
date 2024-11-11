//  QUES 1)What are objects?
//  Ans1) Objects are a fundamental data type that allow you to store collections of related data and functionality in a key value pair way.
// Characterstics of objects
// a) key-value pairs
// b) can store methoda
// c) Dynamic properties ,i,e we can add , modify or delete any properties at any point of time
// d) properties can be accessed using dot operator

// example 
let car = { brand: "Toyota", model: "Corolla" };
car.year = 2020;
car.model = "Camry";
delete car.brand;
console.log(car)

// QUES 2) what are functions?
//  Functions in JavaScript are reusable blocks of code designed to perform a specific task or set of tasks.
// characterstics of functions 
// a)Reusability
// b) Modularity
// c) Abstraction

// example
function multiply(a, b, c) {
    return a * b * c;
}
console.log(multiply(10, 12, 10));

// QUES 4)What is DOM?
// DOM stands for Document object model whic refers that each and every element present in our program will be treated as object by js and it helps js to interact with structure of program i.e html and style sheet ie CSS dynamically.


// QUES 5) Difference between undefined vs not defined vs NAN
//Undefined is a value automatically assigned to variables that have been declared but not yet assigned a value.
// example 
var a;
console.log(a)

// not defined is an error that occurs when we  try to access a variable that has not been declared.

example 
console.log(b);

// NaN is a value that represents an invalid number. This condition occur when we perform certain operation but that output does not yield a number as a output
// example
let c = "string" - 2;
console.log(c); 

// QUES 6) What are arrow functions?
// Arrow functions is a more cocncise syntax to write a function i.e traditional. It works exactly similar to that of traditional functions but only differentiate in syntax and some key feature.
// key features of arrow functions
// a) concise syntax
// b) implicit return
// c) lexical scoping

const mul = (a, b, c) => { a * b * c }
console.log(mul(2, 3, 4));


// QUES 7)What is for-in-loop? give its syntax.
// for in loop is basically used to iterate over the objects . so that we can perform the similar taks on the properties of objects in a one command.
// syntax
// for (var key in obj) {

// }
let person = {
    name: "Dhruv",
    age: 21,
    profession: "Engineer"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}


// QUES 8)explain local scope block scope, functional scope and scope chain 
// Local scope- Local scope refers to variables that are accessible only within a specific function.
// example
function myFunction() {
    let localVar = "I am local";
    console.log(localVar);
}
myFunction();
// console.log(localVar);  this line will throw error due to local scope of variable localVar

// Block scope- Block scope refers to variables that are accessible only within the block (pair of curly braces) where they are declared.
// example
if (true) {
    let blockScopedVar = "I am block scoped";
    console.log(blockScopedVar); // Output: I am block scoped
}
// console.log(blockScopedVar); // error because blockscopedVar is block scope variable

// functional scope- Functional scope is the another name for local scope that means variable declared in a function can not be accessed outside it.
function myFunction() {
    let localVar = "I am local";
    console.log(localVar);
}
myFunction();
// console.log(localVar); error due to functional scope of localVar variable

// QUES 9) what is the difference between null and undefined
//Undefined - Undefined is a value automatically assigned to variables that have been declared but not yet assigned a value.
// example 
var a;
console.log(a)

// null - null is a primitive value that represents the absence of any object value
// example
var a=null;
console.log(a);

// where to use null and undefined?
//Use undefined:

// When variables are declared but not yet initialized.

// When accessing non-existent object properties.

// Use null:

// To explicitly indicate an absence of value.

// QUES 10) write code to explain map and filter method of array
// map method 
// A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array
var arr=[1,2,3,4,5]
var new_arr=arr.map(num=(num)=>num*num)
console.log(new_arr);

// filter method
//A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); 

// ques11)
var zero_Count=0;
var one_Count=0;
var arr=[0,1,0,0,0,1,0,1,0,1,1,0]
for (const num of arr) {
    if(num==0){
        zero_Count++;
    }
    else{
        one_Count++;
    }
    
}
console.log("Number of zeros in a given array is :" + " ",zero_Count);
console.log("Number of ones in a given array is :" + " ",one_Count);

// ques 12) Find out total number of even and odd count
arr = [1,2,3,4,5,6,7,8,9,10]
let evenCount = 0;
let oddCount = 0;
for (const num of arr) {
    if(num%2===0)
        evenCount++;
    else
    oddCount++;

}
console.log(evenCount);
console.log(oddCount);

// ques 13 
// program to count vowels in a given string
var Str = "My nAme Is Dhruv TAkkAr"
var arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
var count = 0;
for (i = 0; i < Str.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (Str[i] == arr[j]) {
            console.log(Str[i]);
count++;
        }
    }
}
console.log("Number of vowels in a given string is :" + " ",count);

