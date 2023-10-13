class Product {
    constructor(name, value, description, image) {
        this.name = name;
        this.value = value;
        this.description = description;
        this.image = image;
    }

    // Método para crear y retornar un elemento HTML que muestra el producto
    createProductHTML() {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const image = document.createElement('image');
        image.src = this.image;
        image.alt = this.name;

        const name = document.createElement('h2');
        name.textContent = this.name;

        const value = document.createElement('p');
        value.textContent = `Value: $${this.value}`;

        const description = document.createElement('p');
        description.textContent = this.description;

        productDiv.appendChild(image);
        productDiv.appendChild(name);
        productDiv.appendChild(value);
        productDiv.appendChild(description);

        return productDiv;
    }
}
