import React, {useState, useEffect} from 'react'
import { RiMailLine } from 'react-icons/ri';
import { BsLock } from 'react-icons/bs';
import duini from '../img/duino.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginHandle from '../utils/LoginHandle';
function Login(){
    const [username, setUsername] = useState();
    const [userExist, setUserExist] = useState()
    const [user, setUser] = useState()
    const API_BASE_URL = "https://server.duinocoin.com/balances.json";
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(API_BASE_URL)
            .then(response => {
                setUserExist(response.data.username);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        
        LoginHandle(username);
        if(userExist){
            
            localStorage.setItem("username", username);
            navigate('/');
        }
    }
    const handleChange = (event) => {
        setUsername(event.target.value);
      };
      
    return(
        
	<div class="limiter">
        
    <div class="container-login100">
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
                <img src={duini} alt="IMG" />
            </div>

            <form class="login100-form validate-form" onSubmit={(event)=>handleSubmit(event)}>
                <span class="login100-form-title">
                    Put your username to get your data
                </span>

                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input type="text" class="input100" name="username" placeholder="username" value={username} onChange={handleChange} />
                    
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                    <RiMailLine />
                    </span>
                </div>
                
                <div class="container-login100-form-btn">
                    <button type='submit' class="login100-form-btn" >
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
    )
}
export default Login;