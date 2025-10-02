// ============================================
// CSC 111 – Introduction to Computing
// Assignment: Sequences, Selections, Loops
// Student Name: Obinna Amadi
// Programming Buddy: Trenton Ashford, Milca
// Z Number: Z00040959
// Date: 2025-10-01
// Instructor: Prof. Felicity M. Weed Jackson
// File Name: grouphw.js
// ============================================

/* Description:
This program demonstrates sequences, selections, and loops using
a student grade calculator. It uses variables, if/else statements,
and for/while loops.
*/

/* How it works:
First, it calculates a student's average grade (sequence).
Then, it determines the letter grade using conditionals (selection).
Finally, it prints a pattern and countdown using loops.
*/

/* Reflection:
[Write YOUR OWN 2-3 sentences about what YOU learned, what was
challenging for YOU, or what YOU found interesting. This must be
different from your buddy's reflection.]
*/
// ============================================

// 1. SEQUENCE
console.log("1. SEQUENCE EXAMPLE");
let grades = [84, 76, 92, 82, 86];
let sum = 0;

for (let i = 0; i < grades.length; i++){
    sum += grades[i];
}
let average = sum / grades.length;
    
// 2. SELECTION - Decision making with if/else
console.log("2. SELECTION EXAMPLE");
let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log(`Letter Grade: ${grade}\n`);



