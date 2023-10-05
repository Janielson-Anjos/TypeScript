class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcular(){
        let calculo = this.preco * this.quantidade;
        console.log(`O valor total do produto é ${calculo}`);
        
    }


}

const meuProduto = new Produto("Arroz", 5.40, 20);

meuProduto.calcular();