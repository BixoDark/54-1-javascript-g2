function formatoMonedaStr(valor = 0, formato = "es-CL"){

    valor = Number(valor);

    if(isNaN(valor)){
        return "Error!";
    }

    valor = valor.toLocaleString(formato);

    return valor;
};

let monto = 1_000_000_000.45;

console.log("Formato Chileno:", formatoMonedaStr(monto,"es-CL"));

console.log("Formato Inglés:", formatoMonedaStr(monto,"en"));

console.log("Formato Francés:", formatoMonedaStr(monto,"fr"));

console.log("Ej. valor erroneo:", formatoMonedaStr("50000a"));