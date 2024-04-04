function calcularDiferencia(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}

let numero1 = 10;
let numero2 = 5;
let diferencia = calcularDiferencia(numero1, numero2);
console.log("La diferencia entre", numero1, "y", numero2, "es:", diferencia);
