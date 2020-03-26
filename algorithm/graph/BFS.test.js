const { breadthFirstSearch, BFS } = require('./BFS')

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

breadthFirstSearch(graph, 'A', console.log)

// Output:
// A
// B
// C
// D
// E
// F
// G
// H
// I

console.log(BFS(graph, 'A'))

// Output:
// { distances: { A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 },
//   predecessors:
//    { A: null,
//      B: 'A',
//      C: 'A',
//      D: 'A',
//      E: 'B',
//      F: 'B',
//      G: 'C',
//      H: 'D',
//      I: 'E' 
//    }
// }
