import { useState, useEffect } from 'react';
import axios from 'axios';

function LoginHandle(username){
    const [user, setUser] = useState()
    const [usernameset, setUsernameSet] = useState(username)
    const usersApi = "https://server.duinocoin.com/balances.json"
    console.log("Hello")
    useEffect(() => {
        axios.get(usersApi)
            .then(response => {
                setUser(response.data.usernameset)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
}

export default LoginHandle;