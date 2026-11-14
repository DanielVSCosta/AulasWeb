let isActive = false; // Uso do let quando precisar alterar o valor da variável posteriormente
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1; // 1 é considerado true'
console.log(!!isActive); // O operador !! converte o valor para booleano, então 1 será convertido para true
console.log(!isActive); // O operador ! inverte o valor, então 1 será invertido para false

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')); // O operador || retorna o primeiro/unico valor verdadeiro encontrado, então a expressão retorna ' ', que é convertido para true com o operador !!

let nome = '' // string vazia é considerado false, então a expressão retorna o valor de 'Desconhecido'
console.log(nome || 'Desconhecido')

let nome2 = 'Lucas' // string não vazia é considerado true, então a expressão retorna o valor de nome2, que é 'Lucas'
console.log(nome2 || 'Desconhecido')