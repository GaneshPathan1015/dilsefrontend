import React from "react";
import { Link } from "react-router-dom";

const EngagementMenu = ({
  styles = [],
  shapes = [],
  hoveredOption,
  setHoveredOption,
  closeMegaMenu,
  handleStartEngagement,
  handleShapeClick,
  handleStyleClick,
  handleItemClick,
  handleDiamondClick,
  navigate,
  slugify,
}) => {
  return (
    <div
      className="jwl-mega-menu-inner"
      onMouseLeave={() => setHoveredOption(null)}
    >
      {/* Engagement */}
      <div className="engagement-megamenu-container">

        <div className="engagement-megamenu-text-section">
          <div>
            <h6 className="jwl-menu-title">ENGAGEMENT</h6>
            <ul className="jwl-list">
              <li
                onMouseEnter={() => setHoveredOption("setting")}
                className="clickable"
                style={{ fontWeight: hoveredOption === "setting" ? 600 : 400 }}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleStartEngagement("rings");
                  }}
                >
                  Start With A Setting &gt;
                </a>
              </li>
              <li
                onMouseEnter={() => setHoveredOption("diamond")}
                style={{ fontWeight: hoveredOption === "diamond" ? 600 : 400 }}
              >
                <span>Start With A Diamond &gt;</span>
              </li>
              <li
                onMouseEnter={() => setHoveredOption("preset-rings")}
                className="clickable"
                style={{
                  fontWeight:
                    hoveredOption === "preset-engagement-rings" ? 600 : 400,
                }}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleStartEngagement("preset-rings");
                  }}
                >
                  Preset Engagement Rings &gt;
                </a>
              </li>
            </ul>
          </div>

          {(hoveredOption === "setting" || hoveredOption === "preset-rings") && (
            <>
              <div>
                <h6 className="jwl-menu-title">STYLE</h6>
                <ul className="jwl-list">
                  {styles.map((style, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleStyleClick(style);
                          closeMegaMenu();
                        }}
                      >
                        {style.psc_name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h6 className="jwl-menu-title">SHAPE</h6>
                <ul className="jwl-list">
                  {shapes.map((shape, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleShapeClick(shape);
                          closeMegaMenu();
                        }}
                      >
                        {shape.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {hoveredOption === "diamond" && (
            <div>
              <ul className="jwl-list">
                {[
                  { name: "Lab Diamond" },
                  { name: "Natural Diamond" },
                  { name: "Colored Lab Diamond" },
                  { name: "Featured Deals" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDiamondClick(item);
                        closeMegaMenu();
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h6 className="jwl-menu-title">FEATURED</h6>
            <ul className="jwl-list">
              {[
                { label: "Wave" },
                { label: "Signature Jewellery" },
                { label: "Fully Custom" },
                { label: "New Arrivals" },
                { label: "Best Sellers" },
                { label: "Ready To Ship" },
                { label: "Home Preview" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item);
                      closeMegaMenu();
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="engagement-image-section">
          <video
            src="https://cdn.shopify.com/videos/c/o/v/2e800afe873a48608dec71f9c26b6c98.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="jwl-mega-video"
          ></video>
          <div className="jwl-caption">
            <h6>Discover Our Best Sellers</h6>
            <Link
              to="/engagement-rings"
              onClick={(e) => {
                e.preventDefault();
                closeMegaMenu();
                navigate("/engagement-rings");
              }}
              style={{ color: "blue" }}
            >
              Explore
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementMenu;
