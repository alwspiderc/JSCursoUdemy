/* 
O "this" dentro de uma função arrow é um "this" baseado em um contexto 
em que a função foi escrita, o fato de o "this" estar sendo chamado em locais
diferentes não influencia o valor dele.
*/

function Pessoa() {
  this.idade = 0;
  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa();
