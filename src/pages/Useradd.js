import Header from "../components/Header";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import Nav from "../components/Navigation";
import 'react-toastify/dist/ReactToastify.css';
import UserModal from "../modals/UserModal";


function Useradd(){

    const [table, setTable] = useState([]);
    const [show, setshow] = useState(false);
    const navigate = useNavigate();

    const handleOpen = () =>{
        setshow(true);
    }
    const handleClose = () =>{
        setshow(false);
    }

    const onDelete = async(id) =>{

        console.log(id);
        try {
            const response =  axios.delete('http://localhost:8080/api/v1/employee/deleteEmployee/'+id);
            toast.success('Data Deleted',
                {position: toast.POSITION.TOP_RIGHT})
            navigate('/useradd');
          } catch (error) {
            toast.error('Somthing occured while data saving',
                {position: toast.POSITION.TOP_RIGHT})  
            navigate('/useradd');
          }
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
                <UserModal show={show} onClose={handleClose}/>
                <div className="body-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        {/* <div class="col-md-6">
                            <h1 class="m-0 text-dark">Users</h1>
                        </div> */}
                        <div class="col-md-8">
                            <ol class="breadcrumb float-sm-left">
                            <li class="breadcrumb-item"><a href="#">Master</a></li>
                            <li class="breadcrumb-item active">Users</li>
                            </ol>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="input-group input-group-sm float-right" style={{width: "260px"}}>
                                        {/* <button class="btn btn-primary btn-flat btn-default " name="option1" id="option1" >Pennding </button>
                                        <button class="btn btn-success btn-flat btn-default btn-active" name="option2" id="option2" >Close</button> */}
                                    </div>
                                </div>    
                            <div class="card-header">
                                    <button type="button" class="btn btn-primary "  onClick={handleOpen}>Add Users</button>
                                </div> 
                                <div class="card-body">
                                    <table class="table table-bordered" id="datatables">
                                        <thead>
                                            <tr>
                                                <th style={{width:"10%"}}>Reference Name</th>
                                                <th style={{width:"15%"}}>Customer Name</th>
                                                <th style={{width:"10%"}}>Email</th>
                                                <th style={{width:"15%"}}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {table.map(item =>(
                                            <tr>
                                                <td scope="row">{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                <button class='btn btn-danger btn-sm delete'  title='Delete'onClick={()=>onDelete(item.id)}>Delete</button>
                                                &nbsp;&nbsp;
                                                <button class='btn btn-warning btn-sm delete'  title='Delete'>Update</button>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
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