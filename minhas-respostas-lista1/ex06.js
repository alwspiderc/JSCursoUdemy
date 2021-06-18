/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
  let calculo = capitalInicial + capitalInicial * taxaJuros * tempoAplicacao;
  return console.log(calculo);
};

const jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
  let calculo = capitalInicial * Math.pow(1 + taxaJuros, tempoAplicacao);
  return console.log(calculo);
};

jurosSimples(500, 1.1, 6);
jurosCompostos(10.0, 00, 5 / 100, 18);
