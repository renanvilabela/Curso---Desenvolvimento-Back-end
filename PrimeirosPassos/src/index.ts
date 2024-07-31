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