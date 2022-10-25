/* //a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
const nome = function (nome1){
return `Olá, ${nome1}`
}
console.log(nome("Renan"))

//b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.

const numero = function (num1){
const numx1 = num1*1
const numx2 = num1*2
const numx3 = num1*3
const numx4 = num1*4
const numx5 = num1*5
const numx6 = num1*6
const numx7 = num1*7
const numx8 = num1*8
const numx9 = num1*9
const numx10 = num1*10

return `A tabuada do número ${num1} é:
1x${num1} = ${numx1}
2x${num1} = ${numx2}
3x${num1} = ${numx3}
4x${num1} = ${numx4}
5x${num1} = ${numx5}
6x${num1} = ${numx6}
7x${num1} = ${numx7}
8x${num1} = ${numx8}
9x${num1} = ${numx9}
10x${num1} = ${numx10}
`
}

console.log(numero(5))
console.log(numero(8))
console.log(numero(4)) */

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const nome = (nome1)=> {
    return `Olá, ${nome1}`
}

console.log(nome("Renan"))


const numero = (num1)=>{
    const numx1 = num1*1
    const numx2 = num1*2
    const numx3 = num1*3
    const numx4 = num1*4
    const numx5 = num1*5
    const numx6 = num1*6
    const numx7 = num1*7
    const numx8 = num1*8
    const numx9 = num1*9
    const numx10 = num1*10
    
    return `A tabuada do número ${num1} é:
    1x${num1} = ${numx1}
    2x${num1} = ${numx2}
    3x${num1} = ${numx3}
    4x${num1} = ${numx4}
    5x${num1} = ${numx5}
    6x${num1} = ${numx6}
    7x${num1} = ${numx7}
    8x${num1} = ${numx8}
    9x${num1} = ${numx9}
    10x${num1} = ${numx10}
    `
    }
    
    console.log(numero(5))
    console.log(numero(8))
    console.log(numero(4))

    