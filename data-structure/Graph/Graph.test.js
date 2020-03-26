const Graph = require('./Graph')

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

graph.print()


// Output:
// A -> B C D
// B -> A E F
// C -> A D G
// D -> A C H
// E -> B I
// F -> B
// G -> C
// H -> D
// I -> E