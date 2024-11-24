import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const PreSignIn = () => {
  const navigate = useNavigate();

  const handleUserTypeSelection = (userType) => {
    navigate('/signin', { state: { userType } }); // Pass userType to SignIn page
  };

  return (
    <div className="main-page">
        <div className="phone-container">
            <img className="logo-pre" src="/images/carrot.png" alt="Carrot Logo" />
            <h1 className="slogan">Rooted in Care</h1>
            <p className="sign-in-text">I’m signing in as a...</p>
            <div className="button-group">
                <button
                className="user-type-button"
                onClick={() => handleUserTypeSelection('patient')}
                >
                Patient
                </button>
                <button
                className="user-type-button"
                onClick={() => handleUserTypeSelection('pharmacist')}
                >
                Pharmacist
                </button>
            </div>
        </div>
    </div>
  );
};

export default PreSignIn;
