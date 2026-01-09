import React from "react";
import styles from "./ClaritySlider.module.css";

export default function ClaritySlider({ clarity, setClarity }) {
  const clarityLabels = ["I3", "VVS1", "VVS2", "VS1", "VS2", "SI1"];
  const minClarityIndex = 1;
  const maxClarityIndex = clarityLabels.length + 1;

  return (
    <div className={`container ${styles.claritySection}`}>
      <div className="row">
        <div className="col-12">
          <label className={styles.clarityLabel}>BY CLARITY</label>

          <div className={styles.claritySubTitle}>
            <span>Inclusion Visible Under 10x Magnification</span>
            <span>Flawless</span>
          </div>

          <div className={styles.sliderWrapper}>
            <div className={styles.sliderTrack}></div>
            <div
              className={styles.sliderActive}
              style={{
                left: `${
                  ((clarity[0] - minClarityIndex) /
                    (maxClarityIndex - minClarityIndex)) *
                  100
                }%`,
                width: `${
                  ((clarity[1] - clarity[0]) /
                    (maxClarityIndex - minClarityIndex)) *
                  100
                }%`,
              }}
            ></div>

            <input
              type="range"
              min={minClarityIndex}
              max={maxClarityIndex}
              step={1}
              value={clarity[0]}
              onChange={(e) =>
                setClarity([
                  Math.min(Number(e.target.value), clarity[1] - 1),
                  clarity[1],
                ])
              }
            />
            <input
              type="range"
              min={minClarityIndex}
              max={maxClarityIndex}
              step={1}
              value={clarity[1]}
              onChange={(e) =>
                setClarity([
                  clarity[0],
                  Math.max(Number(e.target.value), clarity[0] + 1),
                ])
              }
            />
          </div>

          <div
            className={`d-flex justify-content-between ${styles.clarityInputs}`}
          >
            {clarityLabels.map((label, index) => (
              <span key={index} className={styles.clarityLabelItem}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
