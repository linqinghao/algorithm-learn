/**
 * 集合
 *
 *
 * add(element)： 向集合添加一个新的项。
 * remove(element)：从集合中移除一个值。
 * has(element)：如果值在集合中，返回 true，否则返回 false。
 * clear()：移除集合中的所有项。
 * size()：返回集合所包含元素的数量。
 * isEmpty(): 判断集合是否包含元素。
 * values()：返回一个包含集合中所有值的数组。
 * print()：打印集合中的所有项。
 */

class Set {
  constructor() {
    this.items = {}
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  remove(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items)
  }

  isEmpty() {
    return this.size() === 0
  }

  values() {
    return Object.values(this.items)
  }

  print() {
    console.log(this.values().join(','))
  }

  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }

  intersection(otherSet) {
    const intersectionSet = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }

  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) return false
    let isSubset = true
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}

module.exports = Set