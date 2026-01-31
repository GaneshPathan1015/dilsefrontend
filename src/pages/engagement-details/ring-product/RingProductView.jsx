// import React, { useState, useEffect } from "react";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import axiosClient from "../../../api/axios";
// import { useCart } from "../../../cart/CartContext";
// import Logosec from "../../w-signature/logosec";
// import NoDealbreakers from "../../diamond-detail/diamondDetails/nobrokrage/NoDealbreakers";
// import DiamondSelectionModal from "./DiamondSelectionModal";
// import LoadingDots from "../../giftDetails/LoadingDots";
// import RingSettingModal from "./RingSettingModal";
// import SocialShare from "../../giftDetails/SocialShare";
// import "../../jewellary-details/JewellaryDetails.css";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Info,
//   Heart,
//   Calendar,
//   Phone,
//   Mail,
//   Gift,
// } from "lucide-react";
// import { ChevronUp, ChevronDown, MessageCircle } from "lucide-react";

// const getImageUrl = (img) => {
//   const fallback = `${import.meta.env.VITE_BACKEND_URL
//     }/storage/variation_images/No_Image_Available.jpg`;
//   if (!img) return fallback;
//   return `${import.meta.env.VITE_BACKEND_URL}${img}`;
// };
// const getVideoUrl = (video) => {
//   if (!video) return null;
//   return `${import.meta.env.VITE_BACKEND_URL}${video}`;
// };
// const getShapeImageUrl = (img) => `${import.meta.env.VITE_BACKEND_URL}${img}`;

// const RingProductView = ({ diamond }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [selectedMetalId, setSelectedMetalId] = useState(null);
//   const [selectedShapeId, setSelectedShapeId] = useState(null);
//   const [selectedVariationIndex, setSelectedVariationIndex] = useState(0);

//   const [selectedWeight, setSelectedWeight] = useState(null);
//   const [selectedQualityId, setSelectedQualityId] = useState(null);

//   const [showModal, setShowModal] = useState(false);
//   const [showSettingModal, setShowSettingModal] = useState(false);
//   const [modalProductData, setModalProductData] = useState(null);
//   const [isVideo, setIsVideo] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showMobileCart, setShowMobileCart] = useState(false);

//   const navigate = useNavigate();
//   const [openSection, setOpenSection] = useState("product");

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowMobileCart(window.innerWidth < 768 && window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axiosClient.get(
//           `/api/engagement-buildproduct/${productId}`
//         );
//         const data = res.data;
//         const metalVariationKeys = Object.keys(data.metal_variations);
//         const defaultMetalId = metalVariationKeys[0];
//         // CHANGE: detect build type
//         const isBuild = (data.product?.is_build ?? data.is_build) === 1;
//         setProduct(data);
//         setSelectedMetalId(defaultMetalId);
//         setSelectedVariationIndex(0);

//         if (isBuild) {
//           // CHANGE: handle build structure -> metal -> shape -> [variations]
//           const shapeKeys = Object.keys(data.metal_variations[defaultMetalId]);
//           const defaultShapeId = shapeKeys[0] ?? null;
//           setSelectedShapeId(defaultShapeId);

//           const defaultVariation =
//             data.metal_variations[defaultMetalId][defaultShapeId][0];

//           setMainImage(getImageUrl(defaultVariation?.images?.[0]));
//         } else {
//           // CHANGE: keep your old (non-build) logic
//           const defaultVariation = data.metal_variations[defaultMetalId][0];
//           setMainImage(getImageUrl(defaultVariation?.images?.[0]));
//         }
//       } catch (err) {
//         console.error("Failed to fetch product", err);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleMetalChange = (metalId) => {
//     setSelectedMetalId(metalId);
//     setSelectedVariationIndex(0);
//     setIsVideo(false);

//     const isBuild = (product.product?.is_build ?? product.is_build) === 1;

//     if (isBuild) {
//       // CHANGE: reset & pick first shape for this metal
//       const shapeKeys = Object.keys(product.metal_variations[metalId]);
//       const firstShape = shapeKeys[0] ?? null;
//       setSelectedShapeId(firstShape);
//       const variation = product.metal_variations[metalId][firstShape][0];
//       setMainImage(getImageUrl(variation?.images?.[0]));
//     } else {
//       const variation = product.metal_variations[metalId][0];
//       setMainImage(getImageUrl(variation?.images?.[0]));
//     }
//   };

//   // CHANGE: new handler for build shapes
//   const handleShapeChange = (shapeId) => {
//     setSelectedShapeId(shapeId);
//     setSelectedVariationIndex(0);
//     setIsVideo(false);

//     const variation = product.metal_variations[selectedMetalId][shapeId][0];
//     setMainImage(getImageUrl(variation?.images?.[0]));
//   };

//   const handleCaratChange = (index) => {
//     setSelectedVariationIndex(index);
//     setIsVideo(false);

//     const isBuild = (product.product?.is_build ?? product.is_build) === 1;
//     const variation = isBuild
//       ? product.metal_variations[selectedMetalId][selectedShapeId][index] // CHANGE: read from shape for build
//       : product.metal_variations[selectedMetalId][index];
//     setMainImage(getImageUrl(variation?.images?.[0]));
//   };

//   const isBuild = (product?.product?.is_build ?? product?.is_build) === 1;
//   // --------------------
//   // Compute filtered variations (only current metal + shape)
//   // --------------------

//   const filteredVariations = isBuild
//     ? product?.metal_variations?.[selectedMetalId]?.[selectedShapeId] || []
//     : product?.metal_variations?.[selectedMetalId] || [];

//   useEffect(() => {
//     if (!filteredVariations || filteredVariations.length === 0) {
//       setSelectedWeight(null);
//       setSelectedQualityId(null);
//       setSelectedVariationIndex(0);
//       return;
//     }

//     // pick first weight in groupedByWeight order
//     const firstWeightKey = Object.keys(groupedByWeight)[0];

//     if (firstWeightKey) {
//       const firstVariationForWeight =
//         groupedByWeight[firstWeightKey].variations[0];
//       // set selected weight & quality to first ones
//       setSelectedWeight(firstWeightKey);
//       setSelectedQualityId(firstVariationForWeight?.diamond_quality_id ?? null);
//       // set selected variation index globally
//       const idx = filteredVariations.findIndex(
//         (fv) => fv.id === firstVariationForWeight.id
//       );
//       setSelectedVariationIndex(idx >= 0 ? idx : 0);
//       setMainImage(getImageUrl(firstVariationForWeight?.images?.[0]));
//     } else {
//       setSelectedWeight(null);
//       setSelectedQualityId(null);
//       setSelectedVariationIndex(0);
//     }
//     // We want this to run when selected metal/shape or product changes
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedMetalId, selectedShapeId, product?.id]);

//   if (!product || !product.product) return <LoadingDots />;

//   // Group by weight so each weight appears once and contains its variations (qualities)
//   const groupedByWeight = filteredVariations.reduce((acc, item) => {
//     const key = item.weight ?? "NA";
//     if (!acc[key]) {
//       acc[key] = { weight: key, variations: [] };
//     }
//     acc[key].variations.push(item);
//     return acc;
//   }, {});

//   const hasQuality = groupedByWeight[selectedWeight]?.variations?.some(
//     (v) => v.diamond_quality_id && v.diamond_quality_name
//   );

//   // Keep weights in same order as filteredVariations by building ordered array
//   const weightOptions = Object.values(groupedByWeight);

//   // CHANGE: figure selected variation with/without shape
//   const selectedVariation =
//     filteredVariations?.[selectedVariationIndex] ||
//     filteredVariations?.[0] ||
//     null;

//   const currentMedia = selectedVariation
//     ? [
//       // Add video first if it exists
//       ...(selectedVariation.video
//         ? [{ type: "video", src: getVideoUrl(selectedVariation.video) }]
//         : []),
//       // Then add all images
//       ...(selectedVariation.images?.map((img) => ({
//         type: "image",
//         src: getImageUrl(img),
//       })) || []),
//     ]
//     : [];
//   // Navigation functions for mobile carousel
//   const nextImage = () =>
//     setCurrentImageIndex((prev) => (prev + 1) % currentMedia.length);

//   const prevImage = () =>
//     setCurrentImageIndex(
//       (prev) => (prev - 1 + currentMedia.length) % currentMedia.length
//     );

//   const qualities = [
//     { id: "ef-vs", label: "EF VS+" },
//     { id: "f-g-si", label: "F/G SI+" },
//   ];

//   const {
//     name,
//     description,
//     delivery_days,
//     product_clarity,
//     products_model,
//     cut,
//     stone_type,
//   } = product?.product ?? {};

//   const {
//     id,
//     price,
//     original_price,
//     weight,
//     diamond_weight,
//     metal_color,
//     sku: variationSku,
//     diamond_gst,
//     gold_gst,
//     making_charges_gst = 0,
//   } = selectedVariation || {};
//   const toNumber = (v) => Number(v) || 0;

//   const basePrice = toNumber(price);
//   const baseOriginalPrice = toNumber(original_price);

