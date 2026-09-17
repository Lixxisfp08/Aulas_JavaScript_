let Nota = 6;

if (Nota < 5) {
    console.log("Reprovado!");
} else if (Nota < 7) {
    console.log("Está de recuperação!");
}
else {
    console.log("Aprovado!")
}

// Exercícios

// 01 - Temperatura 
// Crie uma variável chamada 'Temperatura' e utilize uma estrutura condicional para verificar
// * Temperatura maior que 30 - "Está quente"
// * Temperatura entre 30 e 20 - "Temperatura agradável!"
// * Temperatura menor que 20 - "Está frio!"
// Exiba a mensagem no console

let Temp = 18;

if (Temp >= 30) {
    console.log("Está quente!")
} else if (Temp >=20 && Temp <= 30) {
    console.log("Temperatura agradável");
}
else
    console.log("Está frio!");

// 02 - Velocidade do veículo

// Crie uma variável chamada 'Velocidade' e verifique:
// * Até 60 km/h - "Velocidade permitida!"
// * Acima de 60km/h e até 80kh/h - "Atenção: Velocidade acima do permitido!"
// * Acima de 80km/h - "Velocidade máxima atingida!"
// Exiba a mensagem no console

let V = 88;

if (V <= 60) {
    console.log("Velocidade permitida!");
} else if (V <= 80) 
    console.log("Atenção: Velocidade acima do permitido!");
else {
    console.log("Velocidade máxima atingida!");
}

// 03 - Estoque 

// Crie uma variável chamada 'Quantidadeestoque' e verifique:
// * Quantidade = 0 - "Estoque esgotado"
// * Quantidade entre 1 e 10 - "Estoque baixo"
// * Quantidade acima de 10 - "Estoque disponível"
// Exiba no console

let QntEst = -1; 

if (QntEst <= 0) {
    if (QntEst < 0) {
        console.log("Estoque esgotado!");
    }
} else {
    if (QntEst <= 10) {
        console.log("Estoque baixo!");
    } else {
        console.log("Estoque disponível!");
    }
}

// 04 - Login

// Crie uma variável 'admin' e 'senha: 1234' e verifique:
// * - Usuário e senha corretos
// * - Se estiverem corretos - "Login efetuado com sucesso!"
// * - Se não - "Usuário e/ou senha incorretos!"

let user = "admin";
let senha = 1234;

if (user === "admin" && senha === 1234 ) {
    console.log("Login efetuado com sucesso!");
}
else {
    console.log("Usuário e/ou senha incorretos!");
}

// 05 - Horário do dia 

// Crie uma variável chamada 'hora' contendo o valor de '0 à 23' e verifique 
// Utilize as condicionais para informar e mostre no console
// * 0 até 11 - "Bom dia!"
// * 12 até 17 - "Boa tarde!"
// * 18 até 23 - "Boa noite!"

let Hora = 11;

if (Hora >= 0 && Hora <=11) {
    console.log("Bom dia, User!");
}
else if (Hora >=12 && Hora <= 17) {
    console.log("Boa tarde, User!");
}
else if (Hora >=18 && Hora <= 23) {
    console.log("Boa noite, User!");
}
else {
    console.log("Por favor, insira uma hora válida!")
}

// 06 - Classificação de nota de um produto 

// Uma loja recebe avaliações de seus clientes utilizado notas de 1 à 5
// Crie uma variável chamada 'Nota' classificando a avaliação de acordo com:
// * 5 - "Excelente"
// * 4 - "Muito bom"
// * 3 - "Bom"
// * 2 - "Regular"
// * 1 - "Ruim"
// Caso a nota não esteja entre 1 e 5, exiba "Nota inválida!"

let NotaAv = 1;

if (NotaAv === 5) {
    console.log("Excelente!");
} 
    else if (NotaAv === 4) {
    console.log("Muito bom!");
}
    else if (NotaAv === 3) {
        console.log("Bom!");
}
    else if (NotaAv === 2) {
        console.log("Regular");
}
    else if (NotaAv === 1) {
        console.log("Ruim");
    }
else {
    console.log("Nota inválida!")
}

// 07 - Tipo de ingresso

// Crie uma variável chamada 'TipoIngresso' onda ela possa receber: 'Inteira'; 'Meia'; 'V.I.P'
// Utilize as condicionais para exibir o preço correspondente:
// * inteira - R$40
// * Meia - R$20
// * V.I.P - R$80
// Caso seja informado outro tipo de ingresso, exiba no console: "Tipo de ingresso inválido!"

let TpIngr = "V.I.P";

if (TpIngr === "Inteira") {
    console.log("O valor do ingresso é: R$40");
} 
    else if (TpIngr === "Meia") {
        console.log("O valor do ingresso é: R$20");
    }
    else if (TpIngr === "V.I.P") {
        console.log("O valor do ingresso é: R$80");
    }
else {
    console.log("Tipo de ingresso inválido!");
}