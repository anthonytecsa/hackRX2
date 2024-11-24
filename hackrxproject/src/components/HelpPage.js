import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import NavBar from "./NavBar"; // Assuming you have a NavBar component
import "./styles.css"

const HelpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="patient-page">
      <div className="phone-container3">
        <div style={{ backgroundColor: "#FFA422", height: "100%", width: "100%" }}>

          <div className="welcome-container">
            <h1 className="help-txt">Help</h1>
            <img className="help-logo" src="/images/carrot2.png" alt="Carrot Logo" />
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
                height: "172px",
                backgroundColor: "#FFE6CC",
                color: "#F2A65A",
                fontWeight: "bold",
                borderRadius: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "20px",
                textTransform: "none",
                ":hover": { backgroundColor: "#FFEED6" },
              }}
              onClick={() => navigate("/ask-pharmacist")}
            >
              <div className="helpbuttontext">
                <span className="helptexttitle">Ask a Pharmacist</span>
                <span className="helptext">Contact a live pharmacist</span>
              </div>
              
            </Button>
            <Button
              sx={{
                width: "324px",
                height: "172px",
                backgroundColor: "#FFE6CC",
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
              <div className="helpbuttontext">
                <span className="helptexttitle">Not Feeling Well?</span>
                <span className="helptext">Fill out an assessment</span>
              </div>

            </Button>
            <Button
              sx={{
                width: "324px",
                height: "172px",
                backgroundColor: "#FFE6CC",
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
              <div className="helpbuttontext">
                <span className="helptexttitle">Frequently asked</span>
                <span className="helptext">General Advice</span>
              </div>
            </Button>
          </Box>
        </div>
        <NavBar/>
      </div>
    </div>
  );
};

export default HelpPage;