//   const diamondGST = toNumber(diamond_gst);
//   const goldGST = toNumber(gold_gst);
//   const makingChargesPercent = toNumber(making_charges_gst);


//   // GST only on base price
//   const diamondGSTAmount = (basePrice * diamondGST) / 100;
//   const goldGSTAmount = (basePrice * goldGST) / 100;

//   // Making charges (NO GST)
//   const makingChargesAmount = (basePrice * makingChargesPercent) / 100;

//   // Final prices
//   const final_price =
//     basePrice +
//     diamondGSTAmount +
//     goldGSTAmount +
//     makingChargesAmount;

//   const final_original_price =
//     baseOriginalPrice +
//     (baseOriginalPrice * diamondGST) / 100 +
//     (baseOriginalPrice * goldGST) / 100 +
//     (baseOriginalPrice * makingChargesPercent) / 100;

//   // Rounding
//   const round = (n) => Number(n.toFixed(2));

//   const finalPriceRounded = round(final_price);
//   const finalOriginalPriceRounded = round(final_original_price);

//   const priceDifference = round(
//     Math.max(finalOriginalPriceRounded - finalPriceRounded, 0)
//   );


//   const metalName = metal_color?.name || "-";
//   const selectedShapeName = isBuild
//     ? product.metal_variations?.[selectedMetalId]?.[selectedShapeId]?.[0]?.shape
//       ?.name
//     : null;

//   const currentDate = new Date();
//   const estimatedDays = delivery_days + 1; // add 1 extra day
//   const deliveryDate = new Date(currentDate);
//   deliveryDate.setDate(currentDate.getDate() + estimatedDays);

//   // Format the date (e.g., "Wed, Oct 8")
//   const options = { weekday: "short", month: "short", day: "numeric" };
//   const formattedDate = deliveryDate.toLocaleDateString("en-US", options);

//   // Get selected carat weight
//   const selectedCaratWeight = selectedVariation?.weight || null;

//   // Create ringCartItem here
//   const ringCartItem = {
//     ...selectedVariation,
//     sku: variationSku,
//     name: name,
//     price: price,
//     image: mainImage,
//     weight: weight,
//     selectedMetal: selectedMetalId,
//     shape: selectedShapeName || "",
//     caratWeight: selectedCaratWeight || "",
//   };

//   const handleOpenSettingModal = () => {
//     const cartItem = {
//       ...selectedVariation,
//       sku: variationSku,
//       name: name,
//       price: price,
//       image: mainImage,
//       weight: weight,
//       selectedMetal: selectedMetalId,
//       shape: selectedShapeName || "",
//       caratWeight: selectedCaratWeight || "",
//       productType: "build",
//       itemQuantity: 1,
//     };
//     setModalProductData(cartItem);
//     setShowSettingModal(true);
//   };

//   const handleChooseSetting = () => {
//     if (diamond) {
//       //  If diamond exists
//       const productSlug = "buildProduct";
//       navigate(`/product/${productSlug}`, {
//         state: { diamond, ringCartItem, fromChooseSetting: false },
//       });
//     } else {
//       //  If no diamond → redirect user to diamond selection
//       setShowModal(true);
//     }
//   };

//   const actions = [
//     { icon: <Mail size={16} />, text: "DROP A HINT", path: "/inquiry" },
//     { icon: <Phone size={16} />, text: "CONTACT US", path: "/contact" },
//     {
//       icon: <Heart size={16} />,
//       text: "ADD TO WISHLIST",
//       path: "/drop-a-hint",
//     },
//     {
//       icon: <Calendar size={16} />,
//       text: "SCHEDULE APPOINTMENT",
//       path: "/book-appointment",
//     },
//   ];

//   const handleNavigation = (item) => {
//     // If it’s the inquiry page, add productId as a query param
//     if (item.path === "/inquiry") {
//       navigate(`${item.path}?productId=${productId}`);
//     } else {
//       navigate(item.path);
//     }
//   };

//   return (
//     <>
//       <div className="bg-white min-vh-100">
//         {/* =============================================================================== */}
//         {/* DESKTOP LAYOUT                                   */}
//         {/* =============================================================================== */}
//         <div className="d-none d-md-block">
//           <div className="container">
//             <div className="row" style={{ "--bs-gutter-x": "2.5rem" }}>
//               {/* Image Thumbnails */}
//               <div className="col-1">
//                 <div className="thumbnail-container d-flex flex-column gap-2">
//                   {selectedVariation?.video && (
//                     <video
//                       key="video-thumb"
//                       src={getVideoUrl(selectedVariation.video)}
//                       onClick={() => {
//                         setMainImage(getVideoUrl(selectedVariation.video));
//                         setIsVideo(true);
//                       }}
//                       disablePictureInPicture
//                       controls={false}
//                       controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
//                       tabIndex={-1}
//                       className={`rounded thumbnail-gallery ${isVideo ? "selected" : ""
//                         }`}
//                       style={{
//                         cursor: "pointer",
//                         border: isVideo ? "2px solid #000" : "1px solid #ccc",
//                         padding: "2px",
//                         width: "60px",
//                         height: "60px",
//                         objectFit: "cover",
//                         borderRadius: "4px",
//                       }}
//                     />
//                   )}

//                   {/* Image thumbnails */}
//                   {selectedVariation?.images?.map((img, i) => {
//                     const src = getImageUrl(img);
//                     return (
//                       <img
//                         key={i}
//                         src={src}
//                         alt={`Thumb ${i + 1}`}
//                         onClick={() => {
//                           setMainImage(src);
//                           setIsVideo(false);
//                         }}
//                         style={{
//                           cursor: "pointer",
//                           border:
//                             !isVideo && mainImage === src
//                               ? "2px solid #000"
//                               : "1px solid #ccc",
//                           padding: "2px",
//                           width: "60px",
//                           height: "60px",
//                           objectFit: "scale-down",
//                           borderRadius: "4px",
//                         }}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Main Image */}
//               <div className="col-6">
//                 <div className="main-image-container">
//                   {isVideo ? (
//                     <video
//                       src={mainImage}
//                       className="w-100 h-auto rounded-3"
//                       autoPlay
//                       muted
//                       loop
//                       style={{
//                         border: "none",
//                         objectFit: "contain",
//                         width: "100%",
//                       }}
//                     />
//                   ) : (
//                     <Zoom>
//                       <img
//                         src={mainImage}
//                         alt="Main Product"
//                         className="w-100 h-auto rounded-3"
//                         style={{
//                           objectFit: "contain",
//                         }}
//                       />
//                     </Zoom>
//                   )}
//                 </div>
//               </div>

//               {/* Product Details */}
//               <div className="col-5">
//                 <div className="d-flex align-items-center gap-2 mb-2">
//                   <div className="text-yellow-custom">★★★★★</div>
//                   <span className="small text-muted">21 reviews</span>
//                 </div>
//                 <h1 className="h3 font-serif mb-2">{name}</h1>
//                 <p className="small text-muted mb-4">SKU#{variationSku}</p>
//                 <div className="mb-4">
//                   <span className="h3 fw-bold">₹{final_price}</span>
//                   <span className="fs-5 text-secondary text-decoration-line-through ms-2">
//                     ₹{final_original_price}
//                   </span>
//                   <span className="text-green-custom ms-2">
//                     (₹{priceDifference} OFF)
//                   </span>
//                 </div>
//                 {isBuild && selectedMetalId && (
//                   <div className="product-variation__shape-group mb-3">
//                     <small className="product-variation__shape-title">
//                       SHAPE:&nbsp;
//                       <span className="shape-name">
//                         {product.metal_variations[selectedMetalId]?.[
//                           selectedShapeId
//                         ]?.[0]?.shape?.name || "N/A"}
//                       </span>
//                     </small>
//                     <div className="d-flex flex-wrap gap-3 mt-1">
//                       {Object.keys(
//                         product.metal_variations[selectedMetalId]
//                       ).map((shapeId) => {
//                         const firstVar =
//                           product.metal_variations[selectedMetalId][
//                           shapeId
//                           ][0] || {};
//                         const shape = firstVar.shape || {};
//                         const img = getShapeImageUrl(shape.image);

//                         return (
//                           <button
//                             key={shapeId}
//                             type="button"
//                             className={`shape-option ${selectedShapeId === shapeId ? "active" : ""
//                               }`}
//                             onClick={() => handleShapeChange(shapeId)}
//                           >
//                             <span className="shape-circle">
//                               <img
//                                 src={img}
//                                 alt={shape.name || `Shape ${shapeId}`}
//                               />
//                             </span>
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//                 <div className="mb-4">
//                   <div className="d-flex align-items-center gap-2 mb-3">
//                     <span className="small fw-semibold">METAL COLOR</span>
//                     <Info size={16} className="text-secondary" />
//                     <span className="small">: {metalName}</span>
//                   </div>

//                   <div className="d-flex gap-2">
//                     {Object.entries(product.metal_variations)
//                       .sort(([aKey, aGroup], [bKey, bGroup]) => {
//                         // For build products: pick first shape → first variation
//                         const aMetal =
//                           aGroup[Object.keys(aGroup)[0]][0].metal_color;
//                         const bMetal =
//                           bGroup[Object.keys(bGroup)[0]][0].metal_color;

