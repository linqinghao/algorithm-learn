/**
 * 二叉搜索树
 *
 * insert(key)：向树中插入一个新的键。
 * search(key)：在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
 * inOrderTraverse：通过中序遍历方式遍历所有节点。
 * preOrderTraverse：通过先序遍历方式遍历所有节点。
 * postOrderTraverse：通过后序遍历方式遍历所有节点。
 * inOrderTraverseNoRecursion：通过中序遍历方式遍历所有节点（非递归）。
 * preOrderTraverseNoRecursion：通过先序遍历方式遍历所有节点（非递归）。
 * postOrderTraverseNoRecursion：通过后序遍历方式遍历所有节点（非递归）。
 * breadthFirstSearch: 广度优先遍历（递归）。
 * breadthFirstSearchNoRecursion: 广度优先遍历（非递归）。
 * min：返回树中最小的值/键。
 * max：返回树中最大的值/键。
 * remove(key)：从树中移除某个键。
 */

const Stack = require('./Stack')
const Queue = require('./Queue')

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    // 根节点
    this.root = null
  }

  insert(key) {
    let node = new Node(key)
    if (this.root === null) {
      this.root = node
    } else {
      this._insertNode(this.root, node)
    }
  }

  max(node) {
    node = node || this.root
    while (node && node.right !== null) {
      node = node.right
    }
    return node
  }

  min(node) {
    node = node || this.root
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }

  search(key, node) {
    node = node || this.root
    return this._searchNode(key, node)
  }

  remove(key, node) {
    node = node || this.root
    return this._removeNode(key, node)
  }

  preOrderTraverse(cb) {
    this._preOrderTraverseNode(this.root, cb)
  }

  inOrderTraverse(cb) {
    this._inOrderTraverseNode(this.root, cb)
  }

  postOrderTraverse(cb) {
    this._postOrderTraverseNode(this.root, cb)
  }

  inOrderTraverseNoRecursion(cb, node) {
    node = node || this.root
    let stack = new Stack()
    stack.push(node)
    while (!stack.isEmpty()) {
      // 左节点先入栈
      if (node.left && !node.touched) {
        node.touched = true
        node = node.left
        stack.push(node)
        continue
      }
      node.touched && delete node.touched
      node = stack.pop()
      cb && cb(node.key)
      node.right && stack.push(node.right)
    }
  }

  preOrderTraverseNoRecursion(cb, node) {
    node = node || this.root
    let stack = new Stack()
    stack.push(node)
    while (!stack.isEmpty()) {
      node = stack.pop()
      cb && cb(node.key)
      // 右节点先入栈
      node.right && stack.push(node.right)
      node.left && stack.push(node.left)
    }
  }

  postOrderTraverseNoRecursion(cb, node) {
    node = node || this.root
    let stack = new Stack()
    stack.push(node)

    while (!stack.isEmpty()) {
      // 左节点先入栈
      if (node.left && !node.touched) {
        node.touched = 'left'
        node = node.left
        stack.push(node)
        continue
      }

      // 有右节点并且未访问则入栈
      if (node.right && node.touched !== 'right') {
        node.touched = 'right'
        node = node.right
        stack.push(node)
        continue
      }

      let item = stack.pop()

      item.touched && delete item.touched

      cb && cb(item.key)

      // 指向栈顶的节点
      node = stack.peek()
    }
  }

  // 广度优先遍历（非递归）
  breadthFirstSearchNoRecursion(cb, node) {
    node = node || this.root
    let queue = new Queue()
    queue.enqueue(node)
    let pointer = 0
    while (pointer < queue.size()) {
      let item = queue.list[pointer++]
      cb && cb(item.key)
      item.left && queue.enqueue(item.left)
      item.right && queue.enqueue(item.right)
    }
  }

  // 广度优先遍历（递归）
  breadthFirstSearch(cb, node) {
    node = node || this.root
    let queue = new Queue()
    queue.enqueue(node)
    bfs(cb)
    function bfs(cb) {
      if (queue.isEmpty()) return
      let item = queue.dequeue()
      cb && cb(item.key)
      item.left && queue.enqueue(item.left)
      item.right && queue.enqueue(item.right)
      bfs(cb)
    }
  }

  _preOrderTraverseNode(node, cb) {
    if (node !== null) {
      cb(node.key)
      this._preOrderTraverseNode(node.left, cb)
      this._preOrderTraverseNode(node.right, cb)
    }
  }

  _inOrderTraverseNode(node, cb) {
    if (node !== null) {
      this._inOrderTraverseNode(node.left, cb)
      cb(node.key)
      this._inOrderTraverseNode(node.right, cb)
    }
  }

  _postOrderTraverseNode(node, cb) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, cb)
      this._postOrderTraverseNode(node.right, cb)
      cb(node.key)
    }
  }

  _removeNode(key, node) {
    if (node == null) {
      return false
    }

    node = this.search(key, node)

    if (node.left === null && node.right === null) {
      node = null
      return node
    }

    if (node.left == null) {
      node = node.right
      return node
    } else if (node.right == null) {
      node = node.left
      return node
    }

    let minNode = this.min(node.right)

    node.key = minNode.key

    node.right = this._removeNode(minNode.key, node.right)

    return node
  }

  _searchNode(key, node) {
    if (node == null) {
      return false
    }
    if (key < node.key) {
      return this._searchNode(node.left, key)
    } else if (key > node.key) {
      return this._searchNode(node.right, key)
    } else {
      return node
    }
  }

  _insertNode(node, newNode) {
    if (node.key > newNode.key) {
      // 左查找
      if (node.left === null) {
        node.left = newNode
      } else {
        this._insertNode(node.left, newNode)
      }
    } else {
      // 右查找
      if (node.right === null) {
        node.right = newNode
      } else {
        this._insertNode(node.right, newNode)
      }
    }
  }
}

module.exports = BinarySearchTree
