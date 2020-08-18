/**
 * Importação de modulos usando o import.
 * Herança ainda por prototipagem
 */

import Carro from './carro.js';

class Sonix extends Carro{

  constructor(ano,porta,chassi){
    super(ano,porta,chassi);
  }
  abrirTetoSolar(){

      console.log("Abrindo Teto Solar");

  }
}

const sonix = new Sonix(1994,4,2564648);

console.log(sonix.qtdportas);
sonix.andar();
sonix.abrirTetoSolar();


Carro.buzina();

