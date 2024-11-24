import React, { useState } from 'react';
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.css';

const SignIn = () => {
  const location = useLocation();
  const [userType, setUserType] = useState(location.state?.userType || 'patient'); // Default to patient
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect based on user type
      if (userType === 'patient') {
        navigate('/patientHome');
      } else if (userType === 'pharmacist') {
        navigate('/pharmacistHome');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      alert(error.message);
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="main-page">
      <div className="phone-container">
        <button className="back-button" onClick={handleBack}>
          back
        </button>
        <img className="logo" src="/images/carrot.png" alt="Carrot Logo" />
        <h2 className="userid">{userType === 'patient' ? 'Patient' : 'Pharmacist'}</h2>
        <div className="login-container">
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <h1 className="forgor">forgot password</h1>
            <button className="login-button" type="submit">
              Sign In
            </button>
          </form>
        </div>
        <h1 className="create-acc">create an account</h1>
      </div>
    </div>
  );
};

export default SignIn;
