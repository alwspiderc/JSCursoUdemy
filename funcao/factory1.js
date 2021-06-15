/*
    Factory: função que retorno um objeto.
*/

// Factory simples
function criarPessoa() {
  return {
    nome: "Ana",
    sobrenome: "Silva",
  };
}

console.log(criarPessoa());
