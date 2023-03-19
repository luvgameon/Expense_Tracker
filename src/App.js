import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/expenses" element={<Expenses/>}/>
       </Routes>
    </>
  );
}

export default App;
