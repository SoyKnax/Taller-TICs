//Here will go all the script!

const products = [
    {
        name: "Animales (Ardilla del ITSE)",
        price: "Animalitos del ITSE que puedes adoptar, no vendemos animales <3",
        image: "images/squirrel_1920x1080.jpg"
    },
    {
        name: "Servicios Médicos",
        price: "Servicios especializados para tus mascotas",
        image: "images/medServices.jpg"
    },
    {
        name: "Alimentos",
        price: "Gran variedad de alimentos para tus mascotas",
        image: "images/food.jpg"
    },
    {
        name: "Casitas para Animales",
        price: "Tus mascotas se merecen un espacio propio",
        image: "images/petsHouse.jpg"
    },
    {
        name: "Accesorios",
        price: "Para que tus mascotas tengan estilo",
        image: "images/Accesorios.jpg"
    },
    {
        name: "Stickers",
        price: "Por si eres fan de los animales y quieres decorar",
        image: "images/Stickers_743x1321.png"
    },
];

/*Esto es para centrar las imagenes*/

const imagenes = document.querySelectorAll('img');

// Aplica Flexbox al contenedor padre de cada imagen
imagenes.forEach(img => {
    const padre = img.parentElement;
    if (padre) {
        padre.style.display = 'flex';
        padre.style.justifyContent = 'center';
        padre.style.alignItems = 'center';
    }
});

// 2. Itera sobre cada imagen y asígnale el mismo tamaño
imagenes.forEach((img) => {
  img.style.width = '200px';   // Define el ancho deseado
  img.style.height = '100px';  // Define el alto deseado
  img.style.objectFit = 'cover'; // Evita que la imagen se deforme (opcional pero recomendado)
});


//Generate product cards only if the container exists
const productsContainer = document.getElementById("products");

if (productsContainer) {
    productsContainer.innerHTML = products.map(product => `
        <div class="productsCard">
            <img src="${product.image}" alt="${product.name}">

            <div class="productsInfo">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Ver más</button>
            </div>
        </div>
    `).join("");
}

//Redirect to the contact page only if the button exists
const contactButton = document.getElementById("contact");

if (contactButton) {
    contactButton.addEventListener("click", function() {
        window.location.href = "contact.html";
    });
}

//Handle the contact form only if its elements exist
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    //Hide the confirmation message when the page loads
    formMessage.style.display = "none";

    //Listen for form submission
    contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const customerName = document.getElementById("name").value.trim();
    const successText = document.getElementById("successText");

    successText.textContent =
        `¡Gracias, ${customerName}! Nos comunicaremos contigo pronto.`;

    contactForm.style.display = "none";

    // Hide the heading and introductory paragraph
    document.querySelector(".contactForm h1").style.display = "none";
    document.querySelector(".contactForm > p").style.display = "none";

    // Show the confirmation message
    formMessage.style.display = "block";
    });
}

