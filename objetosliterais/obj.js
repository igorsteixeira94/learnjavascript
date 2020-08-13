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
