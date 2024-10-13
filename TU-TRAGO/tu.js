document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".details-btn");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            alert("Más detalles estarán disponibles pronto!");
        });
    });

    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Gracias por contactarnos! Pronto te responderemos.");
    });
});
