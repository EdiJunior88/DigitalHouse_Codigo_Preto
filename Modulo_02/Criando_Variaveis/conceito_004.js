//Concatenação:

/*
Imagine que temos duas informações em variáveis diferentes e queremos
uni-las em uma string. Para isso, podemos utilizar o comando de concatenação,
que em Javascript, é representado pelo mesmo sinal de adição (+)
*/

var logradouro = "Rua Doutor Cardoso de Melo, 90"
var bairro = "Vila Olímpia"

console.log(logradouro + bairro) //imprime "Rua Doutor Cardoso de Melo, 90Vila Olímpia"

/*
Desta forma, o endereço está completo mas, temos um pequeno
problema. O número 90 está junto à palavra “Vila”. Para que tenha uma
separação, precisamos colocar isso explicitamente no código:
*/

var logradouro = "Rua Doutor Cardoso de Melo, 90"
var bairro = "Vila Olímpia"

console.log(logradouro + " - " + bairro) //imprime "Rua Doutor Cardoso de Melo, 90 - Vila Olímpia"

/*
Além de imprimir, podemos atribuir essa string à uma nova variável:
*/

var logradouro = "Rua Doutor Cardoso de Melo, 90"
var bairro = "Vila Olímpia"

var enderecoCompelto = logradouro + " - " + bairro