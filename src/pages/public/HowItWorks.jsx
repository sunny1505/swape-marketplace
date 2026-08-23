import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  MessageCircle,
  Repeat2,
  Search,
  Shirt,
  Sparkles,
  UserRound,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import "../../styles/HowItWorks.css";

/* =========================================================
   HOW IT WORKS DATA
========================================================= */

const steps = [
  {
    number: "01",
    label: "CREATE",
    title: "List what you no longer wear.",
    description:
      "Choose a clothing piece from your wardrobe, add beautiful photos, and share its size, condition, brand and category.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=90",
  },

  {
    number: "02",
    label: "DISCOVER",
    title: "Find something you'll love.",
    description:
      "Explore curated clothing listings from people around you. Filter by category, size, style and location.",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=90",
  },

  {
    number: "03",
    label: "CONNECT",
    title: "Send a swap request.",
    description:
      "Found something you want? Send a swap request and choose an item from your own wardrobe to offer in return.",
    icon: MessageCircle,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90",
  },

  {
    number: "04",
    label: "SWAP",
    title: "Agree. Exchange. Repeat.",
    description:
      "Discuss the details, agree on the exchange and complete your swap. Then give another piece of clothing a second life.",
    icon: Repeat2,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=90",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

function HowItWorks() {
  return (
    <div className="how-page">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      <main>

        {/* ===================================================
            HERO
        ==================================================== */}

        <section className="how-hero">

          <div className="how-hero-noise"></div>

          <div className="how-container">

            <div className="how-hero-grid">

              {/* LEFT CONTENT */}

              <div className="how-hero-content">

                <div className="how-eyebrow">
                  <span className="how-eyebrow-line"></span>
                  <span>HOW SWAPÉ WORKS</span>
                </div>

                <h1>
                  Your wardrobe.
                  <br />
                  <em>Another story.</em>
                </h1>

                <p>
                  Swapping is simple. List what you no longer wear,
                  discover something you love and exchange it with
                  another member of the Swapé community.
                </p>

                <div className="how-hero-actions">

                  <a
                    href="/explore"
                    className="how-primary-btn"
                  >
                    <span>Explore Clothing</span>

                    <span className="how-btn-icon">
                      <ArrowUpRight size={18} />
                    </span>
                  </a>

                  <a
                    href="/dashboard/add-listing"
                    className="how-secondary-btn"
                  >
                    List an Item
                    <ArrowRight size={17} />
                  </a>

                </div>

                <div className="how-hero-meta">

                  <div>
                    <strong>01</strong>
                    <span>List</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Discover</span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>Swap</span>
                  </div>

                </div>

              </div>


              {/* RIGHT VISUAL */}

              <div className="how-hero-visual">

                <div className="how-hero-image-main">

                  <img
                    src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=90"
                    alt="Premium fashion clothing"
                  />

                  <div className="how-image-overlay"></div>

                  <div className="how-hero-image-label">
                    <span>THE SWAPÉ METHOD</span>
                    <strong>Wear · Swap · Repeat</strong>
                  </div>

                </div>


                <div className="how-floating-card">

                  <div className="how-floating-icon">
                    <Repeat2 size={20} />
                  </div>

                  <div>
                    <span>THE IDEA</span>
                    <strong>Keep great clothes moving.</strong>
                  </div>

                </div>


                <div className="how-hero-number">
                  01
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            INTRO STRIP
        ==================================================== */}

        <section className="how-intro">

          <div className="how-container">

            <div className="how-intro-grid">

              <div className="how-intro-label">
                <span>THE JOURNEY</span>
                <div></div>
              </div>

              <div className="how-intro-content">

                <h2>
                  Four simple steps.
                  <br />
                  <em>One better wardrobe.</em>
                </h2>

                <p>
                  Swapé removes the complexity from clothing exchange.
                  Everything begins with something already hanging in
                  your wardrobe.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            STEPS
        ==================================================== */}

        <section className="how-steps">

          <div className="how-container">

            <div className="how-section-heading">

              <div>

                <span className="how-small-label">
                  THE SWAPÉ PROCESS
                </span>

                <h2>
                  From wardrobe
                  <br />
                  <em>to wardrobe.</em>
                </h2>

              </div>

              <p>
                A simple exchange experience designed around
                people, clothing and conscious fashion.
              </p>

            </div>


            <div className="how-step-list">

              {steps.map((step, index) => {

                const Icon = step.icon;

                return (
                  <article
                    className="how-step-card"
                    key={step.number}
                  >

                    {/* NUMBER */}

                    <div className="how-step-number">
                      {step.number}
                    </div>


                    {/* IMAGE */}

                    <div className="how-step-image">

                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                      />

                      <div className="how-step-image-overlay"></div>

                      <div className="how-step-icon">
                        <Icon size={21} strokeWidth={1.5} />
                      </div>

                    </div>


                    {/* CONTENT */}

                    <div className="how-step-content">

                      <span className="how-step-label">
                        {step.label}
                      </span>

                      <h3>
                        {step.title}
                      </h3>

                      <p>
                        {step.description}
                      </p>

                      <div className="how-step-footer">

                        <span>
                          STEP {step.number}
                        </span>

                        <ArrowUpRight size={18} />

                      </div>

                    </div>

                  </article>
                );
              })}

            </div>

          </div>

        </section>


        {/* ===================================================
            VISUAL EXCHANGE
        ==================================================== */}

        <section className="how-exchange">

          <div className="how-container">

            <div className="how-exchange-box">

              <div className="how-exchange-content">

                <span className="how-small-label">
                  THE MOMENT OF EXCHANGE
                </span>

                <h2>
                  What leaves your
                  <br />
                  wardrobe can become
                  <br />
                  <em>someone else's favourite.</em>
                </h2>

                <p>
                  That's the beauty of swapping. Instead of letting
                  good clothing sit unused, you give it another
                  opportunity to be worn, loved and enjoyed.
                </p>

                <div className="how-exchange-points">

                  <div>
                    <Check size={16} />
                    <span>No traditional buying required</span>
                  </div>

                  <div>
                    <Check size={16} />
                    <span>Connect with real people</span>
                  </div>

                  <div>
                    <Check size={16} />
                    <span>Keep clothing in circulation</span>
                  </div>

                </div>

              </div>


              <div className="how-exchange-visual">

                <div className="how-exchange-image image-one">
                  <img
                    src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=90"
                    alt="Clothing collection"
                  />
                </div>

                <div className="how-exchange-image image-two">
                  <img
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=90"
                    alt="Fashion wardrobe"
                  />
                </div>

                <div className="how-exchange-badge">
                  <Repeat2 size={20} />
                  <span>SWAP</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            TRUST / EXPERIENCE
        ==================================================== */}

        <section className="how-values">

          <div className="how-container">

            <div className="how-values-heading">

              <span className="how-small-label">
                WHY IT FEELS DIFFERENT
              </span>

              <h2>
                More than an exchange.
                <br />
                <em>A better way to move fashion.</em>
              </h2>

            </div>


            <div className="how-values-grid">

              <div className="how-value-card">

                <div className="how-value-icon">
                  <Shirt size={22} />
                </div>

                <span>01</span>

                <h3>
                  Your Wardrobe
                </h3>

                <p>
                  Start with pieces you already own and give
                  them another purpose.
                </p>

              </div>


              <div className="how-value-card">

                <div className="how-value-icon">
                  <UserRound size={22} />
                </div>

                <span>02</span>

                <h3>
                  Real Community
                </h3>

                <p>
                  Connect with people who are also looking
                  for more conscious fashion choices.
                </p>

              </div>


              <div className="how-value-card">

                <div className="how-value-icon">
                  <Sparkles size={22} />
                </div>

                <span>03</span>

                <h3>
                  Better Fashion
                </h3>

                <p>
                  Keep beautiful clothing moving instead of
                  letting it become unnecessary waste.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            FINAL CTA
        ==================================================== */}

        <section className="how-final-cta">

          <div className="how-container">

            <div className="how-final-box">

              <div className="how-final-content">

                <span className="how-small-label">
                  READY TO BEGIN?
                </span>

                <h2>
                  Your next favourite
                  <br />
                  piece might already
                  <br />
                  <em>exist.</em>
                </h2>

                <p>
                  Explore the Swapé marketplace and discover
                  clothing waiting for its next chapter.
                </p>

                <a
                  href="/explore"
                  className="how-final-btn"
                >
                  <span>Explore Swapé</span>
                  <ArrowUpRight size={19} />
                </a>

              </div>


              <div className="how-final-image">

                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=90"
                  alt="Luxury sustainable fashion"
                />

                <div className="how-final-image-overlay"></div>

                <div className="how-final-stamp">
                  <Repeat2 size={18} />
                  <span>WEAR</span>
                  <span>SWAP</span>
                  <span>REPEAT</span>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </div>
  );
}

export default HowItWorks;