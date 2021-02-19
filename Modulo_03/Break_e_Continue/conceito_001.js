/*
Bem legal aprender a percorrer um array com um loop, né? Isso nos traz
muitas possibilidades. Como, por exemplo, criar um sistema de busca por
nome:
*/

var listaDeNomes = ['Cesar', 'Pamela', 'Camila', 'Hendy']
var busca = 'Cesar' //Nome que iremos buscar

for (var i = 0; i < listaDeNomes.length; i++) {
    if (listaDeNomes[i] == busca){
        console.log('Encontrei o nome')
    }
}

/*
Começando com o break, ele nos ajudará justamente no problema acima.
O break é um comando reservado que, ao ser processado pelo loop, irá parar
todo o ciclo independente de quantos faltam. Olha só como ficaria:
 */

for (var i = 0; i < listaDeNomes.length; i++) {
    if (listaDeNomes[i] == busca){
        console.log('Encontrei o nome')
        break
    }
}

/*
Já o comando continue pula um ciclo! Vamos supor que queremos
imprimir todos os nome contidos em nosso array, mas queremos pular o nome
“Cesar”. Veja só como ficaria no código:
*/

var listaDeNomes = ['Cesar', 'Pamela', 'Camila', 'Hendy']

for (var i = 0; i < listaDeNomes.length; i++){
    if (listaDeNomes[i] == 'Cesar'){
        continue
//Quando o nome for Cesar, ele simplesmente passa para o próximo loop
    }
    console.log(listaDeNomes[i])
}

//Esse loop irá imprimir:

//Pamela
//Camila
//Hendy