import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/register">Register</Link> | 
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
