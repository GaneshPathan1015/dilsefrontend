import React, { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../api/axios";
import "./JewellaryDetails.css";
import { useCart } from "../../cart/CartContext";

const protectionPlans = [
  { id: "1-year", label: "1 Year - $79" },
  { id: "2-year", label: "2 Year - $99" },
  {
    id: "3-year",
    label: (
      <>
        3 Year - $159 <br />
        <small className="text-muted">MOST POPULAR</small>
      </>
    ),
  },
];

const getImageUrl = (img) => {
  const fallback = `${
    import.meta.env.VITE_BACKEND_URL
  }/storage/variation_images/No_Image_Available.jpg`;
  if (!img) return fallback;
  return `${import.meta.env.VITE_BACKEND_URL}${img}`;
};

const getVideoUrl = (video) => {
  if (!video) return null;
  return `${import.meta.env.VITE_BACKEND_URL}${video}`;
};
const getShapeImageUrl = (img) => `${import.meta.env.VITE_BACKEND_URL}${img}`;

const JewelryDetailsPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedMetalId, setSelectedMetalId] = useState(null);
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [selectedVariationIndex, setSelectedVariationIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("1-year");
  const [activeFeature, setActiveFeature] = useState(null);
  const navigate = useNavigate();
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosClient.get(`/api/jewelry-product/${id}`);
        const data = res.data;

        const metalVariationKeys = Object.keys(data.metal_variations);
        const defaultMetalId = metalVariationKeys[0];
        // CHANGE: detect build type
        const isBuild = (data.product?.is_build ?? data.is_build) === 1;
        setProduct(data);
        setSelectedMetalId(defaultMetalId);
        setSelectedVariationIndex(0);

        if (isBuild) {
          // CHANGE: handle build structure -> metal -> shape -> [variations]
          const shapeKeys = Object.keys(data.metal_variations[defaultMetalId]);
          const defaultShapeId = shapeKeys[0] ?? null;
          setSelectedShapeId(defaultShapeId);

          const defaultVariation =
            data.metal_variations[defaultMetalId][defaultShapeId][0];

          setMainImage(getImageUrl(defaultVariation?.images?.[0]));

          /* const allImages = metalVariationKeys.flatMap((metalId) =>
            Object.values(data.metal_variations[metalId]).flatMap(
              (shapeArray) =>
                shapeArray.flatMap((variation) =>
                  (variation.images || []).map((img) => getImageUrl(img))
                )
            )
          );

          setThumbnails([...new Set(allImages)]); */
        } else {
          // CHANGE: keep your old (non-build) logic
          const defaultVariation = data.metal_variations[defaultMetalId][0];
          setMainImage(getImageUrl(defaultVariation?.images?.[0]));

          /*  const allImages = metalVariationKeys.flatMap((metalId) =>
            data.metal_variations[metalId].flatMap((variation) =>
              (variation.images || []).map((img) => getImageUrl(img))
            )
          );

          setThumbnails([...new Set(allImages)]); */
        }
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };

    fetchProduct();
  }, [id]);

  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  const handleMetalChange = (metalId) => {
    setSelectedMetalId(metalId);
    setSelectedVariationIndex(0);
    setIsVideo(false);
    const isBuild = (product.product?.is_build ?? product.is_build) === 1;

    if (isBuild) {
      // CHANGE: reset & pick first shape for this metal
      const shapeKeys = Object.keys(product.metal_variations[metalId]);
      const firstShape = shapeKeys[0] ?? null;
      setSelectedShapeId(firstShape);
      const variation = product.metal_variations[metalId][firstShape][0];
      setMainImage(getImageUrl(variation?.images?.[0]));
    } else {
      const variation = product.metal_variations[metalId][0];
      setMainImage(getImageUrl(variation?.images?.[0]));
    }
  };

  // CHANGE: new handler for build shapes
  const handleShapeChange = (shapeId) => {
    setSelectedShapeId(shapeId);
    setSelectedVariationIndex(0);
    setIsVideo(false);
    const variation = product.metal_variations[selectedMetalId][shapeId][0];
    setMainImage(getImageUrl(variation?.images?.[0]));
  };

  const handleCaratChange = (index) => {
    setSelectedVariationIndex(index);
    setIsVideo(false);
    const isBuild = (product.product?.is_build ?? product.is_build) === 1;
    const variation = isBuild
      ? product.metal_variations[selectedMetalId][selectedShapeId][index] // CHANGE: read from shape for build
      : product.metal_variations[selectedMetalId][index];

    setMainImage(getImageUrl(variation?.images?.[0]));
  };

  if (!product) return <div className="container py-5">Loading...</div>;

  const isBuild = (product.product?.is_build ?? product.is_build) === 1;

  // CHANGE: figure selected variation with/without shape
  const selectedVariation = isBuild
    ? product.metal_variations?.[selectedMetalId]?.[selectedShapeId]?.[
        selectedVariationIndex
      ]
    : product.metal_variations?.[selectedMetalId]?.[selectedVariationIndex];

  const { name, description } = product.product;
  const { price, weight, sku: variationSku } = selectedVariation || {};
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-1 d-flex flex-column align-items-center gap-2 thumbs">
          {/* Video thumbnail */}
          {selectedVariation?.video && (
            <video
              key="video-thumb"
              src={getVideoUrl(selectedVariation.video)}
              onClick={() => {
                setMainImage(getVideoUrl(selectedVariation.video));
                setIsVideo(true);
              }}
              className={isVideo ? "selected" : ""}
              style={{
                cursor: "pointer",
                border: isVideo ? "2px solid #000" : "1px solid #ccc",
                padding: "2px",
                width: "60px",
                height: "60px",
                objectFit: "scale-down",
                borderRadius: "4px",
              }}
            />
          )}

          {/* Image thumbnails */}
          {selectedVariation?.images?.map((img, i) => {
            const src = getImageUrl(img);
            return (
              <img
                key={i}
                src={src}
                alt={`Thumb ${i + 1}`}
                onClick={() => {
                  setMainImage(src);
                  setIsVideo(false);
                }}
                style={{
                  cursor: "pointer",
                  border:
                    !isVideo && mainImage === src
                      ? "2px solid #000"
                      : "1px solid #ccc",
                  padding: "2px",
                  width: "60px",
                  height: "60px",
                  objectFit: "scale-down",
                  borderRadius: "4px",
                }}
              />
            );
          })}
        </div>
        {/* Main image */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center main-image mb-4">
          <div className="zoom-container w-100">
            {isVideo ? (
              <video
                src={mainImage}
                className="img-fluid"
                autoPlay
                muted
                loop
                style={{
                  maxHeight: "500px",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            ) : (
              <Zoom>
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="img-fluid zoomable-image"
                  style={{
                    maxHeight: "500px",
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </Zoom>
            )}
          </div>
          <button
            className="btn btn-outline-dark mt-3 w-100 w-md-auto"
            style={{ maxWidth: "250px" }}
          >
            📷 VIRTUAL TRY ON
          </button>
        </div>

        {/* Right panel */}
        <div className="col-md-5">
          <h5 className="text-muted" style={{ fontSize: "32px", bold: "600" }}>
            {name}
          </h5>
          <p>
            <span className="text-muted">SKU: {variationSku}</span>
          </p>
          <p>
            price: <strong>₹{price}</strong>{" "}
          </p>
          <p className="mb-1">METAL COLOR</p>

          <div className="d-flex mb-3">
            {Object.entries(product.metal_variations)
              .sort(([aKey, aGroup], [bKey, bGroup]) => {
                const aMetal = isBuild
                  ? aGroup[Object.keys(aGroup)[0]][0].metal_color
                  : aGroup[0].metal_color;

                const bMetal = isBuild
                  ? bGroup[Object.keys(bGroup)[0]][0].metal_color
                  : bGroup[0].metal_color;

                const order = ["14k", "18k", "PL"]; // Customize the order here
                return (
                  order.indexOf(aMetal?.quality) -
                  order.indexOf(bMetal?.quality)
                );
              })
              .map(([metalId, group]) => {
                const metal = isBuild
                  ? group[Object.keys(group)[0]][0].metal_color
                  : group[0].metal_color;

                return (
                  <div
                    key={metalId}
                    className={`option-circle ${
                      selectedMetalId === metalId ? "active" : ""
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

          {/* Shape switch (only build) */}
          {isBuild && selectedMetalId && (
            <div className="product-variation__shape-group mb-3">
              <small className="product-variation__shape-title">
                Shape:&nbsp;
                <span className="shape-name">
                  {product.metal_variations[selectedMetalId]?.[
                    selectedShapeId
                  ]?.[0]?.shape?.name || "N/A"}
                </span>
              </small>
              <div className="d-flex flex-wrap gap-3 mt-1">
                {Object.keys(product.metal_variations[selectedMetalId]).map(
                  (shapeId) => {
                    const firstVar =
                      product.metal_variations[selectedMetalId][shapeId][0] ||
                      {};
                    const shape = firstVar.shape || {};
                    const img = getShapeImageUrl(shape.image);

                    return (
                      <button
                        key={shapeId}
                        type="button"
                        className={`shape-option ${
                          selectedShapeId === shapeId ? "active" : ""
                        }`}
                        onClick={() => handleShapeChange(shapeId)}
                      >
                        <span className="shape-circle">
                          <img
                            src={img}
                            alt={shape.name || `Shape ${shapeId}`}
                          />
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          )}

          {/* Carat (weight) pills */}
          <div className="product-variation__carat-group mb-3">
            <small className="product-variation__carat-title">
              Total Carat Weight
            </small>

            <div className="d-flex flex-wrap gap-2 mt-1">
              {(isBuild
                ? product.metal_variations?.[selectedMetalId]?.[
                    selectedShapeId
                  ] || []
                : product.metal_variations?.[selectedMetalId] || []
              ).map((variation, index) => (
                <button
                  key={index}
                  className={`product-variation__carat-pill ${
                    selectedVariationIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleCaratChange(index)}
                >
                  {variation.weight || "NA"}
                </button>
              ))}
            </div>
          </div>

          <hr className="hr-line" />

          {selectedVariation && (
            <p>
              <strong>Weight:</strong> {weight}g
            </p>
          )}

          <p>
            <strong>Description:</strong>
          </p>
          <div className="bg-light p-2" style={{ whiteSpace: "pre-wrap" }}>
            {description}
          </div>

          <hr className="hr-line" />
          {/* Protection plan */}
          <div className="plan-title ">
            ADD CLARITY COMMITMENT PROTECTION PLAN
          </div>
          <p className="protection-plan">
            Ensure your jewelry lasts a lifetime.{" "}
            <span title="More Info">ℹ️</span>
          </p>
          <div className="d-flex gap-2">
            {protectionPlans.map((plan) => (
              <div
                key={plan.id}
                className={`option-btn ${
                  selectedPlan === plan.id ? "active" : ""
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.label}
              </div>
            ))}
          </div>

          <hr className="hr-line" />
          <div className="container py-4">
            <div className="mb-4">
              <button
                className="btn btn-dark w-100"
                onClick={() => {
                  const cartItem = {
                    ...selectedVariation,
                    productType: "jewelry",
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

              <button className="btn btn-outline-dark w-100 mt-2">
                VIRTUAL / SHOWROOM APPOINTMENT
              </button>
              <p className="mt-2 mb-0">
                Ships by <strong>Thurs, June 12</strong> | Track in real time
                before it ships
              </p>
              <p className="mb-1">
                <span className="text-primary">0% APR</span> or as low as $53/mo
                with <strong>affirm</strong>. <a href="#">See if you qualify</a>
              </p>
              <p className="mb-2">
                Free Insured Shipping. <a href="#">30 Day Returns.</a>
              </p>

              <hr className="hr-line" />

              <div className="common-btn">
                <button className="btn btn-light">
                  <i className="bi bi-envelope"></i> DROP A HINT
                </button>
                <button className="btn btn-light">
                  <i className="bi bi-telephone"></i> CONTACT US
                </button>
                <button className="btn btn-light">
                  <i className="bi bi-heart"></i> ADD TO WISHLIST
                </button>
                <button className="btn btn-light">
                  <i className="bi bi-calendar-event"></i> SCHEDULE APPOINTMENT
                </button>
              </div>
              <div className="mt-2">
                <span className="me-2  share">SHARE :-</span>
                <i className="bi bi-pinterest"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-x"></i>
              </div>
              <div className="bg-light p-2 mt-3">
                <i className="bi bi-gift"></i> Earn 847 Points when you buy this
                item.
              </div>
            </div>
          </div>
        </div>

        <div className="reviews">
          <h4>Customer Reviews</h4>
          <div className="mb-3">
            <h5 className="mb-0">
              4.9 <span className="rating-stars">★★★★★</span>
            </h5>
            <small>Based on 17 Reviews</small>
          </div>
          {[90, 8, 2, 0, 0].map((percent, i) => (
            <div className="d-flex align-items-center" key={i}>
              <span className="me-2">{5 - i} Star</span>
              <div className="progress flex-grow-1">
                <div
                  className="progress-bar"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          ))}

          {["James R.", "Chloe T.", "Daniel S."].map((name, i) => (
            <div className="review-item" key={i}>
              <strong>{name}</strong>{" "}
              <span className="text-success">Verified Buyer</span>
              <br />
              ★★★★★
              <br />
              {
                [
                  "Love these earrings! The studs are absolutely stunning and catch the light perfectly.",
                  "Great sparkle and fit. My second purchase from this site. Love it!",
                  "Amazing quality and craftsmanship. Highly recommended.",
                ][i]
              }
            </div>
          ))}
          <div className="text-center mt-3">
            <button className="btn btn-outline-dark">Load More Reviews</button>
          </div>
        </div>

        <div className="features-section row align-items-center mt-5">
          <div className="col-md-6">
            {[
              {
                title: "Gemologist Consultation",
                content:
                  "Our dedicated gemologists offer comprehensive support throughout your diamond selection process...",
              },
              {
                title: "Conflict Free Diamonds",
                content:
                  "We are committed to sourcing diamonds from conflict-free regions...",
              },
              {
                title: "Home Preview",
                content:
                  "Try your favorite designs from the comfort of your home...",
              },
            ].map((feature, i) => (
              <div className="feature-item" key={i}>
                <h5 onClick={() => toggleFeature(i)}>
                  {feature.title} <i className="bi bi-chevron-down"></i>
                </h5>
                <div
                  className={`feature-content ${
                    activeFeature === i ? "active" : ""
                  }`}
                >
                  <p>{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <div className="ratio ratio-4x3">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Feature Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* <div className="container py-4">
          <div className="related-products">
            <h4>Related Products</h4>
            <div className="d-flex flex-wrap">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/images/main.png"
                  className="product-thumb"
                  alt="Related Product"
                />
              ))}
            </div>
          </div>

          <div className="custom-slider-section">
            <h4>Inspired By Your Browsing History</h4>
            <div className="d-flex flex-wrap">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/images/main.png"
                  className="product-thumb"
                  alt="Browsing History Product"
                />
              ))}
            </div>
          </div>

          <div className="custom-slider-section">
            <h4>Top Selling Products</h4>
            <div className="d-flex flex-wrap">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/images/main.png"
                  className="product-thumb"
                  alt="Top Selling Product"
                />
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default JewelryDetailsPage;
