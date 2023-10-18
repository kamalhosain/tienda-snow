const catalogContent = document.getElementById("catalogContent");
const seeCart = document.getElementById("seeCart");

const products = [
    {
        id: 1,
        name: "Buzo negro Adidas",
        value: 10.00,
        description: "Ya sea que te estés preparando para un entrenamiento matutino o relajándote después de un día largo, este buzo adidas es justo lo que necesitás. El tejido de felpa francesa supercómodo y los puños y dobladillo acanalados brindan comodidad y la temperatura perfecta sin importar lo que hagás. Ponetelo y enfrentate a todo con seguridad.",
        image: "src/img/products/1.jpg"
    },
    {
        id: 2,
        name: "Pantalón negro Adidas",
        value: 20.00,
        description: "Convertido en un icono del estilo urbano, el pantalón Beckenbauer de adidas está presente en numerosas situaciones de la vida diaria. Sin embargo, su origen está profundamente ligado al deporte. Para celebrar un legado que se remonta a los años 60, esta versión conserva todos sus detalles icónicos como las 3 tiras, el tejido suave y una combinación de colores clásica del fútbol. Póntelo y celebra cada victoria. Estés donde estés.",
        image: "src/img/products/2.jpg"
    },
    {
        id: 3,
        name: "Remera negra Adidas",
        value: 30.00,
        description: "El sonido que hace la pelota cuando pasa a través de la red de cadena metálica no se compara con nada más. Esta remera de adidas Basketball luce un estampado en el pecho que celebra las redes de cadenas metálicas y todo lo que hace que el básquet al aire libre sea lo mejor. Está confeccionada en tejido jersey de algodón suave que te envuelve con comodidad sin importar si estás jugando o descansando.",
        image: "src/img/products/3.jpg"
    },
    {
        id: 4,
        name: "Zapatillas celestes Adidas",
        value: 40.00,
        description: "Siente la ligereza y velocidad. Si estás listo para subir el ritmo y entrenar para distancias de hasta 10 kilómetros, estas zapatillas para correr de adidas te ayudarán en tus carreras con la máxima comodidad. Presenta una parte superior de monomalla ligera y una mediasuela LIGHTMOTION que te proporciona una gran estabilidad. En la pista o en asfalto, la suela Adiwear proporciona durabilidad y agarre.",
        image: "src/img/products/4.jpg"
    },
    {
        id: 5,
        name: "Gorra negra Adidas",
        value: 10.00,
        description: "Esta gorra de béisbol adidas pone tu estilo personal a la vista de todos. Es uno de esos patrones que puede funcionar tanto de manera neutral como al momento de hacer una declaración de estilo. Combina a la perfección con denim, con un estilo casual deportivo y con otros estampados también. Probá con nuestra opción favorita: las rayas.",
        image: "src/img/products/5.jpg"
    },
    {
        id: 6,
        name: "Morral negro Adidas",
        value: 20.00,
        description: "Aquí no hay problemas. Solo simplicidad. Este bolso para el hombro adidas se describe perfectamente con una palabra: esencial. Tiene espacio para mantener tus pertenencias al alcance durante todo el día.",
        image: "src/img/products/6.jpg"
    },
    {
        id: 7,
        name: "Buzo blanco Nike",
        value: 30.00,
        description: "Disfruta de la comodidad suave y cálida de nuestro buzo con capucha de tela French Terry y ten un día Nike. Combinada con tu calzado favorito, puedes brillar como la mejor y más brillante versión de ti.",
        image: "src/img/products/7.jpg"
    },
    {
        id: 8,
        name: "Pantalón negro Nike",
        value: 40.00,
        description: "Disfruta de la comodidad suave y cálida de nuestros pants de French Terry, que te hará sonreír. Los gráficos de sol y arcoíris juveniles en el muslo no pueden dejar de invocar el optimismo. Combínalos con tu calzado favorito y Have a Nike Day.",
        image: "src/img/products/8.jpg"
    },
    {
        id: 9,
        name: "Remera blanca Nike",
        value: 10.00,
        description: "Esta remera de algodón ligera se siente suave y tersa sobre la piel. Los gráficos estampados Nike Air en el pecho rinden homenaje a la tecnología de calzado que revolucionó el juego.",
        image: "src/img/products/9.jpg"
    },
    {
        id: 10,
        name: "Zapatillas amarillas Nike",
        value: 20.00,
        description: "No has dado tu opinión y te hemos hecho caso. Hemos renovado el diseño original basándonos en tus comentarios sin dejar de mantener el atractivo retro que tanto te gusta. ¿Querías una puntera más ancha? Listo. ¿Querías materiales más duraderos? Ni se duda. ¿Querías una plataforma más estable para el pie? Hecho. Este es un diseño pensado para los fans de las Cortez.",
        image: "src/img/products/10.jpg"
    },
    {
        id: 11,
        name: "Gorra blanca Nike",
        value: 30.00,
        description: "Esta gorra Nike Club clásica de calado medio ofrece muchas opciones de estilo. Además, está confeccionada con un suave tejido de sarga de algodón con un lavado suave para proporcionar comodidad y un estilo sencillo desde el primer día. La visera precurvada la hace ideal para looks informales, mientras que la correa posterior regulable te permite encontrar el ajuste perfecto.",
        image: "src/img/products/11.jpg"
    },
    {
        id: 12,
        name: "Riñonera negra Nike",
        value: 40.00,
        description: "La riñonera Nike Heritage es ideal para guardar los básicos más pequeños que no caben en el bolsillo. El bolsillo interno con cremallera mantiene todo organizado y al alcance de la mano. Para la confección de este producto se ha empleado, al menos, un 65 % de poliéster reciclado.",
        image: "src/img/products/12.jpg"
    },
    {
        id: 13,
        name: "Buzo azul Adidas",
        value: 10.00,
        description: "Desde que el Trifolio debutó en los años 70, ha sido usado por deportistas profesionales, estrellas del hip-hop, artistas y creadores en todos los rincones del mundo. Así que cuando te ponés este buzo con capucha adidas estarás en buena compañía. Destacá tu conexión con el legado y experimentá una sensación de total comodidad con la felpa francesa supersuave.",
        image: "src/img/products/13.jpg"
    },
    {
        id: 14,
        name: "Pantalón azul Adidas",
        value: 20.00,
        description: "Cuando tu mente está en llegar a lo más alto del fútbol mundial, es esencial verse y sentirse como un solo equipo. Con la mirada del mundo puesta en ellos, los jugadores de la Selección Argentina visten este pantalón de presentación adidas. El clásico diseño Tiro lo hace muy cómodo y los bolsillos cargo brindan un lugar seguro para tus cosas más esenciales. El escudo tejido de la Selección Argentina de Fútbol le pone el toque final al look.",
        image: "src/img/products/14.jpg"
    },
    {
        id: 15,
        name: "Remera azul Adidas",
        value: 30.00,
        description: "No te compliques con la remera Essentials del Trifolio de adidas. Tomando elementos minimalistas del diseño vintage, esta remera irradia estilo. Luce un logo del Trifolio bordado sobre un tejido de punto de algodón suave. Perfecta para tu día a día, no tardará en convertirse en un básico imprescindible en tu armario.",
        image: "src/img/products/15.jpg"
    },
    {
        id: 16,
        name: "Zapatillas verdes Adidas",
        value: 40.00,
        description: "Enfrentate a tus entrenamientos HIIT con estas zapatillas en las que podés confiar. Estas zapatillas adidas para entrenar fueron creadas para movimientos dinámicos. El exterior de tejido técnico cuenta con refuerzos estratégicos que ofrecen una mayor sujeción. Lightstrike cushioning is super lightweight and responsive, and the asymmetrical Torsion System helps keep you stable during quick cuts and multidirectional moves.",
        image: "src/img/products/16.jpg"
    },
    {
        id: 17,
        name: "Gorra gris Adidas",
        value: 10.00,
        description: "No importa si corrés al amanecer o entrenás al mediodía, siempre es buen momento para lucir esta gorra de running adidas. Los detalles reflectivos se iluminan en condiciones de poca luz y la tecnología HEAT.RDY ofrece una sensación de frescura incluso en los días más calurosos. Cuando el sol está en su punto, la visera precurvada te dará la sombra que necesitás.",
        image: "src/img/products/17.jpg"
    },
    {
        id: 18,
        name: "Bolso negro Adidas",
        value: 20.00,
        description: "Escapate de fin de semana o acude al gimnasio. Esta resistente mochila para entrenamiento presenta un diseño espacioso con bolsillos que se adapta a tu ajetreado ritmo de vida.",
        image: "src/img/products/18.jpg"
    },
    {
        id: 19,
        name: "Buzo negro Nike",
        value: 30.00,
        description: "No tienes que hacer cajas de mudanza cuando entrenas con la Nike Moving Co. Usa esta remera absorbente de sudor y ponte en movimiento con una tela French Terry ligera que se siente suave y te permite aprovechar al máximo cada pisada. Estira, corre o haz algunas repeticiones, todo está listo para que nos movamos contigo.",
        image: "src/img/products/19.jpg"
    },
    {
        id: 20,
        name: "Pantalón gris Nike",
        value: 40.00,
        description: "Equípate para los días de entrenamiento y cualquier otra situación con el pantalón Academy que capilariza el sudor. Cuenta con un diseño resistente y suave que incorpora paneles transpirables para mantener la frescura en cada ejercicio.",
        image: "src/img/products/20.jpg"
    },
    {
        id: 21,
        name: "Remera negra Nike",
        value: 10.00,
        description: "Esta camiseta NSW está confeccionada con tela de algodón y un ajuste clásico para el día a día, y ofrece una sensación familiar desde el primer momento. Nuestros estampados ardientes añaden un toque especial a tu estilo urbano.",
        image: "src/img/products/21.jpg"
    },
    {
        id: 22,
        name: "Zapatillas blancas Nike",
        value: 20.00,
        description: "Aún nuestro calzado más probado, hecho para ayudarte a lograr tus ambiciosos objetivos de running. El Nike React Infinity Run 3 se siente cómodo y estable con una pisada suave que te lleva por rutas largas y cortas. La parte superior transpirable está diseñada para brindar contención y, a la vez, flexibilidad.",
        image: "src/img/products/22.jpg"
    },
    {
        id: 23,
        name: "Gorra negra Nike",
        value: 30.00,
        description: "Ponte en marcha con la gorra Nike Fly hagas lo que hagas: desde el calentamiento hasta el enfriamiento o cualquier otra actividad. El diseño desestructurado de profundidad baja está confeccionado con tela altamente transpirable y tecnología avanzada absorbente de sudor, por lo que mantener la frescura nunca es un problema.",
        image: "src/img/products/23.jpg"
    },
    {
        id: 24,
        name: "Riñonera blanca Nike",
        value: 40.00,
        description: "Elegante, moderna y confeccionada en poliéster duradero, esta cangurera te permite guardar tus cosas fácilmente. Cuenta con un gran compartimento principal con cierre y un bolsillo posterior con cierre para mantener seguros y accesibles los artículos más pequeños. La correa regulable te permite personalizar el ajuste para que puedas darle el estilo que quieras.",
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