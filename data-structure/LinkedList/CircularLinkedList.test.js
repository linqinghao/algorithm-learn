const CircularLinkedList = require('./CircularLinkedList')

let circularLinkList = new CircularLinkedList()

console.log(circularLinkList.removeAt(0)) // false
console.log(circularLinkList.isEmpty()) // true

circularLinkList.append(1)

circularLinkList.append(2)

circularLinkList.append(3)

circularLinkList.print() // 1,2,3

circularLinkList.insert(2, 4)

console.log(circularLinkList.indexOf(4)) // 2

circularLinkList.print() // 1,2,4,3

circularLinkList.clear()

circularLinkList.print()