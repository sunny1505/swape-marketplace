import {
  ArrowUpRight,
  Camera,
  Search,
  Repeat2,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

import "../../styles/HowItWorks.css";

const steps = [
  {
    number: "01",
    label: "LIST",
    title: "Create Your Listing",
    description:
      "Upload your clothes and add the size, brand, condition and estimated swap value.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "02",
    label: "DISCOVER",
    title: "Discover Clothes",
    description:
      "Explore pieces from other wardrobes and filter by category, size, condition and location.",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "03",
    label: "SWAP",
    title: "Send a Swap Request",
    description:
      "Found something you love? Choose one of your listed pieces and make an exchange request.",
    icon: Repeat2,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "04",
    label: "CONNECT",
    title: "Chat & Agree",
    description:
      "Talk directly with the owner, compare items and agree on the details of your exchange.",
    icon: MessageCircle,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=90",
  },
  {
    number: "05",
    label: "COMPLETE",
    title: "Complete the Swap",
    description:
      "Once both sides agree, exchange locally or arrange delivery for your new-to-you piece.",
    icon: CheckCircle2,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=90",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works-container">

        {/* HEADER */}
        <div className="how-it-works-header">

          <div className="how-it-works-heading">
            <span className="how-it-works-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              Swap your wardrobe
              <br />
              in <em>five simple steps.</em>
            </h2>
          </div>

          <div className="how-it-works-intro">
            <span className="how-it-works-intro-number">
              01 — 05
            </span>

            <p>
              From listing something you no longer wear to finding
              something new to you, Swapé keeps the entire exchange
              simple, transparent and community-driven.
            </p>
          </div>

        </div>

        {/* STEP CARDS */}
        <div className="how-it-works-grid">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                className="how-step-card"
                key={step.number}
              >

                {/* IMAGE */}
                <div className="how-step-image">

                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                  />

                  <div className="how-step-image-overlay" />

                  <span className="how-step-number">
                    {step.number}
                  </span>

                  <span className="how-step-label">
                    {step.label}
                  </span>

                  <div className="how-step-icon">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>

                </div>

                {/* CONTENT */}
                <div className="how-step-content">

                  <div className="how-step-top">

                    <span>
                      STEP {step.number}
                    </span>

                    <ArrowUpRight
                      className="how-step-arrow"
                      size={19}
                      strokeWidth={1.5}
                    />

                  </div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

        {/* BOTTOM LINE */}
        <div className="how-it-works-bottom">

          <span>
            YOUR WARDROBE
          </span>

          <div className="how-it-works-line" />

          <strong>
            Find it. Swap it. Keep it moving.
          </strong>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;