//                         const order = ["14k", "18k", "PL"]; // customize order
//                         return (
//                           order.indexOf(aMetal?.quality) -
//                           order.indexOf(bMetal?.quality)
//                         );
//                       })
//                       .map(([metalId, group]) => {
//                         const metal =
//                           group[Object.keys(group)[0]][0].metal_color;

//                         return (
//                           <div
//                             key={metalId}
//                             className={`option-circle ${selectedMetalId === metalId ? "active" : ""
//                               }`}
//                             onClick={() => handleMetalChange(metalId)}
//                             title={metal?.name}
//                             style={{ background: metal?.hex }}
//                           >
//                             {metal?.quality}
//                           </div>
//                         );
//                       })}
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <span className="small fw-semibold d-block mb-3">
//                     METAL WEIGHT : {weight}
//                   </span>

//                   {/* new chanes */}
//                   <div className="d-flex flex-wrap gap-2">
//                     {weightOptions.map((w, idx) => (
//                       <button
//                         key={w.weight + "-" + idx}
//                         className={`product-variation__carat-pill ${selectedWeight === w.weight ? "active" : ""
//                           }`}
//                         onClick={() => {
//                           // select weight -> pick first variation for that weight
//                           setSelectedWeight(w.weight);
//                           // pick first quality of this weight
//                           const firstVar = w.variations[0];
//                           setSelectedQualityId(
//                             firstVar?.diamond_quality_id ?? null
//                           );
//                           // set selected variation index globally
//                           const globalIndex = filteredVariations.findIndex(
//                             (fv) => fv.id === firstVar.id
//                           );
//                           setSelectedVariationIndex(
//                             globalIndex >= 0 ? globalIndex : 0
//                           );
//                           setMainImage(getImageUrl(firstVar?.images?.[0]));
//                         }}
//                       >
//                         {w.weight || "NA"}
//                       </button>
//                     ))}
//                   </div>

//                   {/* ====== QUALITY BUTTONS (shown when a weight selected) ====== */}
//                   {selectedWeight && hasQuality && (
//                     <div className="mt-2">
//                       <small className="text-muted">
//                         Available qualities for {selectedWeight}:
//                       </small>
//                       <div className="d-flex flex-wrap gap-2 mt-1">
//                         {(groupedByWeight[selectedWeight]?.variations || [])
//                           .filter(
//                             (v) =>
//                               v.diamond_quality_id && v.diamond_quality_name
//                           )
//                           .map((v) => (
//                             <button
//                               key={v.id}
//                               className={`btn border quality-btn px-3 py-2 ${selectedQualityId === v.diamond_quality_id
//                                 ? "active"
//                                 : ""
//                                 }`}
//                               onClick={() => {
//                                 setSelectedQualityId(v.diamond_quality_id);
//                                 const globalIndex =
//                                   filteredVariations.findIndex(
//                                     (fv) => fv.id === v.id
//                                   );
//                                 setSelectedVariationIndex(
//                                   globalIndex >= 0 ? globalIndex : 0
//                                 );
//                                 setMainImage(getImageUrl(v.images?.[0]));
//                               }}
//                             >
//                               {v.diamond_quality_name}
//                             </button>
//                           ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   className="btn w-100 py-3 fw-semibold mb-3"
//                   style={{ backgroundColor: "#0060AC", color: "white" }}
//                   onClick={handleChooseSetting}
//                 >
//                   CHOOSE THIS SETTING
//                 </button>

//                 {showModal && (
//                   <DiamondSelectionModal
//                     onClose={() => setShowModal(false)}
//                     ringCartItem={ringCartItem}
//                   />
//                 )}

//                 <button
//                   className="btn w-100 py-3 fw-semibold mb-3"
//                   style={{ backgroundColor: "#0060AC", color: "white" }}
//                   onClick={handleOpenSettingModal}
//                 >
//                   BUY SETTING ONLY
//                 </button>

//                 {showSettingModal && (
//                   <RingSettingModal
//                     onClose={() => setShowSettingModal(false)}
//                     modalProductData={modalProductData}
//                   />
//                 )}

//                 {/* <div className="mb-4">
//                 <h3 className="fw-semibold small mb-2">
//                   ADD CLARITY COMMITMENT PROTECTION PLAN
//                 </h3>
//                 <div className="d-flex align-items-center gap-2 mb-3">
//                   <p className="small text-muted mb-0">
//                     Ensure your jewelry lasts a lifetime.
//                   </p>
//                   <Info size={16} className="text-secondary" />
//                 </div>
//                 <div className="row row-cols-3 g-2 pt-2">
//                   {protectionPlans.map((plan) => (
//                     <div className="col" key={plan.id}>
//                       <button
//                         onClick={() => setSelectedPlan(plan.id)}
//                         className={`btn w-100 border text-center p-3 small plan-btn ${
//                           selectedPlan === plan.id ? "active" : ""
//                         }`}
//                       >
//                         {plan.popular && (
//                           <span className="popular-badge badge rounded-pill">
//                             MOST POPULAR
//                           </span>
//                         )}
//                         {plan.label}
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div> */}

//                 {/* <button className="btn btn-outline-dark w-100 py-3 fw-semibold mb-4">
//                   VIRTUAL / SHOWROOM APPOINTMENT
//                 </button> */}

//                 <p className="small mb-2">
//                   Ships by <strong>{formattedDate}</strong> | Track in real time
//                   before it ships
//                 </p>
//                 <p className="small mb-2">
//                   <span className="text-blue-link">0% APR</span> or as low as
//                   $53/mo with <strong>affirm</strong>.{" "}
//                   <a href="#" className="text-decoration-underline">
//                     See if you qualify
//                   </a>
//                 </p>
//                 <p className="small mb-4">
//                   Free Insured Shipping.
//                   <a href="#" className="text-decoration-underline">
//                     30 Day Returns.
//                   </a>
//                 </p>

//                 <div className="border-top pt-4">
//                   <div className="row row-cols-2 g-2 mb-4">
//                     {actions.map((item) => (
//                       <div className="col" key={item.text}>
//                         <button
//                           className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 small py-2"
//                           onClick={() => handleNavigation(item)}
//                         >
//                           {item.icon} {item.text}
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="d-flex align-items-center gap-3 mb-4">
//                     <span className="small fw-semibold">SHARE:</span>
//                     <SocialShare
//                       id={id}
//                       product={product.product}
//                       mainImage={mainImage}
//                       backendBaseUrl={
//                         import.meta.env.VITE_BACKEND_URL ||
//                         window.location.origin
//                       }
//                     />
//                   </div>
//                   {/*  <div className="bg-light-gray p-3 rounded d-flex align-items-center gap-2">
//                     <Gift size={20} />
//                     <span className="small">
//                       Earn 847 Points when you buy this item.
//                     </span>
//                   </div> */}

//                   <div className="product-details-container">
//                     {/* Product Details Section */}
//                     <div>
//                       <div
//                         className="detail-section-header"
//                         onClick={() => toggleSection("product")}
//                       >
//                         <h5 className="detail-section-title">
//                           Product Details
//                         </h5>
//                         {openSection === "product" ? (
//                           <ChevronUp size={20} className="chevron-icon" />
//                         ) : (
//                           <ChevronDown size={20} className="chevron-icon" />
//                         )}
//                       </div>
//                       <div
//                         className={`section-content ${openSection === "product" ? "" : "collapsed"
//                           }`}
//                       >
//                         <p className="detail-description">{description}</p>

//                         <div className="details-grid">
//                           <span className="detail-label">Metal Details</span>
//                           <span className="detail-value">{metalName}</span>

//                           <span className="detail-label">Total Weight</span>
//                           <span className="detail-value">
//                             {!isNaN(
//                               parseFloat(diamond_weight) + parseFloat(weight)
//                             )
//                               ? parseFloat(diamond_weight) + parseFloat(weight)
//                               : "NA"}
//                           </span>

//                           <span className="detail-label">Product Model</span>
//                           <span className="detail-value">
//                             {products_model || "NA"}
//                           </span>

//                           <span className="detail-label">Clarity</span>
//                           <span className="detail-value">
//                             {product_clarity || "NA"}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Stone Details Section */}
//                     <div>
//                       <div
//                         className="detail-section-header"
//                         onClick={() => toggleSection("stone")}
//                       >
//                         <h5 className="detail-section-title">Stone Details</h5>
//                         {openSection === "stone" ? (
//                           <ChevronUp size={20} className="chevron-icon" />
//                         ) : (
//                           <ChevronDown size={20} className="chevron-icon" />
//                         )}
//                       </div>
//                       <div
//                         className={`section-content ${openSection === "stone" ? "" : "collapsed"
//                           }`}
//                       >
//                         <div className="details-grid">
//                           <span className="detail-label">Stone Type</span>
//                           <span className="detail-value">
//                             {stone_type || "NA"}
//                           </span>

//                           <span className="detail-label">
//                             Total Carat Weight
//                           </span>
//                           <span className="detail-value">{diamond_weight}</span>

