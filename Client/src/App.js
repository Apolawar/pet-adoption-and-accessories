// App.js or Routes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Pets from "./Components/Pets/Pets";
import AdoptForm from "./Components/AdoptForm/AdoptForm";
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import Signup from "./Components/Login-logout/Signup";
import { useAuth } from "./context/AuthProvider";
import Accessories from "./Components/Accessories/Accessories";
import "./App.css";

const Layout = ({ children }) => (
  <>
    <Navbar title="PawFinds" />
    {children}
    <Footer title="PawFinds" />
  </>
);

const App = () => {
  const { authUser } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={authUser ? <Layout><Services /></Layout> : <Navigate to="/signup" />} />
        <Route path="/contact" element={authUser ? <Layout><Contact /></Layout> : <Navigate to="/signup" />} />
        <Route path="/pets" element={authUser ? <Layout><Pets /></Layout> : <Navigate to="/signup" />} />
        <Route path="/accessories" element={authUser ? <Layout><Accessories /></Layout> : <Navigate to="/signup" />} />
        <Route path="/adopt-form" element={authUser ? <Layout><AdoptForm /></Layout> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </>
  );
};

export default App;
