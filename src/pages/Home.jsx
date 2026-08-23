import BrandIntro from "../components/home/BrandIntro";
import ProblemSolution from "../components/home/ProblemSolution";
import HowItWorks from "../components/home/HowItWorks";
import MarketplaceFeatures from "../components/home/MarketplaceFeatures";

import FeaturedListings from "../../components/home/FeaturedListings";
import NearbySwaps from "../../components/home/NearbySwaps";
import SustainabilitySection from "../../components/home/SustainabilitySection";



const Home = () => {
  return (
    <main className="swape-home">

      {/* =========================================
          HERO SECTION
          Your existing banner stays here
      ========================================= */}

      <section className="hero-section">
        {/* Existing HeroSlider / Banner code */}
      </section>


      {/* =========================================
          01. BRAND INTRO
      ========================================= */}

      <BrandIntro />


      {/* =========================================
          02. PROBLEM & SOLUTION
      ========================================= */}

      <ProblemSolution />


      {/* =========================================
          03. HOW IT WORKS
      ========================================= */}

      <HowItWorks />


      {/* =========================================
          04. MARKETPLACE FEATURES
      ========================================= */}

      <MarketplaceFeatures />

    </main>
  );
};

export default Home;