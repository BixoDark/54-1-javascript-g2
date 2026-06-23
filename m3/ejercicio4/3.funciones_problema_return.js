function saludar(nombre, apellido) {

    if(!nombre && !apellido){
        return "Hola Usuari@!";
    }

    let mensaje = `Hola, ${nombre} ${apellido}!`;

    return mensaje;
};

let mensajeSaludo = saludar("Pedro", "Godoy");

console.log(mensajeSaludo);

console.log(saludar());