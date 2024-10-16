// PUNTO 1 - FUNCION QUE DETERMINE SI UN AÑO ES BISIESTO.

function esBisiesto(año) {
    if ((año % 4 == 0 && año % 100 != 0) || (año % 400 == 0)) {
      return true;
    } else {
      return false;
    }

}

console.log(esBisiesto(2001));

// PUNTO 2 - FUNCION QUE CONVIERTA GRADOS CELSIUS A FAHRENHEIT.

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusAFahrenheit(0));

// PUNTO 3 - FUNCION QUE DEVUELVA EL MAYOR DE DOS NUMEROS.

function mayorDeDos(n1,n2){
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log(mayorDeDos(1001,1000));

// PUNTO 4 - FUNCION QUE CONVIERTA UNA CANTIDAD DE MINUTOS EN UNA CADENA QUE INDIQUE A CUANTAS HORAS Y MINUTOS CORRESPONDEN.

function convertirMinutos(minutos){
    const hora = Math.floor(minutos / 60);
    const minutosrestantes = minutos % 60;
    return `${hora} horas y ${minutosrestantes} minutos`;
}

console.log(convertirMinutos(110));

// PUNTO 5 - FUNCION QUE DETERMINE SI UN NUMERO ESTA DENTRO DE UN RANGO DADO (INCLUYENDO LOS LIMITES).

function estaEnRango(numero, inicio, fin) {
    return numero >= inicio && numero <= fin;
}

console.log(estaEnRango(5, 1, 10));

// PUNTO 6 - FUNCION QUE CALCULE EL PRECIO FINAL DESPUES DE APLICAR UN PORCENTAJ DE DESCUENTO A UN PRECIO FINAL

function calcularPrecioFinal(precioInicial, descuento) {
    let descuentoAplicado = (precioInicial * descuento) / 100;
    let precioFinal = precioInicial - descuentoAplicado;
    return precioFinal;
}

console.log(calcularPrecioFinal(100, 20));

// PUNTO 7 - FUNCION QUE DETERMINE SI UNA PESONA PUEDE VOTAR SEGUN SU EDAD

function puedeVotar(edad) {
    return edad >= 18;
}

console.log(puedeVotar(17)); 

// PUNTO 8 - FUNCION  QUE CALCULE EL AREA DE UN TRIANGULO DADOS SU BASE Y ALTURA

function calcularAreaTriangulo(base, altura) {
    let Areatriangulo = (base*altura)/2;
    return Areatriangulo;
}

console.log(calcularAreaTriangulo(10,10));

