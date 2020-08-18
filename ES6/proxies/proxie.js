/**
 * Proxies são ferramentas para interceptação;
 * São usadas tbm para metaprogramação, ou seja, Programas que geram outros programas
 * Permite alterar o comportamento dos objetos e customizá-los.
 * Existem varias traps(armadilhas disponiveis para os proxies), como nos exemplos usamos get e set
 */

class Usuario{
  constructor(login,senha){
    this.login = login;
    this.senha = senha;
  }
}

const usuario = new Usuario('Igor',123);

console.log(usuario.senha);

const proxy = new Proxy(usuario,{
  get(alvo,propriedade){
    console.log(`${propriedade} foi acessada`);
    return alvo[propriedade];
  }
});

console.log(proxy.senha);
