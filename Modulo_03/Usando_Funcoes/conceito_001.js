/*
“Como usar uma função criada?”

Ao criar uma função, sempre damos a ela um nome e é por meio dele
que conseguimos usar a função. Junto a ele, devemos colocar novamente um
par de parênteses, e ele terá duas funções aqui: primeiramente, os parênteses
indicam ao código que isso é uma função e que é para executá-la.
*/

somar()
//Devido aos parênteses o computador sabe que deverá executar a função somar!

/*
É importante notar que não usamos a palavra function novamente, pois
ela é exclusiva para as criações das funções!

E, em segundo lugar, serve para passar os valores que serão colocado nos
parâmetros. Eles devem ser passados na mesma ordem que foi definido na
função:
*/

function somar(numeroA, numeroB){
    return numeroA + numeroB
}

somar(10, 20)
//o valor 10 será atribuido ao parâmetro numeroA, e o valor 20 ao numeroB

/*
Mas, como vimos, as funções podem retornar alguns valores. Então, como
podemos pegar/salvar essas informações?

Com as variáveis!
*/

var resultado = somar(10, 20) //30

//o retorno da soma dos dois números será atribuído na variável resultado, permitindo que possamos trabalhar com essa informação

console.log(somar(10, 20)) //30

//Nesse caso estamos apenas imprimindo o resultado da função sem armazená-lo