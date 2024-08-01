//console.log("dale rato loko");

let nome : string = "Renan Vila Bela";
let idade = 20;
const naturalidade: string = "Olinda-PE"; 
const dataNasc = "01/11/2003";

let cursos : string[] = []

cursos.push("ADS");
cursos.push("Design Future Front-End");
cursos.push("Js do Básico ao Avançado");
cursos.push("Curso TypeScript");

console.log(cursos)

cursos.pop();

cursos.shift();

console.log(cursos);

let ourTuple: [number, boolean, string];

ourTuple = [5, false, 'santa cruz futebol clube'];

console.log(ourTuple);

console.log(ourTuple[2]);

const car: {type: string, model: string, year: number} = {
    type: "mitsubishi",
    model: "Lancer",
    year: 2000
}

console.table(car)

enum diasDaSemana {
    domingo = 1,
    segunda = 2,
    terça = 3,
    quarta = 4,
    quinta = 5,
    sexta = 6,
    sábado = 7
}

interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };

  class Genero {
    private nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
  }

  let genero1: Genero = new Genero("Drama");
  console.table(genero1);

  class Filme {

    private titulo: string;
    private duracao: number;
    private preco: number;
    private genero: Genero;


    constructor(titulo: string, duracao: number, preco: number, geneco: Genero) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.preco = preco;
        this.genero = geneco;
    }
    
  }

  let primeiroFilme: Filme = new Filme("300", 182, 3.5, genero1);
  console.table(primeiroFilme);