import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/index";
import styles from "./DiamondListing.module.css";
import "./DiamondTable.css";

const DiamondTable = ({
  loading,
  diamonds,
  showAdvanced,
  checkedDiamonds,
  onToggleCheck,
  ringCartItem,
}) => {
  const navigate = useNavigate();
  const handleSelect = (diamond) => {
    navigate(`/diamond-details/${diamond.diamondid}`, {
      state: { diamond, ringCartItem: ringCartItem },
    });
  };

  const imageBaseUrl = "images/shapes/";

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  const [error, setError] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  if (error) return <div>{error}</div>;
  return (
    <>
      <div className={`${styles.desktopView} diamond-table`}>
        <div className="table-header">
          <div>COMPARE</div>
          <div className="diamond-img">VIEW</div>
          <div>SHAPE ▾</div>
          <div>CARAT ▾</div>
          <div>COLOR ▾</div>
          <div>CLARITY ▾</div>
          <div>CUT ▾</div>
          <div>REPORT</div>

          {showAdvanced && (
            <>
              <div>POLISH</div>
              <div>SYM.</div>
              <div>FLUOR.</div>
              <div>L/W</div>
              <div>TABLE</div>
              <div> DEPTH</div>
            </>
          )}
          <div>PRICE ▾</div>
          <div></div>
        </div>

        {loading ? (
          <Loader />
        ) : diamonds.length === 0 ? (
          <div className="no-diamonds-message">
            No diamonds match your filter criteria.
          </div>
        ) : (
          diamonds.map((diamond, index) => (
            <div
              className={`table-row ${
                selectedRows.includes(index) ? "selected-row" : ""
              }`}
              key={index}
            >
              <div>
                <input
                  type="checkbox"
                  checked={checkedDiamonds.includes(diamond.diamondid)}
                  onChange={() => onToggleCheck(diamond.diamondid)}
                />
              </div>
              <div className="diamond-card">
                {diamond.is_superdeal === 1 && (
                  <div className="featured-banner">FEATURED DEAL</div>
                )}
                <img
                  src={
                    diamond.image_link
                      ? diamond.image_link
                      : "images/images.jpeg"
                  }
                  alt={diamond.shape.name || "NA"}
                  className="diamond-img"
                />
              </div>
              <div>{diamond.shape?.name || "NA"}</div>
              <div>
                {diamond.carat_weight
                  ? parseFloat(diamond.carat_weight).toFixed(2)
                  : "00"}
              </div>
              <div>{diamond.color?.name || "NA"}</div>
              <div>{diamond.clarity?.name || "NA"}</div>
              <div>{diamond.cut?.full_name || "NA"}</div>
              <div>{diamond.certificate_company?.dl_name || "NA"}</div>

              {showAdvanced && (
                <>
                  <div>{diamond.polish?.full_name || "NA"}</div>
                  <div>{diamond.symmetry?.full_name || "NA"}</div>
                  <div>{diamond.fluorescence?.full_name || "NA"}</div>

                  {diamond.measurement_l != null && diamond.measurement_w > 0
                    ? (diamond.measurement_l / diamond.measurement_w).toFixed(2)
                    : "N/A"}
                  <div>
                    {diamond.table_diamond ? diamond.table_diamond : "NA"}
                  </div>
                  <div>{diamond.depth ? diamond.depth : "NA"}</div>
                </>
              )}
              <div className="price">{diamond.price}</div>
              <div>
                <button
                  className="select-btn"
                  onClick={() => handleSelect(diamond, ringCartItem)}
                >
                  SELECT
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={styles.mobileView}>
        {loading ? (
          <Loader />
        ) : diamonds.length === 0 ? (
          <div className="no-diamonds-message">
            No diamonds match your filter criteria.
          </div>
        ) : (
          diamonds.map((diamond) => (
            <div key={diamond.diamondid} className={styles.listItem}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={checkedDiamonds.includes(diamond.diamondid)}
                onChange={() => onToggleCheck(diamond.diamondid)}
              />

              <div className={styles.imageWrapper}>
                <div className={styles.badge}>
                  EARLY BLACK
                  <br />
                  FRIDAY
                </div>
                <div className={styles.diamondImage}>
                  <img
                    src={
                      diamond.image_link
                        ? diamond.image_link
                        : "images/images.jpeg"
                    }
                    alt={diamond.shape.name || "NA"}
                    className="diamond-img"
                  />
                </div>
              </div>

              <div className={styles.details}>
                <div className={styles.title}>
                  {diamond.carat_weight} Carat {diamond.shape?.name} Lab Diamond
                </div>
                <div className={styles.specs}>
                  {diamond.cut?.full_name || "NA"} /{" "}
                  {diamond.color?.name || "NA"} /{" "}
                  {diamond.clarity?.name || "NA"}
                </div>
                <div className={styles.priceWrapper}>
                  <span className={styles.currentPrice}>${diamond.price}</span>
                  <span className={styles.originalPrice}>${diamond.price}</span>
                  <span className={styles.discount}>
                    (${/* {diamond.discount} */}0 OFF)
                  </span>
                </div>
              </div>

              <button
                className={styles.selectBtn}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#2a4a62")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#1a3a52")}
                onClick={() => handleSelect(diamond, ringCartItem)}
              >
                SELECT
              </button>
            </div>
          ))
        )}

        {showScrollTop && (
          <button
            className={styles.floatingBtn}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
    </>
  );
};

export default DiamondTable;
