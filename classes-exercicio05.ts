const readline = require("readline-sync");

class ContaBancaria {
    saldo: number = 0;
    numeroConta: number;

    constructor(saldo: number, numeroConta: number){
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }

    depositar(){
        let valorDepositar = readline.question("digite o valor que deseja depositar: ");
        this.saldo = this.saldo + valorDepositar;
    }

    sacar(){
        let valorSacar = readline.question("digite o valor que deseja sacar: ");
        this.saldo = this.saldo - valorSacar;
    }

    consultarSaldo(){
        console.log(`Seu saldo é ${this.saldo}`);
        
    }
}

const minhaConta = new ContaBancaria(0, 1);

minhaConta.depositar();
minhaConta.consultarSaldo();
minhaConta.sacar();
minhaConta.consultarSaldo();