import Header from "../components/Header";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import Nav from "../components/Navigation";
import 'react-toastify/dist/ReactToastify.css';


function Useradd(){
    const [name, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [fedexid, setFedexID] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [table, setTable] = useState([]);

    const onSubmit = async () => {
        axios.post('http://localhost:8080/api/v1/employee/saveEmployee', {
            name: name,
            phonenumber: phonenumber,
            fedexid: fedexid,
            email: email,
            password: password
          })
          .then(function (response) {
            toast.success('Data Added',
                      {position: toast.POSITION.TOP_RIGHT})
          })
          .catch(function (error) {
            toast.success('Somthing occured while data saving',
                {position: toast.POSITION.TOP_RIGHT})
          });
    }
    const getData = () => {
        axios
            .get('http://localhost:8080/api/v1/employee/getAll')
            .then((res) => {
                setTable(res.data)
            })
    }

    useEffect(() => {
        getData();
    }, []);

    window.addEventListener("beforeunload", (event) => {
        getData();
        console.log("API call before page reload");
    });

    window.addEventListener("unload", (event) => {
        getData();
        console.log("API call after page reload");
    });
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
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Name" valu={name}
                                    onChange={(event) => {
                                      setName(event.target.value);
                                    }}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Phone Number</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Phone Number" value={phonenumber}
                                    onChange={(event) => {
                                        setPhoneNumber(event.target.value);
                                      }}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Fedex ID</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Fedex ID" value={fedexid}
                                        onChange={(event) => {
                                            setFedexID(event.target.value);
                                    }}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Email</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Email" value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Password</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Password" value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                    }}/>
                                </div>
                            </div>
                            <br></br>
                            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <div className="box form-box">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                        {table?.map(item =>(
                            <tr>
                                
                                <td scope="row">{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
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
export default Useradd;