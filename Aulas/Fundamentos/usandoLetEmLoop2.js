const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

funcs[2]();
funcs[8]();

// O resultado será 2 e 8, pois o let tem escopo de bloco, então cada função criada dentro do loop terá acesso ao valor correto de i no momento em que foi criada.