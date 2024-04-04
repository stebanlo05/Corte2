function Velocidad(tramoKm, tiempoHoras) {
    let velocidad = tramoKm / tiempoHoras;
    if (velocidad >= 40 && velocidad <= 60) {
        return "paso la prueba.";
    } else {
        return "El conductor esta descalificado.";
    }
}


let tramo = 100; 
let tiempo = 4;

console.log(Velocidad(tramo, tiempo));
