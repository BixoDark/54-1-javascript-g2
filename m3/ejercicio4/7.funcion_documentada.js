//FORMULA 0 °C × 9/5) + 32 = 32 °F

// (32 °F − 32) × 5/9 = 0 °C



/**
 * Convierte una temperatura entre grados Celsius y Fahrenheit.
 *
 * @param {number} grados - Valor numérico de la temperatura a convertir.
 * @param {string} [modo="celsius"] - Dirección de conversión. Valor por defecto "celsius":
 *                                         convierte de Celsius a Fahrenheit.
 *                                         Use "fahrenheit" para convertir de Fahrenheit a Celsius.
 * @returns {string|boolean} - Resultado de la conversión formateado con dos decimales como cadena
 *                              (por ejemplo, "32.00") o `false` si `modo` no es válido.
 *
 * @example
 * conversionGrados(0); // "32.00"
 * conversionGrados(100, "fahrenheit"); // "37.78"
 */
function conversionGrados(grados, modo="celsius"){

    if(modo=="celsius"){
        let fahrenheit = grados * (9/5) + 32;
        return fahrenheit.toFixed(2);
    }else if(modo=="fahrenheit"){
        let celsius  = (grados - 32) * 5/9;
        return celsius.toFixed(2);
    }else{
        return false;
    }
};

let celsiusAFahrenheit1 = conversionGrados(1);
console.log("1° grados Celius a fahrenheit:", celsiusAFahrenheit1, "°");

let fahrenheitACelsius = conversionGrados(100, "fahrenheit");
console.log("100° grados fahrenheit a Celsius:", fahrenheitACelsius, "°");
