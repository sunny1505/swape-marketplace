import {
  ArrowUpRight,
  ArrowDownRight,
  Recycle,
  Heart,
  Sparkles,
} from "lucide-react";

import "../../styles/TheSwapeWay.css";

const impactItems = [
  {
    number: "01",
    title: "Wear it again.",
    text: "Extend the life of beautiful clothing by passing it forward.",
  },
  {
    number: "02",
    title: "Swap with purpose.",
    text: "Discover pieces that feel personal, unique and worth keeping.",
  },
  {
    number: "03",
    title: "Make fashion circular.",
    text: "Keep great garments moving instead of letting them sit unused.",
  },
];

function TheSwapeWay() {
  return (
    <section className="swape-luxury-section">
      <div className="swape-luxury-container">

        {/* =========================================
            INTRO
        ========================================= */}
        <div className="swape-luxury-intro">

          <div className="swape-luxury-label">
            <span></span>
            THE SWAPÉ WAY
          </div>

          <div className="swape-luxury-intro-grid">

            <h2>
              Fashion is better
              <br />
              when it <i>keeps moving.</i>
            </h2>

            <div className="swape-luxury-intro-text">
              <p>
                Your wardrobe already holds pieces with stories,
                character and value. Swapé gives those pieces another
                chapter — with someone new.
              </p>

              <a href="/explore" className="swape-luxury-discover">
                <span>Discover the marketplace</span>

                <span className="discover-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </a>
            </div>

          </div>
        </div>


        {/* =========================================
            FEATURE IMAGE EDITORIAL
        ========================================= */}
        <div className="swape-fashion-story">

          {/* Main Image */}
          <div className="swape-main-image">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85"
              alt="Luxury fashion clothing"
            />

            <div className="swape-image-overlay">
              <span>01</span>
              <span>SECOND LIFE</span>
            </div>

          </div>


          {/* Small Floating Image */}
          <div className="swape-small-image">

            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85"
              alt="Fashion clothing collection"
            />

            <div className="small-image-caption">
              <span>CURATED</span>
              <span>PRE-LOVED</span>
            </div>

          </div>


          {/* Story Text */}
          <div className="swape-story-copy">

            <div className="story-icon">
              <Recycle size={22} strokeWidth={1.4} />
            </div>

            <span className="story-label">
              A MORE CONSCIOUS WARDROBE
            </span>

            <h3>
              The next
              <br />
              <i>chapter</i> starts
              <br />
              with you.
            </h3>

            <p>
              We believe the future of fashion doesn't have to mean
              constantly buying something new. Sometimes, it means
              discovering something that already exists.
            </p>

          </div>

        </div>
        <div className="swape-bottom-visual">

          <div className="bottom-visual-image">

            <img
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1500&q=85"
              alt="Fashion wardrobe"
            />

            <div className="bottom-visual-content">

              <span>WEAR. SWAP. REPEAT.</span>

              <h3>
                Your wardrobe
                <br />
                can do <i>more.</i>
              </h3>

              <a href="/explore">
                Explore Swapé
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TheSwapeWay;