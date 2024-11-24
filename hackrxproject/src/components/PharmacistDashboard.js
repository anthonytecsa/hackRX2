// src/components/PharmacistDashboard.js
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Button } from "@mui/material";


const PharmacistDashboard = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const navigate = useNavigate();
  
  return (
    <div className="patient-page">
      <div className="phone-container2">
        <div className="welcome-container">
          <h1 className="welcome-txt">Welcome, Pharmacist!</h1>
          <img className="welcome-logo" src="/images/carrot.png" alt="Carrot Logo" />
        </div>

        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <Button
              sx={{
                width: "324px",
                height: "300px",
                backgroundColor: "#79B4B0",
                color: "#F2A65A",
                fontWeight: "bold",
                borderRadius: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "20px",
                textTransform: "none",
                ":hover": { backgroundColor: "#FFEED6" },
              }}
              onClick={() => navigate("/pharmacistAlert")}
            >
              <div className="pharmabuttontext">
                <span className="pharmatexttitle">Patient Alerts</span>
                <span className="pharmatext">Chatbox Requests</span>
                <span className="pharmatext">Call Requests</span>
              </div>
              
            </Button>
            <Button
              sx={{
                width: "324px",
                height: "110px",
                backgroundColor: "#FFCC40",
                color: "#F2A65A",
                fontWeight: "bold",
                borderRadius: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "20px",
                textTransform: "none",
                ":hover": { backgroundColor: "#FFEED6" },
              }}
              onClick={() => navigate("/not-feeling-well")}
            >
              <div className="pharmabuttontext">
                <span className="pharmatexttitle">Counsel History</span>
              </div>

            </Button>
            <Button
              sx={{
                width: "324px",
                height: "110px",
                backgroundColor: "#FFA422",
                color: "#F2A65A",
                fontWeight: "bold",
                borderRadius: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "20px",
                textTransform: "none",
                ":hover": { backgroundColor: "#FFEED6" },
              }}
              onClick={() => navigate("/frequently-asked")}
            >
              <div className="pharmabuttontext">
                <span className="pharmatexttitle">Troubleshooting</span>
              </div>
            </Button>
          </Box>

      </div>
    </div>
  );
};

export default PharmacistDashboard;
