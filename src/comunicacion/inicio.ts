document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de inicio cargada");

    // Definir las rutas de cada botón
    const rutas: { [key: string]: string } = {
        "boton-invoices": "/invoices",
        "boton-customers": "/customers",
        "boton-products": "/products",
        "boton-new-product": "/new-product",
        "boton-graphs": "/graphs",
        "boton-settings": "/settings" // Redirige a la página de configuración
    };

    // Buscar y añadir eventos de clic a los botones
    Object.keys(rutas).forEach((clase) => {
        const boton = document.querySelector(`button.${clase}`); // Asegurar que busca botones
        if (boton) {
            boton.addEventListener("click", () => {
                const destino = rutas[clase];
                console.log(`Redirigiendo a ${destino}`);
                window.location.href = destino;
            });
        } else {
            console.warn(`No se encontró el botón con la clase: ${clase}`);
        }
    });
});
