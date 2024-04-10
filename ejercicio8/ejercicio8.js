const edad = prompt("¿Cuántos años tienes?: ");
const ingresos = prompt("¿A cuánto equivalen tus ingresos mensuales en euros?");

if (edad > 16 && ingresos >= 1000) {
    console.log("Usted debe pagar el impuesto");
} else {
    console.log("Usted no debe pagar el impuesto");
}
