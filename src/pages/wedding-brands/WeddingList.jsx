import React, { useEffect, useRef, useState } from "react";
import axiosClient from "../../api/axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../diamond/loader";
import "react-medium-image-zoom/dist/styles.css";
// import "./weddingList.css";

const priceSlugMap = {
  "0-500": "$0 - $500",
  "500-1000": "$500 - $1,000",
  "1000-2000": "$1,000 - $2,000",
  "2000-3000": "$2,000 - $3,000",
  "3000-100000": "$3,000 - $100,000",
};

const priceSlugReverseMap = Object.entries(priceSlugMap).reduce(
  (acc, [slug, label]) => {
    acc[label] = slug;
    return acc;
  },
  {}
);
const priceRanges = Object.values(priceSlugMap);
const WeddingList = () => {
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

  const [styleData, setStyleData] = useState([]);
  const [styleNameToIdMap, setStyleNameToIdMap] = useState({});

  const [collectionData, setCollectionData] = useState([]);
  const [collectionNameToIdMap, setCollectionNameToIdMap] = useState({});

  const [metalTypes, setMetalTypes] = useState([]);
  const [metalNameToId, setMetalNameToId] = useState({});
  const [metalIdToName, setMetalIdToName] = useState({});

  const [activeFilterSection, setActiveFilterSection] = useState("style");
  const [readyToShip, setReadyToShip] = useState(false);

  const loaderRef = useRef(null);
  const location = useLocation();
  const { slug } = useParams();
  const navigate = useNavigate();

  const heroContent = {
    "womens-wedding-rings": {
      title: "Women's Wedding Bands",
      description:
        "Explore our women's wedding bands to find the perfect blend of elegance and enduring beauty that represents your love.",
      image: "/images/womens.webp",
    },
    "womens-anniversary-rings": {
      title: "Diamond Anniversary Rings",
      description:
        "Celebrate your love with an anniversary ring, each a testament to shared milestones and cherished memories.",
      image: "/images/Anniverary_Rings_women.webp",
    },
    "womens-eternity-rings": {
      title: "Diamond Eternity Rings",
      description:
        "Mark milestones and cherished anniversaries with an eternity band, a symbol of your everlasting love.",
      image: "/images/Eternity_Rings_women.webp",
    },
    "womens-metal-wedding-rings": {
      title: "Women's Metal Wedding Rings",
      description:
        "Crafted for lasting durability, our metal wedding bands symbolize a love that's as strong as your bond.",
      image: "/images/Metal_Bands_women.webp",
    },
    "womens-diamond-wedding-rings": {
      title: "Women's Diamond Wedding Rings",
      description:
        "Indulge in love's brilliance with our diamond wedding bands—a symbol of your unique journey and enduring commitment.",
      image: "/images/Diamond_Bands_women.webp",
    },

    "mens-wedding-rings": {
      title: "Men's Wedding Bands",
      description:
        "Discover our collection of men's wedding bands—strong, stylish, and elegantly crafted.",
      image: "/images/Men_s_Bands.webp",
    },
    "mens-metal-wedding-bands": {
      title: "Men’s Metal Wedding Bands",
      description:
        "Step into a world of exceptional style and craftsmanship with our men's metal wedding bands.",
      image: "/images/Metal_Bands__Mens.webp",
    },
    "mens-diamond-wedding-bands": {
      title: "Men's Diamond Wedding Bands",
      description:
        "Find the perfect blend of strength and sophistication with our men's diamond wedding bands.",
      image: "/images/Mens_Diamond_Bands.webp",
    },
  };

  const toggleFilterSection = (section) => {
    setActiveFilterSection((prev) => (prev === section ? "" : section));
  };

  const updateURLFromFilters = (filters) => {
    const params = new URLSearchParams();

    if (filters.price && priceSlugReverseMap[filters.price]) {
      params.set("price", priceSlugReverseMap[filters.price]);
    }
    if (filters.collection)
      params.set("collection", `collection-${filters.collection}`);
    if (filters.style) params.set("style", `style-${filters.style}`);
    if (filters.ready_to_ship) params.set("ready_to_ship", "true");
    if (filters.metal) params.set("metal", encodeURIComponent(filters.metal));
    if (filters.sort) params.set("sort", filters.sort);

    navigate({ search: params.toString() });
  };

  const addFilter = (value) => {
    const updatedFilters = { ...appliedFilters };
    const isPriceValue = priceRanges.includes(value);

    if (isPriceValue) {
      updatedFilters.price = updatedFilters.price === value ? undefined : value;
    } else if (styleNameToIdMap[value]) {
      updatedFilters.style = updatedFilters.style === value ? undefined : value;
    } else if (collectionNameToIdMap[value]) {
      updatedFilters.collection =
        updatedFilters.collection === value ? undefined : value;
    } else {
      updatedFilters[value] = !updatedFilters[value];
    }

    setAppliedFilters(updatedFilters);
    updateURLFromFilters(updatedFilters);
  };

  // 🔹 Metal filter toggle
  const handleMetalClick = (metalId) => {
    const metalName = metalIdToName[metalId];
    const updated = { ...appliedFilters };

    updated.metal = updated.metal === metalName ? undefined : metalName;
    setAppliedFilters(updated);
    updateURLFromFilters(updated);
  };

  // 🔹 Ready-to-ship filter toggle
  const handleReadyToShipToggle = () => {
    const newState = !readyToShip;
    setReadyToShip(newState);

    const updated = { ...appliedFilters };
    if (newState) updated.ready_to_ship = true;
    else delete updated.ready_to_ship;

    setAppliedFilters(updated);
    updateURLFromFilters(updated);
  };

  // 🔹 Sort filter
  const handleSortChange = (sortValue) => {
    const updated = { ...appliedFilters };
    if (sortValue) updated.sort = sortValue;
    else delete updated.sort;

    setAppliedFilters(updated);
    updateURLFromFilters(updated);
  };

  // 🔹 Clear filters
  const clearAllFilters = () => {
    setReadyToShip(false);
    setAppliedFilters({});
    navigate({ search: "" });
  };

  const removeFilterByKey = (key) => {
    const updated = { ...appliedFilters };
    delete updated[key];
    if (key === "ready_to_ship") setReadyToShip(false);
    setAppliedFilters(updated);
    updateURLFromFilters(updated);
  };

  const fetchProducts = async ({ page, filters = {} }) => {
    const isInitialLoad = page === 1;
    if (isInitialLoad) setLoading(true);

    try {
      // -----------------------------
      // Map UI filters → API params
      // -----------------------------
      const apiFilters = {
        ...filters,
        style: filters.style ? styleNameToIdMap[filters.style] : undefined,
        collection: filters.collection
          ? collectionNameToIdMap[filters.collection]
          : undefined,
        price: filters.price ? priceSlugReverseMap[filters.price] : undefined,
        metal_color_id: filters.metal
          ? metalNameToId[filters.metal]
          : undefined,
      };

      // -----------------------------
      // Fetch products from API
      // -----------------------------
      const { data } = await axiosClient.get(
        `/api/get-all-wedding-data/${slug}`,
        {
          params: { page, perPage: 20, ...apiFilters },
        }
      );

      const fetchedProducts = data.data || [];
      const totalProducts = parseInt(data.totalProducts) || 0;
      const totalPagesCalc = Math.ceil(totalProducts / 20);

      // -----------------------------
      // Update meta data and maps
      // -----------------------------
      setStyleData(data.style_data || []);
      setCollectionData(data.collection_data || []);
      setMetalTypes(data.metal_types || []);

      const styleMap = Object.fromEntries(
        (data.style_data || []).map((s) => [s.psc_name, s.psc_id])
      );
      const collectionMap = Object.fromEntries(
        (data.collection_data || []).map((c) => [c.name, c.id])
      );
      const metalNameToIdMap = Object.fromEntries(
        (data.metal_types || []).map((m) => [m.dmt_name, m.dmt_id])
      );
      const metalIdToNameMap = Object.fromEntries(
        (data.metal_types || []).map((m) => [m.dmt_id, m.dmt_name])
      );

      setStyleNameToIdMap(styleMap);
      setCollectionNameToIdMap(collectionMap);
      setMetalNameToId(metalNameToIdMap);
      setMetalIdToName(metalIdToNameMap);

      // -----------------------------
      // Handle default variation selection
      // -----------------------------
      const updatedSelections = {
        ...(isInitialLoad ? {} : selectedVariations),
      };
      const updatedActiveMetals = { ...(isInitialLoad ? {} : activeMetal) };

      fetchedProducts.forEach((product) => {
        const metalVariations = product.metal_variations || {};
        const metalIds = Object.keys(metalVariations);

        if (metalIds.length === 0) return;

        // Default to first metal
        let selectedMetalId = metalIds[0];
        let selectedIndex = 0;

        // Sort by price if needed
        if (filters.sort?.startsWith("price")) {
          let bestPrice = filters.sort === "price_asc" ? Infinity : -Infinity;

          metalIds.forEach((metalId) => {
            const variations = metalVariations[metalId] || [];
            variations.forEach((variation, index) => {
              if (variation.price != null) {
                const price = parseFloat(variation.price);
                const better =
                  (filters.sort === "price_asc" && price < bestPrice) ||
                  (filters.sort === "price_desc" && price > bestPrice);
                if (better) {
                  bestPrice = price;
                  selectedMetalId = metalId;
                  selectedIndex = index;
                }
              }
            });
          });
        }

        // Save selections
        updatedActiveMetals[product.id] = Number(selectedMetalId);
        updatedSelections[product.id] = selectedIndex;
      });

      // -----------------------------
      // Update state
      // -----------------------------
      setSelectedVariations(updatedSelections);
      setActiveMetal(updatedActiveMetals);
      setProducts((prev) =>
        isInitialLoad ? fetchedProducts : [...prev, ...fetchedProducts]
      );
      setTotalPages(totalPagesCalc);
      setTotal(totalProducts);
    } catch (error) {
      console.error("Product fetch failed:", error);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  // 🔹 Parse filters from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filters = {};

    const priceParam = params.get("price");
    if (priceParam && priceSlugMap[priceParam]) {
      filters.price = priceSlugMap[priceParam];
    }

    const collectionParam = params.get("collection");
    if (collectionParam)
      filters.collection = collectionParam.split("-").slice(1).join("-");

    const styleParam = params.get("style");
    if (styleParam) filters.style = styleParam.split("-").slice(1).join("-");

    if (params.get("ready_to_ship") === "true") {
      filters.ready_to_ship = true;
      setReadyToShip(true);
    }

    const metalParam = params.get("metal");
    if (metalParam) filters.metal = decodeURIComponent(metalParam);

    if (params.get("sort")) filters.sort = params.get("sort");

    setAppliedFilters(filters);
    setFiltersInitialized(true);
  }, [location.search]);

  // 🔹 Re-sync ready_to_ship state
  useEffect(() => {
    setReadyToShip(!!appliedFilters.ready_to_ship);
  }, [appliedFilters.ready_to_ship]);

  useEffect(() => {
    if (!filtersInitialized) return;
    fetchProducts({ page, filters: appliedFilters });
  }, [appliedFilters, page, filtersInitialized]);

  useEffect(() => {
    if (!slug) return;
    setPage(1);
    setProducts([]);
    fetchProducts({ page: 1, filters: appliedFilters });
  }, [slug]);

  const visibleFilters = Object.entries(appliedFilters);
  return (
    <>
      <section className="hero-wrapper">
        <img
          src={heroContent[slug]?.image}
          alt={heroContent[slug]?.title || "Wedding Bands"}
          className="hero-img"
        />
        <div className="hero-text text-center">
          <h1 className="fw-bold">
            {heroContent[slug]?.title || "Wedding Bands"}
          </h1>
          <p>
            {heroContent[slug]?.description ||
              "Explore our wedding band collection."}
          </p>
        </div>
      </section>

      <div className="container my-4">
        {/* Filters Top Bar */}
        <div className="d-flex justify-content-between filters-bar">
          <div className="d-flex align-items-center flex-wrap gap-3">
            <strong>FILTERS</strong>
            <span className="filter-divider">|</span>

            {/* Collection */}
            {!slug.startsWith("mens") && (
              <>
                <div
                  onClick={() => toggleFilterSection("collection")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <span>Collection</span>
                  <span className="material-symbols-outlined">
                    {activeFilterSection === "collection"
                      ? "expand_less"
                      : "expand_more"}
                  </span>
                </div>

                <span className="filter-divider">|</span>
              </>
            )}
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

        {!slug.startsWith("mens") &&
          activeFilterSection === "collection" &&
          collectionData.length > 0 && (
            <div className="style-scroll-wrapper">
              <div className="collection-icon-bar">
                {collectionData.map((collection) => (
                  <div
                    key={collection.id}
                    className={`collection-item ${
                      appliedFilters.collection === collection.name
                        ? "active-style"
                        : ""
                    }`}
                    onClick={() => addFilter(collection.name)}
                  >
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}/storage/${
                        collection.collection_image
                      }`}
                      alt={collection.name}
                      className="style-img"
                    />
                    <div className="style-name">{collection.name}</div>
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
                  className={`style-item ${
                    appliedFilters.style === style.psc_name
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
                className={`metal-item ${
                  appliedFilters.metal === metal.dmt_name ? "active" : ""
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
                  className={`price-box d-flex align-items-center gap-2 ${
                    appliedFilters.price === price ? "active" : ""
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
                    className={`price-label-jewelry-page ${
                      appliedFilters.price === price ? "active" : ""
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
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {loading && <Loader />}

            {products.map((group) => {
              const metalKeys = Object.keys(group.metal_variations).sort(
                (a, b) => {
                  const qualityA =
                    group.metal_variations[a][0]?.metal_color?.quality || "";
                  const qualityB =
                    group.metal_variations[b][0]?.metal_color?.quality || "";
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
              const metalOptions = group.metal_variations[currentMetalId] || [];
              const selectedIndex = selectedVariations[group.id] || 0;
              const selectedVariation = metalOptions[selectedIndex];

              const image =
                Array.isArray(selectedVariation?.images) &&
                selectedVariation.images.length > 0
                  ? `${import.meta.env.VITE_BACKEND_URL}${
                      selectedVariation.images[0]
                    }`
                  : `${
                      import.meta.env.VITE_BACKEND_URL
                    }/storage/variation_images/No_Image_Available.jpg`;

              const price = selectedVariation?.price || "NA";
              const originalPrice = selectedVariation?.original_price || "NA";
              const sku = selectedVariation?.sku || "NA";
              const discount = selectedVariation?.discount || "";
              // Create slug from product name
              const productSlug = group.product?.name
                ? group.product.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")
                : "product";
              return (
                <div className="col" key={group.id}>
                  <div className="h-100 d-flex flex-column list-product-card rounded">
                    <Link
                      to={`/products/${productSlug}?product=${group.product?.id}`}
                      className="text-decoration-none text-dark mt-2"
                    >
                      <div className="product-image-container position-relative">
                        <img
                          src={image}
                          alt="Product"
                          className="img-fluid product-image-full"
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
                      <p className="fw-semibold mb-1 product-variation__title text-truncate">
                        {group.product?.name || "NA"}
                      </p>
                    </Link>

                    <p className="mb-2">{sku}</p>

                    <div className="product-metal__buttons mb-2 d-flex gap-1 flex-wrap">
                      {metalKeys.map((metalId) => {
                        const metal =
                          group.metal_variations[metalId][0]?.metal_color;
                        return (
                          <button
                            key={metalId}
                            className="product-variation__btn"
                            style={{
                              background: metal?.hex,
                              border: `1px solid ${
                                String(activeMetal[group.id]) ===
                                String(metalId)
                                  ? "#000"
                                  : "#ccc"
                              }`,
                              color: "#000",
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

                    <div className="product-variation__carat-group">
                      <small className="product-variation__carat-title">
                        Total Carat Weight
                      </small>
                      <div className="d-flex flex-wrap gap-1 mt-1">
                        {metalOptions.map((variation, index) => (
                          <button
                            key={index}
                            className={`product-variation__carat-pill btn btn-outline-dark btn-sm ${
                              selectedIndex === index ? "active" : ""
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
                        ))}
                      </div>
                    </div>

                    <p className="mt-auto">
                      <span className="fw-bold">${price}</span>
                      {originalPrice && (
                        <span className="original-price text-muted text-decoration-line-through ms-2">
                          ${originalPrice}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div ref={loaderRef}>{isFetchingMore && <Loader />}</div>
      </div>
    </>
  );
};

export default WeddingList;
