// Standart declaration
function celsiusToFahrenheit(c = 0) {
    return (c * 9/5) + 32;
}

// Using Arrow function
const temp = (c = 0) => (c * 9/5) + 32;

// Using templates
const introduce = (name, age) => `Hi, Im ${name} and Im ${age} years old.`

console.log(celsiusToFahrenheit(25));
console.log(temp());
console.log(introduce('Alice', 30))

//EX 1 Type Checker

const getType = (value) => {
    if (value === null) return "null"
    return typeof(value)
}

console.log(getType(null))

// Exercise 2 — Temperature converter both ways
// Formula for F→C: (f - 32) × 5/9

const convert = (value, type) =>{
    if (type === 'C' || type === 'c') return (value * 9/5) + 32 + ' (Celsius to Fahrenheit)';
    if (type === 'F' || type === 'f') return (value - 32) * 5 / 9 + ' (Fahrenheit to Celsius)';
    return 'Not a temperature value'
}

console.log(convert(5,'d'))

// Exercise 3 — Greeting factory

const makeGreeter = (greeting) => {
    return (name) => `${greeting}, ${name}!`;
}

const sayHello = makeGreeter("Hello");
const sayHey = makeGreeter("Hey");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayHey("Bob"));     // "Hey, Bob!"

//Exercise 4 — Fix the bugs
console.log('***');

const fullName = (first, last) => {
  return `${first} ${last}`
}

let greeting = "Hello";
greeting = "Hi";

const isAdult = (age) => age > 18;

console.log(fullName('first', 'last'));
console.log(greeting);
console.log(isAdult(18));

// Exercise 5 — BMI calculator
// Ranges: under 18.5 = Underweight, 18.5–24.9 = Normal weight, 25+ = Overweight

console.log('***');

const bmi = (weight, height) => {
    const result = weight/(height * height);
    if (result < 18.5) return 'Underweight';
    if (result >= 25) return 'Overweight';
    return 'Normal weight'
}

console.log(bmi(60,1.8))