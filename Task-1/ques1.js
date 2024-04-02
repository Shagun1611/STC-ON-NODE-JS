//Q1. Starting with an array of numbers, Arr1 = [10, 20, 30, 40, 50], 
//generate a new array by adding the value 60 to the end of the existing array, 
//utilizing the spread operator. The expected output should be [10, 20, 30, 40, 50, 60].

const Arr1 = [10, 20, 30, 40, 50];
console.log("Original Array");
console.log(Arr1);

const newArray = [...Arr1, 60];

console.log("New Array");
console.log(newArray);
