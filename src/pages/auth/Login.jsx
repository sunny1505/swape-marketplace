import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import "../../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    /*
      Demo login flow.

      Yahan future me API authentication add kar sakte ho.
    */

    const savedUser = JSON.parse(
      localStorage.getItem("swapeUser")
    );

    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      localStorage.setItem("swapeLoggedIn", "true");

      navigate("/explore");
    } else {
      setError(
        "Invalid email or password. Please check your details."
      );
    }
  };

  return (
    <div className="auth-page">
      <Navbar />

      <main className="auth-main">

        {/* Background Decorations */}
        <div className="auth-decoration auth-decoration-one"></div>
        <div className="auth-decoration auth-decoration-two"></div>
        <div className="auth-grid-pattern"></div>

        <div className="auth-container">

          <div className="auth-heading">

            <div className="auth-eyebrow">
              <Sparkles size={15} />
              <span>WELCOME BACK TO SWAPE</span>
            </div>

            <h1>
              Welcome
              <span> back.</span>
            </h1>

            <p>
              Sign in to continue discovering unique products,
              connect with the community and make every item count.
            </p>

          </div>

          <div className="auth-card">

            <div className="auth-card-top">
              <div>
                <span className="auth-card-label">
                  MEMBER LOGIN
                </span>

                <h2>Sign in to your account</h2>
              </div>

              <div className="auth-card-icon">
                <LockKeyhole size={20} />
              </div>
            </div>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <form
              className="auth-form"
              onSubmit={handleSubmit}
            >

              {/* Email */}
              <div className="auth-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <div className="auth-input-wrapper">

                  <Mail
                    size={18}
                    className="auth-input-icon"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                  />

                </div>

              </div>

              {/* Password */}
              <div className="auth-field">

                <div className="auth-label-row">

                  <label htmlFor="password">
                    Password
                  </label>

                  <button
                    type="button"
                    className="forgot-password"
                    onClick={() =>
                      setError(
                        "Password recovery will be available soon."
                      )
                    }
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="auth-input-wrapper">

                  <LockKeyhole
                    size={18}
                    className="auth-input-icon"
                  />

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="auth-submit"
              >
                <span>Login to Swape</span>

                <ArrowRight size={18} />
              </button>

            </form>

            <div className="auth-divider">
              <span></span>
              <small>SECURE ACCESS</small>
              <span></span>
            </div>

            <div className="auth-security">
              <ShieldCheck size={17} />

              <span>
                Your account information is kept secure.
              </span>
            </div>

            {/* Register */}
            <div className="auth-register">

              <span>
                Don't have an account?
              </span>

              <Link to="/register">
                Create an account
                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;