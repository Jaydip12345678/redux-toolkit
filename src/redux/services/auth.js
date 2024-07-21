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

// const login = async (payload) => {
//     try {

//         const token = '';
//         const body = new URLSearchParams();
//         body.append('email', payload.email);
//         body.append('password', payload.password);

//         const response = await fetch('/MYURL', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'X-Csrftoken': token,
//             },
//             body: body.toString(),
//             credentials: 'include',
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const userData = await response.json();
//         return userData;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };


const AuthService = {
    getdata,
    // login
};
export default AuthService;