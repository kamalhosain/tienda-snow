const catalogContent = document.getElementById("catalogContent");
const seeCart = document.getElementById("seeCart");

console.log(sessionStorage.getItem("cart"))
let cart = (sessionStorage.getItem("cart") == null) ? [] : JSON.parse(sessionStorage.getItem("cart"))

function getProducts(done) {
    const results = fetch('https://productos-tienda-b9e14-default-rtdb.firebaseio.com/productos.json');

    results
        .then(res=>res.json())
        .then(json=>done(json));
}

getProducts(json => {
    for (let i = 1; i < json.length; i++) {
        let content = document.createElement("div");
        content.className = "product-card";
        content.innerHTML = `
            <div class="product-card animate__animated animate__fadeIn">
                <figure class="product-figure">
                    <img loading="lazy" class="product-img" src=${json[i].image} alt=${json[i].description}>
                </figure>
                <div class="product-info">
                    <h3 class="product-name text-kanit">${json[i].name}</h3>
                    <p class="product-price text-roboto">${"$"+json[i].price}</p>
                </div>
            </div>
        `;
    
        catalogContent.append(content);
    
        let buttonAddToCart = document.createElement("button");
        buttonAddToCart.innerText = "Agregar al carrito";
        buttonAddToCart.className = "add-to-cart-btn text-roboto";

        content.append(buttonAddToCart);

        buttonAddToCart.addEventListener("click", () => {
            cart.push(json[i]);
            sessionStorage.setItem("cart",JSON.stringify(cart));
        });
    }
})