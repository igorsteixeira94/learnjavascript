_Repositorio de aprendizado da linguagem EcmaScript2015 e superior._


### Especificações

Para quem deseja conhecer as funcionalidades mais atuais do JavaScript, [acesse](http://ecma-international.org/ecma-262/10.0/index.html#Title) a especificação da ECMAScript ("orgão regulador" que rege as especificações da linguagem de script que o JavaScript implementa). Atualmente em sua 10ªEdição ES2019.

A mais comumente utilizada é a ES2015 ou ES6, pois possue suporte na maioria das engines (exemplo: V8 do Chrome). Este [link](https://kangax.github.io/compat-table/es6/) mostra a porcentagem das especificações que são suportadas !

### Manipulação de Arrays:

_[Para mais conteudo](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)_

-   [forEach](https://github.com/igorsteixeira94/learnjavascript/blob/master/arrays/forEach.js): Percorre os elementos do array executando uma função callback sobre cada elemento iterado.
-   [map](https://github.com/igorsteixeira94/learnjavascript/blob/master/arrays/map.js): Percorre os elementos do array executa uma função callback sobre cada elemento e retorna uma nova instancia do array.
-   [filter](https://github.com/igorsteixeira94/learnjavascript/blob/master/arrays/filter.js):Percorre os elementos do array e retorna uma nova instancia do array, se o criterio de avaliação passado for verdadeiro.
-   [find](https://github.com/igorsteixeira94/learnjavascript/blob/master/arrays/find.js): Percorre os elementos do array, buscando o primeiro elemento que satisfaça a procura.
-   [every](https://github.com/igorsteixeira94/learnjavascript/blob/master/arrays/every.js): Funciona com um validador de dados, verificando se todos os elementos de um array respeitam dada condição. Seu retorne é true ou false. Caso encontre o primeiro resultado false, encerra a operação.
-   [some](https://github.com/igorsteixeira94/learnjavascript/blob/master/arrays/some.js): Sua funcionalidade é o contrario da every ! Caso encontre um resultado true encerra a operação.
-   [reduce](https://github.com/igorsteixeira94/learnjavascript/blob/master/arrays/reduce.js): Sua função é pegar todos os elementos de um array e transforma-los em um unico elemento.
-   [includes !ES2016!](https://github.com/igorsteixeira94/learnjavascript/blob/master/arrays/reduce.js): Verifica se o array tem um determinado elemento, retornado true ou false. Esse metódo existe para manupulação de strings desde o ES2015, agora sua implementação foi extendida para os Arrays no ES2016.

### [Iteração, iterável e iterador :](https://github.com/igorsteixeira94/learnjavascript/blob/master/iteracoes/iteracao.js)

-   Iteração - Nada mais é que o processo de passar por um grupo de elementos, lista, elemento por elemento. "Como fazemos ao usar map, filter, for..."

*   Iterável - É todo e qualquer objeto que deixa de maneira explicita como ele teve ser iterado. Implementando seu iterador na propriedade de chave Symbol.iterator. Exemplo de iteráveis: Arrays, Set e Strings.

-   Iterador - É o objeto que sabe acessar os itens de um iterável, guardando sua posição atual. Basicamente um iterador é como se fosse um item daquela lista iterável. Que possue o metodo next() para avançar sobre os itens do objeto iterável. E retorna um objeto {value:valor extraido,done:true | false}. Done indica se o objeto foi totalmente acessado.

### For...of e For...in

-   [for...of](https://github.com/igorsteixeira94/learnjavascript/blob/master/iteracoes/forof.js): Utilizado para percorrer apenas objetos que são iteráveis.

-   [for...in](https://github.com/igorsteixeira94/learnjavascript/blob/master/iteracoes/forin.js): Percorre o nome dos atributos do objeto, as propriedades enumeradas. Em um objeto, ele pega o nome de cada atributo, em um array ele retorna o index de cada elemento.

**🏗️ Em construção**
