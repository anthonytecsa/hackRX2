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

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => {
        setLoading(false);
        if (success) {
          navigate("/patientHome");
        }
      }, 3000);

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [loading, success, navigate]);

  const handleImageCapture = async (imageSrc) => {
    setLoading(true);
    try {
      // Simulate processing the captured image
      console.log("Captured Image:", imageSrc);

      // Test prescription data
      const testPrescription = {
        name: "Ibuprofen",
        dosage: "200mg",
        sideEffects: "Drowsiness, stomach upset",
        instructions: "Take after meals",
        timing: "Every 6 hours as needed",
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
