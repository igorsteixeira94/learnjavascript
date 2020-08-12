/**
 * A variavel var, possui um escopo de função.
 * Possui um comportamento de hoisting assim como as funções, move as declarações para o topo de um escopo
 */
console.log(idade); //undefined
idade = 12;
var idade;

console.log(idade); //12



imprimeNome('Igor'); //Igor

function imprimeNome(nome){
  console.log(nome);
}
// Esse é o comportamento hoisting.

/**
 * Variaveis const e let.
 * const = possui referencia constante, ou seja, posso atribuit propriendade e valor,
 * mas não posso mudar a referencia do objeto
 *
 * let = Variaveis que podem ter sua referencia mudada.
*/

//Ex.:

const pessoa = {ano:1994};

//pessoa = null; //Assignment to constant variable

pessoa.nome = "Igor";

console.log(pessoa);

let carro = 1;

carro = 10;
console.log(carro); //10

/**
 * Temporal Dead Zone -> É o comportamento de que no seu escopo, ela é inacessivel
 * até que a execução a encontre, ou seja, dá declaração até a atribuição temos o TDZ.
 */

function test(){


  if(true){

    let valor = 0;
    console.log(valor); 0

  }

  //console.log(valor); //Error pois tem escopo de bloco
}
test();
