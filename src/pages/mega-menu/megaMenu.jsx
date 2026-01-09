import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMegaMenu } from "../../context/MegaMenuContext";
import JewelryMenu from "./JewelryMenu";
import EngagementMenu from "./EngagementMenu";
import CollectionMenu from "./CollectionMenu";
import HighJewelryMenu from "./HighJewelryMenu";
import DiamondMenu from "./DiamondMenu";
import Wedding from "./Wedding";
import GiftMenu from "./GiftMenu";
import "./megaMenu.css";

const slugify = (text = "") =>
  text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");

const MegaMenu = ({ type = "engagement", closeMegaMenu = () => {} }) => {
  const {
    categoryMap = {},
    mainCategories = [],
    loadingJewelry = false,
    collections = [],
    styles = [],
    shapes = [],
    loadingEngagement = false,
  } = useMegaMenu() || {};

  const navigate = useNavigate();
  const [hoveredOption, setHoveredOption] = useState("diamond"); // in Engagement mega menu

  const handleClick = (main, sub = null) => {
    const mainParam = `${slugify(main.name)}-${main.id}`;
    const subParam = sub ? `${slugify(sub.name)}-${sub.id}` : null;

    const params = new URLSearchParams();
    params.set("category", mainParam);
    if (subParam) params.set("subcategory", subParam);

    closeMegaMenu();
    navigate(`/jewelry-list?${params.toString()}`);
  };

  const handleCollectionClick = (collection) => {
    const rawName = collection.name || "";
    const normalizedName = rawName.trim().toLowerCase();

    // Match DB name → slug
    const collectionSlugMap = {
      luxe: "luxe-collection-engagement-rings-and-wedding-bands",
      "the reserve": "the-reserve-collection",
      "w signature": "the-w-signature-solitaire-engagement-rings",
    };

    if (collectionSlugMap[normalizedName]) {
      closeMegaMenu();
      navigate(`/page/${collectionSlugMap[normalizedName]}`);
      return;
    }

    // Default fallback for other collections
    const slug = `${slugify(rawName)}-${collection.id}`;
    const params = new URLSearchParams();
    params.set("menucollection", slug);

    closeMegaMenu();
    navigate(`/jewelry-list?${params.toString()}`);
  };

  // const handleCollectionClick = (collection) => {
  //   const rawName = collection.name || "";
  //   const normalizedName = rawName.trim().toLowerCase();

  //   // Define exact static collection routes
  //   const staticCollectionRoutes = {
  //     /*  luxe: "/luxe",
  //     "the reserve": "/reserve",
  //     "w signature": "/signature", */
  //     luxe: "luxe-collection-engagement-rings-and-wedding-bands",
  //     "the reserve": "the-reserve-collection",
  //     "w signature": "the-w-signature-solitaire-engagement-rings",
  //   };

  //   // Check for static route
  //   if (staticCollectionRoutes[normalizedName]) {
  //     closeMegaMenu();
  //     // navigate(staticCollectionRoutes[normalizedName]);
  //     navigate(`/page/${collectionSlugMap[normalizedName]}`);
  //     return;
  //   } else {
  //     // Fallback: dynamic logic
  //     const slug = `${slugify(rawName)}-${collection.id}`;
  //     const params = new URLSearchParams();
  //     params.set("menucollection", slug);

  //     closeMegaMenu();
  //     navigate(`/jewelry-list?${params.toString()}`);
  //   }
  // };

  const handleStartEngagement = (startType) => {
    closeMegaMenu();
    navigate(`/engagement-rings/${startType}`);
  };

  const handleStartWedding = (startType) => {
    closeMegaMenu();
    navigate(`/wedding/${startType}`);
  };

  const handleStartGift = (startType) => {
    closeMegaMenu();
    navigate(`/collections/${startType}`);
  };

  const handleShapeClick = (shape) => {
    const slug = "shapes";
    const shapeSlug = shape.name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("menushape", shapeSlug);

    navigate({
      pathname: `/engagement-rings/${slug}`,
      search: params.toString(),
    });
  };

  const handleStyleClick = (style) => {
    const slug = "style";
    const styleSlug = style.psc_name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("menustyle", styleSlug);
    navigate({
      pathname: `/engagement-rings/${slug}`,
      search: params.toString(),
    });
  };

  const handleItemClick = (item) => {
    const slug = "";
    const itemSlug = item.label.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    // params.set("status", itemSlug);
    if (item.label.toLowerCase() === "ready to ship") {
      params.set("ready_to_ship", "true");
    }
    navigate({
      pathname: slug ? `/engagement-rings/${slug}` : `/engagement-rings`,
      search: params.toString(),
    });
  };

  const handleDiamondClick = (item) => {
    const itemSlug = item.name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("menudiamond", itemSlug);
    navigate({
      pathname: `/diamond`,
      search: params.toString(),
    });
  };

  const handlePriceFilter = (min, max) => {
    navigate(`/diamond?price_min=${min}&price_max=${max}`);
    closeMegaMenu();
  };

  const handleCaratFilter = (min, max) => {
    navigate(`/diamond?carat_min=${min}&carat_max=${max}`);
    closeMegaMenu();
  };

  return (
    <div className="jwl-mega-menu-dropdown">
      {type === "engagement" && (
        <EngagementMenu
          styles={styles}
          shapes={shapes}
          loadingEngagement={loadingEngagement}
          hoveredOption={hoveredOption}
          setHoveredOption={setHoveredOption}
          closeMegaMenu={closeMegaMenu}
          handleStartEngagement={handleStartEngagement}
          handleShapeClick={handleShapeClick}
          handleStyleClick={handleStyleClick}
          handleItemClick={handleItemClick}
          handleDiamondClick={handleDiamondClick}
          navigate={navigate}
          slugify={slugify}
        />
      )}

      {type === "wedding" && (
        <Wedding
          closeMegaMenu={closeMegaMenu}
          navigate={navigate}
          handleStartWedding={handleStartWedding}
        />
      )}

      {type === "diamond" && (
        <DiamondMenu
          handleDiamondClick={handleDiamondClick}
          handlePriceFilter={handlePriceFilter}
          handleCaratFilter={handleCaratFilter}
          closeMegaMenu={closeMegaMenu}
          navigate={navigate}
        />
      )}

      {type === "highJewelry" && (
        <HighJewelryMenu
          closeMegaMenu={closeMegaMenu}
          navigate={navigate}
          slugify={slugify}
        />
      )}

      {type === "jewelry" && (
        <JewelryMenu
          mainCategories={mainCategories}
          categoryMap={categoryMap}
          collections={collections}
          loadingJewelry={loadingJewelry}
          handleClick={handleClick}
          handleCollectionClick={handleCollectionClick}
          closeMegaMenu={closeMegaMenu}
          navigate={navigate}
        />
      )}

      {type === "collection" && (
        <CollectionMenu
          closeMegaMenu={closeMegaMenu}
          navigate={navigate}
          slugify={slugify}
        />
      )}

      {type === "gift" && (
        <GiftMenu
          handleStartGift={handleStartGift}
          closeMegaMenu={closeMegaMenu}
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default MegaMenu;
