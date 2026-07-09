const getData = () => {
    return new Promise((resolve, reject) => {
        const productos = ["Producto 1", "Producto 2"];
        setTimeout(() => {
            resolve(productos);
        }, 3500);
    });
};

getData()
.then((productos)=> {
    console.table(productos);
})
.catch(error => {
    console.log("Error:", error);
})
