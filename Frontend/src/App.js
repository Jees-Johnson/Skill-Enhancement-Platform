import React from "react";
import "./App.css";
import Home from "./Home";
import AdminHome from "./AdminHome";
import Login from "./Components/Login";
import AdminLogin from "./Components/AdminLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import SignupStudent from "./Components/SignupStudent";
import SignupTeacher from "./Components/SignupTeacher";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Kp from "./Components/Kp";
import Ht from "./Components/Ht";
import Jx from "./Components/Jx";
import Rea from "./Components/Rea";


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="signup" element={<SignupTeacher />} />
        <Route path="signupstudent" element={<SignupStudent />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/Dashboard" element={Dashboard} />
        <Route path="/Kp" element={<Kp />} />
        <Route path="/Ht" element={<Ht />} />
        <Route path="/Jx" element={<Jx />} />
        <Route path="/rea" element={<Rea />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
