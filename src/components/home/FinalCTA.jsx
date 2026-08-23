import { ArrowUpRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

import "../../styles/FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="final-cta" id="start-swapping">
      <div className="final-cta-container">

        {/* Background decorative elements */}
        <div className="final-cta-glow final-cta-glow-one"></div>
        <div className="final-cta-glow final-cta-glow-two"></div>

        {/* Main CTA */}
        <div className="final-cta-inner">

          {/* Left Content */}
          <div className="final-cta-content">

            <span className="final-cta-eyebrow">
              READY TO START?
            </span>

            <h2>
              Give your clothes
              <br />
              <em>a second life.</em>
            </h2>

            <p>
              Swap what you no longer wear and discover
              something you'll love. Better fashion starts
              with your wardrobe.
            </p>

            <Link
              to="/dashboard/add-listing"
              className="final-cta-button"
            >
              <span>Start Swapping</span>

              <span className="final-cta-button-icon">
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                />
              </span>
            </Link>

          </div>


          {/* Right Visual */}
          <div className="final-cta-visual">

            <div className="final-cta-image-wrap">

              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=90"
                alt="Premium clothing collection"
                className="final-cta-image"
              />

              <div className="final-cta-image-overlay"></div>

              <div className="final-cta-badge">

                <Leaf
                  size={18}
                  strokeWidth={1.4}
                />

                <span>
                  CONSCIOUS
                  <br />
                  FASHION
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom statement */}
        <div className="final-cta-bottom">

          <span>
            SWAPÉ
          </span>

          <div className="final-cta-bottom-line"></div>

          <span>
            WEAR · SWAP · REPEAT
          </span>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;