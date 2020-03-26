const Stack = require('../Stack')

// test
let stack = new Stack()
console.log(stack.isEmpty()) // Output: true;
stack.push(5)
stack.push(10)
console.log(stack.peek()) // Output: 10
stack.push(11)
console.log(stack.pop()) // Output: 10
stack.size()
stack.print() // Output: 5,10
