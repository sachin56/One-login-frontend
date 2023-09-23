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
           <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <div
              class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
              <div class="d-flex align-items-center justify-content-center w-100">
                <div class="row justify-content-center w-100">
                  <div class="col-md-8 col-lg-6 col-xxl-3">
                    <div class="card mb-0">
                      <div class="card-body">
                        <a href="./index.html" class="text-nowrap logo-img text-center d-block py-3 w-100">
                          <img src="../assets/images/logos/dark-logo.svg" width="180" alt=""></img>
                        </a>
                        <p class="text-center"></p>
                        <form>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"value={email}
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}></input>
                          </div>
                          <div class="mb-4">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password"value={password}
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}></input>
                          </div>
                          <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                              <input class="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked></input>
                              <label class="form-check-label text-dark" for="flexCheckChecked">
                                Remeber this Device
                              </label>
                            </div>
                            <a class="text-primary fw-bold" href="./index.html">Forgot Password ?</a>
                          </div>
                          <a class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2" onClick={login}>Sign In</a>
                          <div class="d-flex align-items-center justify-content-center">
                            {/* <p class="fs-4 mb-0 fw-bold">New to Modernize?</p> */}
                            {/* <a class="text-primary fw-bold ms-2" href="./authentication-register.html">Create an account</a> */}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
          <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      </React.Fragment>
    )

}
export default Login;