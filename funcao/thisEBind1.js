// Uso da palavra this o JS e o uso do Bind

const pessoa = {
  saudacao: "Boa noite!",
  falar() {
    console.log(this.saudacao); // Se for tirado o this vai ser gerado um erro falando que não conhece "saudacao"
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e POO

/*                  *Como solução será usado o Bind*
    bind: resolve a solução de "através de chamadas multiplas"
    falarDePessoa receberá o resultado gerado e o "this" estará associado a pessoa, 
    não mudara de contexto o "this", não mudando o apontamento 
    */
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