//                           <span className="detail-label">Cut</span>
//                           <span className="detail-value">{cut || "NA"}</span>

//                           {/* <span className="detail-label">Number of Stones</span>
//                           <span className="detail-value">Single Row</span> */}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Shipping & Returns Section */}
//                     <div>
//                       <div
//                         className="detail-section-header"
//                         onClick={() => toggleSection("shipping")}
//                       >
//                         <h5 className="detail-section-title">
//                           Shipping & Returns
//                         </h5>
//                         {openSection === "shipping" ? (
//                           <ChevronUp size={20} className="chevron-icon" />
//                         ) : (
//                           <ChevronDown size={20} className="chevron-icon" />
//                         )}
//                       </div>
//                       <div
//                         className={`section-content ${openSection === "shipping" ? "" : "collapsed"
//                           }`}
//                       >
//                         <p className="detail-description">
//                           Free standard shipping on all orders. Express shipping
//                           available at checkout.
//                         </p>
//                         <p className="detail-description">
//                           30-day return policy. Items must be in original
//                           condition with all packaging and documentation.
//                         </p>
//                       </div>
//                     </div>

//                     {/* Lifetime Warranty Section */}
//                     <div>
//                       <div
//                         className="detail-section-header"
//                         onClick={() => toggleSection("warranty")}
//                       >
//                         <h5 className="detail-section-title">
//                           Lifetime Warranty
//                         </h5>
//                         {openSection === "warranty" ? (
//                           <ChevronUp size={20} className="chevron-icon" />
//                         ) : (
//                           <ChevronDown size={20} className="chevron-icon" />
//                         )}
//                       </div>
//                       <div
//                         className={`section-content ${openSection === "warranty" ? "" : "collapsed"
//                           }`}
//                       >
//                         <p className="detail-description">
//                           All jewelry comes with a lifetime warranty covering
//                           manufacturing defects and craftsmanship.
//                         </p>
//                         <p className="detail-description">
//                           Includes complimentary cleaning, inspection, and minor
//                           repairs for the lifetime of the piece.
//                         </p>
//                       </div>
//                     </div>

//                     {/* Tax */}
//                     <div>
//                       <div
//                         className="detail-section-header"
//                         onClick={() => toggleSection("tax")}
//                       >
//                         <h5 className="detail-section-title">Price & Tax Details</h5>
//                         {openSection === "tax" ? (
//                           <ChevronUp size={20} className="chevron-icon" />
//                         ) : (
//                           <ChevronDown size={20} className="chevron-icon" />
//                         )}
//                       </div>

//                       <div
//                         className={`section-content ${openSection === "tax" ? "" : "collapsed"
//                           }`}
//                       >
//                         <div className="details-grid">

//                           {/* Base price */}
//                           <span className="detail-label">Base Price</span>
//                           <span className="detail-value">
//                             ₹{basePrice.toFixed(2)}
//                           </span>

//                           {/* Diamond GST */}
//                           <span className="detail-label">
//                             Diamond GST ({diamond_gst}%)
//                           </span>
//                           <span className="detail-value">
//                             ₹{diamondGSTAmount.toFixed(2)}
//                           </span>

//                           {/* Gold GST */}
//                           <span className="detail-label">
//                             Gold GST ({gold_gst}%)
//                           </span>
//                           <span className="detail-value">
//                             ₹{goldGSTAmount.toFixed(2)}
//                           </span>

//                           {/* Making charges */}
//                           <span className="detail-label">
//                             Making Charges ({making_charges_gst}%)
//                           </span>
//                           <span className="detail-value">
//                             ₹{makingChargesAmount.toFixed(2)}
//                           </span>

//                           {/* Divider */}
//                           <span className="detail-label fw-semibold border-top pt-2">
//                             Final Price
//                           </span>
//                           <span className="detail-value fw-semibold border-top pt-2">
//                             ₹{final_price.toFixed(2)}
//                           </span>

//                         </div>
//                       </div>
//                     </div>

//                     {/* Need Help Button */}
//                     <button className="help-button">
//                       <MessageCircle size={20} />
//                       Need Help?
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===============================================================================
//          /* MOBILE LAYOUT */
//         /* ===============================================================================
//          */}
//         <div className="d-block d-md-none">
//           <div className="mobile-image-slider">
//             {currentMedia[currentImageIndex]?.type === "video" ? (
//               <video
//                 src={currentMedia[currentImageIndex].src}
//                 className="main-image"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "contain",
//                 }}
//               />
//             ) : (
//               <img
//                 src={currentMedia[currentImageIndex]?.src}
//                 alt="Product"
//                 className="main-image"
//               />
//             )}
//             {currentMedia.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="btn slider-arrow left d-flex align-items-center justify-content-center"
//                 >
//                   <ChevronLeft />
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="btn slider-arrow right d-flex align-items-center justify-content-center"
//                 >
//                   <ChevronRight />
//                 </button>
//                 <div className="slider-dots d-flex gap-2">
//                   {currentMedia.map((_, idx) => (
//                     <div
//                       key={idx}
//                       className={`dot rounded-circle ${idx === currentImageIndex ? "active" : ""
//                         }`}
//                     />
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>

//           <div className="p-3 pb-0">
//             <div className="d-flex align-items-center gap-2 mb-2">
//               <div className="text-yellow-custom small">★★★★★</div>
//               <span className="small text-muted">21 reviews</span>
//             </div>
//             <h1 className="h5 font-serif mb-2">{name}</h1>
//             <p className="small text-muted mb-4">SKU#{variationSku}</p>
//             <div className="mb-4">
//               <span className="h4 fw-bold">{final_price}</span>
//               <span className="text-secondary text-decoration-line-through ms-2">
//                 {final_original_price}
//               </span>
//               <span className="text-green-custom small ms-2">
//                 (₹{priceDifference} OFF)
//               </span>
//             </div>
//             {isBuild && selectedMetalId && (
//               <div className="product-variation__shape-group mb-3">
//                 <small className="product-variation__shape-title">
//                   SHAPE:&nbsp;
//                   <span className="shape-name">
//                     {product.metal_variations[selectedMetalId]?.[
//                       selectedShapeId
//                     ]?.[0]?.shape?.name || "N/A"}
//                   </span>
//                 </small>
//                 <div className="d-flex flex-wrap gap-3 mt-1">
//                   {Object.keys(product.metal_variations[selectedMetalId]).map(
//                     (shapeId) => {
//                       const firstVar =
//                         product.metal_variations[selectedMetalId][shapeId][0] ||
//                         {};
//                       const shape = firstVar.shape || {};
//                       const img = getShapeImageUrl(shape.image);

//                       return (
//                         <button
//                           key={shapeId}
//                           type="button"
//                           className={`shape-option ${selectedShapeId === shapeId ? "active" : ""
//                             }`}
//                           onClick={() => handleShapeChange(shapeId)}
//                         >
//                           <span className="shape-circle">
//                             <img
//                               src={img}
//                               alt={shape.name || `Shape ${shapeId}`}
//                             />
//                           </span>
//                         </button>
//                       );
//                     }
//                   )}
//                 </div>
//               </div>
//             )}
//             <div className="mb-4">
//               <div className="d-flex align-items-center gap-2 mb-3">
//                 <span className="small fw-semibold">METAL COLOR:</span>
//                 <span className="small">{metalName}</span>
//               </div>
//               <div className="d-flex gap-2">
//                 {Object.entries(product.metal_variations)
//                   .sort(([aKey, aGroup], [bKey, bGroup]) => {
//                     // For build products: pick first shape → first variation
//                     const aMetal =
//                       aGroup[Object.keys(aGroup)[0]][0].metal_color;
//                     const bMetal =
//                       bGroup[Object.keys(bGroup)[0]][0].metal_color;

//                     const order = ["14k", "18k", "PL"]; // customize order
//                     return (
//                       order.indexOf(aMetal?.quality) -
//                       order.indexOf(bMetal?.quality)
//                     );
//                   })
//                   .map(([metalId, group]) => {
//                     const metal = group[Object.keys(group)[0]][0].metal_color;

//                     return (
//                       <div
//                         key={metalId}
//                         className={`option-circle ${selectedMetalId === metalId ? "active" : ""
//                           }`}
//                         onClick={() => handleMetalChange(metalId)}
//                         title={metal?.name}
//                         style={{ background: metal?.hex }}
//                       >
//                         {metal?.quality}
//                       </div>
//                     );
//                   })}
//               </div>
//             </div>

//             <div className="mb-4">
//               <span className="small fw-semibold d-block mb-3">
//                 METAL WEIGHT : {weight}
//               </span>

