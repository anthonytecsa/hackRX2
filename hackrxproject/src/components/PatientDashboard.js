// src/components/PatientDashboard.js
import React from 'react';
import { auth } from '../firebase';
import NavBar from "./NavBar"; // Import the NavBar component

const PatientDashboard = () => {

  // Get the current user's email (or name if required)
  const user = auth.currentUser;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome, {user ? user.email.split('@')[0] : 'Patient'}!</h1>
      <p>Here is your dashboard to manage prescriptions and health data.</p>

      <NavBar />
    </div>
  );
};

export default PatientDashboard;
