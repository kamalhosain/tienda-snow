const catalogContent = document.getElementById("catalogContent");
const seeCart = document.getElementById("seeCart");

const addPopUp = document.getElementById("addPopUp");
const addPopUpFilter = document.getElementById("addPopUpFilter");

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

            addPopUp.innerHTML = `
                <h2 class="added-msg text-kanit">Tu producto se añadió al carrito</h2>
                <div class="added-product">
                    <img src="${json[i].image}" alt="">
                    <div class="added-product-info">
                       <h3 class="added-product-name text-kanit">${json[i].name}</h3>
                        <h3 class="added-product-category text-kanit">${json[i].category}</h3>
                        <h3 class="added-product-description text-kanit">${json[i].description}</h3>
                       <p class="added-product-price text-kanit">$${json[i].price}</p>
                   </div>
                </div>
                <div class="continue-buttons" id="continueButtons">
                </div>
            `

            let continueButtons = document.getElementById("continueButtons");

            let continueShopping = document.createElement("button");
            continueShopping.innerText = "Seguir comprando";
            continueShopping.className = "continue-button text-roboto";

            let goToCart = document.createElement("a");
            goToCart.innerHTML = "Ir al carrito";
            goToCart.className = "continue-button text-roboto";
            goToCart.setAttribute("href", "cart.html")

            continueButtons.append(continueShopping);
            continueButtons.append(goToCart);

            continueShopping.addEventListener("click", () => {
                addPopUp.style.display = "none";
                addPopUpFilter.style.display = "none";
            })

            addPopUp.style.display = "initial";
            addPopUpFilter.style.display = "initial";
        });
    }
})