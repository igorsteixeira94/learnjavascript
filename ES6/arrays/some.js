/**
 * Função: Realiza uma validação em cada elemento do array de acordo com a condição.
 * Retorno: True ou False
 * Por exemplo verificar se ALGUM Dos numeros é maior que 10.
 * [3,4,5,11,16]
 * Assim q achar um elemento que satisfaça a condição ele para.

 */
const numbers = [3, 4, 5, 11, 16]

console.log(
    numbers.some((number) => {
        console.log(number) //Ira imprimir os elementos [3,4,5,11]
        return number > 10
    })
) //retornar true, uma vez que 11 é maior que 10.
//Ou seja temos UM elemento maior que o 10, nossa condição está satisfeita !
