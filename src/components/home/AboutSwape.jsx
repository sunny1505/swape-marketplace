import { useState } from "react";

import {
  ArrowUpRight,
  ArrowDownRight,
  Repeat2,
  MapPin,
  Shirt,
  Recycle,
  Sparkles,
  Check,
  Tag,
  RefreshCw,
  Leaf,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

import "../../styles/AboutSwape.css";

/* =========================================================
   CURATED WARDROBE STORIES
========================================================= */

const wardrobeStories = [
  {
    id: "01",
    title: "The Quiet Luxury Edit",
    category: "TAILORED ESSENTIALS",
    description:
      "Timeless pieces deserve more than one owner. Discover refined wardrobe essentials ready for their next chapter.",

    colors: [
      {
        name: "Ivory",
        value: "#eee8dc",
        images: [
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=90",
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=90",
          "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=90",
        ],
      },
      {
        name: "Camel",
        value: "#a9825a",
        images: [
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=90",
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=90",
          "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=90",
        ],
      },
      {
        name: "Black",
        value: "#171717",
        images: [
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=90",
          "https://images.unsplash.com/photo-1506629905607-d9c297d7b4a1?auto=format&fit=crop&w=900&q=90",
          "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=90",
        ],
      },
    ],
  },

  {
    id: "02",
    title: "The Everyday Edit",
    category: "CONSCIOUS WARDROBE",
    description:
      "Beautiful everyday pieces can move from one wardrobe to another instead of sitting unused.",

    colors: [
      {
        name: "Sand",
        value: "#d4c2a8",
        images: [
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90",
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=90",
          "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=90",
        ],
      },
      {
        name: "Olive",
        value: "#5d6547",
        images: [
          "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=90",
          "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=90",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=90",
        ],
      },
      {
        name: "Charcoal",
        value: "#3b3b39",
        images: [
          "https://images.unsplash.com/photo-1506629905607-d9c297d7b4a1?auto=format&fit=crop&w=1200&q=90",
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=90",
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=90",
        ],
      },
    ],
  },

  {
    id: "03",
    title: "The Modern Classics",
    category: "TIMELESS PIECES",
    description:
      "Classic silhouettes, considered details and pieces designed to remain relevant season after season.",

    colors: [
      {
        name: "Cream",
        value: "#e7dfd0",
        images: [
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90",
          "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=90",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=90",
        ],
      },
      {
        name: "Brown",
        value: "#795548",
        images: [
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=90",
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=90",
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=90",
        ],
      },
      {
        name: "Black",
        value: "#161616",
        images: [
          "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1200&q=90",
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=90",
          "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=90",
        ],
      },
    ],
  },
];

/* =========================================================
   PROBLEM CARDS
========================================================= */

const problems = [
  {
    number: "01",
    icon: Shirt,
    title: "Unused Clothes",
    description:
      "Good clothing often stays untouched even when it still has plenty of life left.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=90",
  },

  {
    number: "02",
    icon: Tag,
    title: "Difficult Resale",
    description:
      "Pricing, negotiation and waiting can make selling pre-loved clothing complicated.",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=90",
  },

  {
    number: "03",
    icon: Recycle,
    title: "Fashion Waste",
    description:
      "Wearable garments deserve another journey instead of becoming unnecessary waste.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=90",
  },

  {
    number: "04",
    icon: RefreshCw,
    title: "Second Life",
    description:
      "A simple swap can give a favourite piece a new owner and a new purpose.",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=90",
  },

  {
    number: "05",
    icon: Leaf,
    title: "Better Fashion",
    description:
      "Keeping clothing in circulation creates a more conscious and sustainable wardrobe.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=90",
  },
];

/* =========================================================
   SOLUTIONS
========================================================= */

const solutions = [
  {
    number: "01",
    icon: Repeat2,
    title: "Direct Clothing Exchange",
    description:
      "Exchange what you already own with someone who wants it without following the traditional buying and selling model.",
  },

  {
    number: "02",
    icon: Sparkles,
    title: "Fair Swap Value",
    description:
      "Estimated values help users discover balanced exchange opportunities based on category, condition and brand.",
  },

  {
    number: "03",
    icon: MapPin,
    title: "Local & Sustainable",
    description:
      "Discover nearby opportunities and make clothing exchange easier, more personal and more sustainable.",
  },
];

/* =========================================================
   WARDROBE CARD
========================================================= */

function WardrobeCard({ story }) {
  const [activeColor, setActiveColor] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const selectedColor = story.colors[activeColor];

  const handleColorChange = (index) => {
    setActiveColor(index);
    setActiveImage(0);
  };

  return (
    <article className="swape-editorial-card">

      {/* IMAGE */}

      <div className="swape-editorial-media">

        <img
          src={selectedColor.images[activeImage]}
          alt={`${story.title} ${selectedColor.name}`}
          className="swape-editorial-main-image"
          loading="lazy"
        />

        <div className="swape-editorial-overlay"></div>

        <div className="swape-editorial-top">
          <span className="swape-editorial-number">
            {story.id}
          </span>

          <span className="swape-editorial-category">
            {story.category}
          </span>
        </div>

        <div className="swape-editorial-image-count">
          {String(activeImage + 1).padStart(2, "0")} /{" "}
          {String(selectedColor.images.length).padStart(2, "0")}
        </div>

        <div className="swape-editorial-image-badge">
          <Repeat2 size={15} />
          <span>SWAP READY</span>
        </div>

      </div>

      {/* THUMBNAILS */}

      <div className="swape-editorial-thumbnails">

        {selectedColor.images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`swape-thumbnail ${
              activeImage === index ? "active" : ""
            }`}
            onClick={() => setActiveImage(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img src={image} alt="" />
          </button>
        ))}

      </div>

      {/* CONTENT */}

      <div className="swape-editorial-content">

        <div className="swape-editorial-title-row">

          <div>
            <span className="swape-editorial-label">
              CURATED WARDROBE
            </span>

            <h3>{story.title}</h3>
          </div>

          <div className="swape-editorial-arrow">
            <ArrowUpRight size={19} />
          </div>

        </div>

        <p>{story.description}</p>

        {/* COLOR */}

        <div className="swape-color-selector">

          <div className="swape-color-heading">
            <span>COLOUR</span>
            <strong>{selectedColor.name}</strong>
          </div>

          <div className="swape-color-options">

            {story.colors.map((color, index) => (
              <button
                key={color.name}
                type="button"
                title={color.name}
                aria-label={`Select ${color.name}`}
                className={`swape-color-dot ${
                  activeColor === index ? "active" : ""
                }`}
                style={{
                  backgroundColor: color.value,
                }}
                onClick={() => handleColorChange(index)}
              >
                {activeColor === index && (
                  <Check size={12} />
                )}
              </button>
            ))}

          </div>

        </div>

      </div>

    </article>
  );
}

