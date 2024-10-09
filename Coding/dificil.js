
function verificarSenha(senha) {
    let temNumero = false;

    
    for (let i = 0; i < senha.length; i++) {
        if (!isNaN(senha[i])) {  
            temNumero = true;
            break;
        }
    }

    if (senha.length >= 8 && temNumero) {
        console.log("A senha é válida.");
    } else {
        console.log("A senha deve ter no mínimo 8 caracteres e conter pelo menos um número.");
    }
}


let senhaUsuario = prompt("Digite sua senha:");
verificarSenha(senhaUsuario);

const readlineSync = require('readline-sync');


let nota1 = parseFloat(readlineSync.question("Digite a primeira nota: "));
let nota2 = parseFloat(readlineSync.question("Digite a segunda nota: "));
let nota3 = parseFloat(readlineSync.question("Digite a terceira nota: "));


let media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
