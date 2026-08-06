import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./page.css";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    navigate("/");
  };

  return (
    <div className="password-page">
      <div className="password-card">
        <h1 className="password-title">Create Password</h1>

        <form onSubmit={handleSubmit}>
          <div className="password-input-group">
            <span className="password-input-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>

            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
              required
            />
          </div>

          <div className="password-input-group">
            <span className="password-input-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>

            <input
              type="password"
              placeholder="CONFIRM PASSWORD"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="password-input"
              required
            />
          </div>

          <button type="submit" className="password-btn">
            Create Account
          </button>
        </form>

        <div className="password-toggle-text">
          Already have an account?{" "}
          <Link to="/login" className="password-link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}