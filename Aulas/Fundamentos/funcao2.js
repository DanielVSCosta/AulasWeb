// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { // => é o operador de arrow function
    return a + b
}
console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b // Se a função tiver apenas uma linha, podemos omitir as chaves e o return
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // Se a função tiver apenas um parametro, podemos omitir os parênteses
imprimir2('Legal!!!')