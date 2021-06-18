/**
 * 04) Crie uma função que irá receber dois valores, o dividendo e o divisor.
 * A função deverá imprimir o resultado e o resto da divisão destes dois valores.
 */

const resul = (dividendo, divisor) => {
  if (dividendo >= divisor) {
    let divisao = Math.floor(dividendo / divisor);
    let resto = dividendo % divisor;
    console.log(`Divisão: ${divisao} \nResto: ${resto}`);
  } else {
    return console.log("O dividendo tem que ser maior que o divisor!");
  }
};

resul(11, 2);
