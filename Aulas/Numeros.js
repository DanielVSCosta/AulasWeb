const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Verifica se o número é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed() define o número de casas decimais após a vírgula
console.log(media.toString(2)) // toString() converte o número para uma string, e o parâmetro define a base (2 = binário)
console.log(typeof media)
console.log(typeof Number) // Number é uma função construtora