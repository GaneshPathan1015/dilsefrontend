import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function WedingCollection() {
  const navigate = useNavigate();

  const ringTypes = [
    {
      label: "METAL BRANDS",
      link: "/wedding/womens-metal-wedding-rings",
    },
    {
      label: "DIAMOND BRANDS",
      link: "/wedding/womens-diamond-wedding-rings",
    },
    {
      label: "ANNIVERSARY RINGS",
      link: "/wedding/womens-anniversary-rings",
    },
    {
      label: "ETERNITY RINGS",
      link: "/wedding/womens-eternity-rings",
    },
  ];

  const ringContent = {
    "METAL BRANDS": {
      heading: "METAL BRANDS",
      text: "Our women’s metal wedding bands and men’s wedding bands are the perfect choice for their timeless elegance and durability. Their sleek classic and modern designs in both gold and platinum symbolizes your enduring love and makes a lasting statement of your commitment to each other.",
      image: "images/solitaire_540x.webp",
    },
    "DIAMOND BRANDS": {
      heading: "DIAMOND BRANDS",
      text: "Embark on an unforgettable journey of love with our exquisite collection of diamond wedding bands. Fall in love with our stunning women’s diamond wedding rings and sophisticated men’s diamond wedding rings in classic, vintage-inspired and modern styles, in both 14k and 18k gold and platinum. Find the perfect symbol of your one-of-a-kind love story.",
      image: "images/wmb208-yellow-frontview_bda34980-c1dc-4230-88a9-fd0cbcc73aba_800x.webp",
    },
    "ANNIVERSARY RINGS": {
      heading: "ANNIVERSARY RINGS",
      text: "Celebrate your cherished milestones with our collection of women’s anniversary rings, available in a wide range of styles, metals and diamond accents. Each anniversary band for her marks a journey of togetherness and sparkle to commemorate each special moment. Find the perfect symbol of your enduring love and relish in the joy of every anniversary.",
      image: "images/RB1551102-YELLOW-FRONTVIEW_800x.webp",
    },
    "ETERNITY RINGS": {
      heading: "ETERNITY RINGS",
      text: "Indulge in the timeless elegance of our women’s eternity rings, where the continuous circle of dazzling diamonds represents the ultimate symbol everlasting love. With an extensive selection of styles available in gold and platinum, our exquisite eternity bands for women are perfect to wear today and cherish forever. Wear them on their own for a classic statement or stack them together.",
      image: "images/wmbrb1550036lgd-white-frontview_dbf1e416-144b-457b-9fd6-e2d6af97fe29_800x.webp",
    },
  };

  const [activeRing, setActiveRing] = useState("METAL BRANDS");

  const activeData = ringTypes.find(
    (item) => item.label === activeRing
  );

  const { heading, text, image } = ringContent[activeRing];

  return (
    <section className="Ring-collection pb-5">
      <div className="container">
        <div className="row">

          <div className="col-12 mb-4 text-center">
            <h2 className="section-header-sm">
              WEDDING BAND COLLECTIONS
            </h2>
          </div>

          <div className="col-12">

            {/* Tabs */}
            <div className="d-flex justify-content-center flex-wrap mb-4">
              {ringTypes.map((item, index) => (
                <React.Fragment key={item.label}>
                  <button
                    className={`btn border-0 fw-bold text-uppercase bg-transparent ${
                      activeRing === item.label
                        ? "text-dark"
                        : "text-muted"
                    }`}
                    onClick={() => setActiveRing(item.label)}
                  >
                    {item.label}
                  </button>

                  {index < ringTypes.length - 1 && (
                    <span className="text-muted mx-2">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Content */}
            <div className="row align-items-center">
              <div className="col-6">
                <h3 className="section-header-sm mb-4">{heading}</h3>
                <p>{text}</p>

                {/* ONLY SHOP NOW REDIRECT */}
                <button
                  className="btn border border-dark rounded-0 mt-3"
                  onClick={() => navigate(activeData.link)}
                >
                  SHOP NOW
                </button>
              </div>

              <div className="col-6 text-end">
                <img
                  src={image}
                  alt={heading}
                  className="img-fluid hover-zoom"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
