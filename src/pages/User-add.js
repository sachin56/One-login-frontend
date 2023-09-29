import Header from "../components/Header";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import Nav from "../components/Navigation";
import 'react-toastify/dist/ReactToastify.css';




function Login(){
    return(
        <React.Fragment>
           <Header />
            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"data-sidebar-position="fixed" data-header-position="fixed">
                <Nav/>
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <div className="box form-box">
                        <form>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Name</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Phone Number</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Phone Number"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Fedex ID</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Fedex ID"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Email</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Password</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Password"/>
                                </div>
                            </div>
                            <br></br>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
            <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            <script src="../assets/js/sidebarmenu.js"></script>
            <script src="../assets/js/app.min.js"></script>
            <script src="../assets/libs/apexcharts/dist/apexcharts.min.js"></script>
            <script src="../assets/libs/simplebar/dist/simplebar.js"></script>
            <script src="../assets/js/dashboard.js"></script>
            {/* <Footer /> */}
      </React.Fragment>
    )

}
export default Login;