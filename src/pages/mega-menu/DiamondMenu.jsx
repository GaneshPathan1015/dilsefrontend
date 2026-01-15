import React from "react";
import "./diamondMenu.css";
import { Link } from "react-router-dom";

const DiamondMenu = ({
  handleDiamondClick,
  closeMegaMenu,
  navigate,
  handlePriceFilter,
  handleCaratFilter,
}) => {
  return (
    <section className="jwl-mega-menu-inner">
      {/* Left Side col-9 */}
      <div className="diamond-megamenu-container">
        <div className="diamond-megamenu-text-section">
          {/* Categories col-3 */}
          <div className="col-6">
            <Link to="/diamond?menudiamond=lab-diamond" style={{ textDecoration: "none", color: "#000" }} className="jwl-menu-title mt-3">Lab Diamonds</Link> <br />
            <p
              onClick={() => {
                handleDiamondClick({ name: "Lab Diamonds" });
                closeMegaMenu();
              }}
            >
              Explore Lab Diamonds
            </p>
            <p
              onClick={() => {
                handleDiamondClick({ name: "Colored Lab Diamond" });
                closeMegaMenu();
              }}
            >
              Explore Colored Lab Diamonds
            </p>

            {/* <Link
              to="/fall-sale"
              style={{ textDecoration: "none" }}
              className="jwl-menu-title mt-3"
            >
              Fall Sale
            </Link> */}

            <Link
              to="/diamond?menudiamond=clarity-plus"
              style={{ textDecoration: "none", color: "#000" }}
              className="jwl-menu-title mt-4"
            >
              Dilse Jewels Diamonds
            </Link> <br />

            <Link
              to="/diamond?menudiamond=natural-diamond"
              style={{ textDecoration: "none", color: "#000" }}
              className="jwl-menu-title mt-4"
            >
              Natural Diamonds
            </Link> <br />

            <Link
              to="/engagement-rings/rings"
              style={{ textDecoration: "none", color: "#000" }}
              className="jwl-menu-title mt-4"
            >
              Create Your Own Ring
            </Link> <br />

            <p
              onClick={() => {
                handleDiamondClick({ name: "Lab Diamond" });
                closeMegaMenu();
              }}
            >
              Lab Diamond
            </p>
            <p
              onClick={() => {
                handleDiamondClick({ name: "Natural Diamond" });
                closeMegaMenu();
              }}
            >
              Natural Diamond
            </p>
            <p
              onClick={() => {
                handleDiamondClick({ name: "Colored Lab Diamond" });
                closeMegaMenu();
              }}
            >
              Colored Lab Diamond
            </p>
            <p
              onClick={() => {
                handleDiamondClick({ name: "Featured Deals" });
                closeMegaMenu();
              }}
            >
              Featured Deal Diamond
            </p>
          </div>

          {/* Price col-4 */}
          <div className="col-4">
            <h6 className="jwl-menu-title">Price</h6>
            <p onClick={() => handlePriceFilter(0, 2000)}>Under ₹2000</p>
            <p onClick={() => handlePriceFilter(2000, 4000)}>₹2000 - ₹4000</p>
            <p onClick={() => handlePriceFilter(4000, 6000)}>₹4000 - ₹6000</p>
            <p onClick={() => handlePriceFilter(6000, 8000)}>₹6000 - ₹8000</p>
            <p onClick={() => handlePriceFilter(8000, 10000)}>₹8000+</p>
          </div>

          {/* Carat col-5 */}
          <div className="col-2">
            <h6 className="jwl-menu-title">Carat</h6>
            <p onClick={() => handleCaratFilter(1, 2)}>1 to 2 ct.</p>
            <p onClick={() => handleCaratFilter(2, 3)}>2 to 3 ct.</p>
            <p onClick={() => handleCaratFilter(3, 4)}>3 to 4 ct.</p>
            <p onClick={() => handleCaratFilter(4, 6)}>4 to 6 ct.</p>
            <p onClick={() => handleCaratFilter(6, 20)}>6 ct. & above</p>
          </div>
        </div>

        {/* Right Side col-3 */}
        <div className="diamond-megamenu-img-section">
          <img
            src="/images/diamonds.webp"
            alt="Diamond"
            className="diamond-menu-img taller" // added custom class
          />
          <h6 className="fw-bold mt-3 ">Dilse Jewels Diamonds</h6>
          <Link to="/diamond?menudiamond=clarity-plus" className="shop-now">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiamondMenu;
