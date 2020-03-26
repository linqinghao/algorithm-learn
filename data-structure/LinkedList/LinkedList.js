/**
 * 单链表
 *
 * append(element)：尾部添加元素。
 * insert(position, element)：特定位置插入一个新的项。
 * getElementAt(position)：根据索引获取元素，若元素不存在，返回 undefined。
 * removeAt(position)：特定位置移除一项。
 * remove(element)：移除一项。
 * indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回 -1。
 * isEmpty()：如果链表中不包含任何元素，返回 true，如果链表长度大于 0，返回 false。
 * size()：返回链表包含的元素个数，与数组的 length 属性类似。
 * clear()：清空链表。
 * getHead()：返回链表的第一个元素。
 * toString()：由于链表使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString() 方法，让其只输出元素的值。
 * print()：打印链表的所有元素。
 */

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    // 链表长度
    this.length = 0
    this.head = null
  }

  append(element) {
    let node = new Node(element)
    let current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  getElementAt(postion) {
    if (this.isEmpty() || postion < 0 || postion > this.length) {
      return undefined
    } else {
      let node = this.head
      for (let i = 0; i < postion && node !== null; i++) {
        node = node.next
      }
      return node
    }
  }

  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false
    } else {
      let node = new Node(element)
      let current = this.head
      let previous
      let index = 0

      if (position == 0) {
        node.next = current
        this.head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = node
        node.next = current
      }
      this.length++
      return true
    }
  }

  removeAt(position) {
    if (this.isEmpty() || position < 0 || position > this.length) {
      return false
    } else {
      let current = this.head
      let previous
      let index = 0

      if (position == 0) {
        this.head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length--
      return true
    }
  }

  remove(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf(element) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.element == element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  clear() {
    this.head = null
    this.hength = 0
  }

  getHead() {
    return this.head
  }

  toString() {
    let current = this.head
    let str = ''
    while (current) {
      str += ',' + current.element
      current = current.next
    }
    return str.slice(1)
  }

  print() {
    console.log(this.toString())
  }
}

module.exports = LinkedList

