//a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

const soma = (num1,num2) => {
const somanum = num1 + num2

return somanum
}


const subtracao = (num1,num2) => {
const subnum = num1 - num2
    
return subnum
}


const multiplicacao = (num1,num2) => {
const multinum = num1 * num2
        
return multinum
}


const divisao = (num1,num2) => {
const divinum = num1 / num2
            
return divinum
}


//b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

let numAle = Number(prompt("insira um número aleatório"))
let numAle2 = Number(prompt("Digite outro número aleatorio"))

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.


console.log(soma(numAle,numAle2))
console.log(subtracao(numAle,numAle2))
console.log(multiplicacao(numAle,numAle2))
console.log(divisao(numAle,numAle2))

//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const somafunc = soma(numAle,numAle2)
const subfunc = subtracao (numAle,numAle2)
const mutifunc = multiplicacao(numAle,numAle2)
const divfunc = divisao(numAle,numAle2)


console.log(somafunc)
console.log(subfunc)
console.log(mutifunc)
console.log(divfunc)
