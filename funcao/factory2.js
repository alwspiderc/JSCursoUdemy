function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}

console.log(criarProduto("escova", 1.5));
console.log(criarProduto("pizza familia", 60.0));
