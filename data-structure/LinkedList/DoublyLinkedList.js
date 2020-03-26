/**
 * 双向链表
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
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(element) {
    let node = new Node(element)
    let current = this.tail
    if (current === null) {
      this.head = node
    } else {
      current.next = node
      node.prev = current
    }
    this.tail = node
    this.length++
  }

  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false
    } else {
      let node = new Node(element)
      let current = this.head
      let previous
      let index = 0
      // 首位
      if (position == 0) {
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
          this.tail = current
        }
      } else if (position == this.length) {
        // 末位
        this.append(element)
      } else {
        // 中位
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = node
        node.next = current
        node.prev = previous
        current.prev = node
      }
      this.length++
      return true
    }
  }

  getElementAt(position) {
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

  removeAt(position) {
    if (this.isEmpty() || position < 0 || position > this.length) {
      return false
    } else {
      let current = this.head
      let previous
      let index = 0
      if (position == 0) {
        if (this.length == 1) {
          this.head = null
          this.tail = null
        } else {
          this.head = current.next
          this.head.prev = null
        }
      } else if (position == this.length - 1) {
        if (this.length == 1) {
          this.head = null
          this.tail = null
        } else {
          current = this.tail
          this.tail = current.prev
          this.tail.next = null
        }
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous
        previous = current.next.prev
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
    while (current.next) {
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
    this.tail = null
    this.hength = 0
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
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

module.exports = DoublyLinkedList

