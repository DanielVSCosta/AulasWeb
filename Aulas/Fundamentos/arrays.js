const valores = [7.7, 8.9, 6.3, 9.2]; // Array é uma estrutura de dados que armazena uma coleção de elementos
console.log(valores[0], valores[3]);
console.log(valores[4]); // undefined

valores[4] = 10; // Adicionando um valor no índice 4
valores[10] = 15; // Adicionando um valor no índice 10, e mostra que os índices 5 a 9 ficam vazios (undefined)
console.log(valores);
console.log(valores.length); // Mostra o tamanho do array

valores.push({id: 3}, false, null, 'teste'); // Adicionando valores no final do array
console.log(valores);

console.log(valores.pop()); // Remove o último valor do array e retorna ele
delete valores[0]; // Deleta o valor do índice 0, mas não altera o tamanho do array
console.log(valores);

console.log(typeof valores); // Mostra o tipo do array, que é um objeto