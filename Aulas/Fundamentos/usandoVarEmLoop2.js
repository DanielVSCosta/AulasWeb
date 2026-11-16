const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

funcs[2]();
funcs[8]();

// Saída do funcs: 10, 10 (var tem escopo de função, não é acessível fora da função, então o valor de i é 10 quando as funções são chamadas)