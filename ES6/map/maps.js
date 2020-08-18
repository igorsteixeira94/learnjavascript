/**Mapas são estruturas de dados no estilo chave/valor.
 * Todo objeto em JS tem a concepção de ser um mapa.
 * A estrutura Map é uma implementação real de um mapa.
 * Qualquer elemento pode ser uma chave ou um valor
 * Possui os metodos:
 * set-> adicionar um elemento
 * get -> buscar um elemento;
 * has -> verificar se existe um elemento;
 * size -> tamanho do map;
 * delete -> deletar um elemento;
 * clear -> apagar todo o map.
 * São objetos iteraveis, podemos usar for...of
*/

const calc = new Map();

calc.set('um',1); //chave, valor
calc.set('dois',2);

console.log(calc.get('um')); //Retorna o valor = 1
console.log(calc.has('um')); //Retorna True, pois existe uma chave 'um'

console.log(calc.has('tres')); //Retorna False, pois não existe uma chave 'tres'


calc.delete('um'); //Deleta o elemento de chave 'um'

calc.clear(); //Deleta todos os elementos

console.log(calc.size); //Retorna 0, pois o map não possui elementos

const number ={
  um:1,
  dois:2
}
const soma = (number) =>{
  return (number.um+number.dois);
};

calc.set('numeros',number);
calc.set('soma',soma(number));

for(var item of calc.keys()){
  console.log(item);
}

for(var item of calc.values()){
  console.log(item);
}


for(var item of calc.entries()){
  console.log(item);
}
