import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./QrGenerator.css";

function QrGenerator() {
  const [qrValue, setQrValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleGenerate() {
    setQrValue(inputValue);
  }

  return (
    <div className="qr-generator">
      <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="Type the link/value here"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        disabled={inputValue.length === 0}
        onClick={() => handleGenerate()}
      >
        Generate
      </button>
      <div className="qr-code-container">
        {qrValue && (
          <QRCode
            size={300}
            value={qrValue}
            fgColor="#009688"
            style={{ borderRadius: "1rem" }}
            className="qr"
          />
        )}
      </div>
    </div>
  );
}

export default QrGenerator;
