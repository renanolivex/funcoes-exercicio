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

console.log(soma(2,2))
console.log(subtracao(2,2))
console.log(multiplicacao(2,2))
console.log(divisao(2,2))

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.


const somafunc = soma(2,2)
const subfunc = subtracao (2,2)
const mutifunc = multiplicacao(2,2)
const divfunc = divisao(2,2)


console.log(somafunc)
console.log(subfunc)
console.log(mutifunc)
console.log(divfunc)
