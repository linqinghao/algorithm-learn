const HashTable = require('./HashTable')

let hashTable = new HashTable()

hashTable.put('name', 'alin')
hashTable.put('nation', 'china')

hashTable.print() // [ [ '61', 'alin' ], [ '944', 'china' ] ]

hashTable.remove('nation')
console.log(hashTable.get('nation')) // undefined
