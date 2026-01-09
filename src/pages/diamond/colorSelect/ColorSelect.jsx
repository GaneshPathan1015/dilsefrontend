import React from "react";
import styles from "./ColorSelect.module.css"; // <-- module CSS


export default function ColorSelect({ color, setColor }) {
  const colorLabels = ["D", "E", "F", "G", "H"];
  const minColorIndex = 1;
  const maxColorIndex = colorLabels.length + 1;

  return (
    <div className={`container ${styles.colorSection}`}>
      <div className="row">
        <div className="col-12">
          <label className={styles.colorLabel}>BY COLOR</label>

          <div className={styles.colorSubTitle}>
            <span>Near Colorless</span>
            <span>Colorless</span>
          </div>

          <div className={styles.sliderWrapper}>
            <div className={styles.sliderTrack}></div>
            <div
              className={styles.sliderActive}
              style={{
                left: `${
                  ((color[0] - minColorIndex) / (maxColorIndex - minColorIndex)) *
                  100
                }%`,
                width: `${
                  ((color[1] - color[0]) / (maxColorIndex - minColorIndex)) * 100
                }%`,
              }}
            ></div>

            <input
              type="range"
              min={minColorIndex}
              max={maxColorIndex}
              step={1}
              value={color[0]}
              onChange={(e) =>
                setColor([
                  Math.min(Number(e.target.value), color[1] - 1),
                  color[1],
                ])
              }
            />
            <input
              type="range"
              min={minColorIndex}
              max={maxColorIndex}
              step={1}
              value={color[1]}
              onChange={(e) =>
                setColor([
                  color[0],
                  Math.max(Number(e.target.value), color[0] + 1),
                ])
              }
            />
          </div>

          <div
            className={`d-flex justify-content-between ${styles.colorInputs}`}
          >
            {colorLabels.map((label, index) => (
              <span key={index} className={styles.colorLabelItem}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
