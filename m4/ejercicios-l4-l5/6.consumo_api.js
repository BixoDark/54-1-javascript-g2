const getUser = async () => {
    try {
        const URL = "https://randomuser.me/api/";
        const response = await fetch(URL);
        const data = await response.json();
        
        const user = data.results[0];

        return user;

    } catch (error) {
        console.log(error);
    }
}


const main = async () => {
    try {
        const user = await getUser();

        console.log(user);
    } catch (error) {
        console.log(error);
    }
}
main();