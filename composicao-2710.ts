export class Roda {
    constructor(public tamanho: string){}
}

export class Carro {
    private rodas: Roda[];
    modelo: string;
    cor: string;
    suspencao: string;

    constructor(modelo: string, cor: string, suspencao: string) {
        this.rodas = [new Roda("Aro 20"), new Roda("Aro 20"), new Roda("Aro 19"), new Roda("Aro 19")]
        this.modelo = modelo;
        this.cor = cor;
        this.suspencao = suspencao;
    }

    verificarEstadoDasRodas() {
        for (const roda of this.rodas){
            console.log(`Roda ${roda.tamanho} está ok!`);
        }
    }
}

function main(){
    const Chevette = new Carro("Tubarão","Branco-Gelo","rebaixado");
    Chevette.verificarEstadoDasRodas();
    console.log(`O Chevette tem a cor ${Chevette.cor}, é do modelo ${Chevette.modelo} e é ${Chevette.suspencao}!`);
       
}

main();