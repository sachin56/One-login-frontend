import Header from "../components/Header";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Register(){
    const [apiError, setApiError] = useState(null);
    const {
        handleSubmit,
    } = useForm();

    const onSubmit = async (form_data) => {
        try {
            const { data } = await axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: 'http://localhost:8080/api/v1/users/saveUser',
                data: JSON.stringify(form_data)
            });
            console.log(data.code);
    
        }
        catch (err) {
            setApiError('Some error occured during registration');
            //  console.log('Some error occured during signing in: ', err);
        }
    };
    return(
        <React.Fragment>
           <Header />
        <div class="container">
        <div class="box form-box">
            <header>Sign Up</header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="field input">
                    <label for="username">Username</label>
                    <input type="text" name="name" id="name" ></input>
                </div>

                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" ></input>
                </div>
                <div class="field input">
                    <label for="email">Phone Number</label>
                    <input type="text" name="phone_number" id="phone_number" ></input>
                </div>

                <div class="field input">
                    <label for="email">Designation</label>
                    <input type="text" name="designation" id="designation" ></input>
                </div>
                <div class="field input">
                    <label for="email">Fedex ID</label>
                    <input type="text" name="pid" id="pid" ></input>
                </div>
                <div class="field input">
                    <label for="password">Password</label>
                    <input type="text" name="password" id="password" ></input>
                </div>

                <div class="field">
                    
                    <input type="submit" class="btn" name="submit" value="Register" ></input>
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
export default Register;