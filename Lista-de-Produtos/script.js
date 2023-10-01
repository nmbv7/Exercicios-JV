let products = [
    {name:"Iphone", category: "Telemoveis", price: 1500},
    {name:"Samsung", category: "Telemoveis", price: 1300},
    {name:"AirPods", category: "HeadPhones", price: 150}
];


let myList = document.getElementById('productList');


for(i = 0; i < products.length; i++) {

    let product = products[i];

    let listItem = document.createElement("li");

    listItem.textContent = product.name + " (" + product.category + "): " + product.price + " €";

    myList.appendChild(listItem);

}