
import React, { useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

export default function Card(props) {
  const food = props.foodItem;

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("half");

  // Hooks must be called before any early return
  const dispatch = useDispatchCart();
  const data = useCart();

  if (!food) {
    return null;
  }

  // Calculate price based on selected size and quantity
  const sizeMultiplier = size === "full" ? 2 : 1;
  const totalPrice = food.price * sizeMultiplier * quantity;

  const handleCart = () => {
    const existingFood = data.find(
      (item) => item.id === food._id && item.size === size
    );

    if (existingFood) {
      dispatch({
        type: "UPDATE",
        id: food._id,
        price: food.price * sizeMultiplier * quantity,
        quantity: quantity,
      });
    } else {
      dispatch({
        type: "ADD",
        id: food._id,
        name: food.name,
        price: totalPrice,
        qty: quantity,
        size: size,
        img: food.image,
      });
    }
  };

  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img
        src={food.image}
        className="card-img-top"
        alt={food.name}
        style={{
          height: "180px",
          width: "100%",
          objectFit: "cover",
          backgroundColor: "white",
        }}
        onLoad={() => console.log("Image loaded:", food.image)}
        onError={() => console.log("Image failed:", food.image)}
      />

      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>

        <p className="card-text">
          {food.description || "Delicious food, freshly prepared."}
        </p>

        <div className="container w-100">
          <select
            className="m-2 h-100 bg-success rounded text-white"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            className="m-2 h-100 bg-success rounded text-white"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>

          <div className="d-inline h-100 fs-5">
            ₹{totalPrice}
          </div>

          <hr />

          <button
            className="btn btn-success justify-center ms-2"
            onClick={handleCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}