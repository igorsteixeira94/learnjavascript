/**
 * Recebe uma callback e retorna uma nova instancia modificando os elementos
 * de acordo com a ação da callback.
 * Por exeplo: Dobrar o valor dos números presentes em um array.
 */
const number = [1, 2, 3, 4, 5]

const duplicate = number.map((item) => item * 2)

console.log(duplicate)
//Retorno será [2,4,6,8,10].
