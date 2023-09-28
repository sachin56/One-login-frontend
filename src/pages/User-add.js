import Header from "../components/Header";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8080/api/v1/employee/login", {
          email: email,
          password: password,
          }).then((res) => 
              {
              console.log(res.data);
              
              if (res.data.message == "Email not exits") 
              {
                toast.error('Email not exits',
                      {position: toast.POSITION.TOP_RIGHT})
              } 
              else if(res.data.message == "Login Success")
              { 
                  navigate('/dashboard');                 
              } 
                else 
              { 
                  toast.error('Incorrect Email and Password not match',
                  {position: toast.POSITION.TOP_RIGHT})
              }
            }, fail => {
              toast.error('ERROR',
              {position: toast.POSITION.TOP_RIGHT})
            console.error(fail); // Error!
          });
      }catch (err) {
        alert(err);
      }
    
    }

    return(
        <React.Fragment>
           <Header />
           <div class="container">
                <div class="box form-box">
                <header>Sign Up</header>
            <form action="" method="post">
                <div class="field input">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" autocomplete="off" required/>
                </div>

                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" autocomplete="off" required/>
                </div>

                <div class="field input">
                    <label for="age">Age</label>
                    <input type="number" name="age" id="age" autocomplete="off" required/>
                </div>
                <div class="field input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" autocomplete="off" required/>
                </div>

                <div class="field">
                    
                    <input type="submit" class="btn" name="submit" value="Register" required/>
                </div>
                <div class="links">
                    Already a member? <a href="index.php">Sign In</a>
                </div>
            </form>
        </div>
      </div>
      </React.Fragment>
    )

}
export default Login;