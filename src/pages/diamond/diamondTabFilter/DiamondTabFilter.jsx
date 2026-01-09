import React, { useState, useEffect } from "react";
import axiosClient from "../../../api/axios"; // Ensure path is correct
import "./DiamondTabFilter.css";

const DiamondTabFilter = ({ activeTab, onTabChange, onShapeChange, shapes, selectedShapes, setSelectedShapes}) => {
  const tabs = [
    { label: "LAB DIAMONDS", key: "lab" },
    { label: "NATURAL DIAMONDS", key: "natural" },
    { label: "COLOR DIAMONDS", key: "color" },
  ];
  const [error, setError] = useState("");

  const handleTabClick = (key) => {
    onTabChange(key);
    const newParams = new URLSearchParams(location.search);
    const currentMenuDiamond = newParams.get("menudiamond");
    const selectedDiamond = newParams.get("selecteddiamond");

    if (currentMenuDiamond) {
      newParams.delete("menudiamond");

      const newSearch = newParams.toString();
      const newUrl = newSearch
        ? `${location.pathname}?${newSearch}`
        : location.pathname;

      window.history.replaceState({}, "", newUrl);
    }
    if (selectedDiamond) {
      newParams.delete("selecteddiamond");
      const newSearch = newParams.toString();
      const newUrl = newSearch
        ? `${location.pathname}?${newSearch}`
        : location.pathname;

      window.history.replaceState({}, "", newUrl);
    }
    setSelectedShapes([]); // Clear shape selection on tab change
    onShapeChange([]); // Send empty array to parent
  };

  const handleShapeClick = (shape) => {
    const isSelected = selectedShapes.some((s) => s.name === shape.name);
    let updatedShapes;
    if (isSelected) {
      updatedShapes = selectedShapes.filter((s) => s.name !== shape.name);
    } else {
      updatedShapes = [...selectedShapes, shape];
    }
    setSelectedShapes(updatedShapes);
    onShapeChange(updatedShapes); // Send updated shapes to parent
  };

  return (
    <div className="diamond-section">
      <div className="tab-wrapper">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`tab-item ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="shapes-wrapper">
        {shapes.length === 0 ? (
          <p>No shapes available</p>
        ) : (
          shapes.map((shape) => {
            if (!shape || typeof shape !== "object") return null;
            const shapeName = shape.name || ""; // fallback just in case
            const shapeSlug = shapeName.toLowerCase().replace(/\s/g, "-");
            const isSelected = selectedShapes.some((s) => s.name === shapeName);

            return (
              <div
                key={shape.id}
                className={`shape-box${isSelected ? " selected" : ""}`}
                onClick={() => handleShapeClick(shape)}
              >
                <img
                  src={`/images/shapes/${shapeSlug}.jpg`}
                  alt={shapeName}
                  className="shape-icon"
                />
                <div className="shape-name">{shapeName}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default DiamondTabFilter;
