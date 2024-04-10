const numeroArticulos = prompt("Ingrese el número de artículos:");
const precioArticulo = prompt("Ingrese el precio de cada artículo en euros:");

const cantidadArticulos = parseInt(numeroArticulos);
const precioUnitario = parseFloat(precioArticulo);

const sinDescuento = cantidadArticulos * precioUnitario;
if (cantidadArticulos > 10 && precioUnitario > 40) {
    const descuento = sinDescuento * 0.15;
    const conDescuento = sinDescuento - descuento;
    console.log("Cantidad a pagar con descuento del 15%:", conDescuento, "euros");
} else {
    console.log("Cantidad a pagar sin descuento:", sinDescuento, "euros");
}
