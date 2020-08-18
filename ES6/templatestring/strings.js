/**
 * Podemos manipular uma string de maneira mais facil em JS,
 * Usando crases, podemos ter a mesma formatação escrita e impressa em código.
 * Podemos colocar objetos, calculos, funções,..., dentro das crases.
 */

 const nome = "Igor Rodrigues";

 console.log(`Olá, seja bem-vindo,               ${nome}`);//O espaçamento tbm é aplicado.


 console.log(`Olá, seja bem-vindo,
${nome}`); //Quebras de linha tbm são aplicadas

/**
 * Template marcado -> Podemos manipular uma string diretamente
 * Mensagem para dar bom dia, boa tarde ou boa noite.
 */
const horas = 18;
const mensagem = defineMensagem`${""} são ${horas} horas`;

function defineMensagem(strings,...values){
  const [dia,hora] = values;
  if(hora >= 6 && hora < 12 ){
    values[0] = "Bom dia";
  } else if(hora >=12 && hora <18){
    values[0] = "Boa tarde";
  }else{
    values[0] = "Boa Noite";
  }
  return `${values[0]} ${strings[1]} ${hora} ${strings[2]}`
}

console.log(mensagem); //de acordo com a variavel hora, teremos uma mensagem diferente
