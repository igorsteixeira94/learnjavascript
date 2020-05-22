/**
 * Função: Recebe uma callback que modificando os elementos de acordo com a ação da callback.
 * Retorno: Uma nova instancia do array com os elementos modificados.
 * Por exemplo: Dobrar o valor dos números presentes em um array.
 */
const number = [1, 2, 3, 4, 5]

const duplicate = number.map((item) => item * 2)

console.log(duplicate)
//Retorno será [2,4,6,8,10].
