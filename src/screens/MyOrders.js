
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyOrder = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail");

      if (!userEmail) {
        setOrderData([]);
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/auth/myorderdata",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const result = await response.json();

      // Supports an array response or an object containing orderData.
      if (Array.isArray(result)) {
        setOrderData(result);
      } else if (Array.isArray(result.orderData)) {
        setOrderData(result.orderData);
      } else {
        setOrderData([]);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrderData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  // Extract order records from the API response.
  const orders = orderData.flatMap((data) => {
    const order = data.orderData || data;
    const items = order.order_data;

    if (!Array.isArray(items)) {
      return [];
    }

    return items.map((item) => ({
      date: item.find(
        (entry) => entry.Order_date || entry.order_date
      ),
      items: item.filter(
        (entry) => !(entry.Order_date || entry.order_date)
      ),
    }));
  });

  return (
    <div>
      <Navbar />

      <div className="container my-4">
        <h2 className="text-center mb-4">My Orders</h2>

        {loading ? (
          <p className="text-center">Loading your orders...</p>
        ) : orders.length === 0 ? (
          <p className="text-center mt-4 fs-4">
            No orders found.
          </p>
        ) : (
          orders
            .slice()
            .reverse()
            .map((order, orderIndex) => (
              <div key={orderIndex} className="row mb-4">
                {order.date && (
                  <div className="col-12 mt-3">
                    <h5>
                      Order Date:{" "}
                      {order.date.Order_date ||
                        order.date.order_date}
                    </h5>
                    <hr />
                  </div>
                )}

                {order.items.map((food, index) => (
                  <div
                    className="col-12 col-md-6 col-lg-3"
                    key={`${orderIndex}-${index}`}
                  >
                    <div
                      className="card mt-3"
                      style={{
                        width: "16rem",
                        maxWidth: "100%",
                        maxHeight: "360px",
                      }}
                    >
                      <img
                        src={food.img}
                        className="card-img-top"
                        alt={food.name || "Ordered food"}
                        style={{
                          height: "120px",
                          objectFit: "cover",
                        }}
                      />

                      <div className="card-body">
                        <h5 className="card-title">
                          {food.name}
                        </h5>

                        <div
                          className="container w-100 p-0"
                          style={{ minHeight: "38px" }}
                        >
                          <span className="m-1">
                            Qty: {food.qty}
                          </span>

                          <span className="m-1">
                            {food.size}
                          </span>

                          <div className="mt-2 fs-5">
                            ₹{food.price}/-
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))
        )}
      </div>

      <Footer />
    </div>
  );
}
