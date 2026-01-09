// File: src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center p-3">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4 text-secondary">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <button
        className="btn btn-danger btn-lg"
        onClick={() => navigate("/")}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
