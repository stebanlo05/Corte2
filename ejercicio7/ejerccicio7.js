
let nota1 = parseFloat(prompt("Ingrese la nota del primer trimestre:"));
let nota2 = parseFloat(prompt("Ingrese la nota del segundo trimestre:"));
let nota3 = parseFloat(prompt("Ingrese la nota del tercer trimestre:"));


let promedio = (nota1 + nota2 + nota3) / 3;


let calificacion;
if (promedio < 5) {
    calificacion = "Suspenso";
} else if (promedio >= 5 && promedio < 7) {
    calificacion = "Aprobado";
} else {
    calificacion = "Notable";
}

console.log("El promedio de las notas es:", promedio);
console.log("La calificación final es:", calificacion);
