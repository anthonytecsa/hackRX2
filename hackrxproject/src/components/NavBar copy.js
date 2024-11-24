import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, QrCodeScanner, AccountCircle } from "@mui/icons-material";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <button onClick={() => navigate("/patientHome")}>
        <Home />
        <span>Home</span>
      </button>
      <button onClick={() => navigate("/scan")}>
        <QrCodeScanner />
        <span>Scan</span>
      </button>
      <button onClick={() => navigate("/patientProfile")}>
        <AccountCircle />
        <span>Profile</span>
      </button>
    </div>
  );
};

export default NavBar;
