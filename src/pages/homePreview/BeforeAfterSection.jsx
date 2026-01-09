import React, { useState, useRef } from "react";

const BeforeAfterSection = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    setPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) handleMove(e.clientX); // drag करते वक्त move करे
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section
      ref={containerRef}
      className="slider-container"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        height: "450px",
        margin: "50px auto",
        overflow: "hidden",
        cursor: "ew-resize",
      }}
    >
      {/* BEFORE Image (background layer) */}
      <img
        src="/images/homepreview/5.webp"
        alt="Before"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* AFTER Image (front clipped layer) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: "clip-path 0.05s linear",
        }}
      >
        <img
          src="/images/homepreview/6.webp"
          alt="After"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Divider Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: `${position}%`,
          transform: "translateX(-50%)",
          width: "3px",
          height: "100%",
          backgroundColor: "#14344a",
          zIndex: 2,
        }}
      ></div>

      {/* Draggable Button */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#14344a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "18px",
          border: "3px solid white",
          userSelect: "none",
          zIndex: 3,
        }}
      >
        ⇆
      </div>

      {/* Text Labels */}
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "#14344a",
          fontSize: "22px",
          fontWeight: "500",
          zIndex: 4,
        }}
      >
        Before
      </p>
      <p
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          color: "#14344a",
          fontSize: "22px",
          fontWeight: "500",
          zIndex: 4,
        }}
      >
        After
      </p>
    </section>
  );
};

export default BeforeAfterSection;
