import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Cadastro from './Cadastro'; 

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default Main;
