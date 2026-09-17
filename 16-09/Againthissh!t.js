// Operadores artimétricos

// + = soma 
// - = subtração
// * = multiplicação
// / = divisão
// % = sobra da divisão

// let n1 = 6;
// let n2 = 7;

// console.log(n1 + n2);
// console.log(n1 - n2);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(n1 % n2);

// console.log((n2 + n1) * 2);
// console.log((n2 - n1) * 2);
// console.log((n2 + n1) / 2);
// console.log((n2 - n1) / 2);

// console.log("Batata" + " " + n1 + n2);

// Crie 3 variaveis, cada um contendo um numero, some as 3 e tire a Media, exibindo  no console.

// let tri1 = 8;
// let tri2 = 6.5;
// let tri3 = 4.5; 

// console.log("A soma de " + tri1 + tri2 + tri3 + " é de: " + (tri1 + tri2 + tri3) / 2);

// let Idade = 21;

// // console.log(Idade > 18);
// // console.log(Idade < 18);
// // console.log(Idade == 18);
// // console.log(Idade >= 18);
// // console.log(Idade <= 18);
// // console.log(Idade != 18);

// console.log(Idade === 18);

// V && V = V
// V && F = F
// F && V = F
// F && F = F

// console.log(Idade >= 18 && habilitado == true);

// // V || V = V
// // V || F = F
// // F || V = F
// // F || F = F

// let Idade = 18;

// console.log(Idade >= 18 || habilitado == true);

// console.log(!habilitado);

// Se Idade for = 18
    // Faça isso

// Se não
    // Faça aquilo

let habilitado = true;

if (habilitado == true) { 
    console.log("Pode dirigir!");

} else {
    console.log("NÃO pode dirigir!");
}

let Idade = 16;

if (Idade >= 18) {
    console.log("Maior de idade, acesso liberado!");
} else {
    console.log("Menor de idade, acesso negado!");
}

// Crie um sistema que compare o valor de uma variavel senha SE for igual a 1234 escreva no console "Acesso Liberado" SE NÂO escreva "Acesso Negado"

let Senha = 2230;

if (Senha == 1234) {
    console.log("Acesso Liberado!");
} else {
    console.log("Acesso Negado!");
}

// Crie um sistema que avalie uma variavel nota. SE nota for maior que 6, escreva "Aprovado", SE NÂO, escreva reprovado

let Nota = 4.5;

if (Nota >= 6) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

// Crie um sistema que compare o valor de uma compra, SE a compra for maior que 500, calcule um desconto de 20 e mostre o valor total da compra com desconto SE NÂO mostre a mensagem COMPRA SEM DESCONTO

let Compra = 329.90;

if (Compra >= 500) {
    console.log("O valor total da compra com desconto foi: " + (Compra - 20));
} else {
    console.log("Compra sem desconto!");
}