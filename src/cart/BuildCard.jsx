import React from "react";

export default function BuildCard({
  item,
  quantity,
  onQuantityChange,
  onRemove,
}) {
  const ring = item;

  const getImageUrl = (img) => {
    const fallback = `${import.meta.env.VITE_BACKEND_URL
      }/storage/variation_images/No_Image_Available.jpg`;
    if (!img) return fallback;
    return `${import.meta.env.VITE_BACKEND_URL
      }${img}`;
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
        {/* Ring Image */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
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
                {ring.name} Engagement Ring
              </h3>
            </div>

            {/* Ring Info */}
            <div style={{ marginBottom: "10px" }}>
              <p> ₹{ring.price}</p>
              <p>Metal Color: {ring.metal_color.name || "N/A"}</p>
              <p>Shape: {ring.shape || "N/A"}</p>
              {ring.size && <p>Size: {ring.size}</p>}
              <p>Type: {ring.diamondtype || "N/A"}</p>
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
                <span>{quantity}</span>
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
