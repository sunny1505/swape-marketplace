import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home-sections.css";

const slides = [
  {
    eyebrow: "SUSTAINABLE FASHION",
    title: "Swap Clothes.",
    highlight: "Refresh Your Wardrobe.",
    description:
      "Give your pre-loved clothes a new life. Discover unique fashion pieces and exchange them with people in your community.",
    primaryText: "Explore Clothes",
    primaryLink: "/explore",
    secondaryText: "List Your Clothes",
    secondaryLink: "/dashboard/add-listing",
    image: "/images/fashion-slide-1.jpg",
    fallback:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1100&q=85",
  },
  {
    eyebrow: "WEAR. SWAP. REPEAT.",
    title: "Your Wardrobe.",
    highlight: "Someone Else's Next Favorite.",
    description:
      "Turn clothes you no longer wear into something new. Swap thoughtfully and keep great fashion moving.",
    primaryText: "Explore Marketplace",
    primaryLink: "/explore",
    secondaryText: "Start Swapping",
    secondaryLink: "/dashboard/add-listing",
    image: "/images/fashion-slide-2.jpg",
    fallback:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1100&q=85",
  },
  {
    eyebrow: "FASHION WITH PURPOSE",
    title: "Less Waste.",
    highlight: "More Possibilities.",
    description:
      "Join a growing community that believes beautiful clothes deserve more than one life.",
    primaryText: "Discover Swapé",
    primaryLink: "/explore",
    secondaryText: "List an Item",
    secondaryLink: "/dashboard/add-listing",
    image: "/images/fashion-slide-3.jpg",
    fallback:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <article
              key={slide.title}
              className={`hero-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              {/* LEFT CONTENT */}
              <div className="hero-content">
                <span className="hero-eyebrow">
                  <span className="eyebrow-line"></span>
                  {slide.eyebrow}
                </span>

                <h1>
                  {slide.title}
                  <br />
                  <span>{slide.highlight}</span>
                </h1>

                <p>{slide.description}</p>

                <div className="hero-actions">
                  <Link
                    to={slide.primaryLink}
                    className="hero-primary-button"
                  >
                    {slide.primaryText}
                    <span>↗</span>
                  </Link>

                  <Link
                    to={slide.secondaryLink}
                    className="hero-secondary-button"
                  >
                    {slide.secondaryText}
                  </Link>
                </div>

                <div className="hero-trust">
                  <div className="trust-avatars">
                    <span>SK</span>
                    <span>AR</span>
                    <span>PM</span>
                  </div>

                  <div className="trust-copy">
                    <strong>Growing community</strong>
                    <small>Making fashion more sustainable</small>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="hero-visual">
                <div className="hero-image-decoration decoration-one"></div>
                <div className="hero-image-decoration decoration-two"></div>

                <div className="hero-image-frame">
                  <img
                    src={slide.image}
                    alt={slide.highlight}
                    onError={(event) => {
                      event.currentTarget.src = slide.fallback;
                    }}
                  />

                  <div className="image-overlay"></div>

                  <div className="image-floating-card">
                    <span className="floating-icon">♻</span>

                    <div>
                      <strong>Second Life</strong>
                      <small>Better for fashion</small>
                    </div>
                  </div>

                  <div className="image-number">
                    0{index + 1}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SLIDER DOTS */}
        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={`hero-dot ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;