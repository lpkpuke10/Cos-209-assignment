//Defining Destructuring
const nums = [1, 2, 3, 4, 5]

console.log("forEach:")
nums.forEach(n => console.log(n))

console.log("map:")
let doubled = nums.map(n => n * 2)
console.log(doubled)

console.log("filter:")
let even = nums.filter(n => n % 2 === 0)
console.log(even)

console.log("reduce:")
let sum = nums.reduce((acc, n) => acc + n, 0)
console.log(sum)