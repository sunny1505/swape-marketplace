import React, { useMemo, useState } from "react";

const demoListings = [
  {
    id: 1,
    title: "Classic Denim Jacket",
    owner: "Aarav Sharma",
    category: "Jackets",
    size: "M",
    condition: "Excellent",
    value: 1800,
    location: "Delhi",
    status: "Active",
    date: "20 Aug 2026",
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    owner: "Priya Singh",
    category: "Dresses",
    size: "S",
    condition: "Good",
    value: 1400,
    location: "Chandigarh",
    status: "Active",
    date: "19 Aug 2026",
  },
  {
    id: 3,
    title: "Oversized Hoodie",
    owner: "Rahul Verma",
    category: "Hoodies",
    size: "L",
    condition: "Like New",
    value: 2200,
    location: "Gurugram",
    status: "Pending",
    date: "18 Aug 2026",
  },
  {
    id: 4,
    title: "White Casual Shirt",
    owner: "Neha Kapoor",
    category: "Shirts",
    size: "M",
    condition: "Good",
    value: 900,
    location: "Mumbai",
    status: "Active",
    date: "17 Aug 2026",
  },
  {
    id: 5,
    title: "Black Formal Blazer",
    owner: "Karan Mehta",
    category: "Blazers",
    size: "L",
    condition: "Excellent",
    value: 2800,
    location: "Bangalore",
    status: "Removed",
    date: "16 Aug 2026",
  },
];

