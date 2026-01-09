import React, { useEffect, useRef } from "react";
import "./DiamondSelectionModal.css";
import { useNavigate } from "react-router-dom";

const DiamondSelectionModal = ({ onClose, ringCartItem }) => {
  const modalRef = useRef();
  const navigate = useNavigate();

  // Close modal on outside click
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [onClose]);

  const options = [
    { label: "LAB DIAMOND", name: "Lab Diamond", filled: true },
    { label: "NATURAL DIAMOND", name: "Natural Diamond" },
    {
      label: "FEATURED DEAL DIAMOND (25% OFF)",
      name: "Featured Deals",
      boldPart: "(25% OFF)",
    },
    { label: "COLOR LAB DIAMOND", name: "Colored Lab Diamond" },
  ];
  const handleDiamondClick = (item, ringCartItem) => {
    const itemSlug = item.name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("selecteddiamond", itemSlug);
    navigate(`/diamond?${params.toString()}`, { state: { ringCartItem } });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        {/* Close button */}

        <span
          className="material-symbols-outlined modal-close"
          onClick={onClose}
        >
          cancel
        </span>

        {/* Title */}
        <h2 className="modal-title">COMPLETE YOUR RING BY ADDING A DIAMOND</h2>
        <p className="modal-subtitle">Pick from our diamond options</p>

        {/* Recommendation */}
        <p className="modal-recommendation">
          We recommend a minimum <strong>2.5ct</strong> center diamond for a
          cohesive look that matches the size &amp; weight of the side stones.
        </p>

        {/* Buttons */}
        <div className="modal-buttons">
          {options.map((opt, i) => (
            <button
              key={i}
              className={`modal-btn ${opt.filled ? "filled" : "outlined"}`}
              onClick={() => {
                // onSelect(opt.label);
                handleDiamondClick(opt, ringCartItem);
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiamondSelectionModal;
