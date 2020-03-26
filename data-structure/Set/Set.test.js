const Set = require('./Set')

const set = new Set()

set.add(1)
set.add(2)
set.add(3)
set.add(4)

console.log(set.has(1)) // true
set.print() // 1,2,3,4
set.remove(2)
set.print() // 1,3,4

const otherSet = new Set()
otherSet.add(5)
otherSet.add(7)
otherSet.add(8)
otherSet.add(1)
otherSet.add(2)

otherSet.union(set).print() // 1,2,3,4,5,7,8
otherSet.intersection(set).print() // 1
otherSet.difference(set).print() // 2,5,7,8
console.log(otherSet.isSubsetOf(set)) // false
