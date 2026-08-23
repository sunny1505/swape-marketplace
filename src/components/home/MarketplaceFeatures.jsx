import {
  ArrowUpRight,
  ArrowRight,
  Search,
  IndianRupee,
  MapPin,
  MessageCircle,
  Leaf,
  Repeat2,
} from "lucide-react";

import "../../styles/MarketplaceFeatures.css";

const features = [
  {
    number: "01",
    icon: Repeat2,
    title: "Easy Clothing Swaps",
    description:
      "Exchange clothes directly with people who value what you no longer wear.",
  },
  {
    number: "02",
    icon: Search,
    title: "Smart Discovery",
    description:
      "Discover pieces by category, size, condition and location with ease.",
  },
  {
    number: "03",
    icon: IndianRupee,
    title: "Swap Value",
    description:
      "Compare estimated values to find balanced and meaningful exchanges.",
  },
  {
    number: "04",
    icon: MapPin,
    title: "Nearby Swaps",
    description:
      "Find people and clothing available for exchange around your location.",
  },
  {
    number: "05",
    icon: MessageCircle,
    title: "Private Chat",
    description:
      "Connect directly with other members and discuss your exchange.",
  },
  {
    number: "06",
    icon: Leaf,
    title: "Sustainable Fashion",
    description:
      "Keep beautiful clothes in circulation and reduce unnecessary waste.",
  },
];

const MarketplaceFeatures = () => {
  return (
    <section className="marketplace-features">
      <div className="marketplace-features__container">

        {/* HEADER */}
        <div className="marketplace-features__header">

          <div className="marketplace-features__eyebrow">
            <span className="marketplace-features__eyebrow-line"></span>
            <span>MARKETPLACE FEATURES</span>
          </div>

          <div className="marketplace-features__heading-row">

            <h2>
              Everything you need to
              <span> swap smarter.</span>
            </h2>

            <div className="marketplace-features__intro">
              <p>
                Swapé brings discovery, connection and sustainability
                together in one thoughtfully designed clothing exchange
                marketplace.
              </p>

              <a href="/explore" className="marketplace-features__explore">
                <span>Explore Marketplace</span>

                <span className="marketplace-features__explore-icon">
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="marketplace-features__grid">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="marketplace-feature-card"
                key={feature.number}
              >
                <div className="marketplace-feature-card__top">

                  <span className="marketplace-feature-card__number">
                    {feature.number}
                  </span>

                  <div className="marketplace-feature-card__icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                </div>

                <div className="marketplace-feature-card__content">
                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>

                <div className="marketplace-feature-card__bottom">
                  <span>DISCOVER</span>

                  <span className="marketplace-feature-card__arrow">
                    <ArrowRight size={18} strokeWidth={1.7} />
                  </span>
                </div>
              </article>
            );
          })}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="marketplace-features__statement">

          <div className="marketplace-features__statement-icon">
            <Leaf size={21} strokeWidth={1.5} />
          </div>

          <p>
            Better fashion doesn't always mean buying something new.
            <strong> Sometimes, it means swapping what already exists.</strong>
          </p>

        </div>

      </div>
    </section>
  );
};

export default MarketplaceFeatures;