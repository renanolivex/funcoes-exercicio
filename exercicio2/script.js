//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const numeros = (num1,num2) =>{
const resultado = num1 + num2

return `A soma dos dois números é ${resultado}`

}

console.log(numeros(10,20))

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const funcao = (num1,num2) => {
const maiormenor = num1>=num2

return maiormenor

}

console.log(funcao(10,20))

//c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

const parimpar = (num1) =>{
const par = num1%2 == 0

return `O número ${num1} é par? ${par} `
}

console.log(parimpar(4))

//d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  

const salario = (num1) =>{
const salinss = num1 - (num1*0.1)

return `O valor fora inss do salário é: ${salinss}`
}

console.log(salario(1000.00))

