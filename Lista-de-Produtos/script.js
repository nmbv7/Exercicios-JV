
class Produtos{

    constructor (nome,categoria,preco){

        this.nome = nome
        this.categoria = categoria
        this.preco = preco
    }
}

var produto1 = new Produtos('Iphone', 'telemoveis', 1300);
var produto2 = new Produtos ('Samsung', 'telemoveis', 1200);
var produto3 = new Produtos ('MSI', 'computadores', 2000);
var produto4 = new Produtos ('Acer', 'Computadores', 2500);

document.getElementById("p1").innerHTML = Produtos;