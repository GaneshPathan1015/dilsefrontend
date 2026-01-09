import React, { useState } from "react";
import styles from "./RingWrapper.module.css"; // Import the CSS module
import { useLocation, useNavigate } from "react-router-dom";

const RingWrapper = ({ ringCartItem }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedDiamondParam = searchParams.get("selecteddiamond");

  const defaultSteps = [
    { id: 1, label: "CHOOSE A DIAMOND" },
    { id: 2, label: "CHOOSE A SETTING" },
    { id: 3, label: "COMPLETE YOUR RING" },
  ];

  // Alternate step order (2-1-3)
  const diamondSteps = [
    { id: 1, label: "CHOOSE A SETTING" },
    { id: 2, label: "CHOOSE A DIAMOND" },
    { id: 3, label: "COMPLETE YOUR RING" },
  ];

  // Determine which step order to use
  const isDiamondDetailsPage =
    location.pathname.startsWith("/diamond-details/");

  const steps =
    isDiamondDetailsPage || selectedDiamondParam ? diamondSteps : defaultSteps;

  // Set initial active step
  const [currentStep, setCurrentStep] = useState(() => {
    if (isDiamondDetailsPage) {
      return 2; // "CHOOSE A DIAMOND" active on diamond details
    }
    return selectedDiamondParam ? 2 : 1;
  });

  const handleStepClick = (step) => {
    setCurrentStep(step.id);
    if (step.label === "CHOOSE A SETTING") {
      navigate("/engagement-rings");
    }
    // Add navigation logic for other steps if needed
    // Example:
    // if (step.label === "CHOOSE A DIAMOND") {
    //   navigate("/diamonds");
    // }
  };

  return (
    <>
      <div className={styles.diamondRingWrapper}>
        <div className={styles.diamondRingWrapper}>
          <div className={styles.stepContainer}>
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div
                  className={`${styles.step} ${
                    currentStep === step.id ? styles.active : ""
                  } ${step.id === 3 ? styles.disabled : ""}`}
                  onClick={() => step.id !== 3 && handleStepClick(step)}
                >
                  <span className={styles.stepNumber}>{step.id}</span>
                  <span className={styles.stepDivider}></span>
                  <span className={styles.stepLabel}>{step.label}</span>
                </div>

               
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RingWrapper;
