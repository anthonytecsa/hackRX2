import './App.css';
import PatientDashboard from './components/PatientDashboard';
import PatientProfile from './components/PatientProfile';
import PrescriptionScanner from './components/PatientScan';
import SignIn from './components/SignIn';
import PreSignIn from './components/PreSignIn';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import HelpPage from './components/HelpPage';
import AskPharmacist from './components/PharmaForm';
import PharmacistAlerts from './components/PharmacistAlerts';
import PharmacistDashboard from './components/PharmacistDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<PreSignIn />} />

        {/* Public Route */}
        <Route path="/signin" element={<SignIn />} />

        {/* Protected Routes */}
        <Route
          path="/patientHome"
          element={
            <PrivateRoute>
              <PatientDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/pharmacistHome"
          element={
              <PharmacistDashboard />
          }
        />
        <Route
          path="/pharmacistAlert"
          element={
            <PrivateRoute>
              <PharmacistAlerts />
            </PrivateRoute>
          }
        />
        <Route
          path="/patientProfile"
          element={
            <PrivateRoute>
              <PatientProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/scan"
          element={
            <PrivateRoute>
              <PrescriptionScanner />
            </PrivateRoute>
          }
        />
        <Route
          path="/help"
          element={
            <HelpPage />
          }
        />
        <Route
          path="/ask-pharmacist"
          element={
            <AskPharmacist />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
