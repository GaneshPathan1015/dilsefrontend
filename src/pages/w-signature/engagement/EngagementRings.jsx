import React, { useState } from "react";
import "./EngagementRings.css";

const slides = [
  {
    images: [
      "https://thecaratcasa.com/api/storage/variation_images//variation_1752334426_BPShZh4cHv.webp",
      "https://thecaratcasa.com/api/storage/variation_images//variation_1752334426_9FYwvMsXzA.webp",
      "https://thecaratcasa.com/api/storage/variation_images//variation_1752334426_BPShZh4cHv.webp",
    ],
    title: "The W Classic",
    description:
      "A timeless expression of love, The W Classic draws the eye to a luminous center stone—elegant, enduring, and effortlessly captivating.",
  },
  {
    images: [
      "https://thecaratcasa.com/api/storage/variation_images//variation_1752334426_BPShZh4cHv.webp",
      "https://thecaratcasa.com/api/storage/variation_images//variation_1752334426_9FYwvMsXzA.webp",
      "https://thecaratcasa.com/api/storage/variation_images//variation_1752334426_BPShZh4cHv.webp",
    ],
    title: "The W Pavé",
    description:
      "A dazzling reinterpretation, The W Pavé features a brilliant band of diamonds and a luminous center stone that commands attention.",
  },
  {
    images: [
      "https://thecaratcasa.com/api/storage/variation_images//variation_1752334426_BPShZh4cHv.webp",
      "https://thecaratcasa.com/api/storage/variation_images//variation_1752334426_9FYwvMsXzA.webp",
      "https://thecaratcasa.com/api/storage/variation_images//variation_1752334426_BPShZh4cHv.webp",
    ],
    title: "The W Halo",
    description:
      "A luxurious design that surrounds the center stone in a ring of light, The W Halo symbolizes eternal brilliance and radiance.",
  },
];

const EngagementRings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Engagement Rings</h2>

      <div className="carousel-container">
        <button className="arrow left arrowSignature" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="slide">
          {slides[currentIndex].images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Ring ${i + 1}`}
              className="ring-image"
            />
          ))}
        </div>

        <button className="arrow right arrowSignature" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="text-content">
        <h3 className="text-content_h">{slides[currentIndex].title}</h3>
        <p className="text-content_p">{slides[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default EngagementRings;
