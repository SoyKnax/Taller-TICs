//Here will go all the script!

const products = [
    {
        name: "Animales (Ardilla del ITSE)",
        price: "Animalitos del ITSE que puedes adoptar, no vendemos animales <3",
        image: "squirrel_1920x1080.jpg"
    },
    {
        name: "Servicios Médicos",
        price: "Servicios especializados para tus mascotas",
        image: "Servicios Medicos.jpg"
    },
    {
        name: "Alimentos",
        price: "Gran variedad de alimentos para tus mascotas",
        image: "Alimentos.jpg"
    },
    {
        name: "Casitas para Animales",
        price: "Tus mascotas se merecen un espacio propio",
        image: "Casita de animales horizontal.jpg"
    },
    {
        name: "Accesorios",
        price: "Para que tus mascotas tengan estilo",
        image: "Accesorios.jpg"
    },
    {
        name: "Stickers",
        price: "Por si eres fan de los animales y quieres decorar",
        image: "Stickers_743x1321.png"
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


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const customerName = document.getElementById("name").value.trim();

        formMessage.textContent =
            `Thank you, ${customerName}! We will contact you soon.`;

        contactForm.reset();
    });
}

