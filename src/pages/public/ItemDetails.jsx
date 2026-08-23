import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(0);
  const [showRequest, setShowRequest] = useState(false);

  const item = {
    title: "Premium Denim Jacket",
    brand: "Zara",
    category: "Jackets",
    size: "M",
    condition: "Excellent",
    swapValue: 1800,
    location: "Delhi, India",
    owner: "Aarav Sharma",
    description:
      "A premium denim jacket in excellent condition. It has been gently used and carefully maintained. Perfect for casual and street-style outfits.",
    images: [
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80",
    ],
  };

  const handleSwapRequest = () => {
    setShowRequest(true);
  };

  const confirmSwapRequest = () => {
    setShowRequest(false);
    alert("Swap request sent successfully!");
  };

  return (
    <main className="item-details-page">
      <div className="item-details-container">

        {/* Breadcrumb */}
        <div className="item-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/explore">Explore</Link>
          <span>/</span>
          <span>{item.title}</span>
        </div>

        {/* Product Section */}
        <section className="item-details-grid">

          {/* Gallery */}
          <div className="item-gallery">

            <div className="item-main-image">
              <img
                src={item.images[selectedImage]}
                alt={item.title}
              />
            </div>

            <div className="item-thumbnail-list">
              {item.images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={`item-thumbnail ${
                    selectedImage === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${item.title} ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Information */}
          <div className="item-information">

            <span className="item-category">
              {item.category}
            </span>

            <h1>{item.title}</h1>

            <p className="item-owner">
              Listed by{" "}
              <strong>{item.owner}</strong>
            </p>

            <div className="item-details-divider" />

            {/* Value */}
            <div className="item-value-box">
              <div>
                <span>Estimated Swap Value</span>
                <strong>₹{item.swapValue.toLocaleString()}</strong>
              </div>

              <span className="item-value-label">
                FAIR VALUE
              </span>
            </div>

            {/* Details */}
            <div className="item-specifications">

              <div className="item-spec">
                <span>Brand</span>
                <strong>{item.brand}</strong>
              </div>

              <div className="item-spec">
                <span>Size</span>
                <strong>{item.size}</strong>
              </div>

              <div className="item-spec">
                <span>Condition</span>
                <strong>{item.condition}</strong>
              </div>

              <div className="item-spec">
                <span>Location</span>
                <strong>{item.location}</strong>
              </div>

            </div>

            {/* Description */}
            <div className="item-description">
              <h3>Description</h3>

              <p>{item.description}</p>
            </div>

            {/* Actions */}
            <div className="item-actions">

              <button
                type="button"
                className="item-primary-button"
                onClick={handleSwapRequest}
              >
                Request Swap
              </button>

              <button
                type="button"
                className="item-secondary-button"
                onClick={() =>
                  navigate("/dashboard/messages")
                }
              >
                Message Owner
              </button>

            </div>

            <div className="item-location-note">
              📍 Local and nearby swaps are available based on
              user location.
            </div>
          </div>
        </section>

        {/* Similar Information */}
        <section className="item-swap-info">

          <div>
            <span>SWAPÉ</span>
            <h2>Exchange instead of buying.</h2>
          </div>

          <p>
            Find something you love, offer one of your own
            items, and create a sustainable clothing exchange.
          </p>

        </section>
      </div>

      {/* Swap Request Modal */}
      {showRequest && (
        <div className="item-modal-overlay">
          <div className="item-modal">

            <button
              type="button"
              className="item-modal-close"
              onClick={() => setShowRequest(false)}
            >
              ×
            </button>

            <span className="item-modal-label">
              SWAP REQUEST
            </span>

            <h2>Request this item?</h2>

            <p>
              You are requesting a swap for{" "}
              <strong>{item.title}</strong>.
            </p>

            <div className="item-modal-value">
              Estimated value: ₹
              {item.swapValue.toLocaleString()}
            </div>

            <div className="item-modal-actions">

              <button
                type="button"
                className="item-secondary-button"
                onClick={() => setShowRequest(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="item-primary-button"
                onClick={confirmSwapRequest}
              >
                Send Request
              </button>

            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ItemDetails;