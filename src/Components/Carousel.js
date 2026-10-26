
import React, { useState } from "react";

export default function Carousel() {
  const [search, setSearch] = useState("");

  const images = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  return (
    <div
      id="foodCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            data-bs-target="#foodCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={image}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`Food slide ${index + 1}`}
              style={{
                height: "400px",
                objectFit: "cover"
              }}
              onError={(e) => {
                console.error("Carousel image failed:", image);
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="carousel-caption">
              <form
                className="d-flex justify-content-center"
                onSubmit={handleSearch}
              >
                <input
                  type="search"
                  className="form-control me-2"
                  placeholder="Search for food..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ maxWidth: "600px" }}
                />
                <button
                  className="btn btn-success"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#foodCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#foodCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
