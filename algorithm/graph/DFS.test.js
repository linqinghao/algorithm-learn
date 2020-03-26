const { depthFirstSearch, DFS } = require('./DFS')

const Graph = require('../../data-structure/Graph/Graph')

const graph = new Graph()

const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

vertices.forEach(item => graph.addVertex(item))

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'H')

depthFirstSearch(graph, console.log)


// Output:
// A
// B
// E
// I
// F
// C
// D
// H
// G

console.log(DFS(graph))

// Output:
// { discovery: { A: 1, B: 2, C: 10, D: 11, E: 3, F: 7, G: 15, H: 12, I: 4 },
//   finished: { A: 18, B: 9, C: 17, D: 14, E: 6, F: 8, G: 16, H: 13, I: 5 },
//   predecessors:
//   { 
//      A: null,
//      B: 'A',
//      C: 'A',
//      D: 'C',
//      E: 'B',
//      F: 'B',
//      G: 'C',
//      H: 'D',
//      I: 'E' 
//   } 
// }