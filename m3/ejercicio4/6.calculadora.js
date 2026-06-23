function calculadora(valor1, valor2, operacion = "sumar"){

    valor1 = Number(valor1);
    valor2 = Number(valor2);

    if(isNaN(valor1) || isNaN(valor2)){
        return "valores ingresados no corresponden a números.";
    }


    if(operacion == "sumar"){
        return valor1 + valor2;
    }else if(operacion == "restar"){
        return valor1 - valor2;
    }else{
        return "Operación inválida";
    }

};


console.log(calculadora(4, "a", "sumar"));