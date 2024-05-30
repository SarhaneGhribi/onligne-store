import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/highOrderComponents/PrivateRoute";
import _NavbarLayout from "./components/highOrderComponents/_NavbarLayout";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<_NavbarLayout children={<Home/>}/>}/>
        <Route path="/SignUp" element={<_NavbarLayout children={<SignUp />}/>} />
        <Route path="/SignIn" element={<_NavbarLayout children={<SignIn />}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
