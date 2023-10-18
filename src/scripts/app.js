const catalogContent = document.getElementById("catalogContent");
const seeCart = document.getElementById("seeCart");

const products = [
    {
        id: 1,
        name: "Buzo",
        value: 10.00,
        description: "Buzo con capucha 100% algodón",
        image: "src/img/sections/hoodies.jpg"
    },
    {
        id: 2,
        name: "Pantalón",
        value: 20.00,
        description: "Pantalón deportivo",
        image: "src/img/sections/pants.jpg"
    },
    {
        id: 3,
        name: "Zapatillas",
        value: 30.00,
        description: "Zapatillas urbanas color negro",
        image: "src/img/sections/shoes.jpg"
    },
    {
        id: 4,
        name: "Gorra",
        value: 40.00,
        description: "Una gorra re piola",
        image: "src/img/sections/accesories.jpg"
    }
];

let cart = [];

products.forEach((product) => {
    let content = document.createElement("div");
    content.className = "product-card";
    content.innerHTML = `
    <div class="product-card">
        <figure class="product-figure">
            <img class="product-img" src=${product.image} alt=${product.description}>
        </figure>
        <div class="product-info">
            <h3 class="product-name text-kanit">${product.name}</h3>
            <p class="product-price text-roboto">${"$"+product.value}</p>
        </div>
    </div>
    `;

    catalogContent.append(content);

    let buttonAddToCart = document.createElement("button");
    buttonAddToCart.innerText = "Agregar al carrito";
    buttonAddToCart.className = "add-to-cart-btn text-roboto";

    content.append(buttonAddToCart);

    buttonAddToCart.addEventListener("click", () => {
        cart.push({
            id: product.id,
            name: product.name,
            value: product.value,
            image: product.image
        });
    });
});

seeCart.addEventListener("click", () => {
    sessionStorage.setItem("cart",JSON.stringify(cart));
});