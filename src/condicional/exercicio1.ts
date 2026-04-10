// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

let num: number = Number(prompt("Informe um número para saber se ele é par ou ímpar: "))
if(num % 2 == 0){
    console.log("O número é par")
}
else{
    console.log("O número é ímpar")
}
if(num > 0){
    console.log("Esse número é positivo")
}
else{
    console.log("Esse número é negativo")
}