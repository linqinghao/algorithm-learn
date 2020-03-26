/**
 * 循环双向链表
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

class CircularLinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(element) {
    let node = new Node(element)
    let current = this.head
    if (current === null) {
      this.head = node
    } else {
      let current = this.getElementAt(this.size() - 1)
      current.next = node
    }
    node.next = this.head
    this.length++
  }

  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false
    } else {
      let node = new Node(element)
      let current = this.head
      if (position === 0) {
        if (this.head === null) {
          this.head = node
          node.next = this.node
        } else {
          node.next = current
          current = this.getElementAt(this.size())
          this.head = node
          current.next = node
        }
      } else {
        const previous = this.getElementAt(position - 1)
        node.next = previous.next
        previous.next = node
      }
      this.length++
      return true
    }
  }

  getElementAt(postion) {
    if (this.isEmpty() || postion < 0 || postion > this.length) {
      return undefined
    } else {
      let node = this.head
      for (let i = 0; i < postion && i < this.size(); i++) {
        node = node.next
      }
      return node
    }
  }

  removeAt(position) {
    if (this.isEmpty() || position < 0 || position > this.length) {
      return false
    } else {
      let current = this.head
      if (position === 0) {
        if (this.size() == 1) {
          this.head = null
        } else {
          const removed = this.head
          current = this.getElementAt(this.size() - 1)
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
      } else {
        const previous = this.getElementAt(this.size() - 1)
        current = previous.next
        previous.next = current.next
      }
      this.length--
      return current.element
    }
  }

  remove(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf(element) {
    let current = this.head
    let index = 0
    while (index < this.size()) {
      if (current.element == element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  isEmpty() {
    return this.length == 0
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
    let index = 0
    if (current === null) return str
    while (index++ < this.size()) {
      str += ',' + current.element
      current = current.next
    }
    return str.slice(1)
  }

  print() {
    console.log(this.toString())
  }
}

module.exports = CircularLinkedList
