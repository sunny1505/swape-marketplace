import {
  Plus,
  Search,
  Repeat2,
  MessageCircle,
  Check,
  ArrowUpRight,
} from "lucide-react";

import "../../styles/SwapJourney.css";

const steps = [
  {
    number: "01",
    icon: Plus,
    title: "List Your Clothes",
    description:
      "Upload your pre-loved clothes with photos, size, brand, condition and estimated swap value.",
  },
  {
    number: "02",
    icon: Search,
    title: "Discover Pieces",
    description:
      "Explore clothing from the community and find pieces that match your style, size and location.",
  },
  {
    number: "03",
    icon: Repeat2,
    title: "Send a Swap",
    description:
      "Choose one of your listed items and send a simple swap request to the owner.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Chat & Agree",
    description:
      "Connect directly with the owner, discuss the exchange and agree on the final swap.",
  },
  {
    number: "05",
    icon: Check,
    title: "Complete the Swap",
    description:
      "Meet locally or arrange delivery and give your clothes a new life.",
  },
];

const SwapJourney = () => {
  return (
    <section className="swap-journey-section">
      <div className="swap-journey-container">

        {/* Section Header */}
        <div className="swap-journey-header">

          <div className="swap-journey-eyebrow">
            <span></span>
            HOW SWAPÉ WORKS
          </div>

          <div className="swap-journey-heading-row">

            <h2>
              Swap your wardrobe
              <br />
              <em>in five simple steps.</em>
            </h2>

            <p>
              From listing clothes you no longer wear to completing a
              meaningful exchange, Swapé makes sustainable fashion
              simple, transparent and community-driven.
            </p>

          </div>
        </div>

        {/* Journey */}
        <div className="swap-journey-list">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                className="swap-journey-item"
                key={step.number}
              >

                {/* Number */}
                <div className="swap-step-number">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="swap-step-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="swap-step-content">

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>

                {/* Arrow */}
                <div className="swap-step-arrow">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="swap-journey-footer">

          <div className="swap-journey-footer-text">
            <span>READY TO MAKE THE FIRST SWAP?</span>

            <h3>
              Your unused clothes
              <em> still have a story.</em>
            </h3>
          </div>

          <a
            href="/dashboard/add-listing"
            className="swap-journey-button"
          >
            <span>Start Swapping</span>

            <span className="swap-button-icon">
              <ArrowUpRight size={18} />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default SwapJourney;