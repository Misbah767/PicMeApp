// src/screens/VarificatonScreen/VerificationForm.jsx
import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import "./VerificationForm.css";

export default function VerificationForm() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setTimeout(() => setTimer(timer - 1), 1000);
    }
    return () => clearTimeout(countdown);
  }, [timer]);

  const handleInputChange = (value, index) => {
    if (isNaN(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if not last and a value is entered
    if (value && index < code.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index]) {
      if (index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        prevInput?.focus();
      }
    }
  };

  const handleResend = () => {
    setCode(["", "", "", ""]);
    setTimer(20);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verification Code:", code.join(""));
  };

  return (
    <form className="verification-form" onSubmit={handleSubmit}>
      <h2>Verification</h2>
      <p className="info-text">
        We’ve sent you the verification 
      </p>
      <p className="info-text-2">code on <strong>{email}</strong> </p>

      <div className="inputBoxes">
        <div className="inputmainbox">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              className="inputbox"
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
      </div>

      <Button type="submit" variant="filled" className="btn-verify">
        Continue
      </Button>

      <div className="resend-wrapper">
        {timer === 0 ? (
          <p className="resend-text">
            Didn’t receive the code?{" "}
            <span className="resend-button" onClick={handleResend}>
              Resend
            </span>
          </p>
        ) : (
          <p className="resend-btn">Resend code in {timer}s</p>
        )}
      </div>
    </form>
  );
}
