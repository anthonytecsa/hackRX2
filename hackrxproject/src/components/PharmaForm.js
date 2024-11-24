import React, { useState } from "react";
import { TextField, Button, Box, Typography, Snackbar } from "@mui/material";
import { auth } from "../firebase"; // Import Firebase auth
import { submitTicket } from "../utils/firestore"; // Import the function to save tickets
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const AskPharmacist = () => {
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmitTicket = async () => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not logged in!");

      if (!message.trim()) {
        setSnackbarMessage("Please enter a message before submitting.");
        setSnackbarOpen(true);
        return;
      }

      const ticketData = {
        patientId: user.uid,
        patientName: user.email.split("@")[0],
        message,
        status: "Open",
        createdAt: new Date(),
      };

      await submitTicket(ticketData);

      // Show success message and clear the input
      setSnackbarMessage("Ticket submitted successfully!");
      setSnackbarOpen(true);
      setMessage("");

      // Navigate back to the Help page or home after successful submission
      setTimeout(() => navigate("/help"), 2000);
    } catch (error) {
      console.error("Error submitting ticket:", error);
      setSnackbarMessage("Failed to submit ticket. Please try again.");
      setSnackbarOpen(true);
    }
  };

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
              padding: "20px",
              maxWidth: "320px",
              margin: "0 auto",
              textAlign: "center",
              backgroundColor: "#f2f2f2", // Optional background for the container
              borderRadius: "10px", // Smooth corners for the box
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional shadow
            }}
          >
            <Typography variant="h4" sx={{ marginBottom: "20px", color: "white" }}>
              <h1 className="ask-pharma">Ask a Pharmacist</h1>
            </Typography>
            <TextField
              label="Enter your question or concern"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                marginBottom: "20px",
                backgroundColor: "white", // Set background color to white
                borderRadius: "5px", // Add rounded corners (optional)
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubmitTicket}
              sx={{
                backgroundColor: "#F2A65A",
                color: "#ffffff",
                fontWeight: "bold",
                textTransform: "none",
                ":hover": { backgroundColor: "#F29D4B" },
                width: "100%",
              }}
            >
              Submit
            </Button>

            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={() => setSnackbarOpen(false)}
              message={snackbarMessage}
            />
          </Box>

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
                backgroundColor: "#FFEED6",
                color: "#F2A65A",
                fontWeight: "bold",
                borderRadius: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "20px",
                textTransform: "none",
                ":hover": { backgroundColor: "#FFE6CC" },
              }}
              onClick={() => navigate("/ask-pharmacist")}
            >
              <div className="helpbuttontext">
                <span className="helptexttitle">Chat Now</span>
                <span className="helptext">Estimated Wait: 3 minutes</span>
              </div>
              
            </Button>
            </Box>
        </div>
        <NavBar />
        </div>
    </div>
  );
};

export default AskPharmacist;
