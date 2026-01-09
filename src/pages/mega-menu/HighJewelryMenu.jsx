import React from "react";
import "./highJewelryMenu.css";

const HighJewelryMenu = ({ navigate, closeMegaMenu }) => {
  const collections = [
    {
      name: "Luxe",
      image: "/images/luxeGroup.webp", // replace with actual image URL
      route: "/page",
      slug: "luxe-collection-engagement-rings-and-wedding-bands",
    },
    {
      name: "The Reserve",
      image: "/images/Reserve_dropdown.webp", // replace with actual image URL
      route: "/page",
      slug: "the-reserve-collection",
    },
  ];

  return (
    <div className="jwl-mega-menu-inner">
      <div className="collection-grid">
        {collections.map((col, i) => (
          <div
            key={i}
            className="collection-card"
            onClick={() => {
              navigate(`${col.route}/${col.slug}`);
              closeMegaMenu()
            }}
          >
            <img
              src={col.image}
              alt={col.name}
              className="collection-image-high-jewelry"
            />
            <p className="collection-label">{col.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighJewelryMenu;
