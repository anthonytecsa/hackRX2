// src/components/PatientProfile.js
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { fetchPrescriptions } from "../utils/firestore"; // Import the fetch function
import NavBar from "./NavBar";
import FullHistory from "./FullHistory";


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
    <div className="patient-page">
      <div className="phone-container4">
        <div className="welcome-container">
          <h1 className="help-txt2">My History</h1>
          <img className="help-logo" src="/images/carrot2.png" alt="Carrot Logo" />
        </div>

        <FullHistory prescriptions={prescriptions} />
        <NavBar />
      </div>
    </div>

  );
};

export default PatientProfile;
