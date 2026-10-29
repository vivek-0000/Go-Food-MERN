
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "/api/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      const json = await response.json();
      console.log(json);

      if (!response.ok || !json.success) {
        alert(json.message || "Please enter valid credentials!");
        return;
      }

      alert("Registration successful! Please log in.");
      navigate("/Login");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Unable to connect to the server. Please try again.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            required
            minLength={5}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            minLength={5}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={credentials.location}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>

        <Link to="/Login" className="btn btn-danger ms-2">
          Already a User?
        </Link>
      </form>
    </div>
  );
}