import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Register from './pages/Register';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
    </BrowserRouter>
       <ToastContainer/>
    </React.Fragment>
  );
}

export default App;
