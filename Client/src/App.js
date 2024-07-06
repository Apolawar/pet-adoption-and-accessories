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
<<<<<<< HEAD
import Signup from "./Components/Login-logout/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
=======
import Accessories from "./Components/Accessories/Accessories";
>>>>>>> cacf0a658acef0d4c41fffcaebec6fea0014b8ee
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
      <Toaster />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={authUser ? <Layout><Services /></Layout> : <Navigate to="/signup" />} />
        <Route path="/contact" element={authUser ? <Layout><Contact /></Layout> : <Navigate to="/signup" />} />
        <Route path="/pets" element={authUser ? <Layout><Pets /></Layout> : <Navigate to="/signup" />} />
        <Route path="/adopt-form" element={authUser ? <Layout><AdoptForm /></Layout> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </>
=======
        <Route 
          path="/" 
          element={
            <Layout>
              <Home description="Ensure you are fully prepared to provide proper care and attention to your pet before welcoming them into your home." />
            </Layout>
          } 
        />
        <Route 
          path="/services" 
          element={
            <Layout>
              <Services />
            </Layout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Layout>
              <Contact />
            </Layout>
          } 
        />
        <Route 
          path="/pets" 
          element={
            <Layout>
              <Pets />
            </Layout>
          } 
        />
        
        <Route 
          path="/adopt-form" 
          element={
            <Layout>
              <AdoptForm />
            </Layout>
          } 
        />
        <Route 
          path="/admin" 
          element={<AdminLogin />} 
        />
        <Route 
          path="/Accessories" 
          element={
            <Layout>
              <Accessories />
            </Layout>
          } 
        />
      </Routes>
      
    </Router>
>>>>>>> cacf0a658acef0d4c41fffcaebec6fea0014b8ee
  );
};

export default App;