/* =========================================================
   MAIN ABOUT COMPONENT
========================================================= */

function AboutSwape() {
  return (
    <section
      className="about-swape"
      id="about"
    >

      <div className="about-swape-container">

        


        {/* =====================================================
            CURATED CLOTHING EDIT
        ====================================================== */}

        <div className="about-swape-editorial">

          <div className="about-swape-editorial-heading">

            <div>

              <span>THE CURATED EDIT</span>

              <h3>
                Clothes worth
                <br />
                <em>moving forward.</em>
              </h3>

            </div>

            <p>
              Explore carefully selected wardrobe stories through
              different colours and visual perspectives. Choose a
              colour and discover another side of the piece.
            </p>

          </div>


          <div className="about-swape-editorial-grid">

            {wardrobeStories.map((story) => (
              <WardrobeCard
                key={story.id}
                story={story}
              />
            ))}

          </div>

        </div>


        {/* =====================================================
            THE PROBLEM
        ====================================================== */}

        <div className="about-swape-problem-section">

          <div className="about-swape-problem-header">

            <div>

              <span>THE PROBLEM</span>

              <h2>
                Your wardrobe has
                <br />
                <em>more value</em> than you think.
              </h2>

            </div>

            <p>
              Clothes that are no longer right for you can still
              be valuable to someone else. Swapé gives those
              pieces another opportunity to be worn, loved and
              appreciated.
            </p>

          </div>


          {/* FIVE PREMIUM CARDS */}

          <div className="about-swape-problem-grid">

            {problems.map((problem) => {

              const Icon = problem.icon;

              return (
                <article
                  className="about-swape-problem-card"
                  key={problem.number}
                >

                  <div className="about-swape-problem-image">

                    <img
                      src={problem.image}
                      alt={problem.title}
                      loading="lazy"
                    />

                    <div className="about-swape-problem-image-overlay"></div>

                    <span className="about-swape-problem-number">
                      {problem.number}
                    </span>

                    <div className="about-swape-problem-icon">
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                      />
                    </div>

                    <div className="about-swape-problem-image-label">
                      SWAPÉ
                    </div>

                  </div>


                  <div className="about-swape-problem-content">

                    <span className="about-swape-problem-label">
                      WARDROBE NOTE
                    </span>

                    <h3>
                      {problem.title}
                    </h3>

                    <p>
                      {problem.description}
                    </p>

                    <div className="about-swape-problem-bottom">

                      <span>
                        {problem.number}
                      </span>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                      />

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            THE SOLUTION
        ====================================================== */}

        <div className="about-swape-solution">

          <div className="about-swape-side-copy">

            <span>THE SOLUTION</span>

            <h3>
              Swap what you have.
              <br />
              <em>Discover what you love.</em>
            </h3>

            <p>
              Swapé connects people who want to exchange clothing
              in a simple, transparent and sustainable marketplace.
            </p>

          </div>


          <div className="about-swape-solution-list">

            {solutions.map((solution) => {

              const Icon = solution.icon;

              return (
                <article
                  className="about-swape-solution-item"
                  key={solution.number}
                >

                  <div className="about-swape-solution-top">

                    <span>
                      {solution.number}
                    </span>

                    <div>
                      <Icon
                        size={20}
                        strokeWidth={1.4}
                      />
                    </div>

                  </div>

                  <h4>
                    {solution.title}
                  </h4>

                  <p>
                    {solution.description}
                  </p>

                  <ArrowUpRight
                    className="about-swape-solution-arrow"
                    size={19}
                  />

                </article>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSwape;