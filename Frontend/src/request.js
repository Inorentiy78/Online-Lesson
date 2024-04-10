var requests =
{
    "register" : "http://localhost:5236/api/User/Register/Register",
    "login" : "http://localhost:5236/api/User/Login/Login",
}

const Register = async (endpoint, user) => {
    var newRequest = requests[endpoint];
    try {
        const response = await fetch(newRequest, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        
        console.log("response", response);
        const data = await response.json();
        console.log("data", data);
        return data;
    } catch (error) {
        console.error('There was an error!', error);
        throw error;
    }
}
