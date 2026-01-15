import React from "react";
import "../Luxe/Luxe-collections/Luxeollections.css";

const Reserve = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero_section_wrapper">
        <div className="container-fluid p-0 position-relative">
          <img
            src="https://www.dilsejewels.com/cdn/shop/files/Reserve_collection_banners-3000x1860_2x_2d825091-a47c-4684-b581-63ed29a162f7_1512x.jpg?v=1718196964"
            alt="Main Banner"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <div className="wrapper position-absolute text-center w-100 mb-5">
            <h2 className="fs-1 slide-title text-white">THE RESERVE</h2>
            <div className="content">
              <p className="text-white">
                Immerse yourself into our collection of unparalleled diamond
                allure, beginning at seven carats. Experience limited designs
                that encompass the world’s finest diamonds, crafted with the
                highest mastery to captivate and ignite inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="luxe-collections-wrapper">
        {/* Engagement Rings */}
        <h2 className="collection-heading">Engagement Rings</h2>
        <div className="majestic-section">
          <div className="majestic-image">
            <img
              src="https://www.dilsejewels.com/cdn/shop/files/Mask_Group_206_f33ebf28-cbc0-45ae-9917-ddc6e301b6a8_1900x.jpg?v=1711703450"
              alt="Engagement Rings Collection"
              className="collection-image"
            />
          </div>
          <div className="majestic-text-container">
            <h2 className="majestic-title">EXCEPTIONAL PRECISION</h2>
            <p className="majestic-subtitle">
              Indulge in the seamless fusion of balance and alignment through
              every piece.
            </p>
            <a href="#" className="majestic-link">
              EXPLORE ENGAGEMENT RINGS
            </a>
          </div>
        </div>

        {/* Eternity Rings */}
        <div className="collection-block">
          <h2 className="collection-heading">Eternity Rings</h2>
          <div className="collection-image-block">
            <img
              src="https://www.dilsejewels.com/cdn/shop/files/Mask_Group_208_1900x.jpg?v=1711703481"
              alt="Heritage Collection"
              className="collection-image"
            />
            <div className="majestic-text-container">
              <p className="majestic-title">IMPECCABLE CRAFTSMANSHIP</p>
              <p className="majestic-subtitle">
                Masterfully handcrafted with skill and intention, each intricate
                creation withstands the test of time.
              </p>
              <a href="#" className="majestic-link">
                EXPLORE ETERNITY RINGS
              </a>
            </div>
          </div>
        </div>

        {/* Necklaces*/}
        <div className="collection-block">
          <h2 className="collection-heading">Necklaces</h2>
          <div className="collection-image-block">
            <img
              src="https://www.dilsejewels.com/cdn/shop/files/Mask_Group_210_1900x.jpg?v=1711703609"
              alt="Heritage Collection"
              className="collection-image"
            />
            <div className="majestic-text-container">
              <p className="majestic-title"> BRILLIANT PURITY</p>
              <p className="majestic-subtitle">
                Become mesmerized by the wonder of diamonds embraced by flawless
                clarity and unmatched enchantment.
              </p>
              <a href="#" className="majestic-link">
                EXPLORE NECKLACES
              </a>
            </div>
          </div>
        </div>

        {/* Earrings*/}
        <div className="collection-block">
          <h2 className="collection-heading">Earrings</h2>
          <div className="collection-image-block">
            <img
              src="https://www.dilsejewels.com/cdn/shop/files/Mask_Group_212_1900x.jpg?v=1711703641"
              alt="Heritage Collection"
              className="collection-image"
            />
            <div className="majestic-text-container">
              <p className="majestic-title"> ARTFUL DESIGN</p>
              <p className="majestic-subtitle">
                Traditional jewelry design with the embodiment of innovation and
                distinctive style.
              </p>
              <a href="#" className="majestic-link">
                EXPLORE EARRINGS
              </a>
            </div>
          </div>
        </div>

        {/* Bracelets */}
        <div className="collection-block">
          <h2 className="collection-heading">Bracelets</h2>
          <div className="collection-image-block">
            <img
              src="https://www.dilsejewels.com/cdn/shop/files/reserve-collection-bracelets-1178x732_2x_0ae4599b-4a41-489c-8be6-6fc01c774eda_1900x.jpg?v=1718280721"
              alt="Heritage Collection"
              className="collection-image"
            />
            <div className="majestic-text-container">
              <p className="majestic-title">VERSATILE DIMENSION</p>
              <p className="majestic-subtitle">
                The contemporary blend of geometric shapes seamlessly transforms
                through each movement.
              </p>
              <a href="#" className="majestic-link">
                EXPLORE BRACELETS
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserve;
