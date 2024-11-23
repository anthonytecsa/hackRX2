// src/components/Scan.js
import React, { useState } from "react";
import Camera from "./Camera";
import { extractTextFromImage } from "../utils/ocr";
import { lookupPrescription } from "../utils/prescriptions";
import { auth } from "../firebase";
import { savePrescription } from "../utils/firestore";
import NavBar from "./NavBar";
import "./styles.css";

const PrescriptionScanner = () => {
  const [loading, setLoading] = useState(false);
  const [prescription, setPrescription] = useState(null);

  const handleImageCapture = async (imageSrc) => {
    setLoading(true);
    try {
      const extractedText = await extractTextFromImage(imageSrc);
      console.log("Extracted Text:", extractedText);

      const prescriptionData = lookupPrescription(extractedText);

      if (prescriptionData) {
        setPrescription(prescriptionData);

        // Save the prescription to Firestore
        const user = auth.currentUser;
        if (user) {
          await savePrescription(user.uid, prescriptionData);
          console.log("Prescription saved to Firestore!");
        }
      } else {
        alert("Prescription not recognized.");
      }
    } catch (error) {
      alert("Error processing image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content">
      <h2>Scan Prescription</h2>
      {loading ? (
        <p>Processing...</p>
      ) : prescription ? (
        <div>
          <h3>{prescription.name}</h3>
          <p><strong>Dosage:</strong> {prescription.dosage}</p>
          <p><strong>Side Effects:</strong> {prescription.sideEffects.join(", ")}</p>
          <p><strong>Instructions:</strong> {prescription.instructions}</p>
          <p><strong>Timing:</strong> {prescription.timing}</p>
        </div>
      ) : (
        <Camera onCapture={handleImageCapture} />
      )}
      <NavBar />
    </div>
  );
};

export default PrescriptionScanner;
