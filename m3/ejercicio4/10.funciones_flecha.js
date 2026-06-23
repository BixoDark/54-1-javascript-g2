//function regular
function saludar(nombre){
    return "Hola " + nombre;
};


//ARROW FUNCTION
const saludar2 = nombre => `Hola ${nombre}`;

console.log(saludar2("Pedro"));