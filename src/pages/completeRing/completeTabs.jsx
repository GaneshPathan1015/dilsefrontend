import React, { useState } from "react";
import "../diamond/index.css";
import { useLocation, useNavigate } from "react-router-dom";

const CompleteTabs = ({ diamond, ringCartItem, fromChooseSetting }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const defaultSteps = [
    { id: 1, label: "CHOOSE A DIAMOND" },
    { id: 2, label: "CHOOSE A SETTING" },
    { id: 3, label: "COMPLETE YOUR RING" },
  ];

  const diamondSteps = [
    { id: 1, label: "CHOOSE A SETTING" },
    { id: 2, label: "CHOOSE A DIAMOND" },
    { id: 3, label: "COMPLETE YOUR RING" },
  ];

  // Determine which step order to use
  const isProductPage = location.pathname.startsWith("/product");
  const steps =
    isProductPage && fromChooseSetting === false
      ? defaultSteps
      : isProductPage && fromChooseSetting === undefined
      ? diamondSteps
      : defaultSteps;

  // Set initial active step
  const [currentStep, setCurrentStep] = useState(3);

  const handleStepClick = (step) => {
    setCurrentStep(step.id);
    if (step.label === "CHOOSE A SETTING") {
      navigate("/engagement-rings");
    }
    if (step.label === "CHOOSE A DIAMOND") {
      navigate("/diamond");
    }
  };
  

  // Helper for preview images
  const renderPreview = (index) => {
    if (steps === defaultSteps && index === 0 && diamond.shape.image) {
      return (
        <img
          src={diamond.image_link}
          alt="Diamond"
          className="ring-preview-img"
        />
      );
    }
    if (steps === diamondSteps && index === 1 && diamond.shape.image) {
      return (
        <img
          src={diamond.image_link}
          alt="Diamond"
          className="ring-preview-img"
        />
      );
    }
    if (steps === diamondSteps && index === 0 && ringCartItem?.image) {
      return (
        <img
          src={ringCartItem.image}
          alt="Selected Ring"
          className="ring-preview-img"
        />
      );
    }
    if (steps === defaultSteps && index === 1 && ringCartItem?.image) {
      return (
        <img
          src={ringCartItem.image}
          alt="Selected Ring"
          className="ring-preview-img"
        />
      );
    }
    if (index === 2 && ringCartItem?.image) {
      return (
        <img
          src={ringCartItem.image}
          alt="Final Ring"
          className="ring-preview-img"
        />
      );
    }
    return null;
  };

  return (
    <>
      <div className="diamond-ring-wrapper">
        <div className="step-container">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step ${currentStep === step.id ? "active" : ""}`}
              onClick={() => handleStepClick(step)}
            >
              <div>
                <span className="step-number">{step.id}</span>
                <span className="step-divider"></span>
                <span className="step-label">{step.label}</span>
              </div>
              {renderPreview(index) && (
                <div className="ring-preview">{renderPreview(index)}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompleteTabs;
