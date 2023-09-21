import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Login /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
