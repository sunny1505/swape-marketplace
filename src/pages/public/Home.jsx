import Navbar from "../../components/layout/Navbar";

import HeroSection from "../../components/home/HeroSection";
import AboutSwape from "../../components/home/AboutSwape";
import WhySwape from "../../components/home/WhySwape";
import HowItWorks from "../../components/home/HowItWorks";
import MarketplaceFeatures from "../../components/home/MarketplaceFeatures";
import SwapJourney from "../../components/home/SwapJourney";
import TheSwapeWay from "../../components/home/TheSwapeWay";
import FinalCTA from "../../components/home/FinalCTA";

import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <div className="app-page">

      <Navbar />

      <main>

        {/* 01 — HERO */}
        <section id="home">
          <HeroSection />
        </section>

        {/* 02 — ABOUT */}
        <section id="about">
          <AboutSwape />
        </section>

        {/* 03 — WHY SWAPÉ */}
        <section id="why-swape">
          <WhySwape />
        </section>

        {/* 04 — HOW IT WORKS */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* 05 — MARKETPLACE FEATURES */}
        <section id="features">
          <MarketplaceFeatures />
        </section>

        {/* 06 — SWAP JOURNEY */}
        <section id="swap-journey">
          <SwapJourney />
        </section>

        {/* 07 — THE SWAPÉ WAY */}
        <section id="the-swape-way">
          <TheSwapeWay />
        </section>

        {/* 08 — FINAL CTA */}
        <section id="start-swapping">
          <FinalCTA />
        </section>

      </main>

      <Footer />

    </div>
  );
};

export default Home;