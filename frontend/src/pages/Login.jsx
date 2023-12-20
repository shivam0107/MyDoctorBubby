// components/LoginForm.jsx
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
      const navigate = useNavigate();

function clickHandler() {
  //move to about page
  navigate("/register");
}

  const handleLogin = () => {
    // Implement logic to send login request to the server
    // You can use fetch or a library like Axios

    // Example using fetch
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful login
        onLogin(data);
      })
      .catch((error) => {
        // Handle login error
        console.error("Login failed:", error);
      });
  };

  const login = async () => {
    const res = await axios.post("/api/v1/auth/login");
  }

  useEffect(() => {
    login();    
   
  }, [])
  




  return (
    <div className="flex flex-col items-center border-solid border-2 border-black-500 mx-auto'">
      <input
        className="border-solid border-2 border-sky-500 p-2 m-4 rounded-md mt-10"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border-solid border-2 border-sky-500 p-2 m-4 rounded-md mt-10"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={ clickHandler }>Signup</button>
    </div>
  );
};

export default Login;
