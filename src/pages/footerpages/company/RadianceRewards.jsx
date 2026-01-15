import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBestProducts } from "../../../api/bestSelling";

const RadianceRewards = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const categoryType = "anniversary";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(null);

    fetchBestProducts(categoryType, { per_page: 3, page })
      .then((res) => {
        if (!isMounted) return;
        setProducts(res.data?.data || []); // store products
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error(err);
        setError("Failed to load best selling products");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [categoryType, page]);

  const makeSlug = (name) => {
    return name
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  // Common button style function
  const getButtonStyle = (isHovered) => ({
    background: isHovered ? "#000" : "transparent",
    color: isHovered ? "#fff" : "#000",
    border: "1px solid #000",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "16px",
    letterSpacing: "1.2px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
    borderRadius: "0",
    fontFamily: "inherit",
  });

  return (
    <>
      <style>
        {`
                /* Mobile First Styles */
                .radiance-title {
                    font-family: "Avenir Next", sans-serif;
                    color: #000;
                    font-size: 24px;
                    line-height: 32px;
                    font-weight: 600;
                    letter-spacing: -0.35px;
                    margin-bottom: 1rem;
                }

                .radiance-subtitle {
                    color: #222;
                    font-size: 14px;
                    line-height: 1.5;
                    margin: 0 auto 1.5rem;
                    max-width: 500px;
                }

                .radiance-btn {
                    white-space: nowrap;
                    text-decoration: none;
                    border-radius: 0;
                    margin: 0.5rem 0;
                }

                .radiance-btn:hover {
                    text-decoration: none;
                }

                /* How It Works Section */
                .radiance-how-it-works {
                    background: #f6ecdf;
                    padding: 40px 0 20px;
                }

                .step-number {
                    font-weight: 700;
                    font-size: 16px;
                    display: block;
                    margin-bottom: 10px;
                    color: #000;
                }

                .radiance-step-title {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 10px;
                    color: #000;
                }

                .radiance-step-text {
                    color: #333;
                    font-size: 14px;
                    line-height: 1.5;
                }

                /* Cards Section */
                .radiance-cards-row {
                    margin-top: 2rem;
                }

                .radiance-card {
                    padding: 0 10px;
                    margin-bottom: 30px;
                }

                .radiance-card-img {
                    width: 70px;
                    height: 70px;
                    object-fit: contain;
                    margin: 0 auto 10px auto;
                    display: block;
                }

                .radiance-card-title {
                    font-weight: 600;
                    color: #14344a;
                    font-size: 13px;
                    margin-bottom: 8px;
                    line-height: 1.3;
                }

                .radiance-card-text {
                    color: #333;
                    font-size: 11px;
                    line-height: 1.4;
                    margin: 0;
                }

                /* Refer Section */
                .radiance-refer-section {
                    background: #fff;
                    padding: 40px 0;
                }

                .radiance-refer-card {
                    padding: 20px 0;
                }

                .radiance-refer-img {
                    max-width: 300px;
                    margin: 0 auto;
                    width: 100%;
                }

                .radiance-section-label {
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    margin-bottom: 10px;
                    display: block;
                    color: #000;
                    text-transform: uppercase;
                }

                .radiance-refer-text {
                    color: #333;
                    font-size: 14px;
                    line-height: 1.5;
                    margin-bottom: 1.5rem;
                    max-width: 400px;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* Tiers Section */
                .radiance-tiers {
                    background: #f6ecdf;
                    padding: 40px 0;
                }

                .radiance-tiers-content {
                    margin-bottom: 2rem;
                }

                .radiance-tiers-description {
                    color: #333;
                    font-size: 14px;
                    line-height: 1.5;
                }

                .radiance-tier-category {
                    padding: 0 10px;
                    margin-bottom: 30px;
                }

                .radiance-tier-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: #000;
                    margin-bottom: 10px;
                }

                .radiance-tier-item {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin-top: 10px;
                    border-bottom: 2px solid #ccc;
                    padding-bottom: 15px;
                }

                .radiance-tier-points {
                    text-align: left;
                    font-weight: 600;
                    font-size: 14px;
                    margin-bottom: 5px;
                    color: #000;
                }

                .radiance-tier-earning {
                    text-align: left;
                    color: #555;
                    font-size: 14px;
                }

                .radiance-points-section {
                    margin-top: 2rem;
                }

                .radiance-points-container {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    border: 2px solid #cccccc;
                    margin-top: 20px;
                }

                .radiance-points-box {
                    padding: 20px 15px;
                    text-align: center;
                    border-bottom: 2px solid #cccccc;
                }

                .radiance-points-box:last-child {
                    border-bottom: none;
                }

                .radiance-points-amount {
                    font-size: 16px;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 8px;
                }

                .radiance-points-value {
                    font-size: 16px;
                    color: #000;
                    margin-bottom: 5px;
                }

                .radiance-points-note {
                    font-size: 12px;
                    color: #666;
                }

                .border-right-mobile {
                    border-bottom: 2px solid #cccccc;
                }

                .no-border {
                    border-bottom: none !important;
                }

                .radiance-tiers-image {
                    padding: 0 10px;
                }

                /* Products Section */
                .radiance-products {
                    background: #fff;
                    padding: 40px 0;
                }

                .radiance-products-subtitle {
                    color: #333;
                    font-size: 14px;
                    margin-bottom: 2rem;
                }

                .radiance-product-card {
                    padding: 0 10px;
                    margin-bottom: 30px;
                }

                .radiance-product-link {
                    color: #000;
                    text-decoration: none;
                }

                .radiance-product-img {
                    border-radius: 8px;
                    width: 100%;
                }

                .radiance-product-name {
                    font-size: 14px;
                    color: #000;
                    line-height: 1.4;
                    margin: 1rem 0;
                }

                /* FAQ Section */
                .radiance-faq {
                    background: #fff;
                    padding: 40px 0;
                }

                .radiance-faq-title {
                    font-family: "Avenir Next", sans-serif;
                    color: #000;
                    font-size: 24px;
                    font-weight: 600;
                    margin-bottom: 2rem;
                    text-align: center;
                }

                .accordion-button {
                    font-size: 14px;
                    padding: 15px;
                    font-weight: 500;
                    width: 100%;
                    background: none;
                    border: none;
                    text-align: left;
                    cursor: pointer;
                    border-bottom: 1px solid #ddd;
                }

                .accordion-body {
                    font-size: 14px;
                    line-height: 1.5;
                    color: #333;
                    padding: 15px;
                    border-bottom: 1px solid #ddd;
                }

                /* Features Section */
                .radiance-features {
                    background: #dee9eb;
                    padding: 40px 0;
                }

                .radiance-features-title {
                    font-family: "Avenir Next", sans-serif;
                    color: #000;
                    font-size: 24px;
                    line-height: 32px;
                    font-weight: 500;
                    letter-spacing: -0.35px;
                    text-align: center;
                    margin-bottom: 30px;
                }

                .radiance-feature-img {
                    width: 45px;
                    height: 45px;
                    display: block;
                }

                .radiance-feature-text {
                    margin: 0;
                    font-weight: 600;
                    text-align: center;
                    font-size: 11px;
                    line-height: 1.3;
                    color: #000;
                    text-transform: uppercase;
                }

                .radiance-feature-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                    padding: 0 10px;
                }

                .radiance-feature-link {
                    text-decoration: none;
                }

                .radiance-feature-link:hover {
                    text-decoration: none;
                }

                /* Layout Styles */
                .radiance-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                }

                .radiance-container-fluid {
                    width: 100%;
                    padding: 0 15px;
                }

                .radiance-row {
                    display: flex;
                    flex-wrap: wrap;
                    margin: 0 -15px;
                }

                .radiance-col-12 {
                    flex: 0 0 100%;
                    max-width: 100%;
                    padding: 0 15px;
                }

                .radiance-col-6 {
                    flex: 0 0 50%;
                    max-width: 50%;
                    padding: 0 15px;
                }

                .radiance-col-md-2 {
                    flex: 0 0 16.666667%;
                    max-width: 16.666667%;
                    padding: 0 15px;
                }

                .radiance-col-md-3 {
                    flex: 0 0 25%;
                    max-width: 25%;
                    padding: 0 15px;
                }

                .radiance-col-md-4 {
                    flex: 0 0 33.333333%;
                    max-width: 33.333333%;
                    padding: 0 15px;
                }

                .radiance-col-md-6 {
                    flex: 0 0 50%;
                    max-width: 50%;
                    padding: 0 15px;
                }

                /* Utility Classes */
                .text-center {
                    text-align: center;
                }

                .text-decoration-underline {
                    text-decoration: underline;
                }

                .w-100 {
                    width: 100%;
                }

                .img-fluid {
                    max-width: 100%;
                    height: auto;
                }

                .mx-auto {
                    margin-left: auto;
                    margin-right: auto;
                }

                /* Spacing Utilities */
                .p-3 {
                    padding: 1rem;
                }

                .p-md-4 {
                    padding: 1.5rem;
                }

                .py-4 {
                    padding-top: 1.5rem;
                    padding-bottom: 1.5rem;
                }

                .py-md-5 {
                    padding-top: 3rem;
                    padding-bottom: 3rem;
                }

                .pt-3 {
                    padding-top: 1rem;
                }

                .pt-md-4 {
                    padding-top: 1.5rem;
                }

                .pb-3 {
                    padding-bottom: 1rem;
                }

                .pb-md-4 {
                    padding-bottom: 1.5rem;
                }

                .mb-4 {
                    margin-bottom: 1.5rem;
                }

                .mb-md-0 {
                    margin-bottom: 0;
                }

                .mt-2 {
                    margin-top: 0.5rem;
                }

                .mt-4 {
                    margin-top: 1.5rem;
                }

                /* Medium devices (tablets, 768px and up) */
                @media (min-width: 768px) {
                    .radiance-title {
                        font-size: 35px;
                        line-height: 48px;
                        margin-bottom: 1.5rem;
                    }

                    .radiance-subtitle {
                        font-size: 16px;
                        line-height: 1.6;
                        margin-bottom: 2rem;
                    }

                    .radiance-how-it-works {
                        padding: 70px 0 35px;
                    }

                    .radiance-step-title {
                        font-size: 22px;
                    }

                    .radiance-step-text {
                        font-size: 16px;
                    }

                    .radiance-card-img {
                        width: 100px;
                        height: 100px;
                        margin-bottom: 15px;
                    }

                    .radiance-card-title {
                        font-size: 16px;
                    }

                    .radiance-card-text {
                        font-size: 14px;
                        padding: 0 10px;
                    }

                    .radiance-refer-card {
                        padding: 40px 20px;
                    }

                    .radiance-section-label {
                        font-size: 12px;
                    }

                    .radiance-refer-text {
                        font-size: 16px;
                    }

                    .radiance-tier-item {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .radiance-tier-points {
                        margin-bottom: 0;
                    }

                    .radiance-tier-earning {
                        text-align: right;
                    }

                    .radiance-points-container {
                        flex-direction: row;
                        justify-content: space-between;
                        gap: 0;
                    }

                    .radiance-points-box {
                        flex: 1;
                        min-width: 150px;
                        border-right: 2px solid #cccccc;
                        border-bottom: none;
                        padding: 25px 15px;
                    }

                    .radiance-points-box:last-child {
                        border-right: none;
                    }

                    .border-right-mobile {
                        border-bottom: none;
                        border-right: 2px solid #cccccc;
                    }

                    .no-border {
                        border-right: none !important;
                        border-bottom: none !important;
                    }

                    .radiance-product-name {
                        font-size: 16px;
                    }

                    .radiance-feature-img {
                        width: 60px;
                        height: 60px;
                    }

                    .radiance-feature-text {
                        font-size: 14px;
                    }

                    .radiance-feature-item {
                        border-right: 3px solid #000;
                        padding-right: 15px;
                        margin-bottom: 0;
                    }

                    .radiance-feature-item:last-child {
                        border-right: none;
                    }

                    .accordion-button {
                        font-size: 16px;
                    }

                    .p-md-4 {
                        padding: 1.5rem;
                    }
                }

                /* Large devices (desktops, 992px and up) */
                @media (min-width: 992px) {
                    .radiance-card-text {
                        padding: 0 20px;
                    }

                    .radiance-points-box:last-child {
                        border-right: none;
                    }

                    .radiance-features-title {
                        font-size: 28px;
                    }
                }

                /* Extra small devices (phones, 576px and down) */
                @media (max-width: 576px) {
                    .radiance-container {
                        padding-left: 15px;
                        padding-right: 15px;
                    }
                    
                    .radiance-title {
                        font-size: 22px;
                        line-height: 28px;
                    }
                    
                    .radiance-card-img {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .radiance-points-box {
                        padding: 15px 10px;
                    }
                    
                    .radiance-points-amount {
                        font-size: 14px;
                    }
                    
                    .radiance-points-value {
                        font-size: 14px;
                        margin-bottom: 5px;
                    }
                    
                    .radiance-points-note {
                        font-size: 11px;
                    }

                    .radiance-feature-item {
                        margin-bottom: 30px;
                    }
                }

                /* Very small devices (phones, 375px and down) */
                @media (max-width: 375px) {
                    .radiance-title {
                        font-size: 20px;
                        line-height: 26px;
                    }
                    
                    .radiance-card {
                        padding: 0 5px;
                    }
                    
                    .radiance-card-img {
                        width: 50px;
                        height: 50px;
                    }
                    
                    .radiance-card-title {
                        font-size: 12px;
                    }
                    
                    .radiance-card-text {
                        font-size: 10px;
                    }

                    .radiance-btn {
                        padding: 8px 16px;
                        font-size: 11px;
                    }
                }
            `}
      </style>

      {/* ===== Header Section ===== */}
      <section>
        <div className="rediance-section">
          <img
            src="/images/radiancerewards/Header_Banner_2x_fa223c24-ccd5-48f9-9599-97273f725944_4096x.webp"
            alt="Radiance Rewards Header"
            className="img-fluid w-100"
          />
        </div>
      </section>

      {/* ===== Section 1 ===== */}
      <section>
        <div className="radiance-container text-center p-3 p-md-4">
          <h1 className="pt-3 pt-md-4 radiance-title">RADIANCE REWARDS</h1>
          <p className="pb-3 pb-md-4 radiance-subtitle">
            Become a member to gain access to exclusive perks and rewards.
          </p>

          {/* JOIN NOW button 1 */}
          <Link
            to="/signup"
            style={getButtonStyle(isHovered1)}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            className="radiance-btn"
          >
            JOIN NOW
          </Link>

          <p className="pt-3">
            Already have an account?{" "}
            <Link to="/signin" className="text-decoration-underline">
              Sign in
            </Link>
          </p>
        </div>
      </section>

      {/* ===== Section 2 ===== */}
      <section className="text-center radiance-how-it-works">
        <h1 className="radiance-title mb-4">How It Works</h1>

        <div className="radiance-container">
          <div className="radiance-row">
            <div className="radiance-col-12 radiance-col-md-4 mb-4 mb-md-0">
              <label className="step-number">01</label>
              <h2 className="radiance-step-title">Join for Free</h2>
              <p className="radiance-step-text">
                Sign up at no cost and start benefiting.
              </p>
            </div>
            <div className="radiance-col-12 radiance-col-md-4 mb-4 mb-md-0">
              <label className="step-number">02</label>
              <h2 className="radiance-step-title">Earn Points</h2>
              <p className="radiance-step-text">
                Get points for every purchase you make.
              </p>
            </div>
            <div className="radiance-col-12 radiance-col-md-4">
              <label className="step-number">03</label>
              <h2 className="radiance-step-title">Reap the Reward</h2>
              <p className="radiance-step-text">
                Trade in your points for exclusive discounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 3 ===== */}
      <section>
        <div className="radiance-container text-center p-3 p-md-4">
          <h1 className="pt-3 pt-md-4 radiance-title">
            Collecting Points is Easy
          </h1>
          <p className="pb-3 pb-md-4 radiance-subtitle">
            Instantly earn points through these 7 simple ways.
          </p>

          {/* JOIN NOW button 2 */}
          <Link
            to="/signin"
            style={getButtonStyle(isHovered2)}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className="radiance-btn"
          >
            JOIN NOW
          </Link>

          {/* ===== Cards ===== */}
          <div className="radiance-row pt-4 radiance-cards-row">
            {/* Card 1 */}
            <div className="radiance-col-6 radiance-col-md-3 radiance-card">
              <img
                src="/images/radiancerewards/5.webp"
                alt="Signup Bonus"
                className="radiance-card-img"
              />
              <h5 className="radiance-card-title">SIGNUP BONUS</h5>
              <p className="radiance-card-text">
                Get bold 200 Points when you become a member
              </p>
            </div>

            {/* Card 2 */}
            <div className="radiance-col-6 radiance-col-md-3 radiance-card">
              <img
                src="/images/radiancerewards/6.png"
                alt="Birthday Treat"
                className="radiance-card-img"
              />
              <h5 className="radiance-card-title">BIRTHDAY TREAT</h5>
              <p className="radiance-card-text">
                We gift you 300 Points on your birthday
              </p>
            </div>

            {/* Card 3 */}
            <div className="radiance-col-6 radiance-col-md-3 radiance-card">
              <img
                src="/images/radiancerewards/7.webp"
                alt="Shopping"
                className="radiance-card-img"
              />
              <h5 className="radiance-card-title">SHOPPING</h5>
              <p className="radiance-card-text">
                Earn Points for every $1 spent
              </p>
            </div>

            {/* Card 4 */}
            <div className="radiance-col-6 radiance-col-md-3 radiance-card">
              <img
                src="/images/radiancerewards/8.webp"
                alt="Invite a Friend"
                className="radiance-card-img"
              />
              <h5 className="radiance-card-title">INVITE A FRIEND</h5>
              <p className="radiance-card-text">
                Refer & get 500 Points when your friend makes a purchase
              </p>
            </div>

            {/* Card 5 */}
            <div className="radiance-col-6 radiance-col-md-4 radiance-card">
              <img
                src="/images/radiancerewards/9.png"
                alt="Facebook"
                className="radiance-card-img"
              />
              <h5 className="radiance-card-title">FACEBOOK</h5>
              <p className="radiance-card-text">
                Get 100 Points when you like us on Facebook
              </p>
            </div>

            {/* Card 6 */}
            <div className="radiance-col-6 radiance-col-md-4 radiance-card">
              <img
                src="/images/radiancerewards/10.webp"
                alt="Instagram"
                className="radiance-card-img"
              />
              <h5 className="radiance-card-title">INSTAGRAM</h5>
              <p className="radiance-card-text">
                Get 100 Points when you follow us on Instagram
              </p>
            </div>

            {/* Card 7 */}
            <div className="radiance-col-6 radiance-col-md-4 radiance-card mx-auto">
              <img
                src="/images/radiancerewards/11.png"
                alt="Leave a Review"
                className="radiance-card-img"
              />
              <h5 className="radiance-card-title">LEAVE A REVIEW</h5>
              <p className="radiance-card-text">
                Upload photo, video or review of purchased product & get 100
                Points
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Refer & Earn Section ===== */}
      <section className="py-4 py-md-5 radiance-refer-section">
        <div className="radiance-container-fluid text-center">
          <div className="radiance-row">
            <div className="radiance-col-12 radiance-col-md-6 mb-4 mb-md-0">
              <div className="px-2 px-md-4 radiance-refer-card">
                <img
                  src="/images/radiancerewards/2.webp"
                  alt="Share the Love"
                  className="img-fluid radiance-refer-img"
                />
                <h6 className="pt-3 pt-md-4 radiance-section-label">
                  SHARE THE LOVE
                </h6>
                <h1 className="radiance-title">Refer & Earn</h1>
                <p className="radiance-refer-text">
                  Tell a friend about us and enjoy 500 points when they make a
                  purchase.
                </p>
                <Link
                  to="/refer"
                  style={getButtonStyle(isHovered3)}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                  className="radiance-btn"
                >
                  INVITE A FRIEND
                </Link>
              </div>
            </div>

            <div className="radiance-col-12 radiance-col-md-6">
              <div className="px-2 px-md-4 radiance-refer-card">
                <img
                  src="/images/radiancerewards/3.webp"
                  alt="Become a Member"
                  className="img-fluid radiance-refer-img"
                />
                <h6 className="pt-3 pt-md-4 radiance-section-label">
                  BECOME A MEMBER
                </h6>
                <h1 className="radiance-title">Ready To Join?</h1>
                <p className="radiance-refer-text">
                  Sign up for Radiance Rewards today and receive 200 points.
                </p>
                <Link
                  to="/signup"
                  style={getButtonStyle(isHovered4)}
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}
                  className="radiance-btn"
                >
                  JOIN NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Member Tiers Section ===== */}
      <section className="py-4 py-md-5 radiance-tiers">
        <div className="radiance-container">
          <div className="radiance-row">
            <div className="radiance-col-12 radiance-col-md-6 mb-4 mb-md-0">
              <div className="radiance-tiers-content">
                <h1 className="radiance-title">Member Tiers</h1>
                <p className="radiance-tiers-description">
                  The higher your tier, the more points you earn.
                </p>
              </div>

              <div className="mb-4 radiance-tier-category">
                <h3 className="radiance-tier-title">Silver</h3>
                <div className="radiance-tier-item">
                  <span className="radiance-tier-points">
                    5,000 POINTS & BELOW
                  </span>
                  <span className="radiance-tier-earning">
                    Earn 1 Point for every $1 spent
                  </span>
                </div>
              </div>

              <div className="mb-4 radiance-tier-category">
                <h3 className="radiance-tier-title">Gold</h3>
                <div className="radiance-tier-item">
                  <span className="radiance-tier-points">
                    5,001 - 10,000 POINTS
                  </span>
                  <span className="radiance-tier-earning">
                    Earn 2 Points for every $1 spent
                  </span>
                </div>
              </div>

              <div className="mb-4 radiance-tier-category">
                <h3 className="radiance-tier-title">Platinum</h3>
                <div className="radiance-tier-item">
                  <span className="radiance-tier-points">
                    10,001 POINTS & ABOVE
                  </span>
                  <span className="radiance-tier-earning">
                    Earn 3 Points for every $1 spent
                  </span>
                </div>
              </div>

              <div className="mt-4 radiance-points-section">
                <h1 className="radiance-title">Turn Your Points Into Credit</h1>

                <div className="radiance-points-container">
                  {/* Box 1 */}
                  <div className="radiance-points-box border-right-mobile">
                    <h6 className="radiance-points-amount">2,000 POINTS</h6>
                    <p className="radiance-points-value">For ₹100 OFF</p>
                    <small className="radiance-points-note">
                      *Spend over ₹300
                    </small>
                  </div>

                  {/* Box 2 */}
                  <div className="radiance-points-box border-right-mobile">
                    <h6 className="radiance-points-amount">5,000 POINTS</h6>
                    <p className="radiance-points-value">For ₹250 off</p>
                    <small className="radiance-points-note">
                      *Spend over $750
                    </small>
                  </div>

                  {/* Box 3 */}
                  <div className="radiance-points-box no-border">
                    <h6 className="radiance-points-amount">10,000 POINTS</h6>
                    <p className="radiance-points-value">For ₹500 off</p>
                    <small className="radiance-points-note">
                      *Spend over $1,500
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="radiance-col-12 radiance-col-md-6">
              <div className="radiance-tiers-image">
                <img
                  src="/images/radiancerewards/4.webp"
                  alt="Member Benefits"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Products Section ===== */}
      <section className="text-center py-4 py-md-5 radiance-products">
        <h1 className="radiance-title">Like what you see?</h1>
        <p className="radiance-products-subtitle">
          Explore our most-loved styles and start earning points.
        </p>
        <div className="radiance-container">
          <div className="radiance-row">
            {/* <div className="radiance-col-6 radiance-col-md-4 radiance-product-card">
              <Link
                className="radiance-product-link"
                to="/jewellary-details/232"
              >
                <img
                  src="/images/radiancerewards/12.webp"
                  alt="Signature Aquamarine Birthstone Necklace"
                  className="img-fluid w-100 radiance-product-img"
                />
                <p className="mt-2 radiance-product-name">
                  Signature Aquamarine Birthstone Necklace
                </p>
              </Link>
            </div>
            <div className="radiance-col-6 radiance-col-md-4 radiance-product-card">
              <Link
                className="radiance-product-link"
                to="/jewellary-details/233"
              >
                <img
                  src="/images/radiancerewards/13.webp"
                  alt="Geometric Sequence Diamond Eternity Ring"
                  className="img-fluid w-100 radiance-product-img"
                />
                <p className="mt-2 radiance-product-name">
                  Geometric Sequence Diamond Eternity Ring
                </p>
              </Link>
            </div>
            <div className="radiance-col-6 radiance-col-md-4 radiance-product-card mx-auto">
              <Link
                className="radiance-product-link"
                to="/jewellary-details/234"
              >
                <img
                  src="/images/radiancerewards/14.webp"
                  alt="Halo Cushion Lab Created Diamond Necklace"
                  className="img-fluid w-100 radiance-product-img"
                />
                <p className="mt-2 radiance-product-name">
                  Halo Cushion Lab Created Diamond Necklace
                </p>
              </Link>
            </div> */}
            {products.length > 0 ? (
              products.map((product) => {
                const productSlug = makeSlug(product.product_name);

                return (
                  <div
                    key={product.id}
                    className="radiance-col-6 radiance-col-md-4 radiance-product-card"
                  >
                    <Link
                      className="radiance-product-link"
                      to={`/products/${productSlug}?product=${product.product_id}`}
                    >
                      <img
                        src={
                          product.images?.[0]
                            ? `${import.meta.env.VITE_BACKEND_URL}${product.images[0]
                            }`
                            : `${import.meta.env.VITE_BACKEND_URL
                            }/storage/variation_images/No_Image_Available.jpg`
                        }
                        alt={product.product_name}
                        className="img-fluid w-100 radiance-product-img"
                      />

                      <p className="mt-2 radiance-product-name">
                        {product.product_name}
                      </p>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div style={{ textAlign: "center", width: "100%" }}>
                <p>No products found.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="py-4 py-md-5 radiance-faq">
        <div className="radiance-container">
          <div className="faq-section">
            <h2 className="radiance-faq-title">You Ask, We Answer</h2>

            <div className="accordion" id="faqAccordion">
              {/* Q1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading1">
                  <button className="accordion-button collapsed" type="button">
                    What is Radiance Rewards?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Radiance Rewards is an exclusive loyalty club for The
                    Dilse Jewels customers.
                  </div>
                </div>
              </div>

              {/* Q2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading2">
                  <button className="accordion-button collapsed" type="button">
                    How can I be a part of Radiance Rewards?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Create an account on our website to be automatically
                    enrolled in our rewards program. Once you're a registered
                    member, you'll have the opportunity to earn points in
                    various ways.
                  </div>
                </div>
              </div>

              {/* Q13 - Keeping one FAQ for example, removed others for brevity */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading13">
                  <button className="accordion-button collapsed" type="button">
                    How do I contact support?
                  </button>
                </h2>
                <div id="faq13" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    You can email us at{" "}
                    <Link to="mailto:service@dilsejewels.com">
                      service@dilsejewels.com
                    </Link>{" "}
                    or call us at <strong>1-+91 85115 44005</strong>.<br />
                    Our hours are: Mon-Fri 9 AM-12 AM & Sat-Sun 10 AM-7 PM.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}

      <section className="radiance-features py-4 py-md-5">
        <h1 className="radiance-features-title text-center mb-4">
          NO DEALBREAKERS
        </h1>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            {/* Item 1 */}
            <div className="col-6 col-md-2 mb-4 radiance-feature-item">
              <img
                src="/images/radiancerewards/easy-access.png"
                alt="Easy Financing Options"
                className="radiance-feature-img mx-auto"
              />
              <Link
                className="text-decoration-none radiance-feature-link"
                to="/our-policies"
              >
                <p className="radiance-feature-text mt-2">
                  EASY FINANCING OPTIONS
                </p>
              </Link>
            </div>

            {/* Item 2 */}
            <div className="col-6 col-md-2 mb-4 radiance-feature-item">
              <img
                src="/images/radiancerewards/insurance.png"
                alt="Lifetime Warranty"
                className="radiance-feature-img mx-auto"
              />
              <Link
                className="text-decoration-none radiance-feature-link"
                to="/our-policies"
              >
                <p className="radiance-feature-text mt-2">LIFETIME WARRANTY</p>
              </Link>
            </div>

            {/* Item 3 */}
            <div className="col-6 col-md-2 mb-4 radiance-feature-item">
              <img
                src="/images/radiancerewards/30-days.png"
                alt="Hassle Free Returns"
                className="radiance-feature-img mx-auto"
              />
              <Link
                className="text-decoration-none radiance-feature-link"
                to="/our-policies"
              >
                <p className="radiance-feature-text mt-2">
                  HASSLE FREE RETURNS
                </p>
              </Link>
            </div>

            {/* Item 4 */}
            <div className="col-6 col-md-2 mb-4 radiance-feature-item">
              <img
                src="/images/radiancerewards/diamond-ring.png"
                alt="Free Resizing"
                className="radiance-feature-img mx-auto"
              />
              <Link
                className="text-decoration-none radiance-feature-link"
                to="/our-policies"
              >
                <p className="radiance-feature-text mt-2">FREE RESIZING</p>
              </Link>
            </div>

            {/* Item 5 */}
            <div className="col-6 col-md-2 mb-4 radiance-feature-item">
              <img
                src="/images/radiancerewards/diamond.png"
                alt="Conflict Free Diamonds"
                className="radiance-feature-img mx-auto"
              />
              <Link
                className="text-decoration-none radiance-feature-link"
                to="/our-policies"
              >
                <p className="radiance-feature-text mt-2">
                  CONFLICT FREE DIAMONDS
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RadianceRewards;
