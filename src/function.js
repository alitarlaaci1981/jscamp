function addToCart(quantity, productName = "elma") {
    console.log("Sepete eklendi :" + productName + " adet: " + quantity);
}
// addToCart();
// addToCart("kalem");
addToCart(10)
//addToCart("Elma");
let sayHello = () => {
    console.log("Hello World!");
}

sayHello();

let sayHello2 = function () {
    console.log("Hello world 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    addToCart("elma", 5, 10)
    addToCart("armut", 2, 20)
    addToCart("limon", 3, 15)

}


let product1 = {
    productName: "elma",
    quantity: 5,
    unitPrice: 10
};

function addToCart3(product) {
    console.log("Urun : " + product.productName)
    console.log("adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}
addToCart3(product1);
let product2 = { productName: "elma", quantity: 5, unitPrice: 10 };
let product3 = { productName: "elma", quantity: 5, unitPrice: 10 };
product2 = product3
product2.productName = "Karpuz";
console.log(product3.productName);


function addToCart4(products) {
    console.log(products);
}
let products = [
    { productName: "elma", quantity: 5, unitPrice: 10 },
    { productName: "armut", quantity: 5, unitPrice: 10 },
    { productName: "karpuz", quantity: 5, unitPrice: 10 }
]

addToCart4(products)

function add(bisey, ...numbers) { //rest operator
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]

    }
    console.log(total);
    console.log(bisey)
}


add(20, 30);
// add(20,30,40)
// add(20,30,40,50);
let numbers = [30, 10, 500, 600, 120]
console.log(Math.max(...numbers));

let [icAnadolu, marmara, karadeniz] = [
    { name: "Ic Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["istanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]

]
console.log(icAnadolu.population);
console.log(icAnadolu.name);

let newProductName, newUnitPrice, newQuantity
({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } =
{
    productName: "elma",
    quantity: 5,
    unitPrice: 10
})
console.log(newUnitPrice)

