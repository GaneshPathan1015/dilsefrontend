import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./collectionMenu.css";

const staticCollectionRoutes = {
  "Signature Jewellery": "/page",
};

// ⭐ Art Deco ke liye special custom URL
const specialCollectionRoutes = {
  "Art Deco": "/jewelry-list?menucollection=art-deco-74",
};

// Map each label to its preview image
const previewImages = {
  "Art Deco": "/images/artDeco-nav-img.webp",
  Cassatt: "/images/collectionmenu/casata.webp",
  "Signature Jewellery": "/images/collectionmenu/wsignature-nav-img.webp",
  Fulton: "/images/collectionmenu/Fulton-nav-img.webp",
  Seraphine: "/images/collectionmenu/The_Seraphine.webp",
  Windsor: "/images/collectionmenu/windsor.webp",
  "The Bond": "/images/collectionmenu/bond-nav-img.webp",
  Bouquet: "/images/collectionmenu/bouquet-nav-img.webp",
  Vine: "/images/collectionmenu/vine-nav-img.webp",
};

const CollectionMenu = ({ closeMegaMenu, navigate }) => {
  const featuredItems = [
    { label: "Art Deco", slug: "art-deco" },
    { label: "Cassatt", slug: "cassatt" },
    { label: "Signature Jewellery", slug: "the-w-signature-solitaire-engagement-rings" },
    { label: "Fulton", slug: "the-fulton-collection" },
    { label: "Seraphine", slug: "the-seraphine-collection" },
    { label: "Windsor", slug: "the-windsor-collection" },
    { label: "The Bond", slug: "the-bond-collection" },
    { label: "Bouquet", slug: "bouquet" },
    { label: "Vine", slug: "vine-collection" },
  ];

  // Save last hovered item
  const [hoveredItem, setHoveredItem] = useState(() => {
    return localStorage.getItem("lastHovered") || featuredItems[0].label;
  });

  const handleMouseEnter = (label) => {
    setHoveredItem(label);
    localStorage.setItem("lastHovered", label);
  };

  // Get slug from hovered label
  const getSlugByLabel = (label) => {
    const item = featuredItems.find((i) => i.label === label);
    return item ? item.slug : "";
  };

  return (
    <div className="jwl-mega-menu-inner">
      <div className="collection-container">

        {/* Left Menu */}
        <div className="menu-left">
          <ul>
            {featuredItems.map((item) => {
              // ⭐ Special route check
              const specialRoute = specialCollectionRoutes[item.label];

              // Default Route Logic
              const defaultRoute = staticCollectionRoutes[item.label.toLowerCase()]
                ? `${staticCollectionRoutes[item.label.toLowerCase()]}/${item.slug}`
                : `/collections/${item.slug}`;

              const finalRoute = specialRoute || defaultRoute;

              return (
                <li key={item.label}>
                  <Link
                    to={finalRoute}
                    onClick={() => closeMegaMenu()}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Preview */}
        <div className="menu-right">
          <img
            src={previewImages[hoveredItem]}
            alt={hoveredItem}
            className="preview-image"
          />

          <div className="caption">
            <h3 className="collection-caption">{hoveredItem}</h3>

            {/* ⭐ EXPLORE BUTTON SPECIAL ROUTE APPLY */}
            <Link
              to={
                specialCollectionRoutes[hoveredItem]
                  ? specialCollectionRoutes[hoveredItem]
                  : `/collections/${getSlugByLabel(hoveredItem)}`
              }
              className="explore-link"
              onClick={() => closeMegaMenu()}
            >
              Explore
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CollectionMenu;
