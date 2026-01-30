import React, { useState } from "react";

export default function JewelryCard({
  item,
  quantity,
  onQuantityChange,
  onRemove,
}) {
  const ring = item;

  const price = Number(ring.price || 0);
  const makingCharges = Number(ring.making_charges || 0);

  const priceWithMakingCharges = price;

  const getImageUrl = (img) => {
    const fallback = `${import.meta.env.VITE_BACKEND_URL
      }/storage/variation_images/No_Image_Available.jpg`;
    if (!img) return fallback;
    return `${import.meta.env.VITE_BACKEND_URL}${img}`;
  };

  return (
    <div
      className="product-card"
      style={{
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      {/* Top Section: Ring Image & Info */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Ring Image */}
          <div>
            <img
              src={getImageUrl(ring.images?.[0])}
              alt={ring.name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "scale-down",
                borderRadius: "8px",
                border: "1px solid #eee",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg text-gray-800">
                {ring.name || "N/A"}
              </h3>
            </div>

            {/* Ring Info */}
            <div style={{ marginBottom: "10px" }}>
              <p> ₹{price.toFixed(2)}</p>
              <p>Metal Color: {ring.metal_color.name || "N/A"}</p>
              <p>Total Carat Weight: {ring.weight || "N/A"}</p>
              {ring.size && <p>Size: {ring.size}</p>}
            </div>

            {/* Quantity */}
            <div style={{ marginTop: "10px" }}>
              <p>
                <strong>Quantity: </strong>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "5px 10px",
                  width: "fit-content",
                }}
              >
                <button
                  onClick={() => onQuantityChange(-1)}
                  style={{
                    border: "none",
                    background: "transparent",
                    fontSize: "20px",
                    cursor: quantity > 1 ? "pointer" : "not-allowed",
                    color: quantity > 1 ? "#000" : "#aaa",
                  }}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => onQuantityChange(1)}
                  style={{
                    border: "none",
                    background: "transparent",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Remove Button */}
        <span
          onClick={onRemove}
          className="material-symbols-outlined"
          style={{
            cursor: "pointer",
            fontSize: "24px",
            color: "#ff4d4f",
            alignSelf: "start",
          }}
        >
          close
        </span>
      </div>
    </div>
  );
}
