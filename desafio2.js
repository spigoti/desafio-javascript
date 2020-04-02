/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
function sum(n1, n2){
    return n1+n2;
}
exports.sum = sum;

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
function fullname(name, lastname){
    return name + ' ' + lastname;
}

exports.fullname = fullname 

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calculate(n1, n2, n3){
    if(n1 && n2 && n3){
        return n1 * n2 * n3 + 2;
    }
    return "Preencha todos os valores corretamente!"; 
}
exports.calculate = calculate

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
function calculatev2(n1, n2, n3){
    if(arguments.length === 0 || n1==null){
        return false;
    }else if(arguments.length === 1){
        return n1;
    }else if(arguments.length === 2){
        return n1+n2;
    }else {
        return (n1+n2)/n3;
    }
}
exports.calculatev2 = calculatev2

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
function isPair(n1){
  if(n1%2 == 0){
      return true;
  }  
  return false;
}
exports.isPair = isPair
