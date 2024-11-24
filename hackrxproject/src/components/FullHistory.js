import React from "react";
import { Box, Typography, Button } from "@mui/material";

const FullHistory = ({ prescriptions }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#6A9947", // Match background color to your design
        padding: "20px",
        borderRadius: "22px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
        width: "320px", // Adjust width
        margin: "0 auto", // Center the box
        maxHeight: "500px", // Set max height for the box
        overflowY: "auto", // Enable vertical scrolling
      }}
    >
      {prescriptions.length > 0 ? (
        prescriptions.map((p, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: "15px", // Add spacing between prescriptions
              color: "#ffffff", // Match text color to design
              borderBottom: "1px solid rgba(255, 255, 255, 0.3)", // Separator line
              paddingBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {p.name} - {p.dosage}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "5px" }}>
              <strong>Side Effects:</strong> {p.sideEffects || "None"}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "5px" }}>
              <strong>Instructions:</strong> {p.instructions}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "5px" }}>
              <strong>Timing:</strong> {p.timing}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1" sx={{ color: "#ffffff" }}>
          No prescription history found.
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

export default FullHistory;
