import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrendingNow.css";

const trendingItems = [
  {
    title: "ELEMENTS",
    image: "/images/elements.webp",
    link: "/jewelry-list?menucollection=elements-54",
  },
  {
    title: "THE BOUQUET",
    image: "/images/THE-BOUQUET.webp",
    link: "/jewelry-list?menucollection=bouquet-52",
  },
  {
    title: "THE CERAMIC SERIES",
    image: "/images/ceremic_series.jpg",
    link: "/jewelry-list?menucollection=the-ceramic-series-53",
  },
  {
    title: "EARRINGS",
    image: "/images/EARRINGS.webp",
    link: "/jewelry-list?menucollection=earrings-59",
  }
];

const TrendingNow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="trending-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Title + Button */}
          <div className="col-12 col-md-3 mb-4 mb-md-0 text-center text-md-start">
            <h2 className="trending-title mb-3" style={{ color: "#000" }}>
              Trending Now
            </h2>
            <Link
              to="/engagement-rings/preset-rings"
              className="btn explore-btn border rounded-0 fw-bold"
              style={{ color: "#000" }}
            >
              EXPLORE NOW
            </Link>
          </div>

          {/* Slider */}
          <div className="col-12 col-md-9">
            <Slider {...settings}>
              {trendingItems.map((item, index) => (
                <div key={index} className="trending-item text-center">
                  <Link to={item.link} className="text-decoration-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid"
                    />
                    <p className="item-label mt-2" style={{ color: "#000" }}>
                      {item.title}
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

export default TrendingNow;
