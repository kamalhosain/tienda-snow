const catalogContent = document.getElementById("catalogContent");
const seeCart = document.getElementById("seeCart");

const products = [
    {
        id: 1,
        name: "Buzo",
        value: 10.00,
        description: "Buzo con capucha 100% algodón",
        image: "src/img/products/1.jpg"
    },
    {
        id: 2,
        name: "Pantalón",
        value: 20.00,
        description: "Pantalón deportivo",
        image: "src/img/products/2.jpg"
    },
    {
        id: 3,
        name: "Zapatillas",
        value: 30.00,
        description: "Zapatillas urbanas color negro",
        image: "src/img/products/3.jpg"
    },
    {
        id: 4,
        name: "Gorra",
        value: 40.00,
        description: "Una gorra re piola",
        image: "src/img/products/4.jpg"
    },
    {
        id: 5,
        name: "Buzo",
        value: 10.00,
        description: "Buzo con capucha 100% algodón",
        image: "src/img/products/5.jpg"
    },
    {
        id: 6,
        name: "Pantalón",
        value: 20.00,
        description: "Pantalón deportivo",
        image: "src/img/products/6.jpg"
    },
    {
        id: 7,
        name: "Zapatillas",
        value: 30.00,
        description: "Zapatillas urbanas color negro",
        image: "src/img/products/7.jpg"
    },
    {
        id: 8,
        name: "Gorra",
        value: 40.00,
        description: "Una gorra re piola",
        image: "src/img/products/8.jpg"
    },
    {
        id: 9,
        name: "Buzo",
        value: 10.00,
        description: "Buzo con capucha 100% algodón",
        image: "src/img/products/9.jpg"
    },
    {
        id: 10,
        name: "Pantalón",
        value: 20.00,
        description: "Pantalón deportivo",
        image: "src/img/products/10.jpg"
    },
    {
        id: 11,
        name: "Zapatillas",
        value: 30.00,
        description: "Zapatillas urbanas color negro",
        image: "src/img/products/11.jpg"
    },
    {
        id: 12,
        name: "Gorra",
        value: 40.00,
        description: "Una gorra re piola",
        image: "src/img/products/12.jpg"
    },
    {
        id: 13,
        name: "Buzo",
        value: 10.00,
        description: "Buzo con capucha 100% algodón",
        image: "src/img/products/13.jpg"
    },
    {
        id: 14,
        name: "Pantalón",
        value: 20.00,
        description: "Pantalón deportivo",
        image: "src/img/products/14.jpg"
    },
    {
        id: 15,
        name: "Zapatillas",
        value: 30.00,
        description: "Zapatillas urbanas color negro",
        image: "src/img/products/15.jpg"
    },
    {
        id: 16,
        name: "Gorra",
        value: 40.00,
        description: "Una gorra re piola",
        image: "src/img/products/16.jpg"
    },
    {
        id: 17,
        name: "Buzo",
        value: 10.00,
        description: "Buzo con capucha 100% algodón",
        image: "src/img/products/17.jpg"
    },
    {
        id: 18,
        name: "Pantalón",
        value: 20.00,
        description: "Pantalón deportivo",
        image: "src/img/products/18.jpg"
    },
    {
        id: 19,
        name: "Zapatillas",
        value: 30.00,
        description: "Zapatillas urbanas color negro",
        image: "src/img/products/19.jpg"
    },
    {
        id: 20,
        name: "Gorra",
        value: 40.00,
        description: "Una gorra re piola",
        image: "src/img/products/20.jpg"
    },
    {
        id: 21,
        name: "Buzo",
        value: 10.00,
        description: "Buzo con capucha 100% algodón",
        image: "src/img/products/21.jpg"
    },
    {
        id: 22,
        name: "Pantalón",
        value: 20.00,
        description: "Pantalón deportivo",
        image: "src/img/products/22.jpg"
    },
    {
        id: 23,
        name: "Zapatillas",
        value: 30.00,
        description: "Zapatillas urbanas color negro",
        image: "src/img/products/23.jpg"
    },
    {
        id: 24,
        name: "Gorra",
        value: 40.00,
        description: "Una gorra re piola",
        image: "src/img/products/24.jpg"
    }
];

let cart = [];

products.forEach((product) => {
    let content = document.createElement("div");
    content.className = "product-card";
    content.innerHTML = `
    <div class="product-card">
        <figure class="product-figure">
            <img loading="lazy" class="product-img" src=${product.image} alt=${product.description}>
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