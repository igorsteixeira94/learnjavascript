/**
 * Melhorias nos objetos literais, podemos criar objetos
 * Podemos criar uma chave a partir de uma string
 */

 const pessoa = {
   nome:"Igor",
   sobrenome:"Rodrigues",
   apresentar(){
     console.log(this.nome,this.sobrenome);
   }
 }

const nomeChave = "invocar";

const objeto ={
  [nomeChave](){
    console.log('executou o metodo');
  }
}

objeto.invocar();

/**
 * Desestruturação de arrays e objetos.
 * Possivél usar a sintaxe de objeto litarais para extrair valores,
 * Podemos desestruturar e objetos e dar apelidos a ele.
 * Podemos desestruturar arrays
 * Podemos desestruturar objetos e arrays.
 */

 const user={
   nome:'Igor Rodrigues',
   email:'igor@mail.com',
   senha:'123',

 }

 const {nome,senha} = user;

 console.log(nome,senha);

const {email:usuario} = user;

//console.log(email); //not defined
console.log(usuario);

const users=[
  {
  nome:['Igor', 'Rodrigues'],
  email:'igor@mail.com',
  senha:'123',
  },
  {
    nome:['Iuri', 'Rodrigues'],
    email:'iuri@mail.com',
    senha:'321',
  }
];

const [,{senha:pass}] = users;

console.log(pass); // pegando a senha do segundo usuario

const [{nome:[,sobrenome]}] = users;

console.log(sobrenome);//Pega o sobrenome do primeiro usuario
