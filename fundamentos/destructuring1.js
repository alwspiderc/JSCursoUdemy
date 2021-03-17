// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    enderenco : {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const {enderenco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

// const {conta: {ag, num} } = pessoa // dará erro porque dentro do objeto pessoas não existe conta {ag, num}
// cnsole.log(ag, num)