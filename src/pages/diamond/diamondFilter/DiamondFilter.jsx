import React from "react";
import styles from "./DiamondFilter.module.css"; // <-- module css import


const DiamondFilter = ({ price, setPrice, carat, setCarat, cut, setCut }) => {
  const minPrice = 0;
  const maxPrice = 10000;
  const minPriceDifference = 100;

  const minCarat = 0;
  const maxCarat = 20;
  const minCaratDifference = 1;

  const cutLabels = ["Excellent", "Very Good", "Good", "Ideal", "8X"];
  const minCutIndex = 1;
  const maxCutIndex = cutLabels.length + 1;

  // Handle price
  const handlePriceChange = (index, value) => {
    const newPrice = [...price];
    newPrice[index] = Number(value);
    if (index === 0 && newPrice[0] > newPrice[1] - minPriceDifference) {
      newPrice[0] = newPrice[1] - minPriceDifference;
    } else if (index === 1 && newPrice[1] < newPrice[0] + minPriceDifference) {
      newPrice[1] = newPrice[0] + minPriceDifference;
    }
    setPrice(newPrice);
  };

  const getPriceTrackStyle = () => {
    const left = ((price[0] - minPrice) / (maxPrice - minPrice)) * 100;
    const right = ((price[1] - minPrice) / (maxPrice - minPrice)) * 100;
    return { left: `${left}%`, width: `${right - left}%` };
  };

  // Handle carat
  const handleCaratChange = (index, value) => {
    const newCarat = [...carat];
    newCarat[index] = Number(value);
    if (index === 0 && newCarat[0] > newCarat[1] - minCaratDifference) {
      newCarat[0] = newCarat[1] - minCaratDifference;
    } else if (index === 1 && newCarat[1] < newCarat[0] + minCaratDifference) {
      newCarat[1] = newCarat[0] + minCaratDifference;
    }
    setCarat(newCarat);
  };

  const getCaratTrackStyle = () => {
    const left = ((carat[0] - minCarat) / (maxCarat - minCarat)) * 100;
    const right = ((carat[1] - minCarat) / (maxCarat - minCarat)) * 100;
    return { left: `${left}%`, width: `${right - left}%` };
  };

  return (
    <div className={`container ${styles.filterSection}`}>
      <div className="row gy-4">
        {/* Price Filter */}
        <div className="col-12 col-md-6 col-lg-4">
          <label className={styles.priceLabel}>BY PRICE</label>
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderTrack}></div>
            <div className={styles.sliderActive} style={getPriceTrackStyle()}></div>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={price[0]}
              onChange={(e) => handlePriceChange(0, e.target.value)}
            />
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={price[1]}
              onChange={(e) => handlePriceChange(1, e.target.value)}
            />
          </div>
          <div className={styles.priceInputs}>
            <input type="text" value={`$${price[0]}`} readOnly />
            <span>to</span>
            <input type="text" value={`$${price[1]}`} readOnly />
          </div>
        </div>

        {/* Carat Filter */}
        <div className="col-12 col-md-6 col-lg-4">
          <label className={styles.priceLabel}>BY CARAT</label>
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderTrack}></div>
            <div className={styles.sliderActive} style={getCaratTrackStyle()}></div>
            <input
              type="range"
              min={minCarat}
              max={maxCarat}
              value={carat[0]}
              onChange={(e) => handleCaratChange(0, e.target.value)}
            />
            <input
              type="range"
              min={minCarat}
              max={maxCarat}
              value={carat[1]}
              onChange={(e) => handleCaratChange(1, e.target.value)}
            />
          </div>
          <div className={styles.priceInputs}>
            <input type="text" value={`${carat[0]} Ct.`} readOnly />
            <span>to</span>
            <input type="text" value={`${carat[1]} Ct.`} readOnly />
          </div>
        </div>

        {/* Cut Filter */}
        <div className="col-12 col-md-6 col-lg-4">
          <label className={styles.priceLabel}>BY CUT</label>
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderTrack}></div>
            <div
              className={styles.sliderActive}
              style={{
                left: `${
                  ((cut[0] - minCutIndex) / (maxCutIndex - minCutIndex)) * 100
                }%`,
                width: `${
                  ((cut[1] - cut[0]) / (maxCutIndex - minCutIndex)) * 100
                }%`,
              }}
            ></div>
            <input
              type="range"
              min={minCutIndex}
              max={maxCutIndex}
              step={1}
              value={cut[0]}
              onChange={(e) =>
                setCut([Math.min(Number(e.target.value), cut[1] - 1), cut[1]])
              }
            />
            <input
              type="range"
              min={minCutIndex}
              max={maxCutIndex}
              step={1}
              value={cut[1]}
              onChange={(e) =>
                setCut([cut[0], Math.max(Number(e.target.value), cut[0] + 1)])
              }
            />
          </div>
          <div className={`d-flex justify-content-between ${styles.cutLabels}`}>
            {cutLabels.map((label, index) => (
              <span key={index} className={styles.cutLabelItem}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondFilter;
