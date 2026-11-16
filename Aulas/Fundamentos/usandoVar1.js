{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) // Será??? (var tem escopo global, mesmo dentro de blocos)

function teste() {
    var local = 123
    
}

teste()
console.log(local) // Erro: local is not defined (var tem escopo de função, não é acessível fora da função)