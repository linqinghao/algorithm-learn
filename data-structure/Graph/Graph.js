/**
 * 图
 *
 * 使用领接表表示
 *
 * addVertex(v): 添加顶点
 * addEdge(a, b): 添加边
 * getVerties()： 获取所有顶点
 * getAdjList()： 获取图
 * print()： 打印图
 */

const Dictionary = require('../Dictionary/Dictionary')

class Graph {
  constructor() {
    this.vertices = []
    this.adjList = new Dictionary()
  }

  // 添加顶点
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, [])
    }
  }

  // 添加边
  addEdge(a, b) {
    if (!this.adjList.get(a)) {
      this.addVertex(a)
    }
    if (!this.adjList.get(b)) {
      this.addVertex(b)
    }
    this.adjList.get(a).push(b)
    this.adjList.get(b).push(a)
  }

  // 获取所有顶点
  getVertices() {
    return this.vertices
  }

  // 获取图
  getAdjList() {
    return this.adjList
  }

  toString() {
    let s = ''
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `
      const neighbors = this.adjList.get(this.vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `
      }
      s += '\n'
    }
    return s
  }

  print() {
    console.log(this.toString())
  }
}

module.exports = Graph
