import React from "react";

const DiamondCard = ({ item, quantity, onQuantityChange, onRemove }) => {
  const diamondType =
    item.diamond_type === 1
      ? "Natural"
      : item.diamond_type === 2
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
      {/* Diamond Image */}

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
          {/* diamond Image */}
          <div>
            <img
              src={item.image_link ? item.image_link : "images/images.jpeg"}
              alt={`${item.shape?.name} diamond`}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "scale-down",
                borderRadius: "8px",
                border: "1px solid #eee",
              }}
            />
          </div>

          {/*  Diamond Info */}
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: "10px" }}>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.carat_weight} Carat {item.shape?.name} {diamondType}{" "}
                  Diamond
                </h3>
              </div>
            </div>

            <p className="text-xl font-bold text-gray-900 mt-1">
              ${item.price}
            </p>

            {/* Specs */}
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium">COLOR:</span> {item.color.name}
              </p>
              <p>
                <span className="font-medium">CLARITY:</span>{" "}
                {item.clarity.name}
              </p>
              <p>
                {/* <span className="font-medium">LAB:</span> {item.lab || "N/A"} */}
              </p>
              <p>
                <span className="font-medium">SHIP BY:</span> Tuesday, September
                2
              </p>
              <p className="font-semibold text-gray-700">
                Track your order in real time before it ships
              </p>
            </div>

            {/* Quantity Control */}
            <div className="mt-3 flex items-center">
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
};

export default DiamondCard;