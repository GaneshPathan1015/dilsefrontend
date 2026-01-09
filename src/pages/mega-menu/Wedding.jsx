import React from "react";
import "./wedding.css";

const Wedding = ({ handleStartWedding }) => {
  const womenBands = [
    { label: "Anniversary Rings", slug: "womens-anniversary-rings" },
    { label: "Eternity Rings", slug: "womens-eternity-rings" },
    { label: "Metal Bonds", slug: "womens-metal-wedding-rings" },
    { label: "Diamond Bonds", slug: "womens-diamond-wedding-rings" },
  ];

  const menBands = [
    { label: "Metal Bonds", slug: "mens-metal-wedding-bands" },
    { label: "Diamond Bonds", slug: "mens-diamond-wedding-bands" },
  ];

  return (
    <div className="jwl-mega-menu-inner">
      <div className="bands-container">
        {/* Left Section */}
        <div className="bands-links">
          {/* Women */}
          <div className="column">
            <h6
              className="clickable-heading jwl-menu-title"
              onClick={() => handleStartWedding("womens-wedding-rings")}
            >
              Women’s Bands
            </h6>
            <ul>
              {womenBands.map((band) => (
                <li
                  key={band.slug}
                  className="clickable-link"
                  onClick={() => handleStartWedding(band.slug)}
                >
                  {band.label}
                </li>
              ))}
              <li
                className="clickable-heading"
                onClick={() => handleStartWedding("womens-wedding-rings")}
              >
                Shop all
              </li>
            </ul>
          </div>

          {/* Men */}
          <div className="column">
            <h6
              className="clickable-heading jwl-menu-title"
              onClick={() => handleStartWedding("mens-wedding-rings")}
            >
              Men’s Bands
            </h6>
            <ul>
              {menBands.map((band) => (
                <li
                  key={band.slug}
                  className="clickable-link"
                  onClick={() => handleStartWedding(band.slug)}
                >
                  {band.label}
                </li>
              ))}
              <li
                className="clickable-heading"
                onClick={() => handleStartWedding("mens-wedding-rings")}
              >
                Shop all
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="bands-image">
          <img src="/images/wedding.webp" alt="Bands" />
          <h6>Wedding Bands Guide</h6>
          <p>Everything you need to know before choosing the right band.</p>
          <a
            onClick={() => handleStartWedding("womens-wedding-rings")}
            className="learn-btn"
          >
            Shop all
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
