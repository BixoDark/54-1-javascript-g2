const filtrar = (lista, callback) => {

    let filtrados = [];

    for (const elemento of lista) {

        let resultado = callback(elemento);

        if(resultado) {
            filtrados.push(elemento);
        }
    }

    return filtrados;

};


const numeros = [2,3,4,5,10,11,12,13,16,17];


let pares = filtrar(numeros, (numero) => numero % 2 == 0);

console.log(pares);

let impares = filtrar(numeros, (numero) => numero % 2 == 1);
console.log(impares);

let mayoresQue10 = filtrar(numeros, (numero) => numero > 10);
console.log(mayoresQue10);
