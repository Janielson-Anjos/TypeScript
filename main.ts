const readline = require("readline-sync");

console.log("ola mundo!");

let numero: number;

let nulo: null;

let nome: string;

let escolha: boolean;

let numeros: Array<number> = [1, 2, 3];

let pessoa1: object = {
    nomePessoa: "jan",
    sobrenome: "anjos",
}

console.log(pessoa1);


enum TipoDeUsuario {
    Administrador,
    UsuarioComum,
    Convidado,
}

function verificarPermissao(usuario : TipoDeUsuario) : void {

    if(usuario == TipoDeUsuario.Administrador){
        console.log("Administrador logado, você tem as permissões de Admin!");
        
    }else if (usuario == TipoDeUsuario.UsuarioComum){
        console.log("Usuário comum logado, voce so tem permissões de estudante");
        
    }else (usuario == TipoDeUsuario.Convidado){
        console.log("Convidado logado, voce so tem permissões de leitura");
        
    }

    
}

let usuario = readline.question("qual o seu usúario?");



