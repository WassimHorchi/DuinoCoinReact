import React from 'react';
import { RiMailLine } from 'react-icons/ri';
import { BsLock } from 'react-icons/bs';
import duini from '../img/duino.png';
function Login(){
    return(
        
	<div class="limiter">
        
    <div class="container-login100">
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
            <img src={duini} alt="IMG" />
            </div>

            <form class="login100-form validate-form">
                <span class="login100-form-title">
                    Put your username to get your data
                </span>

                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" name="email" placeholder="username" />
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                    <RiMailLine />
                    </span>
                </div>
                
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn">
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