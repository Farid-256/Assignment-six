1) What is the difference between var, let, and const?
Ans: var Function-scoped, can be re-declared and updated. Old system.
let: Block-scoped, can be updated but no re-declared in the same scope.
const: Block-scoped, cannot be updated or cannot be re-declared.


2) What is the difference between map(), forEach(), and filter()?
Ans: map(): Transforms each element and returns a new array.
forEach(): Exacutes a function on each element, but dose not return anything.
filter(): Return a new array with elements that pass a condition.


3) What are arrow functions in ES6?
Ans: Arrow functions are a concise way to write function using =>. They don't bind their own this, making them great for callbacks and short logic. Example: const add = (1, 2) => a + b


4) How does destructuring assignment work in ES6?
Ans: Destructuring in ES6 lets I unpack valus form arrays or properties form objects into variable easily.
Example: const [a, b] = [1, 2]


5) Explain template literals in ES6. How are they different from string concatenation?
Ans: Template literals in ES6 use backticks ` and allow embadded exprations with ${}.
Example: const name = 'Md'
console.log(`Hello, ${name}`)