// ------ ARRAY - (LISTA) ------

// let n1 = "Karen";
// let n2 = "David";
// let n3 = "Luiz";
// let n4 = "Gyovanna";

//                0         1        2         3      
// let nomes = ["Karen", "David", "Luiz", "Gyovanna"];

// console.log(nomes); //mostra a lista completa 

// console.log(nomes[1]); // mostra o item da lista de acordo com sua posição

// nomes[2] = "Mirella"; //Assim, eu altero o valor da posição específica

// console.log(nomes.length); //mostra o tamanho do Array

// ----- ARRAY - EXERCÍCIOS -----

// Exercício 01 - Frutas
// Crie um Array chamado frutas contando 5 frutas. Depois:
// 1. Exiba o array completo
// 2. Exiba a primeira fruta
// 3. Exiba a terceira fruta 
// 4. Exiba a quantidade de frutas

// let frutas = ["Maçã", "Banana", "Kiwi", "Tangerina", "Limão"];

// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[2]);
// console.log(frutas.length);

// Exercício 02 - Lista de cidades
// Crie um Array chamado cidades contendo 5 cidades brasileiras. Depois:
// 1. Exiba o Array completo
// 2. Altere a segunda cidade
// 3. Exiba a segunda cidade 
// 4. Exiba a quantidade de cidades

// let cdds = ["São Paulo", "São Bernardo", "Pernambuco", "Minas Gerais", "Rio de Janeiro"];

// console.log(cdds);
// cdds[1] = "Campinas";
// console.log(cdds[1]);
// console.log(cdds.length);  

// ----- ARRAY + LAÇO DE REPETIÇÃO -----

// let cdds = ["São Paulo", "São Bernardo", "Pernambuco", "Minas Gerais", "Rio de Janeiro", "Águas de Lindoya"];

// for (let index = 0; index < 5; index++) {
//     console.log(cdds[index]);
// }

// for (let haha = 0; haha < cdds.length; haha++) {
//     console.log(cdds[haha]);
// }

// ----- EXERCÍCIOS -----

// Exercício 01 - Nomes
// Crie um Array com 6 nomes e use o 'for' para exibir todos os nomes no console

// let nomes = ["Marianna", "Lucas G.", "Gyovanni", "Karina", "Sophia", "Felipe"];

// for (let index = 0; index < 6; index++) {
//     console.log(nomes[index]);
// }

// Exercício 02 - Preços
// Crie um Array contendo 5 preços de produto e use o 'for' para exibi-los no console

// let pprod = [150.49, 19.90, 29, 46, 21.45];

// for (let index = 0; index < 5; index++) {
//     console.log(pprod[index]);
// }

// Exercício 03 - Produtos e Preços
// Crie dois Arrays, um contendo 5 nomes de produtos e o outro contendo 5 preços preços dos mesmos
// Utilize o 'for' para exibir todos 

// let prod = ["Arroz", "Farinha de Mandioca", "Leite", "Bala fini Beijos", "Fanta Laranja Zero Açucar"];

// let precos = [11.49, 13.90, 12.79, 8.99, 13.29];

// for (let index = 0; index < 5; index++) {
//     console.log("Produto: " + prod[index] + " Valor R$: " + precos[index]);
// }

// ------ ESTRUTURA DE REPETIÇÃO + ESTRUTURA DE DECISÃO ------

// for (let index = 0; index <= 10; index++) { // contando de 0 à 10
    
//     if (index >= 5) {// verificando se o valor é maior ou igual a 5
//     console.log(index); // mostra o número
//     }
// }

// let ns = [2, 20, 39, 21, 40, 33, 4, 5, 100, 19];
// for (let index = 0; index < ns.length; index++) { //lendo o array 
    
//     if (ns[index] >= 10) {// verificando se o valor é maior ou igual a 10
//         console.log(ns[index]); //mostra os números do array
//     }
// }

// let ns = [2, 20, 39, 21, 40, 33, 4, 5, 100, 19];

// for (let index = 0; index < ns.length; index++) {
//     let sobra = ns[index] % 2;

//     if (sobra == 0) {
//         console.log("O número " + ns[index] + " é: Par");
//     } else {
//         console.log("O número " + ns[index] + " é: Ímpar");
//     }
// }

// ------ EXERCÍCIOS ------

// Exercício 01 - Analisando notas
// Crie um Array com 8 notas e utilize o for para percorrer as notas e if/else para informar:
// Nota maior ou igual à 7 - "Aprovado"
// Nota menor que 7 - "Reprovado"

let notas = [2, 3, 7.5, 9, 10, 3.5, 6.7, 10];

for (let index = 0; index < notas.length; index++) {
    
    if (notas[index] >= 7) {
        console.log(notas[index] + " " + "Aprovado!");
    } else {
        console.log(notas[index] + " " + "Reprovado!"); 
    }
}

// Exercício 02 - Temperatura 
// Crie um array contendo 7 temperaturas, use o for para percorrer o Array e utilize o if/else para classificar cada temperatura:
// Maior que 30 - "Quente"
// Entre 20 e 30 - "Agradável"
// Menor que 20 - "Frio"

let temp = [20, 9, 30, 100, 12, 24, 27];

for (let index = 0; index < temp.length; index++) {
    
    if (temp[index] >= 30) {
        console.log(temp[index] + " " + "Quente!");
    } else if (temp[index] >=20 && temp[index] <= 30) {
        console.log(temp[index] + " " + "Agradável");
    } else {
        console.log(temp[index] + " " + "Frio!")
    }
}