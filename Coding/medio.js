
const readline = require('readline-sync');

let nome = readline.question("Qual é o seu nome? ");
let idade = readline.questionInt("Qual é a sua idade? ");



if (idade >= 18) {
    console.log(`${nome}, você é maior de idade.`);
} else {
    console.log(`${nome}, você não é maior de idade.`);
}

let numeromaior1 = 25; 
let numeromaior2 = 50; 

if (numeromaior1 > numeromaior2) {
    console.log(`O maior número é: ${numeromaior1}`);
} else if (numeromaior2 > numeromaior1) {
    console.log(`O maior número é: ${numeromaior2}`);
} else {
    console.log("Os números são iguais.");
}


let texto = "Exemplo";

if (texto.length > 5) {
    console.log("O texto contém mais de 5 caracteres.");
} else {
    console.log("O texto não contém mais de 5 caracteres.");
}

let texto1 = "Estou aprendendo JavaScript.";

if (texto1.includes("JavaScript")) {
    console.log("A string contém a palavra 'JavaScript'.");
} else {
    console.log("A string não contém a palavra 'JavaScript'.");

}
 
const readline = require('readline-sync');

let salario = readline.questionFloat("Digite seu salário: ");

if (salario > 2000) {
    console.log("Seu salário está acima de R$ 2.000.");
} else {
    console.log("Seu salário não está acima de R$ 2.000.");
}
