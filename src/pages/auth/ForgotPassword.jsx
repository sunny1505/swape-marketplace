import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setMessage(
      "If an account exists with this email, password reset instructions have been sent."
    );
  };

  return (
    <main className="forgot-password-page">
      <div className="forgot-password-wrapper">
        <section className="forgot-password-card">
          <div className="forgot-password-header">
            <Link to="/" className="forgot-password-logo">
              SWAPÉ
            </Link>

            <span className="forgot-password-label">
              ACCOUNT RECOVERY
            </span>

            <h1>Forgot Password?</h1>

            <p>
              Enter the email address associated with your account
              and we'll help you reset your password.
            </p>
          </div>

          <form
            className="forgot-password-form"
            onSubmit={handleSubmit}
          >
            <div className="form-field">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                  setMessage("");
                }}
                placeholder="Enter your email address"
                autoComplete="email"
              />
            </div>

            {error && (
              <div className="forgot-password-error">
                {error}
              </div>
            )}

            {message && (
              <div className="forgot-password-success">
                {message}
              </div>
            )}

            <button
              type="submit"
              className="forgot-password-button"
            >
              Send Reset Instructions
            </button>
          </form>

          <div className="forgot-password-footer">
            <span>Remember your password?</span>

            <Link to="/login">
              Back to Login
            </Link>
          </div>

          <button
            type="button"
            className="forgot-password-home"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </section>
      </div>
    </main>
  );
};

export default ForgotPassword;