//               {/* new chanes */}
//               <div className="d-flex flex-wrap gap-2">
//                 {weightOptions.map((w, idx) => (
//                   <button
//                     key={w.weight + "-" + idx}
//                     className={`product-variation__carat-pill ${selectedWeight === w.weight ? "active" : ""
//                       }`}
//                     onClick={() => {
//                       // select weight -> pick first variation for that weight
//                       setSelectedWeight(w.weight);
//                       // pick first quality of this weight
//                       const firstVar = w.variations[0];
//                       setSelectedQualityId(
//                         firstVar?.diamond_quality_id ?? null
//                       );
//                       // set selected variation index globally
//                       const globalIndex = filteredVariations.findIndex(
//                         (fv) => fv.id === firstVar.id
//                       );
//                       setSelectedVariationIndex(
//                         globalIndex >= 0 ? globalIndex : 0
//                       );
//                       setMainImage(getImageUrl(firstVar?.images?.[0]));
//                     }}
//                   >
//                     {w.weight || "NA"}
//                   </button>
//                 ))}
//               </div>

//               {/* ====== QUALITY BUTTONS (shown when a weight selected) ====== */}
//               {selectedWeight && hasQuality && (
//                 <div className="mt-2">
//                   <small className="text-muted">
//                     Available qualities for {selectedWeight}:
//                   </small>
//                   <div className="d-flex flex-wrap gap-2 mt-1">
//                     {(groupedByWeight[selectedWeight]?.variations || [])
//                       .filter(
//                         (v) => v.diamond_quality_id && v.diamond_quality_name
//                       )
//                       .map((v) => (
//                         <button
//                           key={v.id}
//                           className={`btn border quality-btn px-3 py-2 ${selectedQualityId === v.diamond_quality_id
//                             ? "active"
//                             : ""
//                             }`}
//                           onClick={() => {
//                             setSelectedQualityId(v.diamond_quality_id);
//                             const globalIndex = filteredVariations.findIndex(
//                               (fv) => fv.id === v.id
//                             );
//                             setSelectedVariationIndex(
//                               globalIndex >= 0 ? globalIndex : 0
//                             );
//                             setMainImage(getImageUrl(v.images?.[0]));
//                           }}
//                         >
//                           {v.diamond_quality_name}
//                         </button>
//                       ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {showModal && (
//               <DiamondSelectionModal
//                 onClose={() => setShowModal(false)}
//                 ringCartItem={ringCartItem}
//               />
//             )}

//             <button
//               className="btn w-100 py-3 fw-semibold mb-3"
//               style={{ backgroundColor: "#0060AC", color: "white" }}
//               onClick={handleOpenSettingModal}
//             >
//               BUY SETTING ONLY
//             </button>

//             {showSettingModal && (
//               <RingSettingModal
//                 onClose={() => setShowSettingModal(false)}
//                 modalProductData={modalProductData}
//               />
//             )}

//             <p className="small mb-2">
//               Ships by <strong>{formattedDate}</strong> | Track in real time
//               before it ships
//             </p>
//             <p className="small mb-4">
//               Free Insured Shipping.{" "}
//               <a href="#" className="text-decoration-underline">
//                 30 Day Returns.
//               </a>
//             </p>

//             <div className="border-top pt-4">
//               <div className="row row-cols-2 g-2">
//                 {actions.map((item) => (
//                   <div className="col" key={item.text}>
//                     <button
//                       className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 small py-2"
//                       onClick={() => handleNavigation(item)}
//                     >
//                       {item.icon} {item.text}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="d-flex align-items-center gap-3 pt-2">
//               <span className="small fw-semibold">SHARE:</span>
//               <SocialShare
//                 id={id}
//                 product={product.product}
//                 mainImage={mainImage}
//                 backendBaseUrl={
//                   import.meta.env.VITE_BACKEND_URL || window.location.origin
//                 }
//               />
//             </div>

//             <div className="product-details-container">
//               {/* Product Details Section */}
//               <div>
//                 <div
//                   className="detail-section-header"
//                   onClick={() => toggleSection("product")}
//                 >
//                   <h5 className="detail-section-title">Product Details</h5>
//                   {openSection === "product" ? (
//                     <ChevronUp size={20} className="chevron-icon" />
//                   ) : (
//                     <ChevronDown size={20} className="chevron-icon" />
//                   )}
//                 </div>
//                 <div
//                   className={`section-content ${openSection === "product" ? "" : "collapsed"
//                     }`}
//                 >
//                   <p className="detail-description">{description}</p>

//                   <div className="details-grid">
//                     <span className="detail-label">Metal Details</span>
//                     <span className="detail-value">{metalName}</span>

//                     <span className="detail-label">Total Weight</span>
//                     <span className="detail-value">
//                       {!isNaN(parseFloat(diamond_weight) + parseFloat(weight))
//                         ? parseFloat(diamond_weight) + parseFloat(weight)
//                         : "NA"}
//                     </span>
//                     <span className="detail-label">Product Model</span>
//                     <span className="detail-value">
//                       {products_model || "NA"}
//                     </span>

//                     <span className="detail-label">Clarity</span>
//                     <span className="detail-value">
//                       {product_clarity || "NA"}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Stone Details Section */}
//               <div>
//                 <div
//                   className="detail-section-header"
//                   onClick={() => toggleSection("stone")}
//                 >
//                   <h5 className="detail-section-title">Stone Details</h5>
//                   {openSection === "stone" ? (
//                     <ChevronUp size={20} className="chevron-icon" />
//                   ) : (
//                     <ChevronDown size={20} className="chevron-icon" />
//                   )}
//                 </div>
//                 <div
//                   className={`section-content ${openSection === "stone" ? "" : "collapsed"
//                     }`}
//                 >
//                   <div className="details-grid">
//                     <span className="detail-label">Stone Type</span>
//                     <span className="detail-value">{stone_type || "NA"}</span>

//                     <span className="detail-label">Total Carat Weight</span>
//                     <span className="detail-value">{diamond_weight}</span>

//                     <span className="detail-label">Cut</span>
//                     <span className="detail-value">{cut || "NA"}</span>

//                     {/* <span className="detail-label">Number of Stones</span>
//                     <span className="detail-value">Single Row</span> */}
//                   </div>
//                 </div>
//               </div>

//               {/* Shipping & Returns Section */}
//               <div>
//                 <div
//                   className="detail-section-header"
//                   onClick={() => toggleSection("shipping")}
//                 >
//                   <h5 className="detail-section-title">Shipping & Returns</h5>
//                   {openSection === "shipping" ? (
//                     <ChevronUp size={20} className="chevron-icon" />
//                   ) : (
//                     <ChevronDown size={20} className="chevron-icon" />
//                   )}
//                 </div>
//                 <div
//                   className={`section-content ${openSection === "shipping" ? "" : "collapsed"
//                     }`}
//                 >
//                   <p className="detail-description">
//                     Free standard shipping on all orders. Express shipping
//                     available at checkout.
//                   </p>
//                   <p className="detail-description">
//                     30-day return policy. Items must be in original condition
//                     with all packaging and documentation.
//                   </p>
//                 </div>
//               </div>

//               {/* Lifetime Warranty Section */}
//               <div>
//                 <div
//                   className="detail-section-header"
//                   onClick={() => toggleSection("warranty")}
//                 >
//                   <h5 className="detail-section-title">Lifetime Warranty</h5>
//                   {openSection === "warranty" ? (
//                     <ChevronUp size={20} className="chevron-icon" />
//                   ) : (
//                     <ChevronDown size={20} className="chevron-icon" />
//                   )}
//                 </div>
//                 <div
//                   className={`section-content ${openSection === "warranty" ? "" : "collapsed"
//                     }`}
//                 >
//                   <p className="detail-description">
//                     All jewelry comes with a lifetime warranty covering
//                     manufacturing defects and craftsmanship.
//                   </p>
//                   <p className="detail-description">
//                     Includes complimentary cleaning, inspection, and minor
//                     repairs for the lifetime of the piece.
//                   </p>
//                 </div>
//               </div>

//               {/* Tax */}
//               <div>
//                 <div
//                   className="detail-section-header"
//                   onClick={() => toggleSection("tax")}
//                 >
//                   <h5 className="detail-section-title">Price & Tax Details</h5>
//                   {openSection === "tax" ? (
//                     <ChevronUp size={20} className="chevron-icon" />
//                   ) : (
//                     <ChevronDown size={20} className="chevron-icon" />
//                   )}
//                 </div>

//                 <div
//                   className={`section-content ${openSection === "tax" ? "" : "collapsed"
//                     }`}
//                 >
//                   <div className="details-grid">

//                     {/* Base price */}
//                     <span className="detail-label">Base Price</span>
//                     <span className="detail-value">
//                       ₹{basePrice.toFixed(2)}
//                     </span>

//                     {/* Diamond GST */}
//                     <span className="detail-label">
//                       Diamond GST ({diamond_gst}%)
//                     </span>
//                     <span className="detail-value">
//                       ₹{diamondGSTAmount.toFixed(2)}
//                     </span>

//                     {/* Gold GST */}
//                     <span className="detail-label">
//                       Gold GST ({gold_gst}%)
//                     </span>
//                     <span className="detail-value">
//                       ₹{goldGSTAmount.toFixed(2)}
//                     </span>

//                     {/* Making charges */}
//                     <span className="detail-label">
//                       Making Charges ({making_charges_gst}%)
//                     </span>
//                     <span className="detail-value">
//                       ₹{makingChargesAmount.toFixed(2)}
//                     </span>

