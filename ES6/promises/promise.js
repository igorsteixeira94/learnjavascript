/**
 * Promises permitem o usuario realizar operações assincronas.
 * Métodos disponiveis then(), catch(). Para tratar sucesso e erro, respctivamente.
 *
 */

const promise = new Promise((resolve,reject)=>{
  const resultado = true;
  const tempo = 2000;
  setTimeout(()=>{
    if(resultado){
      resolve('Ok');
    }else{
      reject('Error');
    }
    },tempo);
  });


promise
      .then(data => {
        console.log(`Resultado positivo ${data}`);
        throw new Error('Error');
        return data;
      })
      .then(data =>console.log(`Resultado positivo 2 ${data}`))
      .catch(data =>console.log(`Resultado negativo ${data}`));
console.log('antes');
