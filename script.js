//Here will go all the script!

const products = [
    {
        name: "Ardilla del ITSE",
        price: "$0.00 no vendemos animales <3",
        image: "squirrel.jpg"
    },
    {
        name: "Product 2",
        price: "$",
        image: ""
    },
    {
        name: "Product 3",
        price: "$",
        image: ""
    },
    {
        name: "Product 4",
        price: "$",
        image: ""
    },
    {
        name: "Product 5",
        price: "$",
        image: ""
    },
    {
        name: "Product 6",
        price: "$",
        image: ""
    },
];

const productsContainer = document.getElementById("products");

productsContainer.innerHTML = products.map(product => `
    <div class="productsCard">
        <img src="${product.image}" alt="${product.name}">

        <div class="productsInfo">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Comprar</button>
        </div>
    </div>
`).join("");

const contactButton = document.getElementById("contact");

contactButton.addEventListener("click", function() {
    window.location.href = "contact.html";
});
