function sumar(...valores){ // OPERADOR REST
    if(valores.length == 0){
        return 0;
    }

    let total = 0;

    for (const valor of valores) {
        total += valor;
    }

    return total;
};

//USO DEL OPERADOR SPREAD

let sueldos = [450_000, 850_000, 1_200_000, 670_000];

console.log("Total sueldos:", sumar(...sueldos));

