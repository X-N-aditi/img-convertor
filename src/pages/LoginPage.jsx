import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./page.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/dashboard");
    }
  };

  const handleGoogleLogin = () => {
    // Add your Google OAuth API here
    console.log("Continue with Google");

    // Example:
    // window.location.href = "http://localhost:5000/api/v1/auth/google";
  };

  return (
    <div className="login">
      <div className="login-card">

        <h1 className="login-title">Login with Email</h1>

        <form onSubmit={handleSubmit}>

          {/* Email */}
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
              className="login-input"
              required
            />
          </div>

          {/* Password */}
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
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>

            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
          </div>

          {/* Login */}
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>

        {/* Divider */}
        <div className="login-divider">
          <span>OR</span>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="google-login-btn"
          onClick={handleGoogleLogin}
        >
          <svg
            className="google-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h6.44a5.5 5.5 0 0 1-2.39 3.61v3h3.87c2.27-2.09 3.57-5.17 3.57-8.64z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3c-1.07.72-2.43 1.15-4.06 1.15-3.13 0-5.79-2.11-6.74-4.95H1.26v3.09A12 12 0 0 0 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.26 14.29A7.23 7.23 0 0 1 4.88 12c0-.79.14-1.56.38-2.29V6.62H1.26A12 12 0 0 0 0 12c0 1.94.46 3.77 1.26 5.38l4-3.09z"
            />
            <path
              fill="#EA4335"
              d="M12 4.76c1.77 0 3.36.61 4.61 1.8l3.45-3.45C17.95 1.12 15.24 0 12 0A12 12 0 0 0 1.26 6.62l4 3.09C6.21 6.87 8.87 4.76 12 4.76z"
            />
          </svg>

          <span>Continue with Google</span>
        </button>

        {/* Signup */}
        <div className="toggle-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </div>

      </div>
    </div>
  );
}