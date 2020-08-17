/**
 * Arrow function é um modelo de escrever funções anonimas mais enxutas, usando ->
 * Ela acessa o this do seu contexto
 */

 //declaração de função:
 function soma(a,b){
   console.log(a+b);
 }
 soma(1,2);

 //expressão de função:
 var soma = function(a,b){
   console.log(`A soma é ${a+b}`);
 }
soma(3,4);

//Arrow functions:

var soma = (a,b) => console.log(`Esta soma é uma => ${a+b}`);

soma(3,0)

/**
 * Parametros predefinidos em funções:
 * - É possivel passar parametros com valores pré-definidos para funções.
 * - Tbm podemos passar uma função, assim como o callback
 */

 function multiplica(a=0,b=0){
   console.log(a*b);
 }

 function nome(nome='abc', callback = z =>{console.log(z)}){
   callback(nome);
 }

 nome("Igor Rodrigues");
