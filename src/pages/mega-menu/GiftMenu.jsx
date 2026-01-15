import React from "react";
import "./giftMenu.css";
import { Link } from 'react-router-dom';


const GiftMenu = ({ handleStartGift }) => {
  // Menu data definition
  const menuData = [
    {
      title: "CATEGORY",
      items: [
        { label: "Rings", slug: "diamond-ring-gifts" },
        { label: "Necklaces", slug: "necklace-gifts" },
        { label: "Earrings", slug: "earring-gifts" },
        { label: "Bracelets", slug: "bracelet-gifts" },
        { label: "SHOP ALL", slug: "jewelry-gifts", className: "fw-bold mt-2" },
      ],
    },
    {
      title: "PRICE",
      items: [
        { label: "Under ₹500", slug: "gifts-under-500" },
        { label: "Under $1000", slug: "gifts-under-1000" },
        { label: "Under ₹1500", slug: "gifts-under-1500" },
      ],
    },
    {
      title: "COLLECTIONS",
      items: [
        { label: "Bouquet", slug: "bouquet" },
        { label: "Toi et Moi", slug: "toi-et-moi-collection" },
        { label: "Vine", slug: "vine-collection" },
      ],
    },
    {
      title: "DISCOVER MORE",
      items: [
        { label: "Most Loved", slug: "incredible-value" },
        { label: "Gift Sets", slug: "jewelry-gift-sets" },
        { label: "Ready to Ship", slug: "ready-to-ship-diamond-jewelry-gifts" },
        { label: "For Him", slug: "jewelry-gifts-for-him" },
        { label: "Gift Cards", slug: "jewelry-gift-sets" },
      ],
    },
  ];

  return (
    <section className="jwl-mega-menu-inner">
      <div className="gift-container">
        {/* Left Section (Text) - 6 cols */}
        <div className=" gift-left-section">

          {menuData.map((menu, i) => (
            <div key={i} className="">
              <h6 className="menu-title">{menu.title}</h6>
              <ul className="menu-list">
                {menu.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={item.className || ""}
                    onClick={() => handleStartGift(item.slug)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Right Section (Image + Text) - 3 cols */}
        <div className="gift-image-box">
          <img
            src="/images/best-gifts.webp"
            alt="Best Selling Gifts"
            className="img-fluid mb-3"
          />
          <h5 className="fw-bold">Best-Selling Gifts</h5>
          <Link href="/collections/jewelry-gift-sets" className="shop-now-link">
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};
export default GiftMenu;
