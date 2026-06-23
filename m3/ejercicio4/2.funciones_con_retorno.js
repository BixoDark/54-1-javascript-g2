//USAMOS LA PALABRA RETURN PARA DEVOLVER UN VALOR
function saludar(nombre){
    return `Hola ${nombre.toUpperCase()}!`;

    //TODO CÓDIGO QUE ESTE POR DEBAJO DEL RETURN NO SE EJECUTA
};

let resultado = saludar("Pedro");

console.log(resultado);