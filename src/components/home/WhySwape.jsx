import {
  ArrowUpRight,
  ArrowDownRight,
  Repeat2,
  IndianRupee,
  MapPin,
  Shirt,
  Recycle,
  Sparkles,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";

import "../../styles/WhySwape.css";


// =====================================================
// PROBLEM DATA
// =====================================================

const problems = [
  {
    number: "01",
    title: "Unused Clothes",
    description:
      "Beautiful pieces often remain hidden in wardrobes simply because they no longer fit your lifestyle or personal style.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=90",
    icon: Shirt,
  },
  {
    number: "02",
    title: "Difficult Resale",
    description:
      "Selling pre-loved fashion can mean pricing, negotiation, waiting and uncertainty. Swapping makes the experience simpler.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=90",
    icon: IndianRupee,
  },
  {
    number: "03",
    title: "Fashion Waste",
    description:
      "Wearable clothing deserves a longer life. Keeping garments moving helps reduce unnecessary textile waste.",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=90",
    icon: Recycle,
  },
];


// =====================================================
// SOLUTION DATA
// =====================================================

const solutions = [
  {
    number: "01",
    icon: Repeat2,
    title: "Direct Clothing Exchange",
    description:
      "Exchange something you own with someone who wants it without turning every wardrobe change into a purchase.",
  },
  {
    number: "02",
    icon: IndianRupee,
    title: "Fair Swap Value",
    description:
      "Compare estimated values based on category, brand and condition to discover more balanced exchange opportunities.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Local & Sustainable",
    description:
      "Discover nearby swap opportunities and make clothing exchange easier, more personal and more sustainable.",
  },
];


// =====================================================
// WHY SWAPE
// =====================================================

function WhySwape() {
  return (
    <section className="why-swape" id="why-swape">

      <div className="why-swape-container">

        {/* =================================================
            HEADER
        ================================================= */}

       


        {/* =================================================
            PROBLEM INTRO
        ================================================= */}

        <div className="why-swape-problem-intro">

          <div className="why-swape-section-number">
            01
          </div>

          <div className="why-swape-problem-heading">

            <span>THE PROBLEM</span>

            <h3>
              A wardrobe full of
              <br />
              <em>untapped possibilities.</em>
            </h3>

          </div>

          <p>
            Clothes can outgrow our lifestyle without losing their
            value. Swapé turns those forgotten pieces into new
            opportunities.
          </p>

        </div>


        {/* =================================================
            PROBLEM CARDS
        ================================================= */}

        <div className="why-swape-problem-grid">

          {problems.map((problem, index) => {

            const Icon = problem.icon;

            return (
              <article
                className={`why-swape-problem-card ${
                  index === 1 ? "is-featured" : ""
                }`}
                key={problem.number}
              >

                <div className="why-swape-image-wrap">

                  <img
                    src={problem.image}
                    alt={problem.title}
                    loading="lazy"
                  />

                  <div className="why-swape-image-overlay"></div>


                  <div className="why-swape-card-number">
                    {problem.number}
                  </div>


                  <div className="why-swape-card-icon">
                    <Icon
                      size={19}
                      strokeWidth={1.4}
                    />
                  </div>


                  <div className="why-swape-image-label">
                    <span>SWAPÉ EDIT</span>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                    />
                  </div>

                </div>


                <div className="why-swape-problem-content">

                  <span className="why-swape-card-eyebrow">
                    CHALLENGE {problem.number}
                  </span>

                  <h4>{problem.title}</h4>

                  <p>
                    {problem.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>


        {/* =================================================
            TRANSITION
        ================================================= */}

        <div className="why-swape-transition">

          <div className="why-swape-transition-line"></div>

          <div className="why-swape-transition-circle">

            <ArrowDownRight
              size={21}
              strokeWidth={1.4}
            />

          </div>

          <div className="why-swape-transition-content">

            <span>THE SWAPÉ APPROACH</span>

            <strong>
              Turn unused into opportunity.
            </strong>

          </div>

        </div>


        {/* =================================================
            SOLUTION
        ================================================= */}

        <div className="why-swape-solution">

          <div className="why-swape-solution-header">

            <div className="why-swape-section-number">
              02
            </div>

            <div>

              <span>THE SOLUTION</span>

              <h3>
                Swap what you have.
                <br />
                <em>Discover what you love.</em>
              </h3>

            </div>


            <p>
              A smarter fashion marketplace where your existing
              wardrobe becomes the starting point for something new.
            </p>

          </div>


          <div className="why-swape-solution-grid">

            {solutions.map((solution) => {

              const Icon = solution.icon;

              return (
                <article
                  className="why-swape-solution-card"
                  key={solution.number}
                >

                  <div className="why-swape-solution-top">

                    <span className="why-swape-solution-number">
                      {solution.number}
                    </span>

                    <div className="why-swape-solution-icon">
                      <Icon
                        size={22}
                        strokeWidth={1.35}
                      />
                    </div>

                  </div>


                  <div className="why-swape-solution-body">

                    <h4>
                      {solution.title}
                    </h4>

                    <p>
                      {solution.description}
                    </p>

                  </div>


                  <div className="why-swape-solution-bottom">

                    <span>
                      EXPLORE BENEFIT
                    </span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.4}
                    />

                  </div>

                </article>
              );
            })}

          </div>

        </div>


        {/* =================================================
            LUXURY FEATURE IMAGE
        ================================================= */}

        <div className="why-swape-feature">

          <div className="why-swape-feature-image">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=90"
              alt="Luxury sustainable fashion"
              loading="lazy"
            />

            <div className="why-swape-feature-overlay"></div>

          </div>


          <div className="why-swape-feature-content">

            <div className="why-swape-feature-top">

              <span>THE FUTURE OF FASHION</span>

              <Sparkles
                size={20}
                strokeWidth={1.3}
              />

            </div>


            <h3>
              Less waste.
              <br />
              <em>More wardrobe.</em>
            </h3>


            <p>
              Every successful exchange keeps a good garment in
              circulation and creates another reason to love what
              already exists.
            </p>


            <div className="why-swape-feature-checks">

              <div>
                <Check size={15} />
                <span>Extend garment life</span>
              </div>

              <div>
                <Check size={15} />
                <span>Reduce unnecessary consumption</span>
              </div>

              <div>
                <Check size={15} />
                <span>Build conscious fashion habits</span>
              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            IMPACT
        ================================================= */}

        <div className="why-swape-impact">

          <div className="why-swape-impact-heading">

            <span>ONE SIMPLE IDEA</span>

            <h3>
              Keep great clothes
              <em> moving.</em>
            </h3>

            <p>
              One swap can keep a beautiful garment in circulation,
              reduce unnecessary consumption and connect it with
              someone who will love wearing it.
            </p>

          </div>


          <div className="why-swape-impact-stats">

            <div className="why-swape-stat">

              <strong>01</strong>

              <span>
                Give clothes
                <br />
                a second life
              </span>

            </div>


            <div className="why-swape-stat">

              <strong>02</strong>

              <span>
                Reduce
                <br />
                fashion waste
              </span>

            </div>


            <div className="why-swape-stat">

              <strong>03</strong>

              <span>
                Build a conscious
                <br />
                community
              </span>

            </div>

          </div>


          <Link
            to="/explore"
            className="why-swape-impact-button"
          >

            <span>
              Explore Swapé
            </span>

            <div>
              <ArrowUpRight
                size={19}
                strokeWidth={1.5}
              />
            </div>

          </Link>

        </div>

      </div>

    </section>
  );
}

export default WhySwape;