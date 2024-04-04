function Signo(numero){
    if (numero > 0){
    return "positivo"
}else if (numero === 0){
    return "cero"
} else if ( numero < 0){
    return "negativo"
}
}
console.log(Signo(0))