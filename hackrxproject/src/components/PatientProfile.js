// src/components/PatientProfile.js
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { fetchPrescriptions } from "../utils/firestore"; // Import the fetch function
import NavBar from "./NavBar";


const PatientProfile = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const loadPrescriptions = async () => {
      const user = auth.currentUser;
      if (user) {
        const userPrescriptions = await fetchPrescriptions(user.uid);
        setPrescriptions(userPrescriptions);
      }
    };
    loadPrescriptions();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Prescriptions</h2>
      {prescriptions.length > 0 ? (
        prescriptions.map((p, index) => (
          <div key={index}>
            <h3>{p.name}</h3>
            <p><strong>Dosage:</strong> {p.dosage}</p>
            <p><strong>Side Effects:</strong> {p.sideEffects.join(", ")}</p>
            <p><strong>Instructions:</strong> {p.instructions}</p>
            <p><strong>Timing:</strong> {p.timing}</p>
          </div>
        ))
      ) : (
        <p>No prescriptions found.</p>
      )}
      <NavBar />
      
    </div>
  );
};

export default PatientProfile;
