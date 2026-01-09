import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../../../cart/CartContext";
import "./RingSettingModal.css";
import { useNavigate } from "react-router-dom";

const RingSettingModal = ({ onClose, modalProductData }) => {
  const modalRef = useRef();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Form state
  const [formData, setFormData] = useState({
    size: "",
    engraving: "",
    diamondtype: "",
    shape: modalProductData.shape || "", // From props
    caratWeight: modalProductData.caratWeight || "",
    dimensions: "",
  });

  // Validation state
  const [errors, setErrors] = useState({});

  // Close on outside click
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [onClose]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.size) newErrors.size = "Please select ring size";
    if (!formData.diamondtype) newErrors.diamondtype = "Please select type";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const productWithForm = {
        ...modalProductData,
        ...formData,
      };

      addToCart(productWithForm); 
      onClose();
      navigate("/cart");
    }
  };  

  return (
    <div className="modal-overlay-seting">
      <div className="modal-container-seting" ref={modalRef}>
        {/* Close button */}
        <span
          className="material-symbols-outlined modal-close-seting"
          onClick={onClose}
        >
          cancel
        </span>

        <h2 className="modal-title-seting">
          You are about to purchase the ring setting only, without a center
          diamond.
        </h2>
        <p className="modal-subtitle-seting">
          To complete your selection please specify the ring size and whether
          you would like any engraving.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row-seting">
            <div className="form-group-seting">
              <label>SIZE*</label>
              <select name="size" value={formData.size} onChange={handleChange}>
                <option value="">Select size</option>
                <option value="6">6</option>
                <option value="6.5">6.5</option>
                <option value="7">7</option>
              </select>
              {errors.size && (
                <span className="error-text-seting">{errors.size}</span>
              )}
            </div>
            <div className="form-group-seting">
              <label>ADD ENGRAVING</label>
              <input
                type="text"
                name="engraving"
                value={formData.engraving}
                onChange={handleChange}
                placeholder="Enter engraving text"
              />
            </div>
          </div>

          <p className="info-text-seting">
            To ensure a perfect match between the ring setting & the center
            diamond you wish to set, kindly provide us with the following
            details:
          </p>

          <div className="form-row-seting">
            <div className="form-group-seting">
              <label>Type</label>
              <select name="diamondtype" value={formData.diamondtype} onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="Lab Diamond">Lab Diamond</option>
                <option value="Natural Diamond">Natural Diamond</option>
              </select>
              {errors.diamondtype && (
                <span className="error-text-seting">{errors.diamondtype}</span>
              )}
            </div>
            <div className="form-group-seting">
              <label>Shape</label>
              <input type="text" name="shape" value={formData.shape} readOnly />
            </div>
            <div className="form-group-seting">
              <label>Carat Weight</label>
              <input
                type="text"
                name="caratWeight"
                value={formData.caratWeight}
                readOnly
              />
            </div>
            <div className="form-group-seting">
              <label>DIMENSIONS (in mm)</label>
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                placeholder="LxWxH"
              />
            </div>
          </div>

          <button type="submit" className="submit-btn-seting">
            ADD SETTING TO CART
          </button>
        </form>
      </div>
    </div>
  );
};

export default RingSettingModal;
