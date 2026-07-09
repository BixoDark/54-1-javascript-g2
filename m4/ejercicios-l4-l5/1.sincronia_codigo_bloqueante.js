console.log("Primera instrucción");

let valor = 0;
for (let index = 0; index < 10_000_000; index++) {
    valor += index;
}

console.log(valor);

console.log("Tercera instrucción");