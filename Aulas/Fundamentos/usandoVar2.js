var numero = 1

{
    var numero = 2
    console.log('dentro = ', numero) // 2
}
console.log('fora = ', numero) // 2 (var tem escopo global, mesmo dentro de blocos, então pode ser substituída)