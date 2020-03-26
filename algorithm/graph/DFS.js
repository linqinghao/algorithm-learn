/**
 * 深度优先算法
 */

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

const depthFirstSearch = function(graph, cb) {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === COLOR.WHITE) {
      depthVisit(vertices[i], color, adjList, cb)
    }
  }

  function depthVisit(vertex, color, adjList, cb) {
    color[vertex] = COLOR.GREY
    cb && cb(vertex)
    const neighbors = adjList.get(vertex)
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === COLOR.WHITE) {
        depthVisit(w, color, adjList, cb)
      }
    }
    color[vertex] = COLOR.BLACK
  }
}

const DFS = function(graph) {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  const d = {}
  const f = {}
  const p = {}
  const time = { count: 0 }
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0
    d[vertices[i]] = 0
    p[vertices[i]] = null
  }
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === COLOR.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList)
    }
  }

  function DFSVisit(u, color, d, f, p, time, adjList) {
    color[u] = COLOR.GREY
    d[u] = ++time.count
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === COLOR.WHITE) {
        p[w] = u
        DFSVisit(w, color, d, f, p, time, adjList)
      }
    }
    color[u] = COLOR.BLACK
    f[u] = ++time.count
  }
  return {
    discovery: d,
    finished: f,
    predecessors: p,
  }
}

module.exports = { depthFirstSearch, DFS }
