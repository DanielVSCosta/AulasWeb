// ${ } é usado para interpolar valores dentro de uma string

const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = ` 
    Olá 
    ${nome}!`; // O template considera as quebras de linha e espaços, diferente da concatenação, que não considera.
console.log(concatenacao, template);

// expressões...
console.log(`1 + 1 = ${1 + 1}`); // O resultado da expressão 1 + 1 só será calculado quando estiver dentro das chaves, e o resultado será inserido na string final

const up = texto => texto.toUpperCase(); // Função que transforma o texto em maiúsculo
console.log(`Ei... ${up('cuidado')}!`); // A função up será chamada e o resultado será inserido na string final