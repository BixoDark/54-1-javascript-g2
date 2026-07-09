const promesa1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promesa1");
        }, 3500);
    });
};

const promesa2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promesa2");
        }, 4500);
    });
};

const promesa3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promesa3");
        }, 1500);
    });
};

promesa1().then(respuesta => console.log(respuesta));
promesa2().then(respuesta => console.log(respuesta));
promesa3().then(respuesta => console.log(respuesta));