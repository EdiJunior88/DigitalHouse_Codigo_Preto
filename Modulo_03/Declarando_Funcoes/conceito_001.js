/*
Chegou o momento de aprendermos a criar nossas próprias funções. E,
só pra relembrar, funções são um encapsulamento de determinadas instruções
ao computador, visando sempre que necessário repeti-las!

Lembre-se de dar um nome que faça sentido ao que a função irá realizar.
Em geral, você pode usar verbos para indicar o que a função faz. Ações como:
somar, multiplicar, consultarSaldo e etc, são alguns exemplos.

Antes de mais nada, deixa eu te mostrar como se parece uma função:
*/

function saudacao(){
    console.log("Olá, seja bem vindo!")
}

/*
Na sequência, vem as chaves para indicar um bloco de código. Será
dentro desse bloco que você deverá indicar o que essa função deve fazer!

Aqui, vale tudo: criar variáveis, usar condições e até mesmo os loops. A
ideia é criar o passo a passo que o computador deve realizar, sempre que
precisar resolver um problema.
*/

//Lembre-se de sempre usar a palavra reservada function, sem ela o computador
// não saberá que é para criar uma função

function nomeDaFuncao(){
    // seu código aqui
}

/*
Vou deixar aqui uma função bem completa, com uso de variáveis e loops
para você ter como referência:
*/

//criando uma função chamada exibirNomeDeCarro que irá executar um loop
//e imprimir todos os nomes de carros de um array

function exibirNomeDeCarros(){
    //criando um array de nome de carros
    var listaDeCarros = ["Fox", "Celta", "Uno", "Astra"]
    //criando um FOR para percorrer o array de nomes
    for (var i = 0; i < listaDeCarros.length; i++){
        //a cada loop o computador deverá exibir um nome de cada posição do array
        console.log("Nome do carro é: " + listaDeCarros[i])
    }
}