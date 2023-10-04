import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserAdd from './pages/Useradd';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/useradd" element={<UserAdd />} />
        </Routes>
    </BrowserRouter>
       <ToastContainer/>
    </React.Fragment>
  );
}

export default App;
