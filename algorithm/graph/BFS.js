/**
 * 广度优先算法
 */

const Queue = require('../../data-structure/Queue/Queue')

const COLOR = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
}

const initializeColor = function(vertices) {
  const color = {}
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = COLOR.WHITE
  }
  return color
}

const breadthFirstSearch = function(graph, startVertex, cb) {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)

  const queue = new Queue()

  queue.enqueue(startVertex)

  while (!queue.isEmpty()) {
    const u = queue.dequeue()

    const neigbours = adjList.get(u)

    color[u] = COLOR.GREY

    for (let i = 0; i < neigbours.length; i++) {
      const w = neigbours[i]
      if (color[w] == COLOR.WHITE) {
        color[w] = COLOR.GREY
        queue.enqueue(w)
      }
    }

    color[u] = COLOR.BLACK

    cb && cb(u)
  }
}

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  const queue = new Queue()
  const distances = {}
  const predecessors = {}
  queue.enqueue(startVertex)
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0
    predecessors[vertices[i]] = null
  }
  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    const neighbors = adjList.get(u)
    color[u] = COLOR.GREY
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === COLOR.WHITE) {
        color[w] = COLOR.GREY
        distances[w] = distances[u] + 1
        predecessors[w] = u
        queue.enqueue(w)
      }
    }
    color[u] = COLOR.BLACK
  }
  return {
    distances,
    predecessors,
  }
}

module.exports = { breadthFirstSearch, BFS }
