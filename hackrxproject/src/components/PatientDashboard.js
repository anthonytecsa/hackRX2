// src/components/PatientDashboard.js
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { fetchPrescriptions } from "../utils/firestore";
import NavBar from "./NavBar";
import { submitTicket } from "../utils/firestore";
import TodayPrescriptions from "./TodaysPrescriptions";
import { useNavigate } from 'react-router-dom';


const PatientDashboard = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const navigate = useNavigate();

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
      <div className="phone-container2">
        <div className="welcome-container">
          <h1 className="welcome-txt">Welcome, {auth.currentUser ? auth.currentUser.email.split("@")[0] : "Patient"}!</h1>
          <img className="welcome-logo" src="/images/carrot.png" alt="Carrot Logo" />
        </div>

        <TodayPrescriptions prescriptions={prescriptions} />

        <div className="button-container">
        <button
            className="custom-button history-button"
            onClick={() => navigate("/patientProfile")}
          >
            <div className="button-text">
              <span>My</span>
              <span>History</span>
            </div>
          </button>
          <button
            className="custom-button help-button"
            onClick={() => navigate("/help")}
          >
            <div className="button-text">
              <span>Help</span>
            </div>
          </button>
        </div>

        
        <NavBar />
      </div>
    </div>
  );
};

export default PatientDashboard;
