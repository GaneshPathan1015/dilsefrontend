import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Info,
  Heart,
  Calendar,
  Phone,
  Mail,
  Gift,
} from "lucide-react";
import { ChevronUp, ChevronDown, MessageCircle } from "lucide-react";
import axiosClient from "../../api/axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import { useCart } from "../../cart/CartContext";
import SocialShare from "./SocialShare";
import LoadingDots from "./LoadingDots";
import ProductReviewSystem from "../review/ProductReviewSystem";
import { BACKEND_URL } from "../../config/env";
import "./giftDetails.css";

const getImageUrl = (img) => {
  const fallback = `${BACKEND_URL}/storage/variation_images/No_Image_Available.jpg`;
  if (!img) return fallback;
  if (img.startsWith("http")) return img;
  return `${BACKEND_URL}${img}`;
};

// const getVideoUrl = (video) => {
//   if (!video) return null;
//   return `https://dilsejewels.com/api${video}`;
// };
export const getVideoUrl = (video) => {
  if (!video) return null;

  if (video.startsWith("http")) return video;

  return `${BACKEND_URL}/api${video}`;
};

const GiftDetails = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product");

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedMetalId, setSelectedMetalId] = useState(null);
  const [selectedVariationIndex, setSelectedVariationIndex] = useState(0);
  const [isVideo, setIsVideo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedQuality, setSelectedQuality] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("3-year");
  const [showMobileCart, setShowMobileCart] = useState(false);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [openSection, setOpenSection] = useState("product");
  const [reviewsRefreshed, setReviewsRefreshed] = useState(0);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCart(window.innerWidth < 768 && window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosClient.get(`/api/product-details/${productId}`);
        const data = res.data;

        if (!data || !data.metal_variations) return;

        const metalKeys = Object.keys(data.metal_variations);
        const firstMetal = metalKeys[0];

        setProduct(data);
        setSelectedMetalId(firstMetal);
        setSelectedVariationIndex(0);

        const firstVar = data.metal_variations[firstMetal][0];
        setMainImage(getImageUrl(firstVar?.images?.[0]));
      } catch (e) {
        console.error("Product fetch failed", e);
      }
    };

    fetchProduct();
  }, [productId]);

  const metalVariations = product?.metal_variations[selectedMetalId] || [];
  const selectedVariation = metalVariations[selectedVariationIndex] || {};

  useEffect(() => {
    if (selectedVariation?.diamond_quality_id && selectedQuality === null) {
      setSelectedQuality(selectedVariation.diamond_quality_id);
    }
  }, [selectedVariation]);

  if (!product || !product.metal_variations) {
    return <LoadingDots />;
  }

  const handleMetalChange = (metalId) => {
    setSelectedMetalId(metalId);
    setSelectedVariationIndex(0);
    setIsVideo(false);

    const variation = product.metal_variations[metalId]?.[0];
    setMainImage(getImageUrl(variation?.images?.[0]));
  };

  const handleCaratChange = (index) => {
    if (!metalVariations[index]) return;

    setSelectedVariationIndex(index);
    setIsVideo(false);
    setMainImage(getImageUrl(metalVariations[index]?.images?.[0]));
  };

  const uniqueWeights = Array.from(
    new Set(metalVariations.map((v) => v.weight))
  );

  const variationsForSelectedWeight = metalVariations.filter(
    (v) => v.weight === selectedVariation.weight
  );

  const uniqueQualities = Array.from(
    new Map(
      variationsForSelectedWeight.map((v) => [
        v.diamond_quality_id,
        {
          id: v.diamond_quality_id,
          name: v.diamond_quality_name,
        },
      ])
    ).values()
  );

  const cleanedQualities = uniqueQualities.filter((q) => q.id && q.name);

  const hasQuality = cleanedQualities.length > 0;

  const currentMedia = selectedVariation
    ? [
      ...(selectedVariation.video
        ? [{ type: "video", src: getVideoUrl(selectedVariation.video) }]
        : []),
      ...(selectedVariation.images?.map((img) => ({
        type: "image",
        src: getImageUrl(img),
      })) || []),
    ]
    : [];

  const nextImage = () => {
    if (currentMedia.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % currentMedia.length);
  };

  const prevImage = () => {
    if (currentMedia.length === 0) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentMedia.length) % currentMedia.length
    );
  };

  const {
    name,
    description,
    delivery_days = 5,
    product_clarity,
    products_model,
    cut,
    stone_type,
  } = product.product || {};

  const {
    id,
    price = 0,
    original_price = 0,
    weight,
    diamond_weight,
    sku: variationSku,
    metal_color,
    making_charges = 0,
  } = selectedVariation || {};

  const basePrice = parseFloat(price) || 0;
  const baseOriginalPrice = parseFloat(original_price) || 0;
  const makingCharges = parseFloat(making_charges) || 0;
  // const gstAmount = parseFloat(tax_amount) || 0;  

  // Final prices
  const final_price = basePrice + makingCharges;
  const final_original_price = baseOriginalPrice + makingCharges;

  const priceDifference =
    final_original_price - final_price;
  const metalName = metal_color?.name || "-";

  const estimatedDays = (delivery_days || 5) + 1;
  const deliveryDate = new Date(
    Date.now() + estimatedDays * 24 * 60 * 60 * 1000
  );
  const formattedDate = deliveryDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const handleQualityChange = (qualityId) => {
    setSelectedQuality(qualityId);

    const currentWeight = selectedVariation.weight;
    const newIndex = metalVariations.findIndex(
      (v) => v.weight === currentWeight && v.diamond_quality_id == qualityId
    );

    if (newIndex !== -1) {
      const v = metalVariations[newIndex];
      setSelectedVariationIndex(newIndex);

      if (v.video) {
        setMainImage(getVideoUrl(v.video));
        setIsVideo(true);
      } else {
        setMainImage(getImageUrl(v.images?.[0]));
        setIsVideo(false);
      }
    }
  };

  const actions = [
    { icon: <Mail size={16} />, text: "DROP A HINT", path: "/inquiry" },
    { icon: <Phone size={16} />, text: "CONTACT US", path: "/contact" },
    {
      icon: <Heart size={16} />,
      text: "ADD TO WISHLIST",
      path: "/drop-a-hint",
    },
    {
      icon: <Calendar size={16} />,
      text: "SCHEDULE APPOINTMENT",
      path: "/book-appointment",
    },
  ];

  const handleNavigation = (item) => {
    if (item.path === "/inquiry") {
      navigate(`${item.path}?productId=${productId}`);
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="bg-white min-vh-100 ft">
      <div className="d-none d-md-block">
        <div className="container">
          <div className="row" style={{ "--bs-gutter-x": "2.5rem" }}>
            {/* THUMBNAILS */}
            <div className="col-1">
              <div className="thumbnail-container d-flex flex-column gap-2">
                {selectedVariation?.video && (
                  <video
                    key="video-thumb"
                    src={getVideoUrl(selectedVariation.video)}
                    onClick={() => {
                      setMainImage(getVideoUrl(selectedVariation.video));
                      setIsVideo(true);
                    }}
                    className="rounded thumbnail-gallery"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border: isVideo ? "2px solid #000" : "1px solid #ccc",
                      padding: "2px",
                      borderRadius: "4px",
                    }}
                    muted
                  />
                )}

                {selectedVariation?.images?.map((img, i) => {
                  const src = getImageUrl(img);
                  return (
                    <img
                      key={i}
                      src={src}
                      onClick={() => {
                        setMainImage(src);
                        setIsVideo(false);
                      }}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "contain",
                        cursor: "pointer",
                        border:
                          !isVideo && mainImage === src
                            ? "2px solid black"
                            : "1px solid #ccc",
                        padding: "2px",
                        borderRadius: "4px",
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* MAIN IMAGE */}
            <div className="col-6">
              <div className="main-image-container">
                {isVideo ? (
                  <video
                    src={mainImage}
                    className="w-100 h-auto rounded-3"
                    autoPlay
                    muted
                    loop
                    style={{
                      border: "none",
                      objectFit: "contain",
                      width: "100%",
                    }}
                  />
                ) : (
                  <Zoom>
                    <img
                      src={mainImage}
                      alt="Main Product"
                      className="w-100 h-auto rounded-3"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Zoom>
                )}
              </div>
            </div>

            {/* PRODUCT DETAILS */}
            <div className="col-5">
              <h1 className="h3 font-serif mb-2">{name}</h1>
              <p className="small text-muted mb-4">SKU#{variationSku}</p>

              <div className="mb-4">
                <span className="h3 fw-bold">₹{final_price}</span>
                <span className="fs-5 text-decoration-line-through ms-2">
                  ₹{final_original_price}
                </span>
                <span className="text-green-custom ms-2">
                  (₹{priceDifference} OFF)
                </span>
              </div>

              {/* METAL COLOR */}
              <div className="mb-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="small fw-semibold">METAL COLOR:</span>
                  <span className="small">{metalName}</span>
                </div>

                <div className="d-flex gap-2">
                  {Object.entries(product.metal_variations)
                    .sort(([aKey, aGroup], [bKey, bGroup]) => {
                      const aMetal = aGroup[0]?.metal_color;
                      const bMetal = bGroup[0]?.metal_color;
                      const order = ["14k", "18k", "PL"]; // define your preferred order
                      return (
                        order.indexOf(aMetal?.quality) -
                        order.indexOf(bMetal?.quality)
                      );
                    })
                    .map(([metalId, group]) => {
                      const metal = group[0]?.metal_color;
                      return (
                        <button
                          key={metalId}
                          onClick={() => handleMetalChange(metalId)}
                          className={`btn rounded-circle metal-btn ${metalId === selectedMetalId ? "active" : ""
                            }`}
                          style={{ background: metal?.hex }}
                          title={metal?.name}
                        >
                          {metal?.quality}
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* CARAT */}
              <div className="mb-4">
                <span className="small fw-semibold d-block mb-3">
                  METAL WEIGHT: {weight}
                </span>

                <div className="d-flex gap-2 flex-wrap">
                  {uniqueWeights.map((w) => {
                    const isActive = selectedVariation.weight === w;
                    return (
                      <button
                        key={w}
                        className={`product-variation__carat-pill ${isActive ? "active" : ""
                          }`}
                        onClick={() => {
                          const matchIndex = metalVariations.findIndex(
                            (v) =>
                              v.weight === w &&
                              v.diamond_quality_id == selectedQuality
                          );
                          const fallbackIndex = metalVariations.findIndex(
                            (v) => v.weight === w
                          );

                          const finalIndex =
                            matchIndex !== -1 ? matchIndex : fallbackIndex;

                          handleCaratChange(finalIndex);
                        }}
                      >
                        {w}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* QUALITY */}

              {hasQuality && (
                <div className="mb-4">
                  <span className="small fw-semibold d-block mb-3">
                    DIAMOND QUALITY
                  </span>

                  <div className="d-flex gap-2">
                    {cleanedQualities.map((q) => (
                      <button
                        key={q.id}
                        onClick={() => handleQualityChange(q.id)}
                        className={`btn border quality-btn px-4 py-2 ${selectedQuality == q.id ? "active" : ""
                          }`}
                      >
                        {q.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* <div className="mb-4">
                <span className="small fw-semibold d-block mb-3">
                  DIAMOND QUALITY
                </span>

                <div className="d-flex gap-2">
                  {uniqueQualities.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQualityChange(q.id)}
                      className={`btn border quality-btn px-4 py-2 ${
                        selectedQuality == q.id ? "active" : ""
                      }`}
                    >
                      {q.name}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* ADD TO CART */}
              <button
                className="btn w-100 py-3 fw-semibold mb-3"
                style={{ backgroundColor: "#0060AC", color: "white" }}
                onClick={() => {
                  addToCart({
                    ...selectedVariation,
                    name,
                    productType: "gift",
                    itemQuantity: 1,
                    selectedPlan,
                  });
                  navigate("/cart");
                }}
              >
                ADD TO CART
              </button>

              <p className="small mb-2">
                Ships by <b>{formattedDate}</b> | Track in real time before it
                ships
              </p>

              <div className="border-top pt-4">
                {/* ACTION BUTTONS */}
                <div className="row row-cols-2 g-2 mb-4">
                  {actions.map((a) => (
                    <div key={a.text} className="col">
                      <button
                        className="btn btn-outline-secondary w-100 d-flex gap-2 justify-content-center"
                        onClick={() => handleNavigation(a)}
                      >
                        {a.icon} {a.text}
                      </button>
                    </div>
                  ))}
                </div>

                {/* SHARE */}
                <div className="d-flex align-items-center gap-2 mb-4">
                  <b className="small">SHARE:</b>
                  <SocialShare
                    id={id}
                    product={product.product}
                    mainImage={mainImage}
                    backendBaseUrl={import.meta.env.VITE_BACKEND_URL}
                  />
                </div>

                <div className="bg-light-gray p-3 rounded d-flex align-items-center gap-2">
                  <Gift size={20} />
                  <span className="small">
                    Earn 847 Points when you buy this item.
                  </span>
                </div>

                {/* ACCORDIONS */}

                <div className="product-details-container">
                  {/* Product Details Section */}
                  <div>
                    <div
                      className="detail-section-header"
                      onClick={() => toggleSection("product")}
                    >
                      <h5 className="detail-section-title">Product Details</h5>
                      {openSection === "product" ? (
                        <ChevronUp size={20} className="chevron-icon" />
                      ) : (
                        <ChevronDown size={20} className="chevron-icon" />
                      )}
                    </div>
                    <div
                      className={`section-content ${openSection === "product" ? "" : "collapsed"
                        }`}
                    >
                      <p className="detail-description">{description}</p>

                      <div className="details-grid">
                        <span className="detail-label">Metal Details</span>
                        <span className="detail-value">{metalName}</span>

                        <span className="detail-label">Total Weight</span>
                        <span className="detail-value">
                          {!isNaN(
                            parseFloat(diamond_weight) + parseFloat(weight)
                          )
                            ? parseFloat(diamond_weight) + parseFloat(weight)
                            : "NA"}
                        </span>

                        <span className="detail-label">Product Model</span>
                        <span className="detail-value">
                          {products_model || "NA"}
                        </span>

                        <span className="detail-label">Clarity</span>
                        <span className="detail-value">
                          {product_clarity || "NA"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stone Details Section */}
                  <div>
                    <div
                      className="detail-section-header"
                      onClick={() => toggleSection("stone")}
                    >
                      <h5 className="detail-section-title">Stone Details</h5>
                      {openSection === "stone" ? (
                        <ChevronUp size={20} className="chevron-icon" />
                      ) : (
                        <ChevronDown size={20} className="chevron-icon" />
                      )}
                    </div>
                    <div
                      className={`section-content ${openSection === "stone" ? "" : "collapsed"
                        }`}
                    >
                      <div className="details-grid">
                        <span className="detail-label">Stone Type</span>
                        <span className="detail-value">
                          {stone_type || "NA"}
                        </span>

                        <span className="detail-label">Total Carat Weight</span>
                        <span className="detail-value">{diamond_weight}</span>

                        <span className="detail-label">Cut</span>
                        <span className="detail-value">{cut || "NA"}</span>

                        {/* <span className="detail-label">Number of Stones</span>
                                          <span className="detail-value">Single Row</span> */}
                      </div>
                    </div>
                  </div>

                  {/* Shipping & Returns Section */}
                  <div>
                    <div
                      className="detail-section-header"
                      onClick={() => toggleSection("shipping")}
                    >
                      <h5 className="detail-section-title">
                        Shipping & Returns
                      </h5>
                      {openSection === "shipping" ? (
                        <ChevronUp size={20} className="chevron-icon" />
                      ) : (
                        <ChevronDown size={20} className="chevron-icon" />
                      )}
                    </div>
                    <div
                      className={`section-content ${openSection === "shipping" ? "" : "collapsed"
                        }`}
                    >
                      <p className="detail-description">
                        Free standard shipping on all orders. Express shipping
                        available at checkout.
                      </p>
                      <p className="detail-description">
                        30-day return policy. Items must be in original
                        condition with all packaging and documentation.
                      </p>
                    </div>
                  </div>

                  {/* Lifetime Warranty Section */}
                  <div>
                    <div
                      className="detail-section-header"
                      onClick={() => toggleSection("warranty")}
                    >
                      <h5 className="detail-section-title">
                        Lifetime Warranty
                      </h5>
                      {openSection === "warranty" ? (
                        <ChevronUp size={20} className="chevron-icon" />
                      ) : (
                        <ChevronDown size={20} className="chevron-icon" />
                      )}
                    </div>
                    <div
                      className={`section-content ${openSection === "warranty" ? "" : "collapsed"
                        }`}
                    >
                      <p className="detail-description">
                        All jewelry comes with a lifetime warranty covering
                        manufacturing defects and craftsmanship.
                      </p>
                      <p className="detail-description">
                        Includes complimentary cleaning, inspection, and minor
                        repairs for the lifetime of the piece.
                      </p>
                    </div>
                  </div>



                  {/* Tax */}
                  <div>
                    <div
                      className="detail-section-header"
                      onClick={() => toggleSection("tax")}
                    >
                      <h5 className="detail-section-title">Price & Tax Details</h5>
                      {openSection === "tax" ? (
                        <ChevronUp size={20} className="chevron-icon" />
                      ) : (
                        <ChevronDown size={20} className="chevron-icon" />
                      )}
                    </div>

                    <div
                      className={`section-content ${openSection === "tax" ? "" : "collapsed"
                        }`}
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="d-block d-md-none">
        <div className="mobile-image-slider">
          {currentMedia[currentImageIndex]?.type === "video" ? (
            <video
              src={currentMedia[currentImageIndex].src}
              className="main-image"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <img
              src={currentMedia[currentImageIndex]?.src}
              alt="Product"
              className="main-image"
            />
          )}
          {currentMedia.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="btn slider-arrow left d-flex align-items-center justify-content-center"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="btn slider-arrow right d-flex align-items-center justify-content-center"
              >
                <ChevronRight />
              </button>
              <div className="slider-dots d-flex gap-2">
                {currentMedia.map((_, idx) => (
                  <div
                    key={idx}
                    className={`dot rounded-circle ${idx === currentImageIndex ? "active" : ""
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-3 pb-0">
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="text-yellow-custom small">★★★★★</div>
            <span className="small text-muted">21 reviews</span>
          </div>
          <h1 className="h5 font-serif mb-2">{name}</h1>
          <p className="small text-muted mb-4">SKU#{variationSku}</p>
          <div className="mb-4">
            <span className="h4 fw-bold">{final_price}</span>
            <span className="text-secondary text-decoration-line-through ms-2">
              {final_original_price}
            </span>
            <span className="text-green-custom small ms-2">
              (₹{priceDifference} OFF)
            </span>
          </div>

          <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="small fw-semibold">METAL COLOR:</span>
              <span className="small">{metalName}</span>
            </div>
            <div className="d-flex gap-2">
              {Object.entries(product.metal_variations)
                .sort(([aKey, aGroup], [bKey, bGroup]) => {
                  const aMetal = aGroup[0].metal_color;
                  const bMetal = bGroup[0].metal_color;
                  const order = ["14k", "18k", "PL"];
                  return (
                    order.indexOf(aMetal?.quality) -
                    order.indexOf(bMetal?.quality)
                  );
                })
                .map(([metalId, group]) => {
                  const metal = group[0].metal_color;
                  return (
                    <div
                      key={metalId}
                      className={`btn rounded-circle d-flex align-items-center justify-content-center fw-semibold metal-btn ${selectedMetalId === metalId ? "active" : ""
                        }`}
                      onClick={() => handleMetalChange(metalId)}
                      title={metal?.name}
                      style={{ background: metal?.hex }}
                    >
                      {metal?.quality}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mb-4">
            <span className="small fw-semibold d-block mb-3">
              METAL WEIGHT : {weight}
            </span>
            <div className="d-flex flex-wrap gap-2">
              {/* {(product.metal_variations?.[selectedMetalId] || []).map(
                (variation, index) => (
                  <button
                    key={index}
                    className={`product-variation__carat-pill ${
                      selectedVariationIndex === index ? "active" : ""
                    }`}
                    onClick={() => handleCaratChange(index)}
                  >
                    {variation.weight || "NA"}
                  </button>
                )
              )} */}
              {uniqueWeights.map((w) => {
                const isActive = selectedVariation.weight === w;
                return (
                  <button
                    key={w}
                    className={`product-variation__carat-pill ${isActive ? "active" : ""
                      }`}
                    onClick={() => {
                      const matchIndex = metalVariations.findIndex(
                        (v) =>
                          v.weight === w &&
                          v.diamond_quality_id == selectedQuality
                      );
                      const fallbackIndex = metalVariations.findIndex(
                        (v) => v.weight === w
                      );

                      const finalIndex =
                        matchIndex !== -1 ? matchIndex : fallbackIndex;

                      handleCaratChange(finalIndex);
                    }}
                  >
                    {w}
                  </button>
                );
              })}
            </div>
          </div>
          {/* QUALITY */}
          {hasQuality && (
            <div className="mb-4">
              <span className="small fw-semibold d-block mb-3">
                DIAMOND QUALITY
              </span>

              <div className="d-flex gap-2">
                {cleanedQualities.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQualityChange(q.id)}
                    className={`btn border quality-btn px-4 py-2 ${selectedQuality == q.id ? "active" : ""
                      }`}
                  >
                    {q.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="small fw-semibold">DIAMOND QUALITY:</span>
            </div>
            <div className="d-flex gap-2">
              {uniqueQualities.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleQualityChange(q.id)}
                  className={`btn border quality-btn px-4 py-2 ${
                    selectedQuality == q.id ? "active" : ""
                  }`}
                >
                  {q.name}
                </button>
              ))}
            </div>
          </div> */}

          <p className="small mb-2">
            Ships by <strong>{formattedDate}</strong> | Track in real time
            before it ships
          </p>
          <p className="small mb-4">
            Free Insured Shipping.{" "}
            <a href="#" className="text-decoration-underline">
              30 Day Returns.
            </a>
          </p>

          <div className="border-top pt-4">
            <div className="row row-cols-2 g-2">
              {actions.map((item) => (
                <div className="col" key={item.text}>
                  <button
                    className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 small py-2"
                    onClick={() => handleNavigation(item)}
                  >
                    {item.icon} {item.text}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="product-details-container">
            <div>
              <div
                className="detail-section-header"
                onClick={() => toggleSection("product")}
              >
                <h5 className="detail-section-title">Product Details</h5>
                {openSection === "product" ? (
                  <ChevronUp size={20} className="chevron-icon" />
                ) : (
                  <ChevronDown size={20} className="chevron-icon" />
                )}
              </div>
              <div
                className={`section-content ${openSection === "product" ? "" : "collapsed"
                  }`}
              >
                <p className="detail-description">{description || "NA"}</p>

                <div className="details-grid">
                  <span className="detail-label">Metal Details</span>
                  <span className="detail-value">{metalName}</span>
                  <span className="detail-label">Total Weight</span>
                  <span className="detail-value">
                    {!isNaN(parseFloat(diamond_weight) + parseFloat(weight))
                      ? parseFloat(diamond_weight) + parseFloat(weight)
                      : "NA"}
                  </span>
                  <span className="detail-label">Product Model</span>
                  <span className="detail-value">{products_model || "NA"}</span>

                  <span className="detail-label">clarity</span>
                  <span className="detail-value">
                    {product_clarity || "NA"}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div
                className="detail-section-header"
                onClick={() => toggleSection("stone")}
              >
                <h5 className="detail-section-title">Stone Details</h5>
                {openSection === "stone" ? (
                  <ChevronUp size={20} className="chevron-icon" />
                ) : (
                  <ChevronDown size={20} className="chevron-icon" />
                )}
              </div>
              <div
                className={`section-content ${openSection === "stone" ? "" : "collapsed"
                  }`}
              >
                <div className="details-grid">
                  <span className="detail-label">Stone Type</span>
                  <span className="detail-value">{stone_type || "NA"}</span>

                  <span className="detail-label">Total Carat Weight</span>
                  <span className="detail-value">{diamond_weight}</span>

                  <span className="detail-label">Cut</span>
                  <span className="detail-value">Brilliant</span>

                  <span className="detail-label">Clarity</span>
                  <span className="detail-value">Single Row</span>
                </div>
              </div>
            </div>

            <div>
              <div
                className="detail-section-header"
                onClick={() => toggleSection("shipping")}
              >
                <h5 className="detail-section-title">Shipping & Returns</h5>
                {openSection === "shipping" ? (
                  <ChevronUp size={20} className="chevron-icon" />
                ) : (
                  <ChevronDown size={20} className="chevron-icon" />
                )}
              </div>
              <div
                className={`section-content ${openSection === "shipping" ? "" : "collapsed"
                  }`}
              >
                <p className="detail-description">
                  Free standard shipping on all orders. Express shipping
                  available at checkout.
                </p>
                <p className="detail-description">
                  30-day return policy. Items must be in original condition with
                  all packaging and documentation.
                </p>
              </div>
            </div>

            <div>
              <div
                className="detail-section-header"
                onClick={() => toggleSection("warranty")}
              >
                <h5 className="detail-section-title">Lifetime Warranty</h5>
                {openSection === "warranty" ? (
                  <ChevronUp size={20} className="chevron-icon" />
                ) : (
                  <ChevronDown size={20} className="chevron-icon" />
                )}
              </div>
              <div
                className={`section-content ${openSection === "warranty" ? "" : "collapsed"
                  }`}
              >
                <p className="detail-description">
                  All jewelry comes with a lifetime warranty covering
                  manufacturing defects and craftsmanship.
                </p>
                <p className="detail-description">
                  Includes complimentary cleaning, inspection, and minor repairs
                  for the lifetime of the piece.
                </p>
              </div>
            </div>

            {/* Tax */}
            <div>
              <div
                className="detail-section-header"
                onClick={() => toggleSection("tax")}
              >
                <h5 className="detail-section-title">Price & Tax Details</h5>
                {openSection === "tax" ? (
                  <ChevronUp size={20} className="chevron-icon" />
                ) : (
                  <ChevronDown size={20} className="chevron-icon" />
                )}
              </div>

              <div
                className={`section-content ${openSection === "tax" ? "" : "collapsed"
                  }`}
              >

              </div>
            </div>


            <button className="help-button">
              <MessageCircle size={20} />
              Need Help?
            </button>
          </div>
        </div>

        {showMobileCart && (
          <div className=" bg-white p-3 pt-1 border-top">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <div>
                <div className="small text-muted text-decoration-line-through">
                  {final_original_price}
                </div>
                <div className="h5 fw-bold mb-0">{final_price}</div>
              </div>
              <button
                className="btn flex-grow-1 py-2 fw-semibold bg-brand-blue"
                style={{ backgroundColor: "#0060AC", color: "white" }}
                onClick={() => {
                  const cartItem = {
                    ...selectedVariation,
                    productType: "gift",
                    name: name,
                    itemQuantity: 1,
                    selectedPlan: selectedPlan,
                  };
                  addToCart(cartItem);
                  navigate("/cart");
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Review System */}
      <div className="container mt-5">
        <ProductReviewSystem
          productId={productId}
          refreshTrigger={reviewsRefreshed}
        />
      </div>



      {/* changes  */}
      {/* <div className="price-breakup-section">
        <h5 className="price-breakup-title mb-3">PRICE BREAKUP</h5>

        <div className="price-breakup-totals">
          <div className="price-breakup-row d-flex justify-content-between mb-2">
            <span><strong>Product Price</strong></span>
            <span>₹{priceBreakup.productPrice}</span>
          </div>
          <div className="price-breakup-row d-flex justify-content-between mb-2">
            <span><strong>Making Charges (3%)</strong></span>
            <span>₹{priceBreakup.makingCharges}</span>
          </div>
          <div className="price-breakup-row d-flex justify-content-between mb-2">
            <span><strong>Subtotal</strong></span>
            <span>₹{priceBreakup.subtotal}</span>
          </div>

          
          <div className="gst-breakdown mt-3 mb-3">
            <h6 className="mb-2"><strong>GST Breakdown:</strong></h6>
            <div className="price-breakup-row d-flex justify-content-between mb-1 ps-3">
              <span>Gold GST ({priceBreakup.goldGstRate}%)</span>
              <span>₹{priceBreakup.goldGst}</span>
            </div>
            <div className="price-breakup-row d-flex justify-content-between mb-1 ps-3">
              <span>Making Charges GST ({priceBreakup.makingChargesGstRate}%)</span>
              <span>₹{priceBreakup.makingChargesGst}</span>
            </div>
            <div className="price-breakup-row d-flex justify-content-between mb-2 ps-3">
              <span>Diamond GST ({priceBreakup.diamondGstRate}%)</span>
              <span>₹{priceBreakup.diamondGst}</span>
            </div>
            <div className="price-breakup-row d-flex justify-content-between border-top pt-2">
              <span><strong>Total GST</strong></span>
              <span><strong>₹{priceBreakup.totalGst}</strong></span>
            </div>
          </div>

          
          <div className="price-breakup-grand-total d-flex justify-content-between border-top pt-2 mt-3">
            <h6 className="mb-0"><strong>Grand Total</strong></h6>
            <h6 className="mb-0"><strong>₹{priceBreakup.grandTotal}</strong></h6>
          </div>
       </div>
        <div className="price-summary mt-4 p-3 bg-light rounded">
          <h6 className="mb-3"><strong>Summary:</strong></h6>
          <div className="row small">
            <div className="col-6">
              <div className="mb-1">Product Price:</div>
              <div className="mb-1">Making Charges:</div>
              <div className="mb-1">Gold GST:</div>
              <div className="mb-1">Making Charges GST:</div>
              <div className="mb-1">Diamond GST:</div>
              <div className="mb-0 mt-2"><strong>Grand Total:</strong></div>
            </div>
            <div className="col-6 text-end">
              <div className="mb-1">₹{priceBreakup.productPrice}</div>
              <div className="mb-1">₹{priceBreakup.makingCharges}</div>
              <div className="mb-1">₹{priceBreakup.goldGst}</div>
              <div className="mb-1">₹{priceBreakup.makingChargesGst}</div>
              <div className="mb-1">₹{priceBreakup.diamondGst}</div>
              <div className="mb-0 mt-2"><strong>₹{priceBreakup.grandTotal}</strong></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GiftDetails;
