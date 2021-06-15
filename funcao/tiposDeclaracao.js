/* 
consigo chamar uma função declaration antes 
mesmo ante da linha de declaração. 
*/

console.log(soma(3, 4));
// Function declaration
function soma(x, y) {
  return x + y;
}

/* só pode ser chamada depois da linha de declaração */
// function expression
const sub = function (x, y) {
  return x - y;
};
console.log(sub(3, 4));

/* só pode ser chamada depois da linha de declaração */
// named function expression
const mult = function mult(x, y) {
  return x * y;
};
console.log(mult(3, 4));
