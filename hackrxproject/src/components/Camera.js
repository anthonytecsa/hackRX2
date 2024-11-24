// src/components/Camera.js
import React, { useRef } from "react";
import Webcam from "react-webcam";

const Camera = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc); 
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
      />
      <button
        onClick={captureImage}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#008080", 
          color: "white", // Text color
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        Capture Prescription
      </button>
    </div>
  );
};

export default Camera;
