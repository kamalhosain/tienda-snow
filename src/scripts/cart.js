const cartContent = document.getElementById("cartContent");

let cart = JSON.parse(sessionStorage.getItem("cart"));

cart.forEach((product) => {
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

    cartContent.append(content);

    let buttonRemoveFromCart = document.createElement("button");
    buttonRemoveFromCart.innerText = "Quitar del carrito";
    buttonRemoveFromCart.className = "add-to-cart-btn text-roboto";

    content.append(buttonRemoveFromCart);
    
    buttonRemoveFromCart.addEventListener("click", () => {
        cart = cart.filter(item => item.name != product.name);
        sessionStorage.setItem("cart",JSON.stringify(cart));
        location.reload();
    });
     
});