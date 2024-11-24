import React from "react";
import { Box, Typography, Button } from "@mui/material";

const TodayPrescriptions = ({ prescriptions }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#79B4B0", // Match background color to your design
        padding: "20px",
        borderRadius: "22px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
        width: "300px", // Fixed width of 360px
        margin: "0 auto", // Center the box
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#ffffff",
          marginBottom: "20px",
        }}
      >
        Today
      </Typography>
      {prescriptions.length > 0 ? (
        prescriptions.map((p, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: "10px", // Add spacing between medications
              color: "#ffffff", // Match text color to design
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
              }}
            >
              {p.name} - {p.dosage}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginLeft: "10px",
              }}
            >
              {p.instructions}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1" sx={{ color: "#ffffff" }}>
          No active prescriptions found.
        </Typography>
      )}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ffffff",
          color: "#487626",
          marginTop: "20px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        Edit Alerts
      </Button>
    </Box>
  );
};

export default TodayPrescriptions;
