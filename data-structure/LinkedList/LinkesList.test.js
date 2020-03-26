const LinkedList = require('./LinkedList')

let linkList = new LinkedList()

console.log(linkList.removeAt(0)) // false
console.log(linkList.isEmpty()) // true

linkList.append('Alin')

linkList.append('Banana')

linkList.append('Coral')

linkList.print() // Alin,Banana,Coral

linkList.insert(1, 'Zoz')

linkList.print() // Alin,Zoz,Banana,Coral

linkList.clear()

linkList.print()
