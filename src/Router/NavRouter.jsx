import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import WelcomePage from "../pages/WelcomePage";
import ProductPage from "../pages/ProductPage";
import Navbar from "../components/Navbar";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
const NavRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NavRouter;
