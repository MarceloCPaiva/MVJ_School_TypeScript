/**
 * Exercícios TypeScript MVJ Schools semana 2 - Marcelo Paiva
 * 
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 * */

interface User {
  name: string;
  age: number;
  interest: string[];
}

/**
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 
 * e o popule de acordo com suas informações.
 **/

const user: User = {
  name: 'Marcelo Paiva',
  age: 38,
  interest: ['programação', 'esportes', 'filmes', 'jogos']
}

/**3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 * e retorne somente a lista de assuntos do objeto.
 **/

function interestList(user: User) {
  return user.interest;
}

/** 4 - Coloque a tipagem tanto no argumento da função do exercício 3 
 * quanto no tipo de retorno dela.
 **/

 function interestListType(user: User): Array<string> {
  return user.interest;
}

/**
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 */

enum Materias {
  Angular = 'Angular',
  TypeScript = 'TypeScript',
  Git = 'Git'
}

/**
 *  6 - Crie mais um tipo para representar os professores, 
 * contendo nome e uma lista das matérias de cada um.
 */

type Professor = {
  nome: string,
  listaMaterias: Array<Materias>
}

/**
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 */

const Alan: Professor = {
  nome: 'Alan',
  listaMaterias: [Materias.Angular, Materias.TypeScript, Materias.Git]
}
const Nathan: Professor = {
  nome: 'Nathan',
  listaMaterias: [Materias.Angular, Materias.Git]
}

/**
 * 8 - Declare e popule um array com os objetos do exercício 7.
 */

const typeProfessores: Professor[] = [Alan, Nathan]

/**
 * 9 - Faça uma função que receba um argumento de array de Professor 
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 */

function nameTeacher (arrayProfessores: Professor[]): string[] {
  let nomes: string[] = [];
  arrayProfessores.forEach(function(professor){
      nomes.push(professor.nome);
  });
  return nomes;
}

/**
 * 10 - Faça uma função que receba um argumento de array de Professores 
 * e retorne um array de materias.
 */

const arrayMaterias = (professor: Professor[]) => {
  let cursos: Array<string> = [];
  typeProfessores.forEach(function(professor: Professor) {
    professor.listaMaterias.forEach(function(curso) {
      cursos.push(curso);
    })
  })

  return cursos
}

/**
 * 11 - Faça uma função que receba um argumento de array de Professores e 
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 */

const profTypescript = (professor: Professor[]) => {
  return typeProfessores.find(professor => professor.listaMaterias.includes(Materias.TypeScript))
}