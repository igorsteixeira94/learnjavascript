/**
 * Operadores Rest e Spread.
 * Ambos tem a escrita, assim: ...variavel
 * Rest -> transforma os dados de um array.
 * Em funções só podemos ter um operador rest
 */

 function nome(...nomes){
   console.log(nomes);
 }

 function soma(...numeros){
   console.log(numeros.reduce((total, item)=> total + item, 0));
 }

nome ('Igor', 'Joao', 'Jose');
soma(1,2,3,4,5);

/**
 * O operador Spread é o contrario do rest, em vez de comprimit tudo em um array, ele expande
 * Podemos criar, por exemplo, uma lista a partir de varias outras.
 */

 const lista1 = [1,2,3,4,5];
 const lista2 = [6,7,8,9,10];

 const lista = [...lista1,...lista2];

 console.log(lista);

 const newLista = [...lista,11,12,13];
 console.log(newLista);
