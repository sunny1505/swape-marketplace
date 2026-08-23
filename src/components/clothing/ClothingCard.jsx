import { Heart, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ClothingCard({ item, onFavorite, isFavorite = false }) {
  return (
    <article className="clothing-card">
      <Link
        to={`/item/${item.id}`}
        className="clothing-card-image"
      >
        <img
          src={item.images?.[0] || "/images/placeholder.jpg"}
          alt={item.title}
        />

        <span className="condition-badge">
          {item.condition}
        </span>

        <button
          type="button"
          className={`favorite-btn ${
            isFavorite ? "active" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            onFavorite?.(item);
          }}
          aria-label="Add to favorites"
        >
          <Heart
            size={18}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
      </Link>

      <div className="clothing-card-body">
        <div className="clothing-card-category">
          {item.category}
        </div>

        <h3>{item.title}</h3>

        <div className="clothing-meta">
          <span>{item.brand}</span>
          <span>Size {item.size}</span>
        </div>

        <div className="clothing-card-footer">
          <div className="clothing-location">
            <MapPin size={14} />
            {item.location}
          </div>

          <strong>₹{item.estimatedValue}</strong>
        </div>

        <Link
          to={`/item/${item.id}`}
          className="clothing-view-link"
        >
          View item
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default ClothingCard;