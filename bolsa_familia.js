// Nesse progama o úsuario pode conferir se ele tem direito ao auxílio Bolsa Família

const prompt = require("readline-sync");

console.log("Seja bem-vindo(a)!");
console.log(
  "Aqui você podera verificar se podera ter acesso ao progama Bolsa Família"
);

let nome = prompt.question("Qual o seu nome? ");
let cpf = prompt.question("Digite seu CPF sem tracos ou pontos: ");

while (cpf.length < 11 || cpf.length > 11) {
  cpf = prompt.question("CPF invalido, digite novamente: ");
}

let nascimento = prompt.question("Digite sua data de nascimento sem barras: ");

while (nascimento.length < 8 || nascimento.length > 8) {
  nascimento = prompt.question(
    "Data de nascimento invalida, digite novamente: "
  );
}
let renda = Number(prompt.question("Digite sua renda bruta mensal: "));
let moradores = Number(
  prompt.question(
    "Quantas pessoas residem em sua residencia contando com voce? "
  )
);

let totalMoradores = 1;
let nomeMoradores = [nome];

while (totalMoradores < moradores) {
  let nomeMorador = prompt.question("Digite o nome completo da pessoa: ");
  nomeMoradores.push(nomeMorador);
  totalMoradores++;
}

idade = nascimento - 2024;

let rendaPerCapita = renda / moradores;

if (rendaPerCapita <= 218 && idade > 18) {
  console.log(
    `Ola ${nome}, voce tem direito a receber o auxílio do governo Bolsa Família, procure uma agência do CRAS próximo de sua residência!`
  );
} else {
  console.log(
    `Ola ${nome}, infelizmente você não possui direito ao Progama Bolsa Família!`
  );
}

console.log("Moradores: ", nomeMoradores);
console.log("Renda per capta: ", rendaPerCapita, "reais");
console.log("Idade: ", idade);
console.log("CPF: ", cpf)