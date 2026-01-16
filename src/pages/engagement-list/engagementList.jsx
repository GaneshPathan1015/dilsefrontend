import React, { useEffect, useRef, useState } from "react";
import axiosClient from "../../api/axios";
import debounce from "lodash/debounce";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Loader from "../diamond/loader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./engagementList.css";
import EngagementTabs from "../engagement-details/ring-product/EngagementTabs";

const priceSlugMap = {
  "0-500": "$0 - ₹500",
  "500-1000": "₹500 - ₹1,000",
  "1000-2000": "₹1,000 - ₹2,000",
  "2000-3000": "₹2,000 - ₹3,000",
  "3000-100000": "₹3,000 - ₹100,000",
};

const priceSlugReverseMap = Object.entries(priceSlugMap).reduce(
  (acc, [slug, label]) => {
    acc[label] = slug;
    return acc;
  }
);

const priceRanges = Object.values(priceSlugMap);

const EngagementList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 20;
  const [appliedFilters, setAppliedFilters] = useState({});
  const [filtersInitialized, setFiltersInitialized] = useState(false);
  const [activeMetal, setActiveMetal] = useState({});
  const [selectedVariations, setSelectedVariations] = useState({});
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerVideo, setBannerVideo] = useState(null);
  const [styleData, setStyleData] = useState([]);
  const [styleNameToIdMap, setStyleNameToIdMap] = useState({});
  const [shapeData, setShapeData] = useState([]);
  const [shapeNameToIdMap, setShapeNameToIdMap] = useState({});
  const [shapeMapReady, setShapeMapReady] = useState(false);
  const [metalTypes, setMetalTypes] = useState([]);
  const [activeFilterSection, setActiveFilterSection] = useState("style");
  const [readyToShip, setReadyToShip] = useState(false);
  const [metalNameToId, setMetalNameToId] = useState({});
  const [metalIdToName, setMetalIdToName] = useState({});

  const loaderRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const diamond = location.state?.diamond;

  const toggleFilterSection = (section) => {
    setActiveFilterSection((prev) => (prev === section ? "" : section));
  };

  const updateURLFromFilters = (filters) => {
    const params = new URLSearchParams();
    if (filters.price && priceSlugReverseMap[filters.price]) {
      params.set("price", priceSlugReverseMap[filters.price]);
    }
    if (filters.shape) {
      params.set("shape", `shape-${filters.shape}`);
    }
    if (filters.style) params.set("style", `style-${filters.style}`);
    if (filters.ready_to_ship) {
      params.set("ready_to_ship", "true"); // keep it "true"
    }
    if (filters.metal) {
      params.set("metal", encodeURIComponent(filters.metal));
    }
    if (filters.sort) {
      params.set("sort", filters.sort);
    }
    navigate({ search: params.toString() });
  };

  const addFilter = (value) => {
    const updatedFilters = { ...appliedFilters };

    const isPriceValue = priceRanges.includes(value);

    if (isPriceValue) {
      if (updatedFilters.price === value) {
        delete updatedFilters.price; // Deselect price if clicked again
      } else {
        updatedFilters.price = value; // Select new price
      }
    } else if (styleNameToIdMap[value]) {
      if (updatedFilters.style === value) {
        delete updatedFilters.style; // Deselect style if clicked again
      } else {
        updatedFilters.style = value;
      }
    } else if (shapeNameToIdMap[value]) {
      if (updatedFilters.shape === value) {
        delete updatedFilters.shape; // Deselect shape if clicked again
      } else {
        updatedFilters.shape = value;
      }
    } else {
      updatedFilters[value] = true;
    }

    setAppliedFilters(updatedFilters);
    updateURLFromFilters(updatedFilters);
  };

  const handleMetalClick = (metalId) => {
    const metalName = metalIdToName[metalId];
    const updatedFilters = { ...appliedFilters };

    if (updatedFilters.metal === metalName) {
      delete updatedFilters.metal;
    } else {
      updatedFilters.metal = metalName;
    }

    setAppliedFilters(updatedFilters);
    updateURLFromFilters(updatedFilters);
  };

  const handleReadyToShipToggle = () => {
    const newState = !readyToShip;
    setReadyToShip(newState);

    const updated = { ...appliedFilters };
    if (newState) {
      updated.ready_to_ship = true;
    } else {
      delete updated.ready_to_ship;
    }

    setAppliedFilters(updated);
    updateURLFromFilters(updated);
  };

  const handleSortChange = (sortValue) => {
    const updatedFilters = { ...appliedFilters };

    if (sortValue) {
      updatedFilters.sort = sortValue;
    } else {
      delete updatedFilters.sort;
    }

    setAppliedFilters(updatedFilters);
    updateURLFromFilters(updatedFilters);
  };

  const clearAllFilters = () => {
    setAppliedFilters({});
    setReadyToShip(false);
    navigate({
      pathname: `/engagement-rings/${slug || ""}`, // keeps slug if exists
      search: "", // removes filters
    });
  };

  const removeFilterByKey = (key) => {
    const updated = { ...appliedFilters };
    delete updated[key];

    if (key === "ready_to_ship") {
      setReadyToShip(false);
    }
    setAppliedFilters(updated);
    updateURLFromFilters(updated);
  };

  const fetchProducts = async ({ page, filters = {} }) => {
    const isInitialLoad = page === 1;
    if (isInitialLoad) setLoading(true);

    const apiFilters = { ...filters };

    // Convert style name to ID
    if (filters.style && styleNameToIdMap[filters.style]) {
      apiFilters.style = styleNameToIdMap[filters.style];
    }

    if (filters.shape && shapeNameToIdMap[filters.shape]) {
      apiFilters.shape = shapeNameToIdMap[filters.shape];
    }

    // Convert price label to slug
    if (filters.price && priceSlugReverseMap[filters.price]) {
      apiFilters.price = priceSlugReverseMap[filters.price];
    }

    if (filters.metal && metalNameToId[filters.metal]) {
      apiFilters.metal_color_id = metalNameToId[filters.metal];
    }

    try {
      const response = await axiosClient.get(
        `/api/get-all-engagementData/${slug || ""}`,
        {
          params: { page, perPage, ...apiFilters },
        }
      );

      const fetchedProducts = response.data.data || [];
      const totalProducts = parseInt(response.data.totalProducts) || 0;
      const pages = Math.ceil(totalProducts / perPage);

      setBannerImage(response.data.banner_image || null);
      setBannerVideo(response.data.banner_video || null);
      setMetalTypes(response.data.metal_types || []);

      const nameToId = {};
      const idToName = {};
      (response.data.metal_types || []).forEach((metal) => {
        nameToId[metal.dmt_name] = metal.dmt_id;
        idToName[metal.dmt_id] = metal.dmt_name;
      });
      setMetalNameToId(nameToId);
      setMetalIdToName(idToName);

      const newSelections = { ...(isInitialLoad ? {} : selectedVariations) };
      const newActiveMetals = { ...(isInitialLoad ? {} : activeMetal) };

      fetchedProducts.forEach((group) => {
        const variationsByMetal = group.metal_variations || {};
        const metalKeys = Object.keys(variationsByMetal);

        if (metalKeys.length === 0) return;

        let selectedMetalId = metalKeys[0];
        let selectedVariationIndex = 0;

        if (filters.sort === "price_asc" || filters.sort === "price_desc") {
          let bestPrice = filters.sort === "price_asc" ? Infinity : -Infinity;

          metalKeys.forEach((metalId) => {
            const variations = variationsByMetal[metalId];

            variations.forEach((variation, index) => {
              if (variation.price != null) {
                const price = parseFloat(variation.price);
                const better =
                  (filters.sort === "price_asc" && price < bestPrice) ||
                  (filters.sort === "price_desc" && price > bestPrice);

                if (better) {
                  bestPrice = price;
                  selectedMetalId = metalId;
                  selectedVariationIndex = index;
                }
              }
            });
          });
        }

        newActiveMetals[group.id] = parseInt(selectedMetalId);
        newSelections[group.id] = selectedVariationIndex;
      });

      // Set state
      setSelectedVariations(newSelections);
      setActiveMetal(newActiveMetals);

      if (isInitialLoad) {
        setProducts(fetchedProducts);
      } else {
        setProducts((prev) => [...prev, ...fetchedProducts]);
      }

      setTotalPages(pages);
      setTotal(totalProducts);
    } catch (error) {
      console.error("Product fetch failed", error);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  //  Read filters from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const styleParam = params.get("style");
    const shapeParam = params.get("shape");
    const menuShapeParam = params.get("menushape");
    const selectRingParam = params.get("selectring");
    const menuStyleParam = params.get("menustyle");
    const priceParam = params.get("price");
    const sortParam = params.get("sort");
    const metalParam = params.get("metal");

    const filters = {};

    if (priceParam && priceSlugMap[priceParam]) {
      filters.price = priceSlugMap[priceParam]; // Reverse lookup: "0-500" → "$0 - ₹500"
    }

    if (menuStyleParam) {
      const formattedStyle = menuStyleParam
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      filters.style = formattedStyle;
    }

    if (styleParam) {
      const styleName = styleParam.split("-").slice(1).join("-");
      filters.style = styleName;
    }

    if (menuShapeParam) {
      const formattedShape = menuShapeParam
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      filters.shape = formattedShape;
    }

    if (selectRingParam) {
      const formattedShapeRing = selectRingParam
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      filters.shape = formattedShapeRing;
    }

    if (shapeParam) {
      const shapeName = shapeParam.split("-").slice(1).join("-");
      filters.shape = shapeName;
    }

    if (params.get("ready_to_ship") === "true") {
      filters.ready_to_ship = true;
      setReadyToShip(true);
    }

    if (metalParam) {
      filters.metal = decodeURIComponent(metalParam);
    }
    if (sortParam) filters.sort = sortParam;

    setAppliedFilters(filters);
    setFiltersInitialized(true); //  Mark filters ready
  }, [location.search]);

  useEffect(() => {
    const fetchStyleShapeMap = async () => {
      try {
        const res = await axiosClient.get("/api/get-all-styleShapeData");
        setShapeData(res.data.shapes || []);
        setStyleData(res.data.styles || []);

        const styleMap = {};
        res.data.styles?.forEach((style) => {
          styleMap[style.psc_name] = style.psc_id;
        });
        setStyleNameToIdMap(styleMap);

        const shapeMap = {};
        res.data.shapes?.forEach((shape) => {
          shapeMap[shape.name] = shape.id;
        });
        setShapeNameToIdMap(shapeMap);
        setShapeMapReady(true);
      } catch (err) {
        console.error("Shape fetch failed", err);
      }
    };

    fetchStyleShapeMap();
  }, []);

  useEffect(() => {
    setReadyToShip(!!appliedFilters.ready_to_ship);
  }, [appliedFilters.ready_to_ship]);

  //  Fetch products when filters are ready
  useEffect(() => {
    if (!filtersInitialized || !shapeMapReady) return;
    setPage(1);
    fetchProducts({ page: 1, filters: appliedFilters });
  }, [appliedFilters, filtersInitialized, shapeMapReady]);

  //  Infinite scroll fetch
  useEffect(() => {
    if (page > 1) fetchProducts({ page, filters: appliedFilters });
  }, [page]);

  useEffect(() => {
    const handleIntersection = debounce(() => {
      setIsFetchingMore(true);
      setPage((prev) => prev + 1);
    }, 300);

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (
          first.isIntersecting &&
          !isFetchingMore &&
          page < totalPages &&
          !loading
        ) {
          handleIntersection();
        }
      },
      { threshold: 1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);
    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [isFetchingMore, totalPages, page, loading]);

  const visibleFilters = Object.entries(appliedFilters).filter(
    ([key]) =>
      key !==
      "category" /* && key !== "subcategory" && key !== "menucollection" */
  );

  return (
    <>
      <section className="hero_section_wrapperengage position-relative">
        {bannerVideo ? (
          <video
            className="hero-media w-100"
            autoPlay
            muted
            loop
            playsInline
            src={`${import.meta.env.VITE_BACKEND_URL}/storage/${bannerVideo}`}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={
              bannerImage
                ? `${import.meta.env.VITE_BACKEND_URL}/storage/${bannerImage}`
                : "https://www.dilsejewels.com/cdn/shop/files/Women_s_Diamond_Gemstone_Jewelry_1366x.jpg?v=1729163233"
            }
            alt="Engagement Banner"
            className="hero-media w-100"
          />
        )}

        {/* Overlay only for md and above */}
        <div className="hero-overlay d-none d-md-flex flex-column justify-content-center align-items-center text-center">
          <h2 className="hero-title mb-3 text-white">
            ENGAGEMENT RING EDUCATION
          </h2>
          <p className="hero-subtitle mb-4 text-white">
            Learn about engagement ring setting styles, metal options, ring
            sizing and more.
          </p>
          <a
            href="#"
            className="btn hero-btn fw-bold px-4 py-2 border border-white text-white"
            title="SHOP ENGAGEMENT RINGS"
          >
            SHOP ENGAGEMENT RINGS
          </a>
        </div>
      </section>
      <div className="container my-4">
        <EngagementTabs diamond={diamond} />
        {/* Filters Top Bar */}
        <div className="d-flex justify-content-between filters-bar">
          <div className="d-flex align-items-center flex-wrap gap-3">
            <strong>FILTERS</strong>
            <span className="filter-divider">|</span>

            {/* Style */}
            <div
              onClick={() => toggleFilterSection("style")}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span>Style</span>
              <span className="material-symbols-outlined">
                {activeFilterSection === "style"
                  ? "expand_less"
                  : "expand_more"}
              </span>
            </div>

            <span className="filter-divider">|</span>

            {/* shape*/}
            <div
              onClick={() => toggleFilterSection("shape")}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span>Shape</span>
              <span className="material-symbols-outlined">
                {activeFilterSection === "shape"
                  ? "expand_less"
                  : "expand_more"}
              </span>
            </div>

            <span className="filter-divider">|</span>

            {/* Metal */}
            <div
              onClick={() => toggleFilterSection("metal")}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span>Metal</span>
              <span className="material-symbols-outlined">
                {activeFilterSection === "metal"
                  ? "expand_less"
                  : "expand_more"}
              </span>
            </div>

            <span className="filter-divider">|</span>

            {/* Price */}
            <div
              onClick={() => toggleFilterSection("price")}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span>Price</span>
              <span className="material-symbols-outlined">
                {activeFilterSection === "price"
                  ? "expand_less"
                  : "expand_more"}
              </span>
            </div>

            <span className="filter-divider">|</span>

            <div
              className="d-flex align-items-center gap-2"
              style={{ cursor: "pointer" }}
              onClick={handleReadyToShipToggle}
            >
              <span
                className={`ready-to-ship-label ${readyToShip ? "active" : ""}`}
              >
                Ready to Ship
              </span>
              <div
                className="ready-checkbox"
                style={{
                  width: "20px",
                  height: "20px",
                  border: "1px solid #999",
                  backgroundColor: readyToShip ? "#000" : "#fff",
                }}
              ></div>
            </div>
          </div>

          <div className="sort-by-wrapper">
            <label htmlFor="sort-select" className="sort-label">
              <strong>SORT BY</strong>
            </label>
            <span className="filter-divider">|</span>
            <select
              id="sort-select"
              className="sort-dropdown"
              value={appliedFilters.sort || ""}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="">Best Selling</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="date_desc">Date: New to Old</option>
              <option value="date_asc">Date: Old to New</option>
            </select>
          </div>
        </div>

        {activeFilterSection === "shape" && shapeData.length > 0 && (
          <div className="style-scroll-wrapper">
            <div className="shape-icon-bar">
              {shapeData.map((shape) => (
                <div
                  key={shape.id}
                  className={`shape-item ${appliedFilters.shape === shape.name ? "active-style" : ""
                    }`}
                  onClick={() => addFilter(shape.name)}
                >
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/storage/shapes/${shape.image
                      }`}
                    alt={shape.name}
                    className="style-img"
                  />
                  <div className="style-name">{shape.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeFilterSection === "style" && styleData.length > 0 && (
          <div className="style-scroll-wrapper">
            <div className="style-icon-bar">
              {styleData.map((style) => (
                <div
                  key={style.psc_id}
                  className={`style-item ${appliedFilters.style === style.psc_name
                    ? "active-style"
                    : ""
                    }`}
                  onClick={() => addFilter(style.psc_name)}
                >
                  <img
                    src={style.image_url}
                    alt={style.psc_name}
                    className="style-img"
                  />
                  <div className="style-name">{style.psc_name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeFilterSection === "metal" && metalTypes.length > 0 && (
          <div className="metal-selector">
            {metalTypes.map((metal) => (
              <div
                key={metal.dmt_id}
                className={`metal-item ${appliedFilters.metal === metal.dmt_name ? "active" : ""
                  }`}
                onClick={() => handleMetalClick(metal.dmt_id)}
              >
                <span
                  className="metal-circle"
                  style={{ background: metal.color_code }}
                ></span>
                <span className="metal-label">
                  {metal.dmt_name.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeFilterSection === "price" && (
          <div className="price-scroll-wrapper mt-3">
            <div className="price-filter-bar d-flex gap-3 flex-wrap">
              {priceRanges.map((price) => (
                <div
                  key={price}
                  className={`price-box d-flex align-items-center gap-2 ${appliedFilters.price === price ? "active" : ""
                    }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => addFilter(price)}
                >
                  <div
                    className="price-checkbox"
                    style={{
                      width: "16px",
                      height: "16px",
                      border: "1px solid #999",
                      backgroundColor:
                        appliedFilters.price === price ? "#000" : "#fff",
                    }}
                  ></div>
                  <span
                    className={`price-label-jewelry-page ${appliedFilters.price === price ? "active" : ""
                      }`}
                  >
                    {price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <hr />

        {/* Applied Filters */}
        {visibleFilters.length > 0 && (
          <div className="applied-filters-bar mt-3">
            <strong>APPLIED FILTERS</strong>
            <div className="d-flex gap-2 flex-wrap">
              {visibleFilters.map(([key, value], idx) => (
                <div
                  className="filter-tag d-flex align-items-center px-2 py-1"
                  key={idx}
                >
                  {key === "ready_to_ship"
                    ? "Ready to Ship"
                    : `${key}: ${value}`}
                  <span
                    className="ms-2 text-danger fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={() => removeFilterByKey(key)}
                  >
                    &times;
                  </span>
                </div>
              ))}
            </div>
            <div className="clear-all ms-3" onClick={clearAllFilters}>
              CLEAR ALL
            </div>
          </div>
        )}

        {/* Product Listing */}
        <h5 className="mt-4">Showing {total} products.</h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {loading && <Loader />}

          {products.map((group) => {
            const metalVariations = group.metal_variations || {};

            // Flatten variations
            const flattenedMetalVariations = {};
            Object.entries(metalVariations).forEach(([metalId, shapeMap]) => {
              flattenedMetalVariations[metalId] =
                Object.values(shapeMap).flat();
            });

            const metalKeys = Object.keys(flattenedMetalVariations).sort(
              (a, b) => {
                const qualityA =
                  flattenedMetalVariations[a][0]?.metal_color?.quality || "";
                const qualityB =
                  flattenedMetalVariations[b][0]?.metal_color?.quality || "";
                const numA = parseInt(qualityA);
                const numB = parseInt(qualityB);
                if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
                if (!isNaN(numA)) return -1;
                if (!isNaN(numB)) return 1;
                return qualityA.localeCompare(qualityB);
              }
            );

            const currentMetalId = String(
              activeMetal[group.id] ?? metalKeys[0]
            );
            const metalOptions = flattenedMetalVariations[currentMetalId] || [];
            const selectedIndex = selectedVariations[group.id] || 0;
            const selectedVariation = metalOptions[selectedIndex];

            const image =
              Array.isArray(selectedVariation?.images) &&
                selectedVariation.images.length > 0
                ? `${import.meta.env.VITE_BACKEND_URL}${selectedVariation.images[0]
                }`
                : `${import.meta.env.VITE_BACKEND_URL
                }/storage/variation_images/No_Image_Available.jpg`;

            const price = selectedVariation?.price || "NA";
            const originalPrice = selectedVariation?.original_price || "NA";
            const sku = selectedVariation?.sku || "NA";
            const discount = selectedVariation?.discount || "";

            return (
              <div className="col" key={group.id}>
                <div className="card h-100 shadow-sm border-0">
                  {/* Product Image */}
                  <Link
                    to={`/engagment-details/${group.product?.id}`}
                    state={{ diamond: diamond }}
                    className="text-decoration-none text-dark"
                  >
                    <div className="product-image-container position-relative">
                      <img
                        src={image}
                        alt={group.product?.name || "Product"}
                        className="product-image-full card-img-top"
                      />
                      <div className="overlay-text d-flex justify-content-between px-2">
                        <span className="ready-to-ship">
                          {group.product?.ready_to_ship
                            ? "READY TO SHIP"
                            : ""}
                        </span>
                        <span className="discount">{discount}</span>
                      </div>
                    </div>
                  </Link>
                  <div className="card-body">
                    <p className="fw-semibold mb-1 product-variation__title">
                      {group.product?.name || "NA"}
                    </p>
                    <p className="mb-2 small text-muted">{sku}</p>

                    {/* Metal buttons */}
                    <div className="product-metal__buttons mb-2 d-flex gap-2 flex-wrap">
                      {metalKeys.map((metalId) => {
                        const metal =
                          flattenedMetalVariations[metalId][0]?.metal_color;
                        return (
                          <button
                            key={metalId}
                            className="product-variation__btn"
                            style={{
                              background: metal?.hex,
                              border: `1px solid ${String(activeMetal[group.id]) ===
                                String(metalId)
                                ? "#000"
                                : "#ccc"
                                }`,
                            }}
                            onClick={() => {
                              setActiveMetal((prev) => ({
                                ...prev,
                                [group.id]: metalId,
                              }));
                              setSelectedVariations((prev) => ({
                                ...prev,
                                [group.id]: 0,
                              }));
                            }}
                          >
                            {metal?.quality}
                          </button>
                        );
                      })}
                    </div>

                    {/* Carat selector */}
                    <div className="product-variation__carat-group">
                      <small className="product-variation__carat-title">
                        Total Carat Weight
                      </small>
                      <div className="d-flex gap-2 flex-wrap mt-1">
                        {metalOptions.length > 0 ? (
                          metalOptions.map((variation, index) => (
                            <button
                              key={index}
                              className={`product-variation__carat-pill ${selectedIndex === index ? "active" : ""
                                }`}
                              onClick={() =>
                                setSelectedVariations((prev) => ({
                                  ...prev,
                                  [group.id]: index,
                                }))
                              }
                            >
                              {variation.weight || "NA"}
                            </button>
                          ))
                        ) : (
                          <p className="small text-muted">No variations</p>
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <p className="mt-2 mb-0">
                      <span className="fw-bold">₹{price}</span>
                      {originalPrice && (
                        <span className="original-price text-muted text-decoration-line-through ms-2">
                          ${originalPrice}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div ref={loaderRef}>{isFetchingMore && <Loader />}</div>
      </div>
    </>
  );
};

export default EngagementList;
