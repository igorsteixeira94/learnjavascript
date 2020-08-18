/**
 * Declaração de classes a partir do ES6.
 * Criação de modulos, import/export.
 */

export default class Carro {
  constructor(ano,qtdportas,chassi){
    this.ano = ano;
    this.qtdportas = qtdportas;
    this.chassi = chassi;
  }

  andar(){
    console.log('vrum vrum');
  }
  static buzina(){
    console.log("Bip Bip");
  }
};



