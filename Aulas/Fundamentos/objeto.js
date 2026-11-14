// Objeto é uma coleção de chave e valor, onde cada chave é única e representa uma propriedade do objeto.

const prod1 = {} // Um par de chaves representam propriedades do objeto
prod1.nome = "Notebook";
prod1.preco = 2500.00;
prod1["Desconto Legal"] = 0.40; // Evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: "Celular",
    preco: 1500.00,
    "Desconto Legal": 0.20
}
console.log(prod2)

'{"nome": "Notebook", "preco": 2500.00, "Desconto Legal": 0.40}'
// JSON é um formato textual para representar objetos, muito utilizado para comunicação entre sistemas.