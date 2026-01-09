import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axiosClient from "../../api/axios";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestsellingRings.css";

const BestsellingRings = () => {
  const [ringData, setRingData] = useState({
    "ANNIVERSARY RINGS": [],
    "ETERNITY RINGS": [],
    "STACKABLE RINGS": [],
  });

  const makeSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const [activeTab, setActiveTab] = useState("ANNIVERSARY RINGS");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const categoryMap = {
          "ANNIVERSARY RINGS": "anniversary",
          "ETERNITY RINGS": "eternity",
          "STACKABLE RINGS": "stackable",
        };

        const requests = Object.entries(categoryMap).map(
          async ([tabKey, apiCategory]) => {
            const response = await axiosClient.get(
              `/api/best-selling-rings/${apiCategory}`
            );

            return { tabKey, data: response.data.data || [] };
          }
        );

        const results = await Promise.all(requests);
        const updatedData = {};

        results.forEach(({ tabKey, data }) => {
          updatedData[tabKey] = data.map((item) => ({
            productSlug: makeSlug(item.product_name),
            product_id: item.product_id, // NEED THIS FOR URL
            image: item.images?.[0]
              ? `${import.meta.env.VITE_BACKEND_URL}${item.images[0]}`
              : `${import.meta.env.VITE_BACKEND_URL}/storage/variation_images/No_Image_Available.jpg`,

            title: item.product_name || "Untitled",
            sku: item.sku,
            price: item.price,
            regular_price: item.regular_price,
          }));
        });

        setRingData(updatedData);
      } catch (error) {
        console.error("Error fetching rings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRings();
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="exclusive-wrapper">
      <div className="container">
        <h2 className="bestseling-section-title" style={{ color: "#000" }}>
          Explore Our Bestselling Rings
        </h2>

        <div className="tab-buttons">
          {Object.keys(ringData).map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${tab === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              style={{ color: "#000" }}
            >
              {tab}
            </button>
          ))}
        </div>

        <Slider {...settings} className="ring-slider">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="ring-card">
                <div className="ring-img skeleton-box" />
                <p className="ring-title" style={{ color: "#000" }}>
                  Loading...
                </p>
              </div>
            ))
          ) : ringData[activeTab]?.length > 0 ? (
            ringData[activeTab].map((item, index) => {
              // console.log("PRODUCT ITEM =>", item); // 👈 LOG HERE

              return (
                <div key={index} className="ring-card">
                  <Link
                    to={`/products/${item.productSlug}?product=${item.product_id}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="ring-img"
                    />
                    <p className="ring-title" style={{ color: "#000" }}>
                      {item.title}
                    </p>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="ring-card">
              <p className="ring-title" style={{ color: "#000" }}>
                No products available
              </p>
            </div>
          )}
        </Slider>
      </div>
    </section>
  );
};

export default BestsellingRings;
