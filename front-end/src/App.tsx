import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarLayout from "./components/highOrderComponents/NavbarLayout";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarLayout children={<Home />} />} />
        <Route
          path="/SignUp"
          element={<NavbarLayout children={<SignUp />} />}
        />
        <Route
          path="/SignIn"
          element={<NavbarLayout children={<SignIn />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
