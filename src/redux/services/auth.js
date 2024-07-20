const getdata = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users', {
            method: 'GET'
        });
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const AuthService = {
    getdata
};
export default AuthService;