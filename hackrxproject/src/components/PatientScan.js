// src/components/Scan.js
import React, { useState, useEffect } from "react";
import Camera from "./Camera";
import { auth } from "../firebase";
import { savePrescription } from "../utils/firestore";
//import { extractTextFromImage } from "../utils/ocr";
//import { lookupPrescription } from "../utils/prescriptions";
import NavBar from "./NavBar";
import "./styles.css";
import { useNavigate } from "react-router-dom";

//https://open.fda.gov/apis/drug/event/example-api-queries/

const PrescriptionScanner = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleImageCapture = async (imageSrc) => {
    setLoading(true);
    try {
      // Simulate processing the captured image
      console.log("Captured Image:", imageSrc);

      // Test prescription data
      const testPrescription = {
        name: "Metformin",
        dosage: "500mg",
        sideEffects: "Nausea, diarrhea, abdominal discomfort",
        instructions: "Take with meals to reduce stomach upset",
        timing: "Twice a day, morning and evening",
      };

      // Save the prescription to Firestore
      const user = auth.currentUser;
      if (user) {
        await savePrescription(user.uid, testPrescription);
      }

      setSuccess(true);
    } catch (error) {
      alert("Error processing prescription.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="patient-page">
      <div className="phone-container5">
        <div className="content">
          <h2 className="prescription-txt">Prescription Scanner</h2>
          {loading ? (
            <p>Processing...</p>
          ) : success ? (
            <p style={{ color: "white", fontSize: "32px", fontWeight: "bold" }}>
              Success!
            </p>
          ) : (
            <Camera onCapture={handleImageCapture} />
          )}
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default PrescriptionScanner;
