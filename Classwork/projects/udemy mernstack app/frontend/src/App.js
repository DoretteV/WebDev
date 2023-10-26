import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
