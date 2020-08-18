/**
 * Listas sem repedições, ou seja, não aceita repedições
 * Aceita como chaves apenas objetos.
 * Possui os metodos, mesma funcionalidade do weakmap:
 * add-> adicionar um elemento
 * get -> buscar um elemento;
 * has -> verificar se existe um elemento;
 * delete -> deletar um elemento;
*/

const playList = new Set();

const musica1 ={
  titulo: 'Music1',
  autor: 'author1'
};
const musica2 ={
  titulo: 'Music2',
  autor: 'author2'
};
const musica3 ={
  titulo: 'Music1',
  autor: 'author1'
};
const musica4 = musica3;

playList.clear();
playList.add(musica1);
playList.add(musica2);
playList.add(musica3);
playList.add(musica4);


console.log(playList); //Retorna o objeto musica1,musica2,musica3



