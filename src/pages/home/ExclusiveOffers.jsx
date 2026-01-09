import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExclusiveOffers = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const offers = [
    { img: "images/natural.webp", label: "natural diamonds", link: "/diamond?menudiamond=natural-diamond" },
    { img: "images/BRACELETS.webp", label: "bracelets", link: "/jewelry-list?category=bracelets-13" },
    { img: "images/STUDS.webp", label: "studs earrings", link: "/jewelry-list?category=earrings-1&subcategory=studs-2" },
    { img: "images/ETERNITY.webp", label: "eternity rings", link: "/jewelry-list?category=rings-22&subcategory=eternity-24" },
    { img: "images/annivarsary.webp", label: "anniversary band", link: "/wedding/womens-anniversary-rings" },
    { img: "images/lab.webp", label: "lab diamonds", link: "/diamond?menudiamond=lab-diamond" },
  ];

  return (
    <section className="Exclusive_Offers_wrapper py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <h2
              className="section-header-lg small--text-center mb-4 text-dark"
              style={{ color: "#000" }}
            >
              Exclusive Offers
            </h2>

            <Slider {...settings} className="Exclusive_Offers">
              {offers.map((item, index) => (
                <div key={index}>
                  <Link to={item.link} className="text-decoration-none">
                    <div className="img-block text-center">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="img-fluid mb-2 rounded"
                      />
                      <p className="offer text-uppercase m-0" style={{ color: "#fff" }}>
                        up to 30% off
                      </p>
                    </div>
                    <p
                      className="text-center text-uppercase mt-2"
                      style={{ color: "#000" }}
                    >
                      {item.label}
                    </p>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffers;
