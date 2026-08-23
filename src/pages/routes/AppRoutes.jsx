import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../public/Home";
import Explore from "../public/Explore";
import HowItWorks from "../public/HowItWorks";
import About from "../public/About";

import ItemDetails from "../public/ItemDetails";

import Login from "../auth/Login";
import Register from "../auth/Register";
import ForgotPassword from "../auth/ForgotPassword";

import Dashboard from "../user/Dashboard";
import AddListing from "../user/AddListing";
import EditListing from "../user/EditListing";
import MyListings from "../user/MyListings";
import Profile from "../user/Profile";
import Settings from "../user/Settings";
import SwapRequests from "../user/SwapRequests";
import SwapDetails from "../user/SwapDetails";
import Messages from "../user/Messages";

import AdminDashboard from "../admin/AdminDashboard";
import Analytics from "../admin/Analytics";
import Listings from "../admin/Listings";
import Users from "../admin/Users";
import Swaps from "../admin/Swaps";
import Reports from "../admin/Reports";

/* =========================================================
   LAYOUT
========================================================= */

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";


/* =========================================================
   ABOUT PAGE WITH GLOBAL HEADER + FOOTER
========================================================= */

const AboutPage = () => {
  return (
    <div className="app-page">

      {/* HEADER */}
      <Navbar />

      {/* ABOUT CONTENT */}
      <main>
        <About />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};


/* =========================================================
   APP ROUTES
========================================================= */

const AppRoutes = () => {
  return (
    <Routes>

      {/* =====================================================
          PUBLIC
      ====================================================== */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/explore"
        element={<Explore />}
      />

      <Route
        path="/how-it-works"
        element={<HowItWorks />}
      />

      {/* ABOUT WITH HEADER + FOOTER */}
      <Route
        path="/about"
        element={<AboutPage />}
      />

      <Route
        path="/item/:id"
        element={<ItemDetails />}
      />


      {/* =====================================================
          AUTH
      ====================================================== */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />


      {/* =====================================================
          USER
      ====================================================== */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/dashboard/add-listing"
        element={<AddListing />}
      />

      <Route
        path="/dashboard/edit-listing/:id"
        element={<EditListing />}
      />

      <Route
        path="/dashboard/my-listings"
        element={<MyListings />}
      />

      <Route
        path="/dashboard/profile"
        element={<Profile />}
      />

      <Route
        path="/dashboard/settings"
        element={<Settings />}
      />

      <Route
        path="/dashboard/swap-requests"
        element={<SwapRequests />}
      />

      <Route
        path="/dashboard/swap/:id"
        element={<SwapDetails />}
      />

      <Route
        path="/dashboard/messages"
        element={<Messages />}
      />


      {/* =====================================================
          ADMIN
      ====================================================== */}

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/analytics"
        element={<Analytics />}
      />

      <Route
        path="/admin/listings"
        element={<Listings />}
      />

      <Route
        path="/admin/users"
        element={<Users />}
      />

      <Route
        path="/admin/swaps"
        element={<Swaps />}
      />

      <Route
        path="/admin/reports"
        element={<Reports />}
      />


      {/* =====================================================
          FALLBACK
      ====================================================== */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
};

export default AppRoutes;