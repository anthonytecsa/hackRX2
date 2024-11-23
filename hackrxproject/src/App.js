import './App.css';
import PatientDashboard from './components/PatientDashboard';
import PatientProfile from './components/PatientProfile';
import PrescriptionScanner from './components/PatientScan';
import SignIn from './components/SignInPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/signin" />} />

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
        </Routes>
      </Router>
  );
}

export default App;
