const DoublyLinkedList = require('./DoublyLinkedList')

let doublyLinkedList = new DoublyLinkedList()

console.log(doublyLinkedList.isEmpty())
doublyLinkedList.append(1)
doublyLinkedList.append(2)
doublyLinkedList.append(3)
console.log(doublyLinkedList.size())

doublyLinkedList.insert(1, 4)

doublyLinkedList.print()

doublyLinkedList.remove(2)

doublyLinkedList.print()

doublyLinkedList.getHead()
