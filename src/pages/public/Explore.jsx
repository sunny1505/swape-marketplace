import { useState } from "react";
import {
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  MapPin,
  Heart,
  Repeat2,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import "../../styles/Explore.css";

const categories = [
  "All",
  "T-Shirts",
  "Shirts",
  "Jeans",
  "Dresses",
  "Jackets",
];

const clothingItems = [
  {
    id: 1,
    title: "Relaxed Linen Shirt",
    category: "Shirts",
    size: "M",
    condition: "Excellent",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 2,
    title: "Minimal Tailored Jacket",
    category: "Jackets",
    size: "L",
    condition: "Like New",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 3,
    title: "Classic Denim Essential",
    category: "Jeans",
    size: "32",
    condition: "Excellent",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    title: "Soft Cotton Everyday Tee",
    category: "T-Shirts",
    size: "M",
    condition: "Good",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 5,
    title: "Elegant Evening Dress",
    category: "Dresses",
    size: "S",
    condition: "Like New",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 6,
    title: "Structured Overshirt",
    category: "Shirts",
    size: "L",
    condition: "Excellent",
    location: "Chandigarh",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1000&q=90",
  },
];

function Explore() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredItems = clothingItems.filter((item) => {
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;

    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="explore-page">
      <Navbar />

      <main className="explore-main">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="explore-hero">

          <div className="explore-hero-background">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=90"
              alt="Luxury sustainable fashion"
            />
          </div>

          <div className="explore-hero-overlay"></div>

          <div className="explore-container explore-hero-content">

            <div className="explore-hero-label">
              <span></span>
              SWAPÉ MARKETPLACE
            </div>

            <h1>
              Discover clothing
              <br />
              <em>worth exchanging.</em>
            </h1>

            <p>
              Explore a curated collection of pre-loved fashion and
              discover your next favourite piece through meaningful
              clothing exchange.
            </p>

            <div className="explore-hero-meta">

              <div>
                <strong>CURATED</strong>
                <span>Pre-loved fashion</span>
              </div>

              <div>
                <strong>DIRECT</strong>
                <span>Clothing exchange</span>
              </div>

              <div>
                <strong>CIRCULAR</strong>
                <span>Better fashion</span>
              </div>

            </div>

          </div>

          <div className="explore-hero-number">
            01 / EXPLORE
          </div>

        </section>


        {/* =====================================================
            MARKETPLACE
        ====================================================== */}

        <section className="explore-marketplace">

          <div className="explore-container">

            {/* HEADER */}

            <div className="explore-market-header">

              <div className="explore-market-title">

                <span className="explore-section-label">
                  THE COLLECTION
                </span>

                <h2>
                  Find something
                  <br />
                  <em>worth swapping.</em>
                </h2>

              </div>

              <div className="explore-market-description">

                <p>
                  Browse clothing shared by the Swapé community.
                  Every piece has another story waiting to begin.
                </p>

              </div>

            </div>


            {/* SEARCH */}

            <div className="explore-toolbar">

              <div className="explore-search">

                <Search size={19} strokeWidth={1.5} />

                <input
                  type="text"
                  placeholder="Search clothing..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

              </div>

              <button className="explore-filter-button">
                <SlidersHorizontal size={17} />
                <span>Filters</span>
              </button>

            </div>


            {/* CATEGORIES */}

            <div className="explore-categories">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}

            </div>


            {/* RESULT INFO */}

            <div className="explore-results-bar">

              <span>
                {filteredItems.length} PIECES AVAILABLE
              </span>

              <span>
                CURATED FOR EXCHANGE
              </span>

            </div>


            {/* PRODUCT GRID */}

            {filteredItems.length > 0 ? (

              <div className="explore-product-grid">

                {filteredItems.map((item) => (

                  <article
                    className="explore-product-card"
                    key={item.id}
                  >

                    {/* IMAGE */}

                    <div className="explore-product-image">

                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                      />

                      <div className="explore-product-image-overlay"></div>

                      <span className="explore-product-category">
                        {item.category}
                      </span>

                      <button
                        type="button"
                        className={`explore-favorite ${
                          favorites.includes(item.id)
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          toggleFavorite(item.id)
                        }
                        aria-label="Add to favorites"
                      >
                        <Heart
                          size={18}
                          strokeWidth={1.5}
                          fill={
                            favorites.includes(item.id)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>

                      <div className="explore-product-view">
                        <span>VIEW PIECE</span>
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                        />
                      </div>

                    </div>


                    {/* CONTENT */}

                    <div className="explore-product-content">

                      <div className="explore-product-top">

                        <div>

                          <span className="explore-product-label">
                            PRE-LOVED
                          </span>

                          <h3>
                            {item.title}
                          </h3>

                        </div>

                        <span className="explore-product-size">
                          {item.size}
                        </span>

                      </div>


                      <div className="explore-product-details">

                        <span>
                          {item.condition}
                        </span>

                        <span className="explore-detail-dot">
                          •
                        </span>

                        <span className="explore-location">
                          <MapPin size={13} />
                          {item.location}
                        </span>

                      </div>


                      <div className="explore-product-footer">

                        <span className="explore-swap-label">
                          <Repeat2 size={15} />
                          AVAILABLE FOR SWAP
                        </span>

                        <button
                          type="button"
                          className="explore-card-arrow"
                        >
                          <ArrowUpRight size={18} />
                        </button>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              <div className="explore-empty">

                <div className="explore-empty-icon">
                  <Repeat2 size={28} />
                </div>

                <span>
                  NO MATCHES FOUND
                </span>

                <h3>
                  Nothing here yet.
                </h3>

                <p>
                  Try another category or search for a different
                  clothing piece.
                </p>

              </div>

            )}

          </div>

        </section>


        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <section className="explore-bottom-cta">

          <div className="explore-container explore-cta-inner">

            <div>

              <span>
                HAVE SOMETHING TO SWAP?
              </span>

              <h2>
                Give your wardrobe
                <br />
                <em>a new chapter.</em>
              </h2>

            </div>

            <a
              href="/dashboard/add-listing"
              className="explore-cta-button"
            >
              <span>List Your Clothing</span>

              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
              />
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Explore;