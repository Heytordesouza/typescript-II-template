/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

//1

type TPessoa = {
  nome: string,
  idade: number,
  corFavorita: Cor
}

enum Cor {
  PRETO = "Preto",
  BRANCO = "Branco",
  VERDE = "Verde",
  ROSA = "Rosa",
  AZUL = "Azul",
}

const Pessoa1:TPessoa = {
  nome: "Heytor",
  idade: 20,
  corFavorita: Cor.VERDE
}

const Pessoa2:TPessoa = {
  nome: "Heron",
  idade: 17,
  corFavorita: Cor.AZUL
}

const Pessoa3:TPessoa = {
  nome: "Miriam",
  idade: 74,
  corFavorita: Cor.BRANCO
}

const Pessoa4:TPessoa = {
  nome: "Janaina",
  idade: 20,
  corFavorita: Cor.ROSA
}

