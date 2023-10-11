let eduardo = {
    nome : "Eduardo",
    idade : 41, 
    altura : 1.80
};

eduardo.peso = 89;

let carlos = new Object();

carlos.nome = "carlos";
carlos.idade = 36;
carlos.sobrenome = "Roque";

let pessoas = [];





console.log(carlos);
console.log(eduardo);
console.log(pessoas);

pessoas.forEach((v,i) => {

    console.log(`Nome ${i+ 1}: ${v.nome}`);
    
});