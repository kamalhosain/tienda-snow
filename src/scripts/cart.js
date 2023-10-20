const cartContent = document.getElementById("cartContent");

let cart = JSON.parse(sessionStorage.getItem("cart"));

const totalAmount = document.getElementById('totalAmount')

const updateAmount = () => {
    let sum = 0;
    for (let product of cart) {
        sum += product.price;
    }
    totalAmount.innerText = "Precio total: $" + sum;
}

updateAmount();

cart.forEach((product) => {
    let content = document.createElement("div");
    content.className = "product-card";
    content.innerHTML = `
        <div class="product-card animate__animated animate__fadeIn">
            <figure class="product-figure">
                <img loading="lazy" class="product-img" src=${product.image} alt=${product.description}>
            </figure>
            <div class="product-info">
                <h3 class="product-name text-kanit">${product.name}</h3>
                <p class="product-price text-roboto">${"$"+product.price}</p>
            </div>
        </div>
    `;

    cartContent.append(content);

    let buttonRemoveFromCart = document.createElement("button");
    buttonRemoveFromCart.innerText = "Quitar del carrito";
    buttonRemoveFromCart.className = "add-to-cart-btn text-roboto";

    content.append(buttonRemoveFromCart);
    
    buttonRemoveFromCart.addEventListener("click", () => {
        cart.splice(cart.indexOf(product), 1);
        sessionStorage.setItem("cart",JSON.stringify(cart));
        updateAmount();
        location.reload();
    });
     
});