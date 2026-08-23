import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  RefreshCw,
  Globe2,
  ShoppingBag,
  Leaf,
  Star,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import "../../styles/About.css";


const values = [
  {
    icon: RefreshCw,
    title: "Circular by Design",
    text: "We give beautiful products a second life instead of letting them sit unused.",
  },
  {
    icon: ShieldCheck,
    title: "Trust First",
    text: "We are building a marketplace where people can discover, swap and shop with confidence.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    text: "Swape connects people who believe great style does not always need to mean something new.",
  },
  {
    icon: Leaf,
    title: "Better Consumption",
    text: "Reuse, refresh and rediscover. Small changes can create a more thoughtful way to shop.",
  },
];

const features = [
  "Discover unique products from real people",
  "Swap items you no longer need",
  "Give your wardrobe and belongings a second life",
  "Build meaningful connections through sharing",
];

const stats = [
  { number: "10K+", label: "Items discovered" },
  { number: "5K+", label: "Community members" },
  { number: "98%", label: "Happy experiences" },
  { number: "24/7", label: "Community access" },
];

function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="about-hero">
        <div className="about-hero-glow about-glow-one"></div>
        <div className="about-hero-glow about-glow-two"></div>

        <div className="about-container">
          <div className="about-hero-grid">

            <div className="about-hero-content">
              <div className="about-eyebrow">
                <Sparkles size={15} />
                <span>The Story Behind Swape</span>
              </div>

              <h1>
                A smarter way to
                <span> own, swap & discover.</span>
              </h1>

              <p>
                Swape is a modern community marketplace created for people
                who believe that great things deserve more than one life.
                Discover something special, exchange what you no longer need,
                and make every item count.
              </p>

              <div className="about-hero-actions">
                <Link to="/explore" className="about-primary-btn">
                  Explore Marketplace
                  <ArrowRight size={18} />
                </Link>

                <Link to="/how-it-works" className="about-secondary-btn">
                  How It Works
                </Link>
              </div>

              <div className="about-mini-trust">
                <div className="about-avatar-stack">
                  <span>SK</span>
                  <span>AM</span>
                  <span>RJ</span>
                  <span>+</span>
                </div>

                <div>
                  <div className="about-stars">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>

                  <p>Loved by our growing community</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="about-hero-visual">

              <div className="about-main-card">
                <div className="about-card-image">
                  <div className="about-image-overlay"></div>

                  <div className="about-image-content">
                    <span>SWAPE</span>
                    <h3>Give it another life.</h3>
                  </div>
                </div>

                <div className="about-card-bottom">
                  <div>
                    <small>COMMUNITY MARKETPLACE</small>
                    <h4>Discover. Swap. Repeat.</h4>
                  </div>

                  <div className="about-round-arrow">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>

              <div className="about-floating-card about-floating-top">
                <div className="floating-icon">
                  <Globe2 size={18} />
                </div>

                <div>
                  <strong>One community</strong>
                  <span>Endless possibilities</span>
                </div>
              </div>

              <div className="about-floating-card about-floating-bottom">
                <div className="floating-icon green">
                  <Leaf size={18} />
                </div>

                <div>
                  <strong>Reuse more</strong>
                  <span>Waste less</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="about-intro">
        <div className="about-container">

          <div className="about-section-heading center">
            <span>OUR PHILOSOPHY</span>

            <h2>
              We believe the future
              <br />
              is <em>shared.</em>
            </h2>

            <p>
              The things we own have stories, value and possibilities beyond
              their first owner. Swape was created to make discovering those
              possibilities simple, beautiful and rewarding.
            </p>
          </div>

          <div className="about-intro-grid">

            <div className="about-intro-image">
              <div className="intro-image-label">
                <span>01</span>
                <strong>RETHINK</strong>
              </div>

              <div className="intro-image-text">
                <h3>Less waste.</h3>
                <h3>More possibilities.</h3>
              </div>
            </div>

            <div className="about-intro-content">

              <span className="about-small-label">
                WHY WE STARTED
              </span>

              <h3>
                What if something you no longer need could become someone's
                next favourite?
              </h3>

              <p>
                Traditional shopping often tells us that newer is always
                better. We wanted to create a different experience — one
                where people can find value in what already exists.
              </p>

              <p>
                Swape brings together discovery, exchange and community in
                one elegant marketplace. Whether you are clearing space,
                searching for something unique or simply looking for a
                smarter way to shop, Swape gives every item another chance.
              </p>

              <div className="about-signature">
                <div className="signature-line"></div>
                <span>THE SWAPE TEAM</span>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="about-stats">
        <div className="about-container">

          <div className="about-stats-wrapper">
            {stats.map((stat, index) => (
              <div className="about-stat" key={index}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="about-values">
        <div className="about-container">

          <div className="about-values-heading">
            <div className="about-section-heading">
              <span>WHAT MATTERS TO US</span>

              <h2>
                Built around
                <br />
                <em>better values.</em>
              </h2>
            </div>

            <p>
              Swape is more than a marketplace. It is a different way of
              thinking about ownership, discovery and community.
            </p>
          </div>

          <div className="about-values-grid">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={index}>

                  <div className="value-number">
                    0{index + 1}
                  </div>

                  <div className="value-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>

                  <div className="value-arrow">
                    <ArrowRight size={17} />
                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          DIFFERENCE SECTION
      ===================================================== */}
      <section className="about-difference">
        <div className="about-container">

          <div className="difference-card">

            <div className="difference-left">

              <span className="about-small-label">
                THE SWAPE DIFFERENCE
              </span>

              <h2>
                Not just another
                <br />
                <em>marketplace.</em>
              </h2>

              <p>
                We are creating an experience where technology feels simple,
                products feel personal and every exchange feels meaningful.
              </p>

              <div className="difference-list">

                {features.map((feature, index) => (
                  <div className="difference-item" key={index}>
                    <div>
                      <Check size={15} />
                    </div>

                    <span>{feature}</span>
                  </div>
                ))}

              </div>

              <Link to="/explore" className="difference-btn">
                Start Exploring
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="difference-right">

              <div className="difference-orbit orbit-one"></div>
              <div className="difference-orbit orbit-two"></div>

              <div className="difference-center">
                <ShoppingBag size={30} strokeWidth={1.5} />

                <strong>SWAPE</strong>

                <span>Discover differently.</span>
              </div>

              <div className="difference-pill pill-one">
                <Users size={16} />
                Community
              </div>

              <div className="difference-pill pill-two">
                <RefreshCw size={16} />
                Exchange
              </div>

              <div className="difference-pill pill-three">
                <Sparkles size={16} />
                Discovery
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          COMMUNITY
      ===================================================== */}
      <section className="about-community">
        <div className="about-container">

          <div className="community-grid">

            <div className="community-visual">

              <div className="community-big-card">
                <div className="community-card-top">
                  <span>SWAPE COMMUNITY</span>
                  <Heart size={19} />
                </div>

                <div className="community-card-center">
                  <div className="community-circle">
                    <Users size={34} strokeWidth={1.4} />
                  </div>

                  <h3>People make<br />the marketplace.</h3>
                </div>

                <div className="community-card-bottom">
                  <span>CONNECT</span>
                  <span>SHARE</span>
                  <span>DISCOVER</span>
                </div>
              </div>

            </div>

            <div className="community-content">

              <span className="about-small-label">
                OUR COMMUNITY
              </span>

              <h2>
                Every swap starts
                <br />
                with a <em>person.</em>
              </h2>

              <p>
                Behind every listing is someone with a story, a style and
                something worth sharing. Our community is what makes Swape
                special.
              </p>

              <p>
                We want to make it easier for people to connect through the
                things they love — while making the process of exchanging
                those things feel safe and effortless.
              </p>

              <div className="community-highlight">

                <div className="highlight-icon">
                  <Users size={20} />
                </div>

                <div>
                  <strong>Growing together</strong>
                  <span>
                    A marketplace powered by people, not just products.
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="about-cta">

        <div className="about-cta-decoration decoration-one"></div>
        <div className="about-cta-decoration decoration-two"></div>

        <div className="about-container">

          <div className="about-cta-content">

            <div className="cta-icon">
              <Sparkles size={22} />
            </div>

            <span>YOUR NEXT DISCOVERY IS WAITING</span>

            <h2>
              Ready to see
              <br />
              what's <em>possible?</em>
            </h2>

            <p>
              Explore unique finds, discover new favourites and become part
              of a marketplace built around sharing.
            </p>

            <div className="about-cta-actions">

              <Link to="/explore" className="cta-primary">
                Explore Swape
                <ArrowRight size={18} />
              </Link>

              <Link to="/how-it-works" className="cta-secondary">
                Learn How It Works
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;