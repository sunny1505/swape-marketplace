import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import "../../styles/login.css";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const {
      name,
      email,
      password,
      confirmPassword,
    } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    /*
      Demo registration.

      User information localStorage me save ho rahi hai.
      Future me yahan backend API connect kar sakte ho.
    */

    localStorage.setItem(
      "swapeUser",
      JSON.stringify({
        name,
        email,
        password,
      })
    );

    localStorage.removeItem("swapeLoggedIn");

    navigate("/login", {
      state: {
        registered: true,
        email,
      },
    });
  };

  return (
    <div className="auth-page">
      <Navbar />

      <main className="auth-main auth-register-page">

        <div className="auth-decoration auth-decoration-one"></div>
        <div className="auth-decoration auth-decoration-two"></div>
        <div className="auth-grid-pattern"></div>

        <div className="auth-container">

          <div className="auth-heading">

            <div className="auth-eyebrow">
              <Sparkles size={15} />
              <span>JOIN THE SWAPE COMMUNITY</span>
            </div>

            <h1>
              Create your
              <span> account.</span>
            </h1>

            <p>
              Join a growing community where you can discover,
              swap and give great products another life.
            </p>

          </div>

          <div className="auth-card">

            <div className="auth-card-top">

              <div>
                <span className="auth-card-label">
                  CREATE ACCOUNT
                </span>

                <h2>Start your Swape journey</h2>
              </div>

              <div className="auth-card-icon">
                <UserRound size={20} />
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

              {/* Name */}
              <div className="auth-field">

                <label htmlFor="name">
                  Full Name
                </label>

                <div className="auth-input-wrapper">

                  <UserRound
                    size={18}
                    className="auth-input-icon"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />

                </div>

              </div>

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

                <label htmlFor="password">
                  Password
                </label>

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
                    placeholder="Create a password"
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
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

              {/* Confirm Password */}
              <div className="auth-field">

                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <div className="auth-input-wrapper">

                  <LockKeyhole
                    size={18}
                    className="auth-input-icon"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        (prev) => !prev
                      )
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* Terms */}
              <div className="auth-terms">

                <div className="auth-check">
                  <Check size={13} />
                </div>

                <p>
                  By creating an account, you agree to our
                  <span> Terms & Conditions </span>
                  and
                  <span> Privacy Policy.</span>
                </p>

              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="auth-submit"
              >
                <span>Create My Account</span>

                <ArrowRight size={18} />
              </button>

            </form>

            <div className="auth-divider">
              <span></span>
              <small>WELCOME TO SWAPE</small>
              <span></span>
            </div>

            <div className="auth-security">
              <ShieldCheck size={17} />

              <span>
                Your information is protected and secure.
              </span>
            </div>

            {/* Login */}
            <div className="auth-register">

              <span>
                Already have an account?
              </span>

              <Link to="/login">
                Login here
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

export default Register;