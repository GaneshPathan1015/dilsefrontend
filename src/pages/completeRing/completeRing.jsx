import React, { useState } from "react";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import CompleteTabs from "./completeTabs";
import { useCart } from "../../cart/CartContext";

const CompleteRing = () => {
  const location = useLocation();
  const { diamond, ringCartItem, fromChooseSetting } = location.state;
  const [activeKey, setActiveKey] = useState(null); // for the lower details accordion
  const [weddingBandOn, setWeddingBandOn] = useState(false);
  const [plan, setPlan] = useState("lifetime");
  const [selectedSize, setSelectedSize] = useState("");
  const ringPrice = parseFloat(ringCartItem?.price || 0);
  const regularringPrice = parseFloat(ringCartItem?.original_price || 0);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const diamondPrice = parseFloat(diamond?.price || 0);

  const totalPrice = (ringPrice + diamondPrice).toFixed(2);
  const totalRegularPrice = (regularringPrice + diamondPrice).toFixed(2);

  const sizes = [
    "3",
    "3.25",
    "3.50",
    "3.75",
    "4.00",
    "4.25",
    "4.50",
    "4.75",
    "5.00",
    "5.25",
    "5.50",
    "5.75",
    "6.00",
    "6.25",
    "6.50",
    "6.75",
    "7.00",
    "7.25",
    "7.50",
    "7.75",
    "8.00",
    "8.25",
    "8.50",
    "8.75",
    "9.00",
    "9.25",
    "9.50",
    "9.75",
    "10.00",
    "10.25",
    "10.50",
    "10.75",
    "11.00",
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a ring size before adding to cart.");
      return;
    }

    setError(""); // clear error if size selected

    // your Add to Cart logic here
    const cartItem = {
      productType: "combo",
      ring: ringCartItem, // ring details
      diamond: diamond, // diamond details
      size: selectedSize, // ring size
      itemQuantity: 1,
      totalPrice, // computed total
    };
    addToCart(cartItem);
    navigate("/cart");
  };

  return (
    <>
      <CompleteTabs
        diamond={diamond}
        ringCartItem={ringCartItem}
        fromChooseSetting={fromChooseSetting}
      />
      {/* <RingWrapper diamond={diamond} ringCartItem={ringCartItem} fromChooseSetting={fromChooseSetting}/> */}
      <div className="container my-4">
        <div className="row">
          {/* Left Side - Images */}
          <div className="col-12 col-lg-8 mb-4">
            <div className="d-flex flex-column flex-md-row gap-3">
              <div className="w-100">
                <img
                  src={diamond.image_link}
                  alt="Diamond"
                  className="img-fluid rounded shadow"
                  style={{
                    maxWidth: "400px",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="w-100">
                <img
                  src={ringCartItem.image}
                  alt="Ring"
                  className="img-fluid rounded shadow"
                  style={{
                    maxWidth: "400px",
                    height: "400px",
                    objectFit: "scale-down",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}

          <div className="col-12 col-lg-4">
            {/* Top: Title, SKU, Price */}
            <h6 className="text-uppercase text-muted mb-1">
              Your Engagement Ring
            </h6>
            <h4 className="fw-bold lh-sm">
              {ringCartItem.name} {diamond.shape.name} {diamond.carat_weight}{" "}
              Carat
            </h4>
            <p className="text-muted small mb-3">
              SKU: {ringCartItem.sku}&nbsp;|&nbsp;IGI:{" "}
              {diamond.certificate_number}
            </p>

            <div className="mb-2">
              <span className="h3 me-2">{totalPrice}</span>
              <span className="text-muted text-decoration-line-through">
                {totalRegularPrice}
              </span>
            </div>
            <p className="small mb-1">
              0% APR or as low as $102/mo with Affirm.
            </p>
            <p className="small text-muted">
              Free Insured Shipping. <u>30 Day Returns.</u>
            </p>

            {/* Summary cards */}
            <div className="border rounded p-3 mb-3">
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold mb-2">Ring Setting</h6>
                <Button variant="link" className="p-0 small">
                  Change
                </Button>
              </div>
              <div className="small">
                <div>{ringCartItem.metal_color.name}</div>
                <div>{ringCartItem.weight} Weight Of Ring</div>
              </div>
              <div className="fw-bold mt-1">{ringCartItem.price}</div>
            </div>

            <div className="border rounded p-3 mb-3">
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold mb-2">Diamond</h6>
                <Button variant="link" className="p-0 small">
                  Change
                </Button>
              </div>
              <div className="small">
                <div>
                  {diamond.weight} | {diamond.shape.name} |{" "}
                  {diamond.cut.full_name} Cut
                </div>
                <div>
                  {diamond.color.name} Color | {diamond.clarity.name} Clarity
                </div>
              </div>
              <div className="fw-bold mt-1">{diamond.price}</div>
            </div>
            <select
              className="form-select mb-2"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">SELECT RING SIZE</option>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            {/* Ring size */}
            {error && <div className="text-danger mb-2">{error}</div>}
            {selectedSize && (
              <Button variant="dark" className="w-100 mb-1">
                Select Ring Size ({selectedSize})
              </Button>
            )}

            <div className="text-end small mb-3">
              <a
                href="/images/ringSize/Ring-Size_printable.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary"
              >
                Ring Size Guide
              </a>
            </div>

            <hr className="my-3" />

            {/* Add-ons accordion (top group) */}
            <Accordion className="mb-3">
              {/* Matching band */}
              <Accordion.Item eventKey="wb">
                <Accordion.Header>Buy Matching Wedding Band</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="small">Include matching band</span>
                    <Form.Check
                      type="switch"
                      id="wb-switch"
                      checked={weddingBandOn}
                      onChange={(e) => setWeddingBandOn(e.target.checked)}
                    />
                  </div>

                  {weddingBandOn && (
                    <div className="d-flex gap-3 align-items-start">
                      <img
                        src="https://via.placeholder.com/140x70"
                        alt="Wedding Band"
                        className="img-fluid rounded"
                        style={{ maxWidth: 140 }}
                      />
                      <div className="small">
                        <div className="fw-semibold">
                          Elegance Diamond Studded Gallery Hidden Halo Diamond
                          Wedding Band - 14KT White Gold
                        </div>
                        <div className="mt-1">$1,630</div>
                      </div>
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>

              {/* Engraving */}
              <Accordion.Item eventKey="engrave">
                <Accordion.Header>
                  Personalize with an Engraving
                </Accordion.Header>
                <Accordion.Body>
                  <div className="small text-muted">
                    Add engraving options here (input/select as needed).
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              {/* Protection plan */}
              <Accordion.Item eventKey="plan">
                <Accordion.Header>
                  Add Clarity Commitment Protection Plan
                </Accordion.Header>
                <Accordion.Body>
                  <p className="small text-muted mb-3">
                    Ensure your jewelry lasts a lifetime.
                  </p>

                  <div className="row g-2">
                    <div className="col-4">
                      <Button
                        variant={plan === "3y" ? "dark" : "outline-dark"}
                        className="w-100"
                        onClick={() => setPlan("3y")}
                      >
                        <div className="fw-semibold">3 Year</div>
                        <div className="small">$199</div>
                      </Button>
                    </div>
                    <div className="col-4">
                      <Button
                        variant={plan === "5y" ? "dark" : "outline-dark"}
                        className="w-100"
                        onClick={() => setPlan("5y")}
                      >
                        <div className="fw-semibold">5 Year</div>
                        <div className="small">$229</div>
                      </Button>
                    </div>
                    <div className="col-4">
                      <Button
                        variant={plan === "lifetime" ? "dark" : "outline-dark"}
                        className="w-100"
                        onClick={() => setPlan("lifetime")}
                      >
                        <div className="text-center small ">Most Popular</div>
                        <div className="fw-semibold">Lifetime*</div>
                        <div className="small">$379</div>
                      </Button>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* Promo banner */}
            <img
              src="https://via.placeholder.com/720x260?text=Your+Gift+Is+Waiting"
              alt="Promo"
              className="img-fluid rounded mb-3"
            />

            {/* Shipping note */}
            <p className="small mb-2">
              Ships by <strong>Wed, Sept 3</strong> | Track in real time before
              it ships
            </p>

            {/* Add to cart */}
            <button
              className="custom-btn outlined"
              style={{ width: "100%", height: "50px", marginBottom: "15px" }}
              // onClick={() => setShowSettingModal(true)}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            {/* Quick actions */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              <Button size="sm" variant="outline-secondary">
                Drop a Hint
              </Button>
              <Button size="sm" variant="outline-secondary">
                Contact Us
              </Button>
              <Button size="sm" variant="outline-secondary">
                Add to Wishlist
              </Button>
              <Button size="sm" variant="outline-secondary">
                Schedule Appointment
              </Button>
            </div>

            {/* Bottom details accordion (flush like screenshot) */}
            <Accordion
              flush
              activeKey={activeKey}
              onSelect={(k) => setActiveKey(k)}
            >
              <Accordion.Item eventKey="about">
                <Accordion.Header>About Your Ring</Accordion.Header>
                <Accordion.Body>Details about the ring go here.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="setting">
                <Accordion.Header>Ring Setting Details</Accordion.Header>
                <Accordion.Body>Setting details go here.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="side">
                <Accordion.Header>Side Stone Details</Accordion.Header>
                <Accordion.Body>Side stone details go here.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="diamond">
                <Accordion.Header>Diamond Details</Accordion.Header>
                <Accordion.Body>Diamond details go here.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="shipping">
                <Accordion.Header>Shipping &amp; Returns</Accordion.Header>
                <Accordion.Body>
                  Shipping and return policy goes here.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="warranty">
                <Accordion.Header>Lifetime Warranty</Accordion.Header>
                <Accordion.Body className="small">
                  Dilse Jewels is committed to creating the highest quality
                  jewelry that lasts a lifetime. We offer complimentary lifetime
                  cleaning and replacement of stones under 0.10ct due to
                  everyday wear and tear. Diamonds above 0.10ct and center
                  stones on engagement rings are not covered by the warranty.
                  Damage, loss, and theft are also not covered. Repair fees
                  apply based on jeweler assessment. For warranty validity, we
                  recommend all work be done by Dilse Jewels.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteRing;
