import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axiosClient from "../../api/axios";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestsellingEngagementRings = () => {
  const [ringData, setRingData] = useState({
    "ENGAGEMENT RINGS": [],
    "SOLITAIRE RINGS": [],
    "HALO RINGS": [],
  });

  const [activeTab, setActiveTab] = useState("ENGAGEMENT RINGS");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        // Map frontend keys to backend categoryType for engagement rings
        const categoryMap = {
          "ENGAGEMENT RINGS": "engagement",
          "SOLITAIRE RINGS": "solitaire", 
          "HALO RINGS": "halo",
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

        const updatedData = { ...ringData };
        results.forEach(({ tabKey, data }) => {
          updatedData[tabKey] = data.map((item) => ({
            image: item.images?.[0]
              ? `${import.meta.env.VITE_BACKEND_URL}${item.images[0]}`
              : `${
                  import.meta.env.VITE_BACKEND_URL
                }/storage/variation_images/No_Image_Available.jpg`,
            title: item.product_name || "Untitled",
            sku: item.sku,
            price: item.price,
            regular_price: item.regular_price,
          }));
        });

        setRingData(updatedData);
      } catch (error) {
        console.error("Error fetching engagement rings:", error);
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
        <h2 className="section-title">Start building your Home Preview.</h2>
        <p>Here are a few of our favorites</p>

        <Slider {...settings} className="ring-slider">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="ring-card">
                <div className="ring-img skeleton-box" />
                <p className="ring-title">Loading...</p>
              </div>
            ))
          ) : ringData[activeTab]?.length > 0 ? (
            ringData[activeTab].map((item, index) => (
              <div key={index} className="ring-card">
                <Link to={`/jewellary-details/${item.sku}`}>
                  <img src={item.image} alt={item.title} className="ring-img" />
                  <p className="ring-title">{item.title}</p>
                </Link>
              </div>
            ))
          ) : (
            <div className="ring-card">
              <p className="ring-title">No products available</p>
            </div>
          )}
        </Slider>
      </div>
    </section>
  );
};

export default BestsellingEngagementRings;