class Retangulo{
    largura: number;
    altura: number;

    constructor(largura: number, altura: number){
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea(){
        let calculo = this.largura*this.altura;
        console.log(calculo);
        
    }

}

const meuRetangulo = new Retangulo(20, 20);

meuRetangulo.calcularArea();
