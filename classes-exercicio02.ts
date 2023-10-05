// class com extends / herdar ///

class Aluno extends Pessoa{
    matricula: number;
    constructor(nome: string, idade: number, email: string, matricula: number){
        super(nome, idade, email)
        this.matricula = matricula;
    }
}