/**Weakmap são estruturas de dados no estilo chave/valor.
 * Diferente dos maps, aceitam apenas objetos como chave.
 * Possui os metodos:
 * set-> adicionar um elemento
 * get -> buscar um elemento;
 * has -> verificar se existe um elemento;
 * delete -> deletar um elemento;
 * WeakMap não temos problemas com vazamento de memória, uma vez que ele armazena a referencia de um objeto
 * Nunca usei ate o dia de hoje, nem sabia que existia ! kkk
*/

const pessoa = new WeakMap();
const p1 ={
  nome:'Joao',
  idade:'23'
};
var p2 ={
  nome:'Jose',
  idade:'23'
};
const p3 ={
  nome:'Maria',
  idade:'23'
};

pessoa.set(p1,'Joao');
pessoa.set(p2,'Jose');
pessoa.set(p3,'Maria');

console.log(pessoa); //Não é possivel acessar diretamente
console.log(pessoa.has(p1)); //Retorna true, pois p1 existe
console.log(pessoa.get(p1)); //Retorna o valor Joao.

p2 = {
  casa:'If'
}

const p4 ={

  nome:'Jose',
  idade:'23'

};

pessoa.delete(p1); //Deleta p1
console.log(pessoa.has(p1)); //Retorna False, pois p1 foi removido do weakmap


console.log(pessoa.has(p2)); //Retorna False, pois p2 perdeu referencia
console.log(pessoa.has(p4)); //Retorna false, pois não existe no weakmap





//Não é iteravel


