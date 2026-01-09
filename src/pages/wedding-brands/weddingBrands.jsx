import React from "react";
import Customize from "../engagement/customize/customize";
import Education from "../engagement/education/education";
import DesigningProcess from "../engagement/designing-process/designingProcess.";
import Quetions from "../engagement/quetions/quetions";
import WedingCollection from "./collaction/wedingCollection";
import "./index.css";


export default function Weddingbrands() {
  return (
    <>
      <section className="wedding-section">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Desktop Image with overlay text */}
            <div className="col-12 wedding-desktop d-none d-md-block position-relative">
              <img
                src="/images/wedding-bnad.webp"
                alt="Wedding Bands"
                className="img-fluid w-100 wedding-img"
              />
              <div className="wedding-overlay-text text-center text-white">
                <h2 className="wedding-title">Wedding Bands</h2>
                <p className="wedding-desc text-white">
                  Ready to make it official? Explore our collection of women’s
                  and men’s wedding rings, featuring a dazzling array of styles,
                  metals, and diamonds that makes finding the one that embodies
                  your love so easy. Elevate your story with the perfect wedding
                  band.
                </p>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="col-12 wedding-mobile d-block d-md-none text-center">
              <img
                src="/images/wedding-bnad.webp"
                alt="Wedding Bands"
                className="img-fluid w-100"
              />
              <div className="mobile-text p-4">
                <h2 className="wedding-title">Wedding Bands</h2>
                <p className="wedding-desc">
                  Ready to make it official? Explore our collection of women’s
                  and men’s wedding rings, featuring a dazzling array of styles,
                  metals, and diamonds that makes finding the one that embodies
                  your love so easy. Elevate your story with the perfect wedding
                  band.
                </p>
                <button className="btn wedding-btn">SHOP WEDDING BANDS</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WedingCollection />

      <Customize />

      <Education />

      <DesigningProcess />

      <Quetions />
    </>
  );
}