//                     {/* Divider */}
//                     <span className="detail-label fw-semibold border-top pt-2">
//                       Final Price
//                     </span>
//                     <span className="detail-value fw-semibold border-top pt-2">
//                       ₹{final_price.toFixed(2)}
//                     </span>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sticky Add to Cart Bar */}
//           {showMobileCart && (
//             <div className=" bg-white p-3 pt-1 border-top">
//               <div className="d-flex align-items-center justify-content-between gap-3">
//                 <div>
//                   <div className="small text-muted text-decoration-line-through">
//                     {final_original_price}
//                   </div>
//                   <div className="h5 fw-bold mb-0">{final_price}</div>
//                 </div>
//                 <button
//                   className="btn flex-grow-1 py-2 fw-semibold"
//                   style={{ backgroundColor: "#0060AC", color: "white" }}
//                   onClick={handleChooseSetting}
//                 >
//                   CHOOSE THIS SETTING
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default RingProductView;

import React, { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../api/axios";
import { useCart } from "../../../cart/CartContext";
import Logosec from "../../w-signature/logosec";
import NoDealbreakers from "../../diamond-detail/diamondDetails/nobrokrage/NoDealbreakers";
import DiamondSelectionModal from "./DiamondSelectionModal";
import LoadingDots from "../../giftDetails/LoadingDots";
import RingSettingModal from "./RingSettingModal";
import SocialShare from "../../giftDetails/SocialShare";
import "../../jewellary-details/JewellaryDetails.css";
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

const getImageUrl = (img) => {
  const fallback = `${import.meta.env.VITE_BACKEND_URL
    }/storage/variation_images/No_Image_Available.jpg`;
  if (!img) return fallback;
  return `${import.meta.env.VITE_BACKEND_URL}${img}`;
};
const getVideoUrl = (video) => {
  if (!video) return null;
  return `${import.meta.env.VITE_BACKEND_URL}${video}`;
};
const getShapeImageUrl = (img) => `${import.meta.env.VITE_BACKEND_URL}${img}`;

const RingProductView = ({ diamond }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedMetalId, setSelectedMetalId] = useState(null);
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [selectedVariationIndex, setSelectedVariationIndex] = useState(0);

  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedQualityId, setSelectedQualityId] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showSettingModal, setShowSettingModal] = useState(false);
  const [modalProductData, setModalProductData] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMobileCart, setShowMobileCart] = useState(false);

  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState("product");

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
        const res = await axiosClient.get(
          `/api/engagement-buildproduct/${productId}`
        );
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
        } else {
          // CHANGE: keep your old (non-build) logic
          const defaultVariation = data.metal_variations[defaultMetalId][0];
          setMainImage(getImageUrl(defaultVariation?.images?.[0]));
        }
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };

    fetchProduct();
  }, [productId]);

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

  const isBuild = (product?.product?.is_build ?? product?.is_build) === 1;
  // --------------------
  // Compute filtered variations (only current metal + shape)
  // --------------------

  const filteredVariations = isBuild
    ? product?.metal_variations?.[selectedMetalId]?.[selectedShapeId] || []
    : product?.metal_variations?.[selectedMetalId] || [];

  useEffect(() => {
    if (!filteredVariations || filteredVariations.length === 0) {
      setSelectedWeight(null);
      setSelectedQualityId(null);
      setSelectedVariationIndex(0);
      return;
    }

    // pick first weight in groupedByWeight order
    const firstWeightKey = Object.keys(groupedByWeight)[0];

    if (firstWeightKey) {
      const firstVariationForWeight =
        groupedByWeight[firstWeightKey].variations[0];
      // set selected weight & quality to first ones
      setSelectedWeight(firstWeightKey);
      setSelectedQualityId(firstVariationForWeight?.diamond_quality_id ?? null);
      // set selected variation index globally
      const idx = filteredVariations.findIndex(
        (fv) => fv.id === firstVariationForWeight.id
      );
      setSelectedVariationIndex(idx >= 0 ? idx : 0);
      setMainImage(getImageUrl(firstVariationForWeight?.images?.[0]));
    } else {
      setSelectedWeight(null);
      setSelectedQualityId(null);
      setSelectedVariationIndex(0);
    }
    // We want this to run when selected metal/shape or product changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMetalId, selectedShapeId, product?.id]);

  if (!product || !product.product) return <LoadingDots />;

  // Group by weight so each weight appears once and contains its variations (qualities)
  const groupedByWeight = filteredVariations.reduce((acc, item) => {
    const key = item.weight ?? "NA";
    if (!acc[key]) {
      acc[key] = { weight: key, variations: [] };
    }
    acc[key].variations.push(item);
    return acc;
  }, {});

  const hasQuality = groupedByWeight[selectedWeight]?.variations?.some(
    (v) => v.diamond_quality_id && v.diamond_quality_name
  );

  // Keep weights in same order as filteredVariations by building ordered array
  const weightOptions = Object.values(groupedByWeight);

  // CHANGE: figure selected variation with/without shape
  const selectedVariation =
    filteredVariations?.[selectedVariationIndex] ||
    filteredVariations?.[0] ||
    null;

  const currentMedia = selectedVariation
    ? [
      // Add video first if it exists
      ...(selectedVariation.video
        ? [{ type: "video", src: getVideoUrl(selectedVariation.video) }]
        : []),
      // Then add all images
      ...(selectedVariation.images?.map((img) => ({
        type: "image",
        src: getImageUrl(img),
      })) || []),
    ]
    : [];
  // Navigation functions for mobile carousel
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % currentMedia.length);

  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentMedia.length) % currentMedia.length
    );

  const qualities = [
    { id: "ef-vs", label: "EF VS+" },
    { id: "f-g-si", label: "F/G SI+" },
  ];

  const {
    name,
    description,
    delivery_days,
    product_clarity,
    products_model,
    cut,
    stone_type,
  } = product?.product ?? {};

  const {
    id,
    price,
    original_price,
    weight,
    diamond_weight,
    metal_color,
    sku: variationSku,
    making_without_gst = 0,
    gold_gst_amount = 0,
    diamond_gst_amount = 0,
    making_gst_amount = 0,
    total_gst_amount = 0,
    gold_gst_rate = "0.00",
    diamond_gst_rate = "0.00",
    making_gst_rate = "0.00",
    price_without_gst = 0,
    price_with_tax = 0,
    gst_breakdown = [],
  } = selectedVariation || {};

  const toNumber = (v) => Number(v) || 0;

  const basePrice = toNumber(price);
  const baseOriginalPrice = toNumber(original_price);
  const makingCharges = toNumber(making_without_gst);
  const priceWithoutGST = toNumber(price_without_gst);
  const priceWithTax = toNumber(price_with_tax);

  // Calculate GST amounts from API
  const goldGst = toNumber(gold_gst_amount);
  const makingGst = toNumber(making_gst_amount);

  // Calculate total GST without diamond GST
  const totalGstWithoutDiamond = goldGst + makingGst;

  // MAIN PRICE DISPLAY (without GST) - basePrice + makingCharges ONLY
  const final_price = basePrice + makingCharges;
  const final_original_price = baseOriginalPrice + makingCharges;

  // For tax details section - price with GST
  const priceWithGST = basePrice + makingCharges + totalGstWithoutDiamond;
  const originalPriceWithGST = baseOriginalPrice + makingCharges + totalGstWithoutDiamond;

  // Rounding
  const round = (n) => Number(n.toFixed(2));

  const finalPriceRounded = round(final_price);
  const finalOriginalPriceRounded = round(final_original_price);

  const priceDifference = round(
    Math.max(finalOriginalPriceRounded - finalPriceRounded, 0)
  );

  const metalName = metal_color?.name || "-";
  const selectedShapeName = isBuild
    ? product.metal_variations?.[selectedMetalId]?.[selectedShapeId]?.[0]?.shape
      ?.name
    : null;

  const currentDate = new Date();
  const estimatedDays = delivery_days + 1; // add 1 extra day
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + estimatedDays);

  // Format the date (e.g., "Wed, Oct 8")
  const options = { weekday: "short", month: "short", day: "numeric" };
  const formattedDate = deliveryDate.toLocaleDateString("en-US", options);

  // Get selected carat weight
  const selectedCaratWeight = selectedVariation?.weight || null;

  // Create ringCartItem here
  const ringCartItem = {
    ...selectedVariation,
    sku: variationSku,
    name: name,
    price: price,
    image: mainImage,
    weight: weight,
    selectedMetal: selectedMetalId,
    shape: selectedShapeName || "",
    caratWeight: selectedCaratWeight || "",
  };

  const handleOpenSettingModal = () => {
    const cartItem = {
      ...selectedVariation,
      sku: variationSku,
      name: name,
      price: price,
      image: mainImage,
      weight: weight,
      selectedMetal: selectedMetalId,
      shape: selectedShapeName || "",
      caratWeight: selectedCaratWeight || "",
      productType: "build",
      itemQuantity: 1,
    };
    setModalProductData(cartItem);
    setShowSettingModal(true);
  };

  const handleChooseSetting = () => {
    if (diamond) {
      //  If diamond exists
      const productSlug = "buildProduct";
      navigate(`/product/${productSlug}`, {
        state: { diamond, ringCartItem, fromChooseSetting: false },
      });
    } else {
      //  If no diamond → redirect user to diamond selection
      setShowModal(true);
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
    // If it's the inquiry page, add productId as a query param
    if (item.path === "/inquiry") {
      navigate(`${item.path}?productId=${productId}`);
    } else {
      navigate(item.path);
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <>
      <div className="bg-white min-vh-100">
        {/* =============================================================================== */}
        {/* DESKTOP LAYOUT                                   */}
        {/* =============================================================================== */}
        <div className="d-none d-md-block">
          <div className="container">
            <div className="row" style={{ "--bs-gutter-x": "2.5rem" }}>
              {/* Image Thumbnails */}
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
                      disablePictureInPicture
                      controls={false}
                      controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                      tabIndex={-1}
                      className={`rounded thumbnail-gallery ${isVideo ? "selected" : ""
                        }`}
                      style={{
                        cursor: "pointer",
                        border: isVideo ? "2px solid #000" : "1px solid #ccc",
                        padding: "2px",
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
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
              </div>

              {/* Main Image */}
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

              {/* Product Details */}
              <div className="col-5">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="text-yellow-custom">★★★★★</div>
                  <span className="small text-muted">21 reviews</span>
                </div>
                <h1 className="h3 font-serif mb-2">{name}</h1>
                <p className="small text-muted mb-4">SKU#{variationSku}</p>
                {/* MAIN PRICE DISPLAY (without GST) - ONLY basePrice + makingCharges */}
                <div className="mb-4">
                  <span className="h3 fw-bold">₹{formatCurrency(finalPriceRounded)}</span>
                  <span className="fs-5 text-secondary text-decoration-line-through ms-2">
                    ₹{formatCurrency(finalOriginalPriceRounded)}
                  </span>
                  <span className="text-green-custom ms-2">
                    (₹{formatCurrency(priceDifference)} OFF)
                  </span>
                </div>
                {isBuild && selectedMetalId && (
                  <div className="product-variation__shape-group mb-3">
                    <small className="product-variation__shape-title">
                      SHAPE:&nbsp;
                      <span className="shape-name">
                        {product.metal_variations[selectedMetalId]?.[
                          selectedShapeId
                        ]?.[0]?.shape?.name || "N/A"}
                      </span>
                    </small>
                    <div className="d-flex flex-wrap gap-3 mt-1">
                      {Object.keys(
                        product.metal_variations[selectedMetalId]
                      ).map((shapeId) => {
                        const firstVar =
                          product.metal_variations[selectedMetalId][
                          shapeId
                          ][0] || {};
                        const shape = firstVar.shape || {};
                        const img = getShapeImageUrl(shape.image);

                        return (
                          <button
                            key={shapeId}
                            type="button"
                            className={`shape-option ${selectedShapeId === shapeId ? "active" : ""
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
                      })}
                    </div>
                  </div>
                )}
                <div className="mb-4">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="small fw-semibold">METAL COLOR</span>
                    <Info size={16} className="text-secondary" />
                    <span className="small">: {metalName}</span>
                  </div>

                  <div className="d-flex gap-2">
                    {Object.entries(product.metal_variations)
                      .sort(([aKey, aGroup], [bKey, bGroup]) => {
                        // For build products: pick first shape → first variation
                        const aMetal =
                          aGroup[Object.keys(aGroup)[0]][0].metal_color;
                        const bMetal =
                          bGroup[Object.keys(bGroup)[0]][0].metal_color;

                        const order = ["14k", "18k", "PL"]; // customize order
                        return (
                          order.indexOf(aMetal?.quality) -
                          order.indexOf(bMetal?.quality)
                        );
                      })
                      .map(([metalId, group]) => {
                        const metal =
                          group[Object.keys(group)[0]][0].metal_color;

                        return (
                          <div
                            key={metalId}
                            className={`option-circle ${selectedMetalId === metalId ? "active" : ""
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

                  {/* new chanes */}
                  <div className="d-flex flex-wrap gap-2">
                    {weightOptions.map((w, idx) => (
                      <button
                        key={w.weight + "-" + idx}
                        className={`product-variation__carat-pill ${selectedWeight === w.weight ? "active" : ""
                          }`}
                        onClick={() => {
                          // select weight -> pick first variation for that weight
                          setSelectedWeight(w.weight);
                          // pick first quality of this weight
                          const firstVar = w.variations[0];
                          setSelectedQualityId(
                            firstVar?.diamond_quality_id ?? null
                          );
                          // set selected variation index globally
                          const globalIndex = filteredVariations.findIndex(
                            (fv) => fv.id === firstVar.id
                          );
                          setSelectedVariationIndex(
                            globalIndex >= 0 ? globalIndex : 0
                          );
                          setMainImage(getImageUrl(firstVar?.images?.[0]));
                        }}
                      >
                        {w.weight || "NA"}
                      </button>
                    ))}
                  </div>

                  {/* ====== QUALITY BUTTONS (shown when a weight selected) ====== */}
                  {selectedWeight && hasQuality && (
                    <div className="mt-2">
                      <small className="text-muted">
                        Available qualities for {selectedWeight}:
                      </small>
                      <div className="d-flex flex-wrap gap-2 mt-1">
                        {(groupedByWeight[selectedWeight]?.variations || [])
                          .filter(
                            (v) =>
                              v.diamond_quality_id && v.diamond_quality_name
                          )
                          .map((v) => (
                            <button
                              key={v.id}
                              className={`btn border quality-btn px-3 py-2 ${selectedQualityId === v.diamond_quality_id
                                ? "active"
                                : ""
                                }`}
                              onClick={() => {
                                setSelectedQualityId(v.diamond_quality_id);
                                const globalIndex =
                                  filteredVariations.findIndex(
                                    (fv) => fv.id === v.id
                                  );
                                setSelectedVariationIndex(
                                  globalIndex >= 0 ? globalIndex : 0
                                );
                                setMainImage(getImageUrl(v.images?.[0]));
                              }}
                            >
                              {v.diamond_quality_name}
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  className="btn w-100 py-3 fw-semibold mb-3"
                  style={{ backgroundColor: "#0060AC", color: "white" }}
                  onClick={handleChooseSetting}
                >
                  CHOOSE THIS SETTING
                </button>

                {showModal && (
                  <DiamondSelectionModal
                    onClose={() => setShowModal(false)}
                    ringCartItem={ringCartItem}
                  />
                )}

                <button
                  className="btn w-100 py-3 fw-semibold mb-3"
                  style={{ backgroundColor: "#0060AC", color: "white" }}
                  onClick={handleOpenSettingModal}
                >
                  BUY SETTING ONLY
                </button>

                {showSettingModal && (
                  <RingSettingModal
                    onClose={() => setShowSettingModal(false)}
                    modalProductData={modalProductData}
                  />
                )}

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
                  <div className="row row-cols-2 g-2 mb-4">
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
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="small fw-semibold">SHARE:</span>
                    <SocialShare
                      id={id}
                      product={product.product}
                      mainImage={mainImage}
                      backendBaseUrl={
                        import.meta.env.VITE_BACKEND_URL ||
                        window.location.origin
                      }
                    />
                  </div>

                  <div className="product-details-container">
                    {/* Product Details Section */}
                    <div>
                      <div
                        className="detail-section-header"
                        onClick={() => toggleSection("product")}
                      >
                        <h5 className="detail-section-title">
                          Product Details
                        </h5>
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

                          <span className="detail-label">
                            Total Carat Weight
                          </span>
                          <span className="detail-value">{diamond_weight}</span>

                          <span className="detail-label">Cut</span>
                          <span className="detail-value">{cut || "NA"}</span>
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

                    {/* Price & Tax Details Section */}
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
                        <div className="price-breakup-section">

                          <div className="price-breakup-totals">
                            <div className="price-breakup-row d-flex justify-content-between mb-2">
                              <span><strong>Bse Price</strong></span>
                              <span>₹{formatCurrency(basePrice)}</span>
                            </div>
                            <div className="price-breakup-row d-flex justify-content-between mb-2">
                              <span><strong>Making Charges</strong></span>
                              <span>₹{formatCurrency(makingCharges)}</span>
                            </div>
                            <div className="price-breakup-row d-flex justify-content-between mb-2">
                              <span><strong>Subtotal</strong></span>
                              <span>₹{formatCurrency(finalPriceRounded)}</span>
                            </div>


                            <div className="gst-breakdown mt-3 mb-3">
                              <h6 className="mb-2"><strong>GST Breakdown:</strong></h6>
                              <div className="price-breakup-row d-flex justify-content-between mb-1 ps-3">
                                <span>Gold GST ({gold_gst_rate}%)</span>
                                <span>₹{formatCurrency(goldGst)}</span>
                              </div>
                              <div className="price-breakup-row d-flex justify-content-between mb-1 ps-3">
                                <span>Making Charges GST ({making_gst_rate}%)</span>
                                <span>₹{formatCurrency(makingGst)}</span>
                              </div>
                              <div className="price-breakup-row d-flex justify-content-between border-top pt-2">
                                <span><strong>Total GST</strong></span>
                                <span><strong>₹{formatCurrency(totalGstWithoutDiamond)}</strong></span>
                              </div>
                            </div>


                            <div className="price-breakup-grand-total d-flex justify-content-between border-top pt-2 mt-3">
                              <h6 className="mb-0"><strong>Grand Total</strong></h6>
                              <h6 className="mb-0"><strong>₹{formatCurrency(priceWithGST)}</strong></h6>
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
                                <div className="mb-0 mt-2"><strong>Grand Total:</strong></div>
                              </div>
                              <div className="col-6 text-end">
                                <div className="mb-1">₹{formatCurrency(basePrice)}</div>
                                <div className="mb-1">₹{formatCurrency(makingCharges)}</div>
                                <div className="mb-1">₹{formatCurrency(goldGst)}</div>
                                <div className="mb-1">₹{formatCurrency(makingGst)}</div>
                                <div className="mb-0 mt-2"><strong>₹{formatCurrency(priceWithGST)}</strong></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Need Help Button */}
                    <button className="help-button">
                      <MessageCircle size={20} />
                      Need Help?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===============================================================================
         /* MOBILE LAYOUT */}
        {/* ===============================================================================
         */}
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
            {/* MAIN PRICE DISPLAY MOBILE (without GST) */}
            <div className="mb-4">
              <span className="h4 fw-bold">₹{formatCurrency(finalPriceRounded)}</span>
              <span className="text-secondary text-decoration-line-through ms-2">
                ₹{formatCurrency(finalOriginalPriceRounded)}
              </span>
              <span className="text-green-custom small ms-2">
                (₹{formatCurrency(priceDifference)} OFF)
              </span>
            </div>
            {isBuild && selectedMetalId && (
              <div className="product-variation__shape-group mb-3">
                <small className="product-variation__shape-title">
                  SHAPE:&nbsp;
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
                          className={`shape-option ${selectedShapeId === shapeId ? "active" : ""
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
            <div className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="small fw-semibold">METAL COLOR:</span>
                <span className="small">{metalName}</span>
              </div>
              <div className="d-flex gap-2">
                {Object.entries(product.metal_variations)
                  .sort(([aKey, aGroup], [bKey, bGroup]) => {
                    // For build products: pick first shape → first variation
                    const aMetal =
                      aGroup[Object.keys(aGroup)[0]][0].metal_color;
                    const bMetal =
                      bGroup[Object.keys(bGroup)[0]][0].metal_color;

                    const order = ["14k", "18k", "PL"]; // customize order
                    return (
                      order.indexOf(aMetal?.quality) -
                      order.indexOf(bMetal?.quality)
                    );
                  })
                  .map(([metalId, group]) => {
                    const metal = group[Object.keys(group)[0]][0].metal_color;

                    return (
                      <div
                        key={metalId}
                        className={`option-circle ${selectedMetalId === metalId ? "active" : ""
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

              {/* new chanes */}
              <div className="d-flex flex-wrap gap-2">
                {weightOptions.map((w, idx) => (
                  <button
                    key={w.weight + "-" + idx}
                    className={`product-variation__carat-pill ${selectedWeight === w.weight ? "active" : ""
                      }`}
                    onClick={() => {
                      // select weight -> pick first variation for that weight
                      setSelectedWeight(w.weight);
                      // pick first quality of this weight
                      const firstVar = w.variations[0];
                      setSelectedQualityId(
                        firstVar?.diamond_quality_id ?? null
                      );
                      // set selected variation index globally
                      const globalIndex = filteredVariations.findIndex(
                        (fv) => fv.id === firstVar.id
                      );
                      setSelectedVariationIndex(
                        globalIndex >= 0 ? globalIndex : 0
                      );
                      setMainImage(getImageUrl(firstVar?.images?.[0]));
                    }}
                  >
                    {w.weight || "NA"}
                  </button>
                ))}
              </div>

              {/* ====== QUALITY BUTTONS (shown when a weight selected) ====== */}
              {selectedWeight && hasQuality && (
                <div className="mt-2">
                  <small className="text-muted">
                    Available qualities for {selectedWeight}:
                  </small>
                  <div className="d-flex flex-wrap gap-2 mt-1">
                    {(groupedByWeight[selectedWeight]?.variations || [])
                      .filter(
                        (v) => v.diamond_quality_id && v.diamond_quality_name
                      )
                      .map((v) => (
                        <button
                          key={v.id}
                          className={`btn border quality-btn px-3 py-2 ${selectedQualityId === v.diamond_quality_id
                            ? "active"
                            : ""
                            }`}
                          onClick={() => {
                            setSelectedQualityId(v.diamond_quality_id);
                            const globalIndex = filteredVariations.findIndex(
                              (fv) => fv.id === v.id
                            );
                            setSelectedVariationIndex(
                              globalIndex >= 0 ? globalIndex : 0
                            );
                            setMainImage(getImageUrl(v.images?.[0]));
                          }}
                        >
                          {v.diamond_quality_name}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {showModal && (
              <DiamondSelectionModal
                onClose={() => setShowModal(false)}
                ringCartItem={ringCartItem}
              />
            )}

            <button
              className="btn w-100 py-3 fw-semibold mb-3"
              style={{ backgroundColor: "#0060AC", color: "white" }}
              onClick={handleOpenSettingModal}
            >
              BUY SETTING ONLY
            </button>

            {showSettingModal && (
              <RingSettingModal
                onClose={() => setShowSettingModal(false)}
                modalProductData={modalProductData}
              />
            )}

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

            <div className="d-flex align-items-center gap-3 pt-2">
              <span className="small fw-semibold">SHARE:</span>
              <SocialShare
                id={id}
                product={product.product}
                mainImage={mainImage}
                backendBaseUrl={
                  import.meta.env.VITE_BACKEND_URL || window.location.origin
                }
              />
            </div>

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
                      {!isNaN(parseFloat(diamond_weight) + parseFloat(weight))
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
                    <span className="detail-value">{stone_type || "NA"}</span>

                    <span className="detail-label">Total Carat Weight</span>
                    <span className="detail-value">{diamond_weight}</span>

                    <span className="detail-label">Cut</span>
                    <span className="detail-value">{cut || "NA"}</span>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns Section */}
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
                    30-day return policy. Items must be in original condition
                    with all packaging and documentation.
                  </p>
                </div>
              </div>

              {/* Lifetime Warranty Section */}
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
                  <div className="price-breakup-section">

                    <div className="price-breakup-totals">
                      <div className="price-breakup-row d-flex justify-content-between mb-2">
                        <span><strong>Price</strong></span>
                        <span>₹{formatCurrency(basePrice)}</span>
                      </div>
                      <div className="price-breakup-row d-flex justify-content-between mb-2">
                        <span><strong>Making Charges</strong></span>
                        <span>₹{formatCurrency(makingCharges)}</span>
                      </div>
                      <div className="price-breakup-row d-flex justify-content-between mb-2">
                        <span><strong>Subtotal</strong></span>
                        <span>₹{formatCurrency(finalPriceRounded)}</span>
                      </div>


                      <div className="gst-breakdown mt-3 mb-3">
                        <h6 className="mb-2"><strong>GST Breakdown:</strong></h6>
                        <div className="price-breakup-row d-flex justify-content-between mb-1 ps-3">
                          <span>Gold GST ({gold_gst_rate}%)</span>
                          <span>₹{formatCurrency(goldGst)}</span>
                        </div>
                        <div className="price-breakup-row d-flex justify-content-between mb-1 ps-3">
                          <span>Making Charges GST ({making_gst_rate}%)</span>
                          <span>₹{formatCurrency(makingGst)}</span>
                        </div>
                        <div className="price-breakup-row d-flex justify-content-between border-top pt-2">
                          <span><strong>Total GST</strong></span>
                          <span><strong>₹{formatCurrency(totalGstWithoutDiamond)}</strong></span>
                        </div>
                      </div>


                      <div className="price-breakup-grand-total d-flex justify-content-between border-top pt-2 mt-3">
                        <h6 className="mb-0"><strong>Grand Total</strong></h6>
                        <h6 className="mb-0"><strong>₹{formatCurrency(priceWithGST)}</strong></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Add to Cart Bar */}
          {showMobileCart && (
            <div className=" bg-white p-3 pt-1 border-top">
              <div className="d-flex align-items-center justify-content-between gap-3">
                <div>
                  <div className="small text-muted text-decoration-line-through">
                    ₹{formatCurrency(finalOriginalPriceRounded)}
                  </div>
                  <div className="h5 fw-bold mb-0">₹{formatCurrency(finalPriceRounded)}</div>
                </div>
                <button
                  className="btn flex-grow-1 py-2 fw-semibold"
                  style={{ backgroundColor: "#0060AC", color: "white" }}
                  onClick={handleChooseSetting}
                >
                  CHOOSE THIS SETTING
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RingProductView;