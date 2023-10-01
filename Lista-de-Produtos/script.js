let products = [
    {name:"Iphone", category: "Telemoveis", preço: 1500}
    {name:"Samsung", category: "Telemoveis", preço: 1300}
    {name:"AirPods", category: "HeadPhones", preço: 150}
]


let myList = document.getElementById('productList');


for(i = 0; i < products.length; i++) {

    let product = products[i];

    let listItem = document.createElement("li");

    listItem.textContent = product.name + "(" + product.category + ")" + product.price + " €";

    myList.appendChild(listItem);

}