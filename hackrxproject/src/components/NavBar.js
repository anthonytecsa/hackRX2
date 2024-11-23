// src/components/NavBar.js
import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, QrCodeScanner, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (value) => {
    navigate(value);
  };

  return (
    <BottomNavigation
        showLabels
        onChange={(event, newValue) => handleNavigation(newValue)}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid #ccc',
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="/patientHome"
          icon={<Home />}
        />
        <BottomNavigationAction
          label="Scan"
          value="/scan"
          icon={<QrCodeScanner />}
        />
        <BottomNavigationAction
          label="Profile"
          value="/patientProfile"
          icon={<AccountCircle />}
        />
      </BottomNavigation>
  );
};

export default NavBar;
