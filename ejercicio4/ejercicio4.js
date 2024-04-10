function programaViaje() {
    var medioTransporte = prompt("¿Cómo vas a viajar? (coche, tren, bicicleta o autobús): ").toLowerCase();
    if (medioTransporte === "coche") {
        console.log("¡Buen viaje en coche!");
    } else if (medioTransporte === "tren" || medioTransporte === "autobús") {
        console.log("Recuerda llevar dinero para el billete del tren o autobús.");
    } else if (medioTransporte === "bicicleta") {
        console.log("¡Disfruta del paseo en bicicleta!");
    } else {
        console.log("Por favor, selecciona un medio de transporte válido.");
    }
}

programaViaje();
