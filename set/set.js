/**
 * Listas sem repedições, ou seja, não aceita repedições
 * Possui os metodos, mesma funcionalidade do map:
 * add-> adicionar um elemento
 * get -> buscar um elemento;
 * has -> verificar se existe um elemento;
 * size -> tamanho do map;
 * delete -> deletar um elemento;
 * clear -> apagar todo o map.
 * São objetos iteraveis, podemos usar for...of
*/


const numeros_mega = new Set([2,1,3,5,4,5]);

console.log(numeros_mega); //Retorna {2,1,3,5,4}

numeros_mega.add(50);
console.log(numeros_mega); //Retorna {2,1,3,5,4,50}

numeros_mega.add(3);
console.log(numeros_mega); //Retorna {2,1,3,5,4,50} não adiciona o 3, pois ele já existe
