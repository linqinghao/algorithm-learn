const Dictionary = require('./Dictionary')

let dict = new Dictionary()

dict.set('name', 'alin')
dict.set('gender', 'male')
dict.set('nation', 'china')

dict.print() // [ [ 'name', 'alin' ], [ 'gender', 'male' ], [ 'nation', 'china' ] ]
dict.remove('gender')
console.log(dict.hasKey('gender')) // true
console.log(dict.size()) // 2
