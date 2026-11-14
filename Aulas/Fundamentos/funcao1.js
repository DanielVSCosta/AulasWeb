// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2) // Ele irá somar 2 + undefined, pois não foi passado o segundo parametro
imprimirSoma(2, 10, 4, 5, 6, 7) // Ele irá somar apenas os dois primeiros parametros, ignorando os demais
imprimirSoma() // Ele irá somar undefined + undefined, pois não foi passado nenhum parametro

// Funcao com retorno
function soma(a, b = 1) { // O valor padrão de b é 1
    return a + b;
}

console.log(soma(2, 3)) // Ele irá substituir o valor padrão de b e somar 2 + 3
console.log(soma(2)) // Ele irá somar 2 + 1