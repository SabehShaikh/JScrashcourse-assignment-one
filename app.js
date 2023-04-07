// 1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

let num1 = +prompt("Enter number one");
let num2 = +prompt("Enter number two");

if (num1 > num2) {
    console.log("Number one is a larger number");
} else if (num2 > num1) {
    console.log("Number two is a larger number");
} else {
    console.log("Both numbers are equal");
}

// 2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

let num = +prompt("Enter a number");

if (num > 0) {
    alert("The sign of a number is positive");
} else if (num < 0) {
    alert("The sign of a number is negative");
}

// 3. Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

let num01 = +prompt("Enter number one");
let num02 = +prompt("Enter number two");
let num03 = +prompt("Enter number three");
let num04 = +prompt("Enter number four");
let num05 = +prompt("Enter number five");

let largestNum = Math.max(num01, num02, num03, num04, num05);

console.log("The Largest number is: " + largestNum);

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even,
// and display a message to the screen.Sample Output: "0 is even""1 is odd" "2 is even"

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd")
    }
}

//6. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print  "Fizz" instead of the number
// and for the multiples of five print "Buzz".For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}


// 5. Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the 
// corresponding grade.The grades are computed as follows : Range Grade < 60 F < 70 D < 80 C < 90 B < 100 A

let obtainedMarks = +prompt("Enter your Marks (1-100)")
let totalMarks = +prompt("Enter your Total Marks (1-100)")
let averageMarks = (obtainedMarks / totalMarks) * 100;

if (averageMarks >= 90) {
    console.log("Congratulations You got A");
} else if (averageMarks >= 80) {
    console.log("Congratulations You got B");
} else if (averageMarks >= 70) {
    console.log("Congratulations You got C");
} else if (averageMarks >= 60) {
    console.log("Congratulations You got D");
} else if (averageMarks >= 50) {
    console.log("You Got F");
} else {
    console.log("Better luck next time");
}

// 7. Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let dot = "";

    for (let j = 1; j <= i; j++) {
        dot = dot + '*';
    }

    console.log(dot);
}


