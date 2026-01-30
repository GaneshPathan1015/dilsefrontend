<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 order-lg-2 order-1">
    <div className="container my-5" style={{ maxWidth: "600px" }}>
        <div className="product-summary">
            {/* Loop over cartItems */}

            {cartItems?.map((item) => {
                const itemId = getItemId(item);

                let unitPrice;
                if (item.productType === "combo") {
                    const ringPrice = Number(item.ring?.price ?? 0);
                    const diamondPrice = Number(item.diamond?.price ?? 0);
                    unitPrice = ringPrice + diamondPrice;
                } else {
                    unitPrice = Number(item.price ?? 0);
                }

                const qty = Number(item.itemQuantity ?? 1);
                const total = (unitPrice * qty).toFixed(2);

                let imageUrl = null;
                if (item.productType === "diamond") {
                    imageUrl = item.image_link
                        ? item.image_link
                        : "images/images.jpeg";
                } else if (
                    item.productType === "combo" &&
                    item.ring?.images?.[0]
                ) {
                    imageUrl = getImageUrl(item.ring.images[0]);
                } else if (item.images?.[0]) {
                    imageUrl = getImageUrl(item.images[0]);
                }

                return (
                    <div className="d-flex align-items-start mb-3" key={itemId}>
                        {/* IMAGE OR ALT */}
                        <div className="me-3 position-relative">
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={item.name || "Product"}
                                    className="product-img"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none"; // hide broken img
                                        e.currentTarget.parentNode.innerHTML = `<span>${item.name || "Product"
                                            }</span>`;
                                    }}
                                />
                            ) : (
                                <span className="no-image-text">
                                    {item.name || "Product"}
                                </span>
                            )}

                            <span
                                className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-dark"
                                style={{ fontSize: "0.75rem" }}
                            >
                                {qty}
                            </span>
                        </div>

                        {/* PRODUCT INFO */}
                        <div className="product-info flex-grow-1">
                            {item.productType === "diamond" && (
                                <>
                                    <strong>
                                        {item.carat_weight} Carat {item.shape?.name}{" "}
                                        {diamondType(item.diamond_type)}
                                        Diamond
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
                                        Metal Color: {item.metal_color.name || "N/A"}
                                    </small>
                                    <small>
                                        Protection Plan:
                                        {item.selectedPlan?.toUpperCase() || "N/A"}
                                    </small>
                                </>
                            )}

                            {item.productType === "combo" && (
                                <>
                                    <strong> {item.ring?.name}</strong>
                                    <small>
                                        Engagement Ring with {item.diamond?.carat_weight}
                                        ct {item.diamond?.shape?.name}{" "}
                                        {diamondType(item.diamond.diamond_type)}
                                        Diamond
                                    </small>
                                    <small>
                                        Metal Color {item.ring.metal_color.name || "N/A"}{" "}
                                    </small>
                                    <small>Size {item.size}</small>
                                    <small>Shape {item.diamond?.shape?.name} </small>
                                </>
                            )}

                            {item.productType === "build" && (
                                <>
                                    {/* engagement orderd */}
                                    <strong>{item.name || "Custom Jewelry"}</strong>
                                    <small>Metal Color: {item.metal_color.name}</small>
                                    <small>Shape: {item.shape}</small>
                                    <small>Size: {item.size}</small>
                                    <small>Type: {item.diamondtype}</small>
                                </>
                            )}
                        </div>

                        {/* ITEM TOTAL PRICE */}
                        <div className="text-end ms-3">
                            <strong>₹{total}</strong>
                        </div>
                    </div>
                );
            })}

            {/* Discount Code */}
            <div className="discount-box input-group mb-4">
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
                    Discount applied: {discountResponse.coupon_code} - ₹
                    {discountResponse.discount}
                    <br />
                    Final amount: ₹{discountResponse.final_amount}
                </div>
            )}

            {/* Subtotal */}
            <div className="d-flex justify-content-between mb-2">
                <div className="text-gray">Subtotal</div>
                <div>₹{getTotalAmount().toFixed(2)}</div>
            </div>

            {/* Shipping */}
            <div className="d-flex justify-content-between mb-3">
                <div className="text-gray">
                    Shipping{" "}
                    <span title="Shipping will be calculated after entering address">
                        ❔
                    </span>
                </div>
                <div className="text-gray">Enter shipping address</div>
            </div>

            {/* Total */}
            <div className="d-flex justify-content-between align-items-center border-top pt-3">
                <div>
                    <strong>Total</strong>
                </div>
                <div>
                    <span className="currency">INR</span>{" "}
                    <span className="total-price">
                        ₹{getTotalAmount().toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>