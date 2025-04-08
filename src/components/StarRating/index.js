
"use client";
import ReactStars from "react-stars";

function StarRating ({ rating, reviewCount }) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <ReactStars
          count={5} // Total stars
          value={rating} // Average rating
          size={24} // Star size in pixels
          edit={false} // Read-only
          half={true} // Allow half stars
          color1="#e0e0e0" // Empty star color
          color2="#ffd700" // Filled star color (gold)
        />
        <span style={{ marginLeft: "8px", color: "white" }}>
          {rating} / 5 ({reviewCount} reviews)
        </span>
      </div>
    );
  };
  
  export default StarRating;


