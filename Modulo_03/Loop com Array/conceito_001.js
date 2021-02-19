/*
Você se lembra do tipo de dado “Array”? Isso mesmo, aquele que usamos
para criar listas, ou colocar várias informações dentro de uma única variável!
*/

var comidas = ["Pão", "Leite", "Café", "Queijo"]

/*
Já sabemos que elas são muito úteis em várias situações, mas podemos
nos deparar com uma situação um pouco complicada: trabalhar com seus
valores.

Se fôssemos usar a primeira posição do array do exemplo anterior, seria
algo como: “Esse alimento se chama: Pão” e assim por diante.
*/

var alimentos = ["Pão", "Leite", "Café", "Queijo"]

var frase = "Esse alimento se chama: " + alimentos[0]
console.log(frase) //imprime "Esse alimento se chama: Pão"

/*
E, se quisermos que esse mesmo processo se repita, basta continuar
fazendo a mesma coisa para as outras posições do nosso array:
*/

var alimento = ["Pão", "Leite", "Café", "Queijo"]

var frase = "Esse alimento se chama: " + alimento[0]
console.log(frase) //imprime "Esse alimento se chama: Pão"

var frase2 = "Esse alimento se chama: " + alimento[1]
console.log(frase2) //imprime "Esse alimento se chama: Leite"

var frase2 = "Esse alimento se chama: " + alimento[2]
console.log(frase3) //imprime "Esse alimento se chama: Café"

/*
Essa estrutura já conhecemos, certo? Aqui será muito semelhante a
exemplos passados, porém teremos que dizer ao nosso loop que ele deve
realizar essa ação em nossa array. Qual ação?

Ele deverá passar em cada valor, independente de quantos sejam, para
que assim possamos trabalhar com cada um de forma específica. A essa ação
chamamos de “percorrer um array”.

Para isso, iremos indicar que nosso contador comece do 0, afinal esse é o
valor/posição inicial da nossa array, e é por lá que nosso loop deve começar:
*/

//geralmente definimos a variável i, que significa indice ou index
for (var i = 0; condição de parada; incremento){
    //ação a ser repetida
}

/*
Show! Nosso loop já sabe por onde ele começa, por isso agora precisamos
dizer onde ele deve terminar. A ideia é a seguinte: o for irá fazer x repetições, e
nós devemos indicar que, para cada repetição, ele deve ir para um próximo
valor da nossa array.

Para isso, precisamos saber quantas posições/valores existem em nossa
array. Então, conta comigo: 1... 2...Brincadeira! Não precisamos contar, porque o
próprio JavaScript já resolveu esse problema.

Para saber quantas posições existem em um array, devemos acessar uma
informação chamada length (comprimento em português).
*/

var numeroDePosicoes = alimento.length //Será 4

/*
Bom, agora nos resta montar uma condição em nosso for, que faça ele
parar quando chegar no final do array:
*/

//Estamos dizendo que o for irá parar quando o contador chegar ao número total da nossa array
for (var i = 0; i < alimento.length; incremento) {
    //ação a ser repetida
}

/*
Com isso finalizamos, dando poder ao nosso contador de ir mudando.
Caso contrário, o contador ficaria sempre em zero. Agora é hora de definirmos
nosso incremento!
*/

//usamos o ++ para ir de valor em valor
for (let i = 0; i < alimento.length; i++){
    //ação a ser repetida
}

/*
Show, né? Agora que já configuramos o for para percorrer o nosso array,
precisamos dizer o que ele irá fazer! Iremos definir no bloco de código, dentro
das chaves do for:

Percebemos que no lugar da posição do array, colocamos a variável i na
hora de imprimir a frase. A gente não poderia colocar uma posição fixa, porque
assim ele iria imprimir sempre a mesma coisa. Como o foco aqui é trabalhar
com todas as informações do array, a nossa variável i deve ser dinâmica,
mudando de valor até chegar ao final do nosso array!

Agora não importa se nosso array tiver 5 ou 1000 itens, porque nosso
código irá percorrer todos eles!
*/

//usamos o ++ para ir de valor em valor
for (let i = 0; i < alimento.length; i++){
    console.log('Esse alimento se chama: ' + alimento[i])
}

//Esse loop irá imprimir:

// Esse alimento se chama: Pão          || que é o valor da posição 0
// Esse alimento se chama: Leite        || que é o valor da posição 1
// Esse alimento se chama: Café         || que é o valor da posição 2
// Esse alimento se chama: Queijo       || que é o valor da posição 3