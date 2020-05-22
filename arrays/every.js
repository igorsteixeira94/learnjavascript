/**
 * Função: Realiza uma validação em cada elemento do array de acordo com a condição especificada.
 * Retorno: True ou False
 * Exemplo: Verificar se todos os numeros são maiores que 10.
 * [11,12,14,9,16]
 * Basicamente ele concatena cada retorno com o operador and,
 * assim q achar um elemento que não satisfaça a condição ele para.
 * (11 > 10 and 12 > 10 and 14 > 10 and 9>10 (falso ! Retorna falso e finaliza a operação))
 *
 */
const numbers = [11, 12, 14, 9, 16]

console.log(
    numbers.every((number) => {
        console.log(number) //Ira imprimir os elementos [11,12,14,9]
        return number > 10
    })
) //retornar falso, uma vez que 9 é menor que 10
