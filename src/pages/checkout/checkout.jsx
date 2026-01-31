import React, { useState, useEffect } from "react";
import axiosClient from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../cart/CartContext";
import { getPriceBreakup } from "../../utils/priceBreakup";
import BuyNow from "./BuyNow";
import "./checkout.css";

const Checkout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { clearCart, getItemId, cartItems, getSubTotal, addToCart } = useCart();

  const [selectedMethod, setSelectedMethod] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    first_name: "",
    last_name: "",
    address: "",
    apartment: "",
    city: "",
    zip_code: "",
    phone: "",
    smsOffers: false,
  });

  const [discountCode, setDiscountCode] = useState("");
  const [discountResponse, setDiscountResponse] = useState(null);
  const [discountError, setDiscountError] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const [appliedCode, setAppliedCode] = useState(null);
  const [discountValue, setDiscountValue] = useState(0);
  const [sameAsDelivery, setSameAsDelivery] = useState(true);




  const getTotalAmount = () => {
    const subtotal = getSubTotal(); // Cart subtotal
    if (discountResponse?.final_amount) {
      return Number(discountResponse.final_amount); // Discount applied
    }
    return subtotal;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 1. Validation Logic
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Basic Validation

    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip_code) newErrors.zip_code = "ZIP code is required";
    if (!formData.phone) newErrors.phone = "Phone is required";

    // Billing Validation (Only if checkbox is unchecked)
    if (!sameAsDelivery) {
      if (!formData.billing_country)
        newErrors.billing_country = "Billing country is required";
      if (!formData.billing_first_name)
        newErrors.billing_first_name = "Billing First name is required";
      if (!formData.billing_address)
        newErrors.billing_address = "Billing Address is required";
      if (!formData.billing_city)
        newErrors.billing_city = "Billing City is required";
      // ... add other billing fields
    }

    setErrors(newErrors);

    // If there are keys in newErrors, form is invalid
    if (Object.keys(newErrors).length > 0) {
      isValid = false;
    }

    return isValid;
  };


  useEffect(() => {
    const savedAddressRaw = localStorage.getItem("pendingAddress");
    const savedAddress = savedAddressRaw ? JSON.parse(savedAddressRaw) : null;

    if (savedAddress) {
      // Restore form
      setFormData(savedAddress.formData || {});
      setSelectedMethod(savedAddress.selectedMethod || "");

      //  Restore cart if it's empty
      if (
        (!cartItems || cartItems.length === 0) &&
        savedAddress.cartPayload?.length > 0
      ) {
        savedAddress.cartPayload.forEach((item) => {
          // re-add each item into context
          // CartContext.addToCart must be imported from useCart
          addToCart(item);
        });
      }
    } else if (user) {
      const fetchAddress = async () => {
        try {
          const res = await axiosClient.get(`/api/user-address/${user.id}`);
          const addr = res.data;
          if (addr) {
            setFormData((prev) => ({
              ...prev,
              first_name: addr.first_name,
              last_name: addr.last_name,
              country: addr.country,
              apartment: addr.address?.apartment || "",
              address: addr.address?.street || "",
              city: addr.address?.city || "",
              zip_code: addr.address?.zip || "",
              phone: addr.phone_number,
              smsOffers: addr.is_get_offer === 1,
            }));
          }
        } catch (err) {
          console.error("No existing address found.");
        }
      };
      fetchAddress();
    }
  }, [user, addToCart]);


  // Helpers
  const getImageUrl = (img) => {
    const fallback = `${import.meta.env.VITE_BACKEND_URL
      }/storage/variation_images/No_Image_Available.jpg`;
    return img ? `${import.meta.env.VITE_BACKEND_URL}${img}` : fallback;
  };

  const diamondType = (type) =>
    type === 1 ? "Natural " : type === 2 ? "Lab " : "N/A";
  const isVisible = (id) => (selectedMethod === id ? "" : "d-none");

  const getCartGrandTotal = () => {
    return cartItems.reduce((total, item) => {
      const qty = Number(item.itemQuantity || 1);

      // Jewelry / Gift → price_with_tax already includes GST
      if (item.productType === "jewelry" || item.productType === "gift") {
        return (
          total +
          Number(item.price_with_tax || 0) * qty
        );
      }

      // Combo → ring + diamond price
      if (item.productType === "combo") {
        const ringPrice = Number(item.ring?.price || 0);
        const diamondPrice = Number(item.diamond?.price || 0);
        return total + (ringPrice + diamondPrice) * qty;
      }

      // Diamond / Build / Others
      return total + Number(item.price || 0) * qty;
    }, 0);
  };

  // Handle payment method selection
  const handleApplyDiscount = async () => {
    setDiscountError("");
    setIsApplying(true);
    try {
      const today = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD
      const totalAmount = getCartGrandTotal();

      const res = await axiosClient.post("/api/apply-discount", {
        code: discountCode,
        cart_total: totalAmount,
        date: today,
      });
      setDiscountResponse(res.data.data);
      setDiscountError("");
    } catch (error) {
      const message = error.response?.data?.message || "Invalid code";
      setDiscountError(message);
      setDiscountResponse(null);
    } finally {
      setIsApplying(false);
    }
  };

  const getFinalTotal = () => {
    const grandTotal = getCartGrandTotal();
    const discount = Number(discountResponse?.discount || 0);
    return Math.max(grandTotal - discount, 0);
  };
  // const totalAmount = getTotalAmount();
  const totalAmount = getFinalTotal()

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 order-lg-1 order-2">
            {/* Redeem Section */}


            {/* Contact Section */}
            <div className="container my-2" style={{ maxWidth: "700px" }}>
              {/* <div className="section-title-checkout d-flex justify-content-between align-items-center">
                <span>Contact</span>
                {user ? (
                  <span className="text-muted small">{user.email}</span>
                ) : (
                  <Link
                    className="link text-primary align-items_center"
                    to="/signin"
                  >
                    Log in
                  </Link>
                )}
              </div>

              {!user && (
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className={`form-control form-control-lg ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              )}

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="emailOffers"
                  checked={formData.emailOffers}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="emailOffers">
                  Email me with news and offers
                </label>
              </div> */}

              <div className="section-title-checkout">Delivery Address</div>

              <div className="mb-3">
                <select
                  className={`form-select form-select-lg ${errors.country ? "is-invalid" : ""
                    }`}
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value="">Select a country</option>
                  <option value="Canada">Canada</option>
                  <option value="India">India</option>
                </select>

                {/* You were missing this part below */}
                {errors.country && (
                  <div className="invalid-feedback">{errors.country}</div>
                )}
              </div>

              <div className="row g-2 mb-3">
                <div className="col-md">
                  <input
                    type="text"
                    name="first_name"
                    className={`form-control form-control-lg ${errors.first_name ? "is-invalid" : ""
                      }`}
                    placeholder="First name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                  />
                  {errors.first_name && (
                    <div className="invalid-feedback">{errors.first_name}</div>
                  )}
                </div>
                <div className="col-md">
                  <input
                    type="text"
                    name="last_name"
                    className={`form-control form-control-lg ${errors.last_name ? "is-invalid" : ""
                      }`}
                    placeholder="Last name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                  />
                  {errors.last_name && (
                    <div className="invalid-feedback">{errors.last_name}</div>
                  )}
                </div>
              </div>

              <div className="mb-3 position-relative">
                <input
                  type="text"
                  name="address"
                  className={`form-control form-control-lg ${errors.address ? "is-invalid" : ""
                    }`}
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <span className="input-icon">
                  <i className="bi bi-search"></i>
                </span>
                {errors.address && (
                  <div className="invalid-feedback">{errors.address}</div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="apartment"
                  className="form-control form-control-lg"
                  placeholder="Apartment, suite, etc. (optional)"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />
              </div>

              <div className="row g-2 mb-3">
                <div className="col-md-4">
                  <input
                    type="text"
                    name="city"
                    className={`form-control form-control-lg ${errors.city ? "is-invalid" : ""
                      }`}
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  {errors.city && (
                    <div className="invalid-feedback">{errors.city}</div>
                  )}
                </div>

                <div className="col-md-4">
                  <input
                    type="text"
                    name="zip_code"
                    className={`form-control form-control-lg ${errors.zip_code ? "is-invalid" : ""
                      }`}
                    placeholder="ZIP code"
                    value={formData.zip_code}
                    onChange={handleInputChange}
                  />
                  {errors.zip_code && (
                    <div className="invalid-feedback">{errors.zip_code}</div>
                  )}
                </div>
              </div>

              <div className="mb-3 position-relative">
                <input
                  type="text"
                  name="phone"
                  className={`form-control form-control-lg ${errors.phone ? "is-invalid" : ""
                    }`}
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <span className="input-icon">
                  <i className="bi bi-question-circle"></i>
                </span>
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              {/* <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="smsOffers"
                  name="smsOffers"
                  checked={formData.smsOffers}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="smsOffers">
                  Text me with news and offers
                </label>
              </div> */}
            </div>

            <div className="mt-2 border-top">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="section-title-checkout">Billing Address</div>
              </div>

              {/* The Checkbox Toggle */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="sameAsDelivery"
                  checked={sameAsDelivery}
                  onChange={(e) => setSameAsDelivery(e.target.checked)}
                />
                <label
                  className="form-check-label user-select-none"
                  htmlFor="sameAsDelivery"
                >
                  Billing address is the same as delivery address
                </label>
              </div>

              {/* Conditional Rendering: Only show if unchecked */}
              {!sameAsDelivery && (
                <div className="billing-form-container fade-in">
                  {/* Country Select */}
                  <div className="mb-3">
                    <select
                      className={`form-select form-select-lg ${errors.billing_country ? "is-invalid" : ""
                        }`}
                      name="billing_country"
                      value={formData.billing_country}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a country</option>
                      <option value="Canada">Canada</option>
                      <option value="India">India</option>
                    </select>

                    {/* Added Error Message Display */}
                    {errors.billing_country && (
                      <div className="invalid-feedback">
                        {errors.billing_country}
                      </div>
                    )}
                  </div>

                  {/* Name Fields */}
                  <div className="row g-2 mb-3">
                    <div className="col-md">
                      <input
                        type="text"
                        name="billing_first_name"
                        className={`form-control form-control-lg ${errors.billing_first_name ? "is-invalid" : ""
                          }`}
                        placeholder="First name"
                        value={formData.billing_first_name}
                        onChange={handleInputChange}
                      />
                      {errors.billing_first_name && (
                        <div className="invalid-feedback">
                          {errors.billing_first_name}
                        </div>
                      )}
                    </div>
                    <div className="col-md">
                      <input
                        type="text"
                        name="billing_last_name"
                        className={`form-control form-control-lg ${errors.billing_last_name ? "is-invalid" : ""
                          }`}
                        placeholder="Last name"
                        value={formData.billing_last_name}
                        onChange={handleInputChange}
                      />
                      {errors.billing_last_name && (
                        <div className="invalid-feedback">
                          {errors.billing_last_name}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Address Field */}
                  <div className="mb-3 position-relative">
                    <input
                      type="text"
                      name="billing_address"
                      className={`form-control form-control-lg ${errors.billing_address ? "is-invalid" : ""
                        }`}
                      placeholder="Address"
                      value={formData.billing_address}
                      onChange={handleInputChange}
                    />
                    <span className="input-icon">
                      <i className="bi bi-search"></i>
                    </span>
                    {errors.billing_address && (
                      <div className="invalid-feedback">
                        {errors.billing_address}
                      </div>
                    )}
                  </div>

                  {/* Apartment Field */}
                  <div className="mb-3">
                    <input
                      type="text"
                      name="billing_apartment"
                      className="form-control form-control-lg"
                      placeholder="Apartment, suite, etc. (optional)"
                      value={formData.billing_apartment}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* City & Zip Field */}
                  <div className="row g-2 mb-3">
                    <div className="col-md-4">
                      <input
                        type="text"
                        name="billing_city"
                        className={`form-control form-control-lg ${errors.billing_city ? "is-invalid" : ""
                          }`}
                        placeholder="City"
                        value={formData.billing_city}
                        onChange={handleInputChange}
                      />
                      {errors.billing_city && (
                        <div className="invalid-feedback">
                          {errors.billing_city}
                        </div>
                      )}
                    </div>

                    <div className="col-md-4">
                      <input
                        type="text"
                        name="billing_zip_code"
                        className={`form-control form-control-lg ${errors.billing_zip_code ? "is-invalid" : ""
                          }`}
                        placeholder="ZIP code"
                        value={formData.billing_zip_code}
                        onChange={handleInputChange}
                      />
                      {errors.billing_zip_code && (
                        <div className="invalid-feedback">
                          {errors.billing_zip_code}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="mb-3 position-relative">
                    <input
                      type="text"
                      name="billing_phone"
                      className={`form-control form-control-lg ${errors.billing_phone ? "is-invalid" : ""
                        }`}
                      placeholder="Phone"
                      value={formData.billing_phone}
                      onChange={handleInputChange}
                    />
                    <span className="input-icon">
                      <i className="bi bi-question-circle"></i>
                    </span>
                    {errors.billing_phone && (
                      <div className="invalid-feedback">
                        {errors.billing_phone}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <BuyNow
              cartItems={cartItems}
              totalPrice={totalAmount}
              user={user} // From your AuthContext
              formData={formData} // Your form state
              sameAsDelivery={sameAsDelivery} // Checkbox state
              validate={validateForm}
              discountResponse={discountResponse}
            />
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 order-lg-2 order-1">
            <div className="container my-5" style={{ maxWidth: "600px" }}>
              <div className="product-summary">

                {cartItems?.map((item) => {
                  const itemId = getItemId(item);

                  let unitPrice;
                  if (item.productType === "combo") {
                    unitPrice =
                      Number(item.ring?.price || 0) +
                      Number(item.diamond?.price || 0);
                  } else {
                    unitPrice = Number(item.price || 0);
                  }

                  const qty = Number(item.itemQuantity || 1);
                  const total = (unitPrice * qty).toFixed(2);

                  let imageUrl = null;
                  if (item.productType === "diamond") {
                    imageUrl = item.image_link || "images/images.jpeg";
                  } else if (item.productType === "combo" && item.ring?.images?.[0]) {
                    imageUrl = getImageUrl(item.ring.images[0]);
                  } else if (item.images?.[0]) {
                    imageUrl = getImageUrl(item.images[0]);
                  }

                  const showBreakup =
                    item.productType === "jewelry" || item.productType === "gift" || item.productType === "build" || item.productType === "combo" || item.productType === "diamond";

                  const breakup = showBreakup ? getPriceBreakup(item) : null;

                  return (
                    <div key={itemId} className="mb-3">

                      {/* ITEM ROW (UNCHANGED DESIGN) */}
                      <div className="d-flex align-items-start">
                        <div className="me-3 position-relative">
                          {imageUrl ? (
                            <img src={imageUrl} className="product-img" />
                          ) : (
                            <span>{item.name}</span>
                          )}

                          <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-dark">
                            {qty}
                          </span>
                        </div>

                        <div className="product-info flex-grow-1">
                          {item.productType === "diamond" && (
                            <>
                              <strong>
                                {item.carat_weight} Carat {item.shape?.name}{" "}
                                {diamondType(item.diamond_type)} Diamond
                              </strong>
                              <br />
                              <small>Color: {item.color?.name}</small>
                              <small>Clarity: {item.clarity?.name}</small>
                              <small>Cut: {item.cut?.full_name}</small>
                            </>
                          )}

                          {item.productType === "gift" && (
                            <>
                              <strong>{item.name || "Jewelry Product"}</strong>
                              <small>Weight: {item.weight || "N/A"}g</small>
                              <small>
                                Metal Color: {item.metal_color?.name || "N/A"}
                              </small>
                              <small>
                                Protection Plan:{" "}
                                {item.selectedPlan?.toUpperCase() || "N/A"}
                              </small>
                            </>
                          )}

                          {item.productType === "combo" && (
                            <>
                              <strong>{item.ring?.name}</strong>
                              <small>
                                Engagement Ring with {item.diamond?.carat_weight} ct{" "}
                                {item.diamond?.shape?.name}{" "}
                                {diamondType(item.diamond?.diamond_type)} Diamond
                              </small>
                              <small>
                                Metal Color {item.ring?.metal_color?.name || "N/A"}
                              </small>
                              <small>Size {item.size}</small>
                              <small>Shape {item.diamond?.shape?.name}</small>
                            </>
                          )}

                          {item.productType === "build" && (
                            <>
                              <strong>{item.name || "Custom Jewelry"}</strong>
                              <small>Metal Color: {item.metal_color?.name}</small>
                              <small>Shape: {item.shape}</small>
                              <small>Size: {item.size}</small>
                              <small>Type: {item.diamondtype}</small>
                            </>
                          )}
                        </div>


                        <div className="text-end ms-3">
                          <strong>₹{total}</strong>
                        </div>
                      </div>

                      {/* PRICE BREAKUP (DETAIL PAGE STYLE) */}
                      {breakup && (
                        <div className="price-breakup-section ps-5 mt-2 small">

                          <div className="d-flex justify-content-between mb-1">
                            <span>Base Price</span>
                            <span>₹{breakup.basePrice.toFixed(2)}</span>
                          </div>

                          <div className="d-flex justify-content-between mb-1">
                            <span>Making Charges</span>
                            <span>₹{breakup.makingCharges.toFixed(2)}</span>
                          </div>

                          <div className="d-flex justify-content-between fw-semibold mb-2">
                            <span>Subtotal</span>
                            <span>₹{breakup.subtotal.toFixed(2)}</span>
                          </div>

                          <div className="ps-2 mb-2">
                            <div className="fw-semibold mb-1">GST Breakdown</div>

                            <div className="d-flex justify-content-between">
                              <span>Gold GST ({breakup.goldGstRate}%)</span>
                              <span>₹{breakup.goldGst.toFixed(2)}</span>
                            </div>

                            <div className="d-flex justify-content-between">
                              <span>Making GST ({breakup.makingGstRate}%)</span>
                              <span>₹{breakup.makingGst.toFixed(2)}</span>
                            </div>

                            {breakup.diamondGst > 0 && (
                              <div className="d-flex justify-content-between">
                                <span>Diamond GST ({breakup.diamondGstRate}%)</span>
                                <span>₹{breakup.diamondGst.toFixed(2)}</span>
                              </div>
                            )}

                            <div className="d-flex justify-content-between border-top pt-1 mt-1 fw-semibold">
                              <span>Total GST</span>
                              <span>₹{breakup.totalGst.toFixed(2)}</span>
                            </div>
                          </div>

                          <div className="d-flex justify-content-between border-top pt-2 fw-bold">
                            <span>Item Total</span>
                            <span>₹{breakup.grandTotal.toFixed(2)}</span>
                          </div>

                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Discount Code */}
                <div className="discount-box input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Discount code or gift card"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleApplyDiscount}
                    disabled={isApplying}
                  >
                    Apply
                  </button>
                </div>

                {discountError && (
                  <div className="text-danger mb-2">{discountError}</div>
                )}

                {discountResponse && (
                  <div className="alert alert-success mt-2">
                    Discount applied: {discountResponse.coupon_code} – ₹
                    {discountResponse.discount}
                  </div>
                )}


                {/* SUBTOTAL + TOTAL (UNCHANGED) */}
                {/* ORDER GRAND TOTAL (ALL CART ITEMS) */}
                <div className="d-flex justify-content-between mb-2">
                  <span>Items Subtotal</span>
                  <span>₹{getCartGrandTotal().toFixed(2)}</span>
                </div>

                {/* Discount Row */}
                {discountResponse && (
                  <div className="d-flex justify-content-between text-success mb-2">
                    <span>Discount</span>
                    <span>- ₹{discountResponse.discount}</span>
                  </div>
                )}

                <div className="d-flex justify-content-between border-top pt-3">
                  <strong>Grand Total</strong>
                  <strong>₹{getFinalTotal().toFixed(2)}</strong>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Checkout;
