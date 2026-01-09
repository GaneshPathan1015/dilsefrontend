import React from "react";
import styles from "./AdvanceFilter.module.css";

export default function AdvanceFilter({
  polish,
  setPolish,
  symmetry,
  setSymmetry,
  fluorescence,
  setFluorescence,
  ratio,
  setRatio,
  table,
  setTable,
  depth,
  setDepth,
}) {
  const polishLabels = ["Excellent", "Very Good", "Good", "I", "Fair", "Poor"];
  const symmetryLabels = ["Excellent", "Very Good", "Good", "Fair", "Poor", "I"];
  const fluorescenceLabels = ["None", "Faint", "Medium", "Strong", "Very Strong"];

  const minPolishIndex = 1;
  const maxPolishIndex = polishLabels.length + 1;
  const minSymmetryIndex = 1;
  const maxSymmetryIndex = symmetryLabels.length + 1;
  const minFluorescenceIndex = 1;
  const maxFluorescenceIndex = fluorescenceLabels.length + 1;

  const minRatio = 0.9, maxRatio = 2.75, minRatioDiff = 0.1;
  const minTable = 40, maxTable = 90, minTableDiff = 1;
  const minDepth = 40, maxDepth = 90, minDepthDiff = 1;

  const handleRatioChange = (index, value) => {
    const newRatio = [...ratio];
    newRatio[index] = parseFloat(value);
    if (index === 0 && newRatio[0] > newRatio[1] - minRatioDiff)
      newRatio[0] = parseFloat((newRatio[1] - minRatioDiff).toFixed(2));
    if (index === 1 && newRatio[1] < newRatio[0] + minRatioDiff)
      newRatio[1] = parseFloat((newRatio[0] + minRatioDiff).toFixed(2));
    setRatio([parseFloat(newRatio[0].toFixed(2)), parseFloat(newRatio[1].toFixed(2))]);
  };

  const getTrackStyle = (min, max, range) => {
    const left = ((range[0] - min) / (max - min)) * 100;
    const right = ((range[1] - min) / (max - min)) * 100;
    return { left: `${left}%`, width: `${right - left}%` };
  };

  const handleRangeChange = (index, value, setFunc, range, diff) => {
    const newRange = [...range];
    newRange[index] = Number(value);
    if (index === 0 && newRange[0] > newRange[1] - diff)
      newRange[0] = newRange[1] - diff;
    if (index === 1 && newRange[1] < newRange[0] + diff)
      newRange[1] = newRange[0] + diff;
    setFunc(newRange);
  };

  return (
    <div className={styles.advanceFilter}>
      {/* BY POLISH */}
      <div className={styles.advanceSection}>
        <label className={styles.advanceLabel}>BY POLISH</label>
        <div className={styles.advanceInputs}>
          {polishLabels.map((l, i) => <span key={i} className={styles.advanceLabelItem}>{l}</span>)}
        </div>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderTrack}></div>
          <div
            className={styles.sliderActive}
            style={getTrackStyle(minPolishIndex, maxPolishIndex, polish)}
          />
          <input
            type="range"
            min={minPolishIndex}
            max={maxPolishIndex}
            value={polish[0]}
            onChange={(e) =>
              setPolish([Math.min(+e.target.value, polish[1] - 1), polish[1]])
            }
          />
          <input
            type="range"
            min={minPolishIndex}
            max={maxPolishIndex}
            value={polish[1]}
            onChange={(e) =>
              setPolish([polish[0], Math.max(+e.target.value, polish[0] + 1)])
            }
          />
        </div>
      </div>

      {/* SYMMETRY */}
      <div className={styles.advanceSection}>
        <label className={styles.advanceLabel}>BY SYMMETRY</label>
        <div className={styles.advanceInputs}>
          {symmetryLabels.map((l, i) => <span key={i} className={styles.advanceLabelItem}>{l}</span>)}
        </div>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderTrack}></div>
          <div
            className={styles.sliderActive}
            style={getTrackStyle(minSymmetryIndex, maxSymmetryIndex, symmetry)}
          />
          <input
            type="range"
            min={minSymmetryIndex}
            max={maxSymmetryIndex}
            value={symmetry[0]}
            onChange={(e) =>
              setSymmetry([Math.min(+e.target.value, symmetry[1] - 1), symmetry[1]])
            }
          />
          <input
            type="range"
            min={minSymmetryIndex}
            max={maxSymmetryIndex}
            value={symmetry[1]}
            onChange={(e) =>
              setSymmetry([symmetry[0], Math.max(+e.target.value, symmetry[0] + 1)])
            }
          />
        </div>
      </div>

      {/* FLUORESCENCE */}
      <div className={styles.advanceSection}>
        <label className={styles.advanceLabel}>BY FLUORESCENCE</label>
        <div className={styles.advanceInputs}>
          {fluorescenceLabels.map((l, i) => (
            <span key={i} className={styles.advanceLabelItem}>{l}</span>
          ))}
        </div>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderTrack}></div>
          <div
            className={styles.sliderActive}
            style={getTrackStyle(minFluorescenceIndex, maxFluorescenceIndex, fluorescence)}
          />
          <input
            type="range"
            min={minFluorescenceIndex}
            max={maxFluorescenceIndex}
            value={fluorescence[0]}
            onChange={(e) =>
              setFluorescence([Math.min(+e.target.value, fluorescence[1] - 1), fluorescence[1]])
            }
          />
          <input
            type="range"
            min={minFluorescenceIndex}
            max={maxFluorescenceIndex}
            value={fluorescence[1]}
            onChange={(e) =>
              setFluorescence([fluorescence[0], Math.max(+e.target.value, fluorescence[0] + 1)])
            }
          />
        </div>
      </div>

      {/* RATIO, TABLE, DEPTH */}
      <div className={styles.advanceSection}>
        <label className={styles.advanceLabel}>BY L/W RATIO</label>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderTrack}></div>
          <div className={styles.sliderActive} style={getTrackStyle(minRatio, maxRatio, ratio)} />
          <input type="range" min={minRatio} max={maxRatio} value={ratio[0]} step={0.001}
            onChange={(e) => handleRatioChange(0, e.target.value)} />
          <input type="range" min={minRatio} max={maxRatio} value={ratio[1]} step={0.001}
            onChange={(e) => handleRatioChange(1, e.target.value)} />
        </div>
        <div className={styles.advanceInputs}>
          <input type="text" readOnly value={ratio[0].toFixed(2)} />
          <span>to</span>
          <input type="text" readOnly value={ratio[1].toFixed(2)} />
        </div>
      </div>

      <div className={styles.advanceSection}>
        <label className={styles.advanceLabel}>BY TABLE</label>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderTrack}></div>
          <div className={styles.sliderActive} style={getTrackStyle(minTable, maxTable, table)} />
          <input type="range" min={minTable} max={maxTable} value={table[0]}
            onChange={(e) => handleRangeChange(0, e.target.value, setTable, table, minTableDiff)} />
          <input type="range" min={minTable} max={maxTable} value={table[1]}
            onChange={(e) => handleRangeChange(1, e.target.value, setTable, table, minTableDiff)} />
        </div>
        <div className={styles.advanceInputs}>
          <input type="text" readOnly value={table[0]} />
          <span>to</span>
          <input type="text" readOnly value={table[1]} />
        </div>
      </div>

      <div className={styles.advanceSection}>
        <label className={styles.advanceLabel}>BY DEPTH</label>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderTrack}></div>
          <div className={styles.sliderActive} style={getTrackStyle(minDepth, maxDepth, depth)} />
          <input type="range" min={minDepth} max={maxDepth} value={depth[0]}
            onChange={(e) => handleRangeChange(0, e.target.value, setDepth, depth, minDepthDiff)} />
          <input type="range" min={minDepth} max={maxDepth} value={depth[1]}
            onChange={(e) => handleRangeChange(1, e.target.value, setDepth, depth, minDepthDiff)} />
        </div>
        <div className={styles.advanceInputs}>
          <input type="text" readOnly value={depth[0]} />
          <span>to</span>
          <input type="text" readOnly value={depth[1]} />
        </div>
      </div>
    </div>
  );
}
