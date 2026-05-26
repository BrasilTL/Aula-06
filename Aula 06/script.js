let fruta = "Maça";
let fruta2 = "Banana";
let fruta3 = "Laranja";

console.log(fruta);
console.log(fruta2);
console.log(fruta3);

let frutas = ["Maça", "Banana", "Laranja"];
console.log(frutas);

let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro"
};
console.log(pessoa)

let alunos = [
    {
        id: 1,
        nome: "Lucas",
        sobrenome: "Brasil"
    },
    {
        id: 2,
        nome: "Nicolas",
        sobrenome: "Glinka"
    },
    {
        id: 3,
        nome: "Rafael",
        sobrenome: "Hoffmann"
    }
]
console.log(alunos[0].sobrenome)

function soma(n1,n2){
    return n1 + n2;
}
console.log(soma(5,10))