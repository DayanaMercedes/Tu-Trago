document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("product-form");
    const promoForm = document.getElementById("promo-form");

    const productList = document.getElementById("product-list");
    const promoList = document.getElementById("promo-list");

    productForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const productName = document.getElementById("product-name").value;
        const productPrice = document.getElementById("product-price").value;
        const productDescription = document.getElementById("product-description").value;

        const productImage = document.getElementById("product-image").files[0];
        if (!productImage) {
            alert("Por favor, selecciona una imagen para el producto.");
            return;
        }

        const newProduct = document.createElement("li");
        newProduct.classList.add("list-group-item");
        newProduct.innerHTML = `
            <strong>${productName}</strong> - $${productPrice}
            <p>${productDescription}</p>
            <button class="btn btn-danger btn-sm remove-product">Eliminar</button>
        `;

        productList.appendChild(newProduct);

        newProduct.querySelector(".remove-product").addEventListener("click", () => {
            productList.removeChild(newProduct);
        });

        productForm.reset();
    });

    promoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const promoTitle = document.getElementById("promo-title").value;
        const promoDiscount = document.getElementById("promo-discount").value;
        const promoDescription = document.getElementById("promo-description").value;

        const newPromo = document.createElement("li");
        newPromo.classList.add("list-group-item");
        newPromo.innerHTML = `
            <strong>${promoTitle}</strong> - Descuento: ${promoDiscount}%
            <p>${promoDescription}</p>
            <button class="btn btn-danger btn-sm remove-promo">Eliminar</button>
        `;

        promoList.appendChild(newPromo);

        newPromo.querySelector(".remove-promo").addEventListener("click", () => {
            promoList.removeChild(newPromo);
        });

        promoForm.reset();
    });
});
