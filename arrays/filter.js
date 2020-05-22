/**
 * Função: Como o proprio nome já diz, realiza um filtro em um array.
 * Retorno: Uma nova instancia, que terá apenas os elementos que são
 * verdadeiros de acordo com o criterio passado.
 * Por exemplo, filtar todos os numeros maiores que 10.
 */

const numbers = [1, 2, 5, 6, 8, 9, 12, 11, 15, 20, 100]

const newNumbers = numbers.filter((number) => number > 10)

console.log(newNumbers)
//Retorno: [12,11,15,20,100]
