// Part 1: JavaScript Basics
// Variables and Data Types
let name = "John Doe"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let hobbies = ["Coding", "Reading", "Traveling"]; // Array
let user = { name: "John Doe", age: 25 }; // Object

// Log variables and their types
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Operators: Calculator Function
function calculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operation = prompt("Choose an operation (+, -, *, /):");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Division by zero is not allowed!");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation selected!");
      return;
  }

  alert(`Result: ${result}`);
}
calculator();

// Functions: Greet User
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript learning.`;
}
const greetingMessage = greetUser("Jane Doe");
document.getElementById("greeting").innerText = greetingMessage;

// Part 2: JavaScript Control Structures
// If Statements: Voting Eligibility
const userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) {
  document.getElementById("voting-message").innerText =
    "You are eligible to vote!";
} else {
  document.getElementById("voting-message").innerText =
    "You are not eligible to vote yet.";
}

// Loops: Display Numbers 1 to 10
const numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement("li");
  listItem.innerText = i;
  numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM
// Change <h1> Text
document.querySelector("h1").innerText = "JavaScript in Action!";

// Add New Content Dynamically
const dynamicContent = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.innerText = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);
