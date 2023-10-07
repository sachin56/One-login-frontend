
import Header from "../components/Header";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import Nav from "../components/Navigation";
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Useradd(props){
    const [names, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [fedexid, setFedexID] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [table, setTable] = useState([]);
    const navigate = useNavigate();
    const [showdata, setShowdata] = useState([]);



    const onSubmit = async () => {
        axios.post('http://localhost:8090/api/v1/employee/saveEmployee', {
            name: names,
            phonenumber: phonenumber,
            fedexid: fedexid,
            email: email,
            password: password
          })
          .then(function (response) {
            toast.success('Data Added',
                      {position: toast.POSITION.TOP_RIGHT})
                      navigate('/useradd');
          })
          .catch(function (error) {
            toast.error('Somthing occured while data saving',
                {position: toast.POSITION.TOP_RIGHT})   
                navigate('/useradd');
          });
    }

    const Update = ()=>{
        console.log(props.data.id);
          axios
          .get('http://localhost:8090/api/v1/employee/searchEmployee/'+props.data)
          .then((res) => {
            setShowdata(res.data);
            console.log(showdata.content.id);
          })
        
    }
    // useEffect(() => {
    //     Update();
    // },[props.id]);

    window.addEventListener("beforeunload", (event) => {
        Update();
        console.log("API call before page reload");
    });

    window.addEventListener("unload", (event) => {
        Update();
        console.log("API call after page reload");
    });

    return(
        <React.Fragment>   
               <>
    
                <Modal show={props.show}>
                    <Modal.Header closeButton onClick={props.onClose}>
                    <Modal.Title>User Add</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Please Enter Name"
                            autoFocus
                            value={names}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />

                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="eail"
                            placeholder="Please Enter Email"
                            autoFocus
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Please Enter Phone Number"
                            autoFocus
                            value={phonenumber}
                            onChange={(event) => {
                                setPhoneNumber(event.target.value);
                            }}
                        />
                        <Form.Label>Fedex ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Please Enter Fedx ID"
                            autoFocus
                            value={fedexid}
                            onChange={(event) => {
                                setFedexID(event.target.value);
                            }}
                        />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Please Enter Password"
                            autoFocus
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                </>
      </React.Fragment>
    )

}
export default Useradd;