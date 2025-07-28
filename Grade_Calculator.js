/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const Marks = 82;
let Grade = '';

if (Marks >= 90 && Marks <= 100) {
    Grade = 'A';
} else if (Marks >= 80 && Marks <= 89) {
    Grade = 'B';
} else if (Marks >= 70 && Marks <= 79) {
    Grade = 'C';
} else if (Marks >= 60 && Marks <= 69) {
    Grade = 'D';
} else if (Marks >= 0 && Marks <= 59) {
    Grade = 'F';
} else {
    Grade = 'Invalid Marks';
}

console.log(`Your Grade is: ${Grade}`);
