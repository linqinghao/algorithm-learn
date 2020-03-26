/**
 * 队列
 *
 * enqueue(element)：向队列尾部添加新项。
 * dequeue()：移除队列的第一项，并返回被移除的元素。
 * front()：返回队列中第一个元素，队列不做任何变动。
 * back()：返回队列中最后一个元素，队列不做任何变动。
 * isEmpty()：如果队列中不包含任何元素，返回 true，否则返回 false。
 * size()：返回队列包含的元素个数，与数组的 length 属性类似。
 * clear()：清空整个队列。
 * print()：打印队列中的元素。
 */

class Queue {
  constructor() {
    this.list = []
  }

  enqueue(ele) {
    this.list.push(ele)
  }

  dequeue() {
    return this.list.shift()
  }

  front() {
    return this.list[0]
  }

  back() {
    return this.list[this.list.length - 1]
  }

  isEmpty() {
    return this.list.length === 0
  }

  size() {
    return this.list.length
  }

  clear() {
    this.list = []
  }

  print() {
    console.log(this.list.toString())
  }
}

module.exports = Queue

