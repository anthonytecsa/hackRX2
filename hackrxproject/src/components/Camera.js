// src/components/Camera.js
import React, { useRef } from "react";
import Webcam from "react-webcam";

const Camera = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc); // Pass the captured image to parent component
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
      />
      <button onClick={captureImage} style={{ marginTop: "10px" }}>
        Capture
      </button>
    </div>
  );
};

export default Camera;
