/**
 * Função: O metodo forEach é utilizado para iterar sobre um array,
 * substituindo o uso do for
 * Para mais detalhes:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
array = ['Igor', 'Carlos', 'Maria', 'Joao', 'Jose']

array.forEach((element) => {
    console.log(element)
})

/**
 * Porém os elementos processados pelo forEach
 * são definidos antes da chamda da arrow function
 */
array = ['Igor', 'Carlos', 'Maria', 'Joao', 'Jose']

array.forEach((element) => {
    array.push('JavaScript') //push - adicionar um novo elemento ao final do array
    console.log(element)
    //A impressão será:
    /**
     * Igor
     * Carlos
     * Maria
     * Joao
     * Jose
     * Ou seja os elementos (JavaScript adicionados depois da primeira
     * chamada da arrow function não serao acessivel) */
})

//Outras maneiras de escrever este código:
//Podemos definir a função antes e usar todos os parametro que o ForEach aceita
function printName(element, index) {
    console.log(element, index)
}
array.forEach(printName)
