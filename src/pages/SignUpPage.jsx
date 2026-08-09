import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./page.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/verify");
  };

  return (
    <div className="signup">
      <div className="signup-card">
        <h1 className="signup-title">Create your account</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <span className="input-icon">
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>

            <input
              type="text"
              placeholder="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="signup-input"
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
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
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 6L2 7" />
              </svg>
            </span>

            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-input"
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Next
          </button>
        </form>

        <div className="toggle-text">
          Already have an account?{" "}
          <Link to="/" className="signup-link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}