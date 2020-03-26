const Queue = require('./Queue')

let queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(4)

console.log(queue.dequeue())

queue.enqueue(5)

console.log(queue.front())
console.log(queue.back())

queue.print()