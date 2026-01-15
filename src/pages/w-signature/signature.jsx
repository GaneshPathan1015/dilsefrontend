import React, { useState } from 'react';
import './signature.css';
import EngagementRings from './engagement/EngagementRings';
import Logosec from './logosec';








const Signature = () => {



  const details = [
    {
      title: "The Signature Jewellery Jewellery—Where Form Meets Feeling",
      description:
        "Inspired by our name The CarateCasa, each ring features a distinctive “W”-shaped basket—an elegant, architectural design that cradles the center stone in light. More than a signature detail, it’s a symbol of brilliance, engineered to maximize sparkle from every angle. Finished with knife-edged prongs, each ring balances innovation with timeless design.",
      image: "https://www.dilsejewels.com/cdn/shop/files/w_r_1_480x.jpg?v=1746013571",
    },
    {
      title: "Our Signature Icon, Hidden Just for You",
      description:
        "Timeless in design and rich with meaning, each ring features our exclusive diamond-shaped cutout—hidden beneath the center stone and visible only to those you choose to share it with. This subtle detail, inspired by our logo icon, offers a unique glimpse into the heart of your diamond.",
      image: "https://www.dilsejewels.com/cdn/shop/files/w_r2_480x.jpg?v=1746013584",
    },
    {
      title: "Stamped in Legacy",
      description:
        "Meticulously inscribed within each Signature Jewellery ring, a unique serial number—maintained only at our headquarters—ensures authenticity, traceability, and a lasting connection to your one-of-a-kind design. Enjoy the added benefits of complimentary resizing for two years, a detailed appraisal, and instant Platinum status in our Radiance Rewards program.",
      image: "https://www.dilsejewels.com/cdn/shop/files/w_r3_480x.jpg?v=1746013690",
    },
  ];







  return (
    <>
      {/* Hero Section */}
      <section className="hero_section_wrapper">
        <div className="container-fluid p-0 position-relative">
          <video width="100%" height="100%" autoPlay muted loop>
            <source src="https://cdn.shopify.com/videos/c/o/v/7016be705fe24c0387a61899487b6000.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="w-signature-description py-5">

        <p className="description-text container">
          <strong>The Signature Jewellary</strong> showcases a distinctive W-shaped basket, inspired by the The Dilse Jewels brand name. Designed to celebrate the brilliance <br /> of the center stone, The Signature Jewellary embodies timeless artistry, creating an iconic silhouette that remains classic for generations to come.
        </p>

      </section>

      <section className="love-details">
        <h2 className="section-title">Love is in the Details</h2>
        <div className="details-grid">
          {details.map((item, index) => (
            <div className="detail-item" key={index}>
              <img src={item.image} alt={item.title} className="detail-img" />
              <h3 className="detail-title">{item.title}</h3>
              <p className="detail-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Engagement */}

      <EngagementRings />


      <Logosec />
    </>
  );
};

export default Signature;
