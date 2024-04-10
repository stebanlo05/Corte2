
const nombre = "María";
const sexo = "M";


const nombreMinusculas = nombre.toLowerCase();

let grupo;

if ((sexo === 'M' && nombreMinusculas < 'm') || (sexo === 'H' && nombreMinusculas > 'n')) {
    grupo = 'A';
} else {
    grupo = 'B';
}

if (grupo === 'A') {
    console.log(`Hola ${nombre}! Eres del grupo A.`);
} else {
    console.log(`Hola ${nombre}! Eres del grupo B.`);
}
