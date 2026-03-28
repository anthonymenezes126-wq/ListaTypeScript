// 1. Crie um programa que receba um número e informe se ele é positivo, negativo ou zero.

let numero: number = 5
if(numero > 0){
    console.log("Positivo")
}
else if(numero < 0){
    console.log("Negativo")
}
else{
    console.log("Zero")
}

// 2. Crie uma função que receba um número e retorne se ele é par ou ímpar.

function hePar (n: number): string {
    return n % 2 === 0 ?"Par" : "Ímpar"
}
let n: number = 5
console.log(hePar(n))

// 3. Use um laço for para imprimir os números de 1 a 10.

for (let i: number = 1; i<=10; i++){
    console.log(i)
}

// 4. Use um laço while para imprimir os números de 10 a 1.

let i: number = 10
while(i >= 1){
    console.log(i)
    i--
}

// 5. Crie uma função que receba a idade de uma pessoa e informe se ela é maior de idade.

function validarIdade (idade: number) {
    if(idade >= 18){
        console.log("Você é maior de idade")
    }
    else{
        console.log("Você é menor de idade")
    }
}
let idade = Number(prompt("Informe sua idade: "))