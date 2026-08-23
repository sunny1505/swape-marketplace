import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddListing = () => {
  const navigate = useNavigate();

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

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB.");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.size ||
      !formData.condition ||
      !formData.swapValue ||
      !formData.location ||
      !formData.description
    ) {
      setError("Please fill all required fields.");
      return;
    }

    const newListing = {
      id: Date.now(),
      ...formData,
      image: preview || "/images/clothing-placeholder.jpg",
      status: "Available",
      createdAt: new Date().toISOString(),
    };

    const existingListings =
      JSON.parse(localStorage.getItem("swapeListings")) || [];

    localStorage.setItem(
      "swapeListings",
      JSON.stringify([...existingListings, newListing])
    );

    setSuccess("Your clothing listing has been created successfully.");

    setTimeout(() => {
      navigate("/dashboard/my-listings");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="mb-4 text-sm font-medium text-gray-600 hover:text-black"
          >
            ← Back to Dashboard
          </button>

          <h1 className="text-3xl font-bold text-gray-900">
            Add Clothing Listing
          </h1>

          <p className="mt-2 text-gray-600">
            Add your clothing item and make it available for swapping.
          </p>
        </div>

        {/* Success */}
        {success && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
            {success}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Image Section */}
            <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-1">
              <h2 className="mb-5 text-lg font-semibold text-gray-900">
                Clothing Image
              </h2>

              <label
                htmlFor="clothing-image"
                className="flex min-h-[280px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 text-center hover:border-gray-500"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Clothing preview"
                    className="h-full min-h-[280px] w-full object-cover"
                  />
                ) : (
                  <>
                    <div className="mb-3 text-4xl">📷</div>

                    <p className="font-medium text-gray-700">
                      Upload clothing image
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      PNG, JPG or WEBP
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Maximum 5MB
                    </p>
                  </>
                )}

                <input
                  id="clothing-image"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              {image && (
                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setPreview("");
                  }}
                  className="mt-4 w-full rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  Remove Image
                </button>
              )}
            </div>

            {/* Form Section */}
            <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">
                Clothing Details
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Title */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Clothing Title *
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Zara Denim Jacket"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Category *
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                  >
                    <option value="">Select category</option>
                    <option value="T-Shirts">T-Shirts</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Sweaters">Sweaters</option>
                    <option value="Trousers">Trousers</option>
                    <option value="Skirts">Skirts</option>
                    <option value="Ethnic Wear">Ethnic Wear</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Brand */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Brand
                  </label>

                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="e.g. Nike, Zara"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                {/* Size */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Size *
                  </label>

                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                  >
                    <option value="">Select size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="Free Size">Free Size</option>
                  </select>
                </div>

                {/* Condition */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Condition *
                  </label>

                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                  >
                    <option value="">Select condition</option>
                    <option value="Like New">Like New</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                  </select>
                </div>

                {/* Swap Value */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Estimated Swap Value (₹) *
                  </label>

                  <input
                    type="number"
                    name="swapValue"
                    value={formData.swapValue}
                    onChange={handleChange}
                    min="0"
                    placeholder="e.g. 1500"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Location *
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Delhi, India"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                {/* Description */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Description *
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Describe the clothing item, usage, fabric, defects, etc."
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/dashboard")}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                >
                  Create Listing
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;