// ### Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// **Input:**
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// **Output:**
// Print the result in 2 decimal places.


// **Sample Input:**
// 75.25, 65, 80, 35.45, 99.50

// **Sample Output:**
// 71.04

let Mathematics = 75.25;
let Biology = 65;
let Chemistry = 80;
let Physics = 35.45;
let Bangla = 99.50;

let total = Mathematics + Biology + Chemistry + Physics + Bangla;
let average = total / 5;

console.log(average.toFixed(2));
