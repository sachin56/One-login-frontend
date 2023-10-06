
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
    const [name, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [fedexid, setFedexID] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [table, setTable] = useState([]);
    const navigate = useNavigate();



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
                      navigate('/useradd');
          })
          .catch(function (error) {
            toast.error('Somthing occured while data saving',
                {position: toast.POSITION.TOP_RIGHT})   
                navigate('/useradd');
          });
    }


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
                            valu={props.showdata}
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