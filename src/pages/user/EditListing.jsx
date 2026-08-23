import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditListing = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    brand: "",
    size: "",
    condition: "",
    swapValue: "",
    location: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage("Listing updated successfully.");

    setTimeout(() => {
      navigate("/dashboard/my-listings");
    }, 1000);
  };

  return (
    <main className="edit-listing-page">
      <div className="edit-listing-container">
        <div className="edit-listing-header">
          <span className="edit-listing-label">SWAPÉ MARKETPLACE</span>

          <h1>Edit Listing</h1>

          <p>
            Update your clothing item details and keep your listing
            information up to date.
          </p>

          {id && (
            <small>
              Listing ID: <strong>{id}</strong>
            </small>
          )}
        </div>

        <form onSubmit={handleSubmit} className="edit-listing-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="title">Clothing Title</label>

              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Premium Denim Jacket"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="T-Shirts">T-Shirts</option>
                <option value="Shirts">Shirts</option>
                <option value="Jeans">Jeans</option>
                <option value="Dresses">Dresses</option>
                <option value="Jackets">Jackets</option>
                <option value="Trousers">Trousers</option>
                <option value="Sweaters">Sweaters</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="brand">Brand</label>

              <input
                id="brand"
                name="brand"
                type="text"
                value={formData.brand}
                onChange={handleChange}
                placeholder="e.g. Zara"
              />
            </div>

            <div className="form-group">
              <label htmlFor="size">Size</label>

              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
              >
                <option value="">Select size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="condition">Condition</label>

              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
              >
                <option value="">Select condition</option>
                <option value="Like New">Like New</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="swapValue">Estimated Swap Value</label>

              <input
                id="swapValue"
                name="swapValue"
                type="number"
                min="0"
                value={formData.swapValue}
                onChange={handleChange}
                placeholder="₹ 1500"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="location">Location</label>

              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Delhi, India"
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="description">Description</label>

              <textarea
                id="description"
                name="description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the clothing item..."
                required
              />
            </div>
          </div>

          {message && (
            <div className="success-message">
              {message}
            </div>
          )}

          <div className="form-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={() => navigate("/dashboard/my-listings")}
            >
              Cancel
            </button>

            <button type="submit" className="primary-button">
              Update Listing
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditListing;