/**
 * 字典
 *
 * set(key, value)：向字典中添加新元素。
 * remove(key)：通过使用键值从字典中移除键值对应的数据。
 * hasKey(key)：如果某个键值存在与这个字典中，则返回 true，反之则返回 false。
 * get(key)：通过键值查找特定的数值并返回。
 * clear()：将这个字典中的所有元素删除。
 * size()：返回字典所包含元素的数量。
 * keys()：将字典所包含的所有键名以数组形式返回。
 * values()：将字典所包含的所有数值以数组形式返回。
 * print()：以二维数组形式打印字典。
 */

class Dictionary {
  constructor() {
    this.dict = {}
  }

  set(key, value) {
    if (key !== null && value !== null) {
      this.dict[key] = value
      return true
    }
    return false
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.dict[key]
      return true
    }
    return false
  }

  hasKey(key) {
    return this.dict[key] !== null
  }

  get(key) {
    return this.hasKey(key) ? this.dict[key] : undefined
  }

  clear() {
    this.dict = {}
  }

  size() {
    return Object.keys(this.dict).length
  }

  keys() {
    return Object.keys(this.dict)
  }

  values() {
    return Object.values(this.dict)
  }

  print() {
    console.log(Object.entries(this.dict))
  }
}

module.exports = Dictionary;