/**
 * 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
    multiplicação e divisão desses valores.
 * 
 */

const resul = (n1, n2) => {
  return `Soma: ${n1 + n2} \n Subtração: ${n1 - n2}\n Multiplicação: ${
    n1 * n2
  }\n Divisão: ${n1 / n2}`;
};

console.log(resul(3, 2));
