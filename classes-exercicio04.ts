class Circulo {
    raio: number;

    constructor(raio: number){
        this.raio = raio;
    }

    calcularArea(){
        let calculo = Math.PI * (this.raio * this.raio);
        console.log(calculo);
        
    }

    calcularCircunferencia(){
        let calculo = 2 * (Math.PI * this.raio);
        console.log(calculo);
         
    }
}

const meuCirculo = new Circulo(10);

meuCirculo.calcularArea();
meuCirculo.calcularCircunferencia();
