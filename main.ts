/////// npm init -y ////////// arquivo json

////// criar main ts /////////

////// npm i -D typescript tsc //////

///// criar arquivo .gitignore ///////


///// tsc -v ///////

///// tsc main.ts /////////


//// npm install -g ts-node ////////

//// ts-node main.ts ////////////





const readline = require("readline-sync");

// console.log("ola mundo!");

let numero: number;

let nulo: null = null;

let nome: string;

let escolha: boolean;

let numeros: Array<number> = [1, 2, 3];

let pessoa1: object = {
    nomePessoa: "jan",
    sobrenome: "anjos",
}

// console.log(pessoa1);


enum TipoDeUsuario {
    Administrador,
    UsuarioComum,
    Convidado,
}

// function verificarPermissao(usuario : TipoDeUsuario) : void {

//     if(usuario == TipoDeUsuario.Administrador){
//         console.log("Administrador logado, você tem as permissões de Admin!");
        
//     }else if (usuario == TipoDeUsuario.UsuarioComum){
//         console.log("Usuário comum logado, voce so tem permissões de estudante");
        
//     }else (usuario == TipoDeUsuario.Convidado){
//         console.log("Convidado logado, voce so tem permissões de leitura");
        
//     }

    
// }

// let usuario = readline.question("qual o seu usúario?");


// let num: number = 10;
// let palavra: string = "alo";

// console.log(num.toFixed(num));
// console.log(num.toPrecision(num));
// console.log(num.toString(num));

// let passandoParaInt = readline.question("Digite a string para passar para inteiro: ");
// let novo = parseInt(passandoParaInt);
// console.log(typeof(novo));

// let passandoParaFloat = readline.question("Digite a string para passar para inteiro: ");
// let novo2 = parseFloat(passandoParaFloat);
// console.log(typeof(novo2));

// console.log(isNaN(novo));

// console.log(isFinite(novo2));

// let novo3 = novo2.toExponential();

// console.log(novo3);


// let num3: number = 3.84;

// let numArredondado: number = Math.round(num3);

// console.log(numArredondado);

// let str: string = "Jõao ";

// let str2: string = "Ana";

// let str3: string = `Eu`;

// let charAt: string = str.charAt(2);

// console.log(charAt);

// let novaStr: string = str.concat(str2);

// console.log(novaStr);

// console.log(str.toUpperCase());
// console.log(str2.toLocaleLowerCase());

// console.log(str.concat(str2.toLocaleLowerCase()));


// const pets: Array<string> = ["gato", "cão", "vaca"];

// pets.push("rato");

// console.log(pets);

// console.log(pets.pop());

// console.log(pets.shift());

// pets.unshift("rato")
// console.log(pets);


// const pets2: Array<string> = ["elefante", "cobra"];

// const petsNovo: Array<string> = pets.concat(pets2);

// console.log(petsNovo);

// let str4: string = petsNovo.join("-");

// console.log(str4);

// console.log(petsNovo.slice(3));

// petsNovo.splice(2, 1);

// console.log(petsNovo);
// let index: number = pets.indexOf("cão")

// console.log(`a posição dele no array é ${index}`);

// console.log(`a posição dele no array é ${petsNovo.lastIndexOf("cobra")}`);

// console.log(petsNovo.reverse());

// console.log(`o array pestNovo tem ${petsNovo.length} itens`);

// let constaNoArray: string = readline.question("digite a pesquisa no array: ");
// let verificando: boolean = petsNovo.includes(constaNoArray);

// if (verificando == true) {
//     console.log("o item consta no array");
// }else{
//     console.log("Não consta no array");
// }

//////////////////// Enums //////////////////////

enum DiaDaSemana {
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domigo,
}

const diaHoje: DiaDaSemana = DiaDaSemana.Quinta;

console.log(diaHoje);

enum TipoDeUsuario2 {
    Admin,
    Estudande,
    Convidado,
}

let entrada: string = readline.question("digite seu usuario: ");

function verificarPermissao(usuario: TipoDeUsuario2) : void {
    if (usuario === TipoDeUsuario2.Admin) {
        console.log("Administrador logado!");
        
    }else if(usuario === TipoDeUsuario2.Estudande){
        console.log("Estudante logado!");
        
    }else if(usuario === TipoDeUsuario2.Convidado){
        console.log("Convidado logado!");
        
    }else{
        console.log("Usuario não encontrado!");
        
    }
}

console.log(verificarPermissao());