function Listings() {
  const [listings, setListings] = useState(demoListings);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedListing, setSelectedListing] = useState(null);

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(demoListings.map((item) => item.category)),
    ];
  }, []);

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        listing.title.toLowerCase().includes(searchText) ||
        listing.owner.toLowerCase().includes(searchText) ||
        listing.location.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" || listing.status === statusFilter;

      const matchesCategory =
        categoryFilter === "All" ||
        listing.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [listings, search, statusFilter, categoryFilter]);

  const handleStatusChange = (id, newStatus) => {
    setListings((currentListings) =>
      currentListings.map((listing) =>
        listing.id === id
          ? { ...listing, status: newStatus }
          : listing
      )
    );
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this listing?"
    );

    if (!confirmed) return;

    setListings((currentListings) =>
      currentListings.filter((listing) => listing.id !== id)
    );
  };

  return (
    <div className="admin-listings-page">
      <style>{`
        .admin-listings-page {
          width: 100%;
          min-height: 100vh;
          padding: 24px;
          background: #f7f8fa;
          box-sizing: border-box;
          font-family: Inter, Arial, sans-serif;
        }

        .listings-container {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
        }

        .page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .page-header h1 {
          margin: 0 0 7px;
          font-size: 30px;
          line-height: 1.2;
          color: #171717;
        }

        .page-header p {
          margin: 0;
          color: #737373;
          font-size: 14px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 22px;
        }

        .stat-card {
          background: #fff;
          border: 1px solid #e9e9e9;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }

        .stat-label {
          display: block;
          color: #737373;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .stat-value {
          display: block;
          color: #171717;
          font-size: 28px;
          font-weight: 700;
        }

        .listings-card {
          background: #fff;
          border: 1px solid #e9e9e9;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(0,0,0,0.04);
        }

        .toolbar {
          padding: 18px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          border-bottom: 1px solid #ededed;
        }

        .search-input,
        .filter-select {
          height: 44px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background: #fff;
          padding: 0 13px;
          font-size: 14px;
          outline: none;
          box-sizing: border-box;
        }

        .search-input {
          flex: 1;
          min-width: 240px;
        }

        .filter-select {
          min-width: 160px;
        }

        .table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        table {
          width: 100%;
          min-width: 1050px;
          border-collapse: collapse;
        }

        th {
          padding: 15px;
          text-align: left;
          background: #fafafa;
          color: #737373;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .04em;
          border-bottom: 1px solid #ededed;
        }

        td {
          padding: 15px;
          color: #333;
          font-size: 14px;
          border-bottom: 1px solid #f0f0f0;
          vertical-align: middle;
        }

        tr:last-child td {
          border-bottom: none;
        }

        .item-title {
          font-weight: 600;
          color: #171717;
        }

        .item-owner {
          margin-top: 4px;
          font-size: 12px;
          color: #888;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
        }

        .badge-active {
          background: #e9f8ef;
          color: #16803c;
        }

        .badge-pending {
          background: #fff5dc;
          color: #9a6900;
        }

        .badge-removed {
          background: #feecec;
          color: #c53535;
        }

        .action-buttons {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
        }

        .action-btn {
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 8px;
          padding: 7px 10px;
          cursor: pointer;
          font-size: 12px;
        }

        .action-btn:hover {
          background: #f6f6f6;
        }

        .delete-btn {
          color: #c53535;
        }

        .empty-state {
          padding: 60px 20px;
          text-align: center;
          color: #777;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.45);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
        }

        .modal {
          width: 100%;
          max-width: 560px;
          background: #fff;
          border-radius: 18px;
          padding: 24px;
          box-sizing: border-box;
          box-shadow: 0 20px 60px rgba(0,0,0,.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 22px;
          color: #171717;
        }

        .close-btn {
          border: none;
          background: #f1f1f1;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .detail-box {
          padding: 14px;
          border-radius: 12px;
          background: #f8f8f8;
        }

        .detail-label {
          display: block;
          color: #888;
          font-size: 12px;
          margin-bottom: 5px;
        }

        .detail-value {
          color: #222;
          font-size: 14px;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .page-header {
            flex-direction: column;
          }
        }

        @media (max-width: 600px) {
          .admin-listings-page {
            padding: 14px;
          }

          .page-header h1 {
            font-size: 24px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .toolbar {
            flex-direction: column;
          }

          .search-input,
          .filter-select {
            width: 100%;
            min-width: 0;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .modal {
            padding: 18px;
          }
        }
      `}</style>

      <div className="listings-container">

        <div className="page-header">
          <div>
            <h1>Listings Management</h1>
            <p>
              Manage, review and monitor clothing listings on Swapé.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">Total Listings</span>
            <span className="stat-value">
              {listings.length}
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Active Listings</span>
            <span className="stat-value">
              {listings.filter(
                (item) => item.status === "Active"
              ).length}
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Pending Review</span>
            <span className="stat-value">
              {listings.filter(
                (item) => item.status === "Pending"
              ).length}
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Removed</span>
            <span className="stat-value">
              {listings.filter(
                (item) => item.status === "Removed"
              ).length}
            </span>
          </div>
        </div>

        <div className="listings-card">

          <div className="toolbar">

            <input
              type="search"
              className="search-input"
              placeholder="Search listing, owner or location..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

            <select
              className="filter-select"
              value={categoryFilter}
              onChange={(event) =>
                setCategoryFilter(event.target.value)
              }
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              className="filter-select"
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Removed">Removed</option>
            </select>

          </div>

          {filteredListings.length === 0 ? (
            <div className="empty-state">
              No listings found.
            </div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Listing</th>
                    <th>Category</th>
                    <th>Size</th>
                    <th>Condition</th>
                    <th>Value</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredListings.map((listing) => (
                    <tr key={listing.id}>

                      <td>
                        <div className="item-title">
                          {listing.title}
                        </div>

                        <div className="item-owner">
                          By {listing.owner}
                        </div>
                      </td>

                      <td>{listing.category}</td>

                      <td>{listing.size}</td>

                      <td>{listing.condition}</td>

                      <td>
                        ₹{listing.value.toLocaleString("en-IN")}
                      </td>

                      <td>{listing.location}</td>

                      <td>
                        <span
                          className={`badge ${
                            listing.status === "Active"
                              ? "badge-active"
                              : listing.status === "Pending"
                              ? "badge-pending"
                              : "badge-removed"
                          }`}
                        >
                          {listing.status}
                        </span>
                      </td>

                      <td>{listing.date}</td>

                      <td>
                        <div className="action-buttons">

                          <button
                            type="button"
                            className="action-btn"
                            onClick={() =>
                              setSelectedListing(listing)
                            }
                          >
                            View
                          </button>

                          {listing.status !== "Active" && (
                            <button
                              type="button"
                              className="action-btn"
                              onClick={() =>
                                handleStatusChange(
                                  listing.id,
                                  "Active"
                                )
                              }
                            >
                              Approve
                            </button>
                          )}

                          {listing.status === "Active" && (
                            <button
                              type="button"
                              className="action-btn"
                              onClick={() =>
                                handleStatusChange(
                                  listing.id,
                                  "Removed"
                                )
                              }
                            >
                              Remove
                            </button>
                          )}

                          <button
                            type="button"
                            className="action-btn delete-btn"
                            onClick={() =>
                              handleDelete(listing.id)
                            }
                          >
                            Delete
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>

      {selectedListing && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedListing(null)}
        >
          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="modal-header">
              <h2>Listing Details</h2>

              <button
                type="button"
                className="close-btn"
                onClick={() => setSelectedListing(null)}
              >
                ×
              </button>
            </div>

            <div className="details-grid">

              <div className="detail-box">
                <span className="detail-label">
                  Listing Name
                </span>
                <span className="detail-value">
                  {selectedListing.title}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Owner
                </span>
                <span className="detail-value">
                  {selectedListing.owner}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Category
                </span>
                <span className="detail-value">
                  {selectedListing.category}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Size
                </span>
                <span className="detail-value">
                  {selectedListing.size}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Condition
                </span>
                <span className="detail-value">
                  {selectedListing.condition}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Estimated Value
                </span>
                <span className="detail-value">
                  ₹{selectedListing.value.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Location
                </span>
                <span className="detail-value">
                  {selectedListing.location}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Status
                </span>
                <span className="detail-value">
                  {selectedListing.status}
                </span>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Listings;