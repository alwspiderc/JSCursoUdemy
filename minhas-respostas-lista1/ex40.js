/**
    40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
    modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
    conceito B e de 9,0 a 10,0 o conceito A.
 */

function conceito(c) {
  for (let i of c) {
    if (i >= 0.0 && i <= 4.9) {
      console.log(`${i} = D`);
    } else if (i >= 5.0 && i <= 6.9) {
      console.log(`${i} = C`);
    } else if (i >= 7.0 && i <= 9.9) {
      console.log(`${i} = B`);
    } else if (i >= 9.0 && i <= 10) {
      console.log(`${i} = C`);
    }
  }
}

const c = [0.6, 0.9, 5.0, 7.5, 8.6, 6.8, 2.8, 9.7, 6.2];
conceito(c);
