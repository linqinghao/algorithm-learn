/**
 * 哈希表
 *
 * put(key, value): 向散列表增加一个新的项。
 * remove(key)：根据键值从散列表中移除值。
 * get(key)：返回根据键值检索到的值。
 * clear()：清空散列表
 * isEmpty()：判断散列表是否包含项。
 * size()：返回散列表包含项的数量。
 * print()：以二维数组形式打印散列表。
 */

class HashTable {
  constructor() {
    this.hashTable = {}
  }
  // 散列函数
  djb2HashCode(key) {
    let hash = 5381
    for (let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013
  }

  hashCode(key) {
    return this.djb2HashCode(key)
  }

  put(key, value) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key)
      this.hashTable[position] = value
      return true
    }
    return false
  }

  get(key) {
    const position = this.hashCode[key]
    return this.hashTable[position] == null
      ? undefined
      : this.hashTable[position]
  }

  remove(key) {
    const position = this.hashCode[key]
    if (this.hashTable[position] != null) {
      delete this.hashTable[position]
      return true
    }
    return false
  }

  clear() {
    this.hashTable = {}
  }

  isEmpty() {
    return Object.keys(this.hashTable).length === 0
  }

  size() {
    return Object.keys(this.hashTable).length
  }

  print() {
    console.log(Object.entries(this.hashTable))
  }
}

module.exports = HashTable