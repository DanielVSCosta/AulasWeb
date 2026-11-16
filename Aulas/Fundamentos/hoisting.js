// Hoisting: içamento de variáveis, ou seja, a variável é "jogada" para o topo do escopo, mas não é inicializada até que a linha de código seja executada.

console.log('a = ', a)
var a = 2
console.log('a = ', a)

console.log('b = ', b)
let b = 2
console.log('b = ', b)

// O hoisting acontece com variáveis declaradas com var, mas não com let e const. Variáveis declaradas com let e const são "içadas" para o topo do escopo, mas resultam em um erro se você tentar acessá-las antes da declaração.