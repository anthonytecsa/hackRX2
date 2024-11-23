// src/components/SignIn.js
import React, { useState } from 'react';
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './styles.css'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/patientHome'); 
    } catch (error) {
      console.error('Error signing in:', error);
      alert(error.message);
    }
  };

  return (
    <div className='sign-in-page'>
        <div className="sign-in-container">
        <h2>CareRx | Patient Sign-In</h2>
        <form onSubmit={handleSignIn}>
            <div className="form-group">
            <label>Email</label>
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
            <button className="whisper-button" type="submit">Sign In</button>
        </form>
        </div>
    </div>
  );
};

export default SignIn;
