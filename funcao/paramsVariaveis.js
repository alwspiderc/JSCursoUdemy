/* 
    Toda função tem o array "arguments" disponível, 
    quando nenhum parâmetro é passado, esse array
    está vazio, quando é passado esse array está 
    com esses parâmetros e você tem a possibilidade 
    de pegar todo os parêmetros passados através de 
    uma função e fazer a operação que quiser.
*/

/*  Obs: na versão atual do ecmascript existe um operador 
    específicopara isso, chamado rest/spread. */

function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }

  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(1.1, 2.2, "teste"));
console.log(soma("a", "b", "c"));
