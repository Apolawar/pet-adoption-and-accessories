import React from "react";
import { useAuth } from "../../context/AuthProvider";

function Logout() {
  const {  setAuthUser } = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      alert("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout error");
    }
  };

  return (
    <button className="Navbar-button " onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
