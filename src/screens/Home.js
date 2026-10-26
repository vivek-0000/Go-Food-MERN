import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import Card from "../Components/Card";
import Carousel from "../Components/Carousel";

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState("");

  const images = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  const loadData = async () => {
  try {
    const response = await fetch("/api/foods");

    if (!response.ok) {
      throw new Error(`Failed to fetch foods: ${response.status}`);
    }

    const data = await response.json();

    console.log("Foods received:", data);
    setFoodItems(data);
  } catch (error) {
    console.error("Error fetching foods:", error);
  }
};

  useEffect(() => {
    loadData();
  }, []);

  // Get unique categories
  const categories = [...new Set(foodItems.map((food) => food.category))];

  return (
    <div>
      <Navbar />

      <div id="foodCarousel" className="carousel slide" data-bs-ride="carousel">
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
                  objectFit: "cover",
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
                  <button className="btn btn-outline-success" type="submit">
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

      <div className="container">
        {categories.map((category) => {
          // Foods belonging to this category
          const filteredFoods = foodItems.filter(
            (food) => food.category === category && food.name.toLowerCase().includes(search.toLowerCase()),
          );

          return (
            <div key={category} className="mb-5">
              {/* Category heading */}
              <h2 className="fs-3 m-3">{category}</h2>

              <hr />

              <div className="row">
                {filteredFoods.map((food) => (
                  <div key={food._id} className="col-12 col-md-6 col-lg-3 mb-4">
                    <Card foodItem={food} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
