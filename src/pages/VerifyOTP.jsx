import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./page.css";

export default function Verify() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();

      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasteData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    const newOtp = [...otp];

    pasteData.split("").forEach((digit, index) => {
      if (index < 6) newOtp[index] = digit;
    });

    setOtp(newOtp);

    const nextEmpty = newOtp.findIndex((item) => !item);
    inputRefs.current[nextEmpty !== -1 ? nextEmpty : 5]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length === 6) {
      navigate("/password");
    }
  };

  return (
    <div className="signup">
      <div className="signup-card">
        <h1 className="signup-title">Verify your email</h1>

        <p className="verify-subtitle">
          We have sent a 6-digit code to your email.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                inputMode="numeric"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`otp-input ${digit ? "otp-input-filled" : ""}`}
                required
              />
            ))}
          </div>

          <button type="submit" className="signup-btn">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}