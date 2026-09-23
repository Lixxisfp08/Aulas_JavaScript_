// let idade = 20;

// if (idade >= 18) {
//     console.log("Maior de idade!")
// } else {
//     console.log("Manor de idade!")
// }

// let media = 6;

// if (media >= 7) {
//     console.log("Aprovado!");
// } 
// else if (media == 5 || media == 6) {
//     console.log("Recuperação!");
// }
// else {
//     console.log("Reprovado!")
// }

// --- ESTRUTURAS DE REPETIÇÃO ---

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");

// FOR
// for (variável; condição; incremento) {
//
//}

// //INCREMENTO
// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

// // DECREMENTO
// for (let index = 10; index > 0; index--) {
//     console.log(index);
// }

// //PERSONALIZADO
// for (let index = 10; index >= 0; index-=2) {
//     console.log(index);
// }

// --- EXERCÍCIOS ---

// 01 - Contador
// Crie um programa que utilize for para exibir no console os números de 1 até 20

// for (let contador = 1; contador <=20; contador++) {
//     console.log(contador);
// }

// 02 - Multíplas
// Utilize o for para exibir no console múltiplos de 5, entre 5 e 50

// for (let multp = 0; multp <= 50; multp+=5) {
//     console.log(multp);
// }

// 03 - Decremento
// Utilize um for para exibir no console uma contagem regressiva de 10 até 0 e depois uma mensagem: "Contagem finalizada!"

// for (let decrem = 10; decrem >=0; decrem--) {
//     console.log(decrem);
// }
// console.log("Contagem finalizada!");

// WHILE

// let contador = 0;
// while (contador <= 10) {

//     console.log(contador);
//     contador++;
// }

// --- EXERCÍCIOS /2 ---

// Exercício 01 - Contador
// Utilize While para exibir no console os números de 10 até 20

// let cnt = 10;
// while (cnt <= 20) {
//     console.log(cnt);
//     cnt++
// }

// Exercício 02 - Números pares
// Utilize While para exibir os números para de 2 até 20

// let pares = 2;
// while (pares <= 20) {
//     console.log(pares);
//     pares+=2
// }

// DO WHILE

// let n = 10;

// // condição verificada antes
// while (n < 5) {
//     console.log("WHILE");
// }

// // condição verificada depois
// do {
//     console.log("DO...WHILE");
// } while (n < 5);

// let contador = 0;

// do {
//     console.log(contador);
//     contador++
// } while (contador <= 10);

// --- EXERCÍCIOS /3 ---

// Exercício 01 - Contagem
// Utilize Do...While para exibir no console os números de 10 até 100

// let ncont = 10;

// do {
//     console.log(ncont);
//     ncont++
// } while (ncont <= 100);

// Exercício 02 - Contagem Regressiva
// Utilize Do...While para exibir no console uma contagem regressiva de 10 até 1

// let regr = 10;

// do {
//     console.log(regr);
//     regr--
// } while (regr >= 1);

// HAPPY :33

// ------ ARRAY - (LISTA) ------

let n1 = "Karen";
let n2 = "David";
let n3 = "Luiz";
let n4 = "Gyovanna";

//             0         1        2         3       
let nomes = ["Karen", "David", "Luiz", "Gyovanna"];

console.log(nomes); //mostra a lista completa 

console.log(nomes[2]); // mostra o item da lista de acordo com sua posição

n4 = "Mirella";
nomes[2] = "Mirella"; //Assim, eu altero o valor da posição específica

console.log(nomes.length); //mostra o tamanho do Array