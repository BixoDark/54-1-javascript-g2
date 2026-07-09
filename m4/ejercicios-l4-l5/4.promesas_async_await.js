const login = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if(email == "usuario@gmail.com" && password == "123456"){
                resolve("login existoso...");
            }else{
                reject("Credenciales inválidas...");
            }
        }, 3500);
    });
};

// login("usuario@gmail.com", "1234567")
// .then((respuesta)=> {
//     console.log(respuesta);
//     console.log("Redireccionando al usuario...");
// })
// .catch(error => {
//     console.log("Error:", error);
// })


const main = async () => {
    try {
        let respuesta = await login("usuario@gmail.com", "123456");
        console.log(respuesta);
        console.log("Redireccionando al usuario...");
    } catch (error) {
        console.log("Error:", error);
    }
}

main();