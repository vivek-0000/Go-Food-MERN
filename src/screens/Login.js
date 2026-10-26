import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate =useNavigate();
  const [credentials, setCredentials] = useState({
      
      email: "",
      password: "",
      
    });
  
    const handleChange = (e) => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await fetch("http://localhost:5000/api/LoginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      });
  
      const json = await response.json();
  
      console.log(json);
  
      if(!json.success){
        alert("Enter Valid Credentials!!")
      }
      if(json.success){
        localStorage.setItem("useremail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        navigate("/");
      }
    };
  return (
    <div>
      <div className="container">
      
            <form onSubmit={handleSubmit}>
      
              
      
      
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
                />
              </div>
      
      
              
      
      
              <button type="submit" className="btn btn-success">
                Submit
              </button>
      
              <Link to="/CreateUser" className="btn btn-danger ms-2">
                I am a New User!
              </Link>
      
            </form>
      
          </div>
    </div>
  )
}
