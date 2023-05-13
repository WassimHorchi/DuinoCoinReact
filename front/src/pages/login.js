import React, {useState, useEffect} from 'react'
import { RiMailLine } from 'react-icons/ri';
import { BsLock } from 'react-icons/bs';
import duini from '../img/duino.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginHandle from '../utils/LoginHandle';
function Login(){
    const [username, setUsername] = useState();
    const [userExist, setUserExist] = useState();
    // const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [variableName, setVariableName] = useState("");
  const [variableValue, setVariableValue] = useState(null);
  const [error, setError] = useState(null);


  const API_BASE_URL = "https://server.duinocoin.com/balances.json";
    const navigate = useNavigate();

  const handleInputChange = (event) => {
    setVariableName(event.target.value);
  };
const handleLogin = () => {
    if(variableValue){
      localStorage.setItem("username",variableName);
      localStorage.setItem("mining", variableValue);

      navigate('/');
    }
    
}
  const handleSearch = async (event) => {
    event.preventDefault(); // Prevents the default behavior of the form
    try {
      const response = await fetch(API_BASE_URL); // Replace with your API URL
      const data = await response.json();
      
      if (variableName in data) {
        setVariableValue(data[variableName]);
        handleLogin();
      } else {
        setVariableValue(null);
        setError(`Variable ${variableName} not found`);
      }
    } catch (error) {
      setError(error.message);
    }
  };
    
    
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(API_BASE_URL);
    //         const data = await response.json();
    //         console.log(data)
            
    //         // Check if data is an array
    //         if (Array.isArray(data)) {
    //           setData(data);
    //         }
    //         // Check if data is an object with an array property
    //         else if (typeof data === "object" && Array.isArray(data.results)) {
    //           setData(data.results);
    //         }
    //         // If the response is not in the expected format, throw an error
    //         else {
    //           throw new Error("Data is not in the expected format");
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //     fetchData();
    //   }, []);
    
    //   const filteredData = data.filter(
    //     (item) =>
    //       item.variableName &&
    //       item.variableName.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    
      const handleSubmit = (event) =>{
        event.preventDefault();

        // console.log(data);
      }
  
   
    return(
        
	<div class="limiter">
        
    <div class="container-login100">
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
                <img src={duini} alt="IMG" />
            </div>

            <form class="login100-form validate-form" onSubmit={handleSearch}>
                <span class="login100-form-title">
                    Put your username to get your data
                </span>

                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input type="text" class="input100" value={variableName} onChange={handleInputChange} name="username" placeholder="username" />
                    
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
            <ul style={{color : "black"}}>
        
      </ul>
        </div>
    </div>
</div>
    )
}
export default Login;