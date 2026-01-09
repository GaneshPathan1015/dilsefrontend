import React from "react";
import { Link } from "react-router-dom";

const JewelryMenu = ({
  mainCategories = [],
  categoryMap = {},
  collections = [],
  loadingJewelry = false,
  handleClick,
  handleCollectionClick,
  closeMegaMenu,
  navigate,
}) => {
  return (
    <div className="jwl-mega-menu-inner">
      <div className="jwl-container">
        <div className="jwl-text-section">
          {loadingJewelry
            ? [...Array(4)].map((_, i) => (
                <div className=" placeholder-glow" key={i}>
                  <h6
                    className="placeholder"
                    style={{ width: "100px", height: "16px" }}
                  ></h6>
                  <ul className="jwl-list">
                    {[...Array(5)].map((_, j) => (
                      <li key={j}>
                        <div
                          className="placeholder"
                          style={{ width: "80%", height: "14px" }}
                        ></div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : mainCategories.map((main) => (
                <div  key={main.id}>
                  <h6 className="jwl-menu-title">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(main);
                      }}
                    >
                      {main.name}
                    </a>
                  </h6>
                  <ul className="jwl-list">
                    {(categoryMap[main.name] || []).map((sub) => (
                      <li key={sub.id}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleClick(main, sub);
                          }}
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                    <li className="jwl-shop-all">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(main);
                        }}
                      >
                        SHOP ALL
                      </a>
                    </li>
                  </ul>
                </div>
              ))}

          {/* Collections */}
          <div className="">
            <h6 className="jwl-menu-title">COLLECTIONS</h6>
            <ul className="jwl-list">
              {Array.isArray(collections) &&
                collections.map((item) => (
                  <li key={item.id}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCollectionClick(item);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="jwl-image-col ">
          <img src="/images/jewelry_dropdown.jpg" alt="Stackable Earrings" />
          <div className="jwl-caption">
            <h6>Stackable Earrings</h6>
            <Link
              to="/jewelry-list?category=earrings-1&subcategory=stackable-7"
              onClick={(e) => {
                e.preventDefault();
                closeMegaMenu();
                navigate("/jewelry-list?category=earrings-1&subcategory=stackable-7");
              }}
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryMenu;
