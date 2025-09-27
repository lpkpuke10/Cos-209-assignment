//Defining Arrow Functions
const greet = () => {
console.log("Hello, welcome to arrow functions!")
}
greet()
const add = (a, b) => {
return a + b
}
console.log("Sum:", add(5, 7))

const multiply = (a, b) => a * b
console.log("Product:", multiply(4, 6))

const square = n => n * n
console.log("Square:", square(5))

const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(num => num * 2)
console.log("Doubled Numbers:", doubled)