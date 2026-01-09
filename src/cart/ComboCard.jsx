import React, { useState } from "react";

export default function ComboCard({
  item,
  quantity,
  onQuantityChange,
  onRemove,
}) {
  const ring = item.ring || {};
  const diamond = item.diamond || {};

  // Fallback state for images
  const [ringImg, setRingImg] = useState(
    ring.image || "/images/placeholder.png"
  );

  const diamondType =
    diamond.diamond_type === 1
      ? "Natural"
      : diamond.diamond_type === 2
      ? "Lab"
      : "N/A";

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
              src={ringImg}
              alt={ring.name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "scale-down",
                borderRadius: "8px",
                border: "1px solid #eee",
              }}
              onError={() => setRingImg("/images/placeholder.png")}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg text-gray-800">
                {ring.name || "N/A"}
              </h3>

              <h3 className="font-semibold text-lg text-gray-800">
                Engagement Ring with {diamond.carat_weight} Carat{" "}
                {diamond.shape?.name} {diamondType} Diamond
              </h3>
            </div>

            {/* Ring Info */}
            <div style={{ marginBottom: "10px" }}>
              <p> ${ring.price || "0.00"}</p>
              <p>Metal Color: {ring.metal_color.name || "N/A"}</p>
              <p>Shape: {ring.shape || "N/A"}</p>
              {ring.size && <p>Size: {ring.size}</p>}
            </div>

            {/* Diamond Info */}
            <div
              style={{
                backgroundColor: "#f7f8fa",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              <p>
                <strong>Diamond Information</strong>
              </p>
              <p>
                <strong>Price: </strong> $
                {diamond.price || diamond.total_price || "0.00"}
              </p>
              {diamond.color && (
                <p>
                  <strong>Color: </strong> {diamond.color.name}
                </p>
              )}
              {diamond.clarity && (
                <p>
                  <strong>Clarity: </strong> {diamond.clarity.name}
                </p>
              )}
              {diamond.cut && (
                <p>
                  <strong>Cut: </strong> {diamond.cut.full_name}
                </p>
              )}
            </div>

            {/* Quantity */}
            <div style={{ marginTop: "10px" }}>
              <p>
                <strong>Quantity: </strong>
              </p>
              <div
                className="border"
                style={{
                  display: "inline-block",
                  padding: "5px 10px",
                  textAlign: "center",
                }}
              >
                {quantity}
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
