import React, { useState } from "react";
import { Link } from "react-router-dom";

const MonthlyPaymentOption = () => {
    const [activeOption, setActiveOption] = useState("split"); // default: Split Pay

    const handleClick = (option) => {
        setActiveOption(option);
    };

    // CSS as JS object (model me css)
    const styles = {
        section: { padding: "50px" },
        container: {
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            padding: "30px",
        },
        buttonGroup: {
            display: "flex",
            gap: "15px",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
        },
        btn: {
            color: "#35383a",
            fontSize: "16px",
            width: "144px",
            border: "1px solid #35383a",
            padding: "6px 3px",
            borderRadius: "5px",
            margin: "0 3px",
            cursor: "pointer",
            backgroundColor: "#fff",
            transition: "0.3s",
        },
        btnActive: {
            backgroundColor: "#35383a",
            color: "#fff",
        },
        heading1: {
            fontSize: "36px",
            lineHeight: "45px",
            marginBottom: "20px",
            color: "#14344a",
        },
        heading2: {
            fontSize: "22px",
            margin: "20px 0",
            color: "#14344a",
        },
        paragraph: {
            fontSize: "1rem",
            lineHeight: "1.5",
            color: "#333",
        },
        image: {
            width: "100%",
            borderRadius: "10px",
            display: "block",
        },
    };

    return (
        <>
            {/* Section 1 */}
            <section style={styles.section}>
                <div className="container-fluid">
                    <div style={styles.container}>
                        {/* Buttons */}
                        <div style={styles.buttonGroup}>
                            <button
                                style={{
                                    ...styles.btn,
                                    ...(activeOption === "split" ? styles.btnActive : {}),
                                }}
                                onClick={() => handleClick("split")}
                            >
                                Split Pay
                            </button>
                            <button
                                style={{
                                    ...styles.btn,
                                    ...(activeOption === "installments" ? styles.btnActive : {}),
                                }}
                                onClick={() => handleClick("installments")}
                            >
                                Installments
                            </button>
                        </div>

                        {/* Content & Image */}
                        <div className="row align-items-center">
                            {activeOption === "split" && (
                                <>
                                    <div className="col-md-3">
                                        <h1 style={styles.heading1}>
                                            Make Your Payments Interest Free
                                        </h1>
                                        <p style={styles.paragraph}>
                                            When the inspiration strikes, say yes with confidence.
                                            Make up to four interest-free payments with Affirm.
                                        </p>
                                    </div>
                                    <div className="col-md-9">
                                        <img
                                            src="/images/monthlypaymentoption/1.webp"
                                            alt="Split Pay"
                                            style={styles.image}
                                        />
                                    </div>
                                </>
                            )}

                            {activeOption === "installments" && (
                                <>
                                    <div className="col-md-3">
                                        <h1 style={styles.heading1}>Pay at your own pace</h1>
                                        <p style={styles.paragraph}>
                                            With installments, you pay on your schedule. By selecting
                                            Affirm at checkout to pay over time, you can choose up to
                                            36-month installments—making your dream sparkle as
                                            accessible as ever.
                                        </p>
                                    </div>
                                    <div className="col-md-9">
                                        <img
                                            src="/images/monthlypaymentoption/2.webp"
                                            alt="Installments"
                                            style={styles.image}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h1>Choose 12, 18, Or 36 Monthly Payments</h1>
                                        <p className="text-dark">* For example, a $700 purchase might cost $64/mo over 12 months at 15% APR.</p>
                                    </div>

                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="text-center" style={{ paddingTop: "50px" }}>
                <h1 style={styles.heading1}>Purchase In 3 Simple Steps</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 style={styles.heading2}>
                                1. Select payment method at checkout
                            </h2>
                            <img
                                src="/images/monthlypaymentoption/3.webp"
                                alt=""
                                style={styles.image}
                            />
                            <p style={styles.paragraph}>
                                When you're done shopping, select
                                <br /> Affirm at checkout.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2 style={styles.heading2}>2. Create Your Account</h2>
                            <img
                                src="/images/monthlypaymentoption/4.webp"
                                alt=""
                                style={styles.image}
                            />
                            <p style={styles.paragraph}>
                                Enter a few pieces of information for a
                                <br /> real-time decision.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2 style={styles.heading2}>3. Pay over time</h2>
                            <img
                                src="/images/monthlypaymentoption/5.webp"
                                alt=""
                                style={styles.image}
                            />
                            <p style={styles.paragraph}>
                                Make 4 payments every 2 weeks at
                                <br /> affirm.com or in the Affirm app.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-4" style={{ paddingTop: "40px" }}>
                <div className="container" style={{ background: "#f7f7f7", padding: "0px" }}>
                    <div className="row">
                        {/* Left Column */}
                        <div
                            className="col-md-6 d-flex align-items-center"
                            style={{
                                background: "#eff0f3",
                                borderRadius: "0 150px 150px 0px",
                                padding: "60px",
                                minHeight: "100%", // ensures full height inside container
                            }}
                        >
                            <div>
                                <h3 style={{ color: "#14344a", fontSize: "36px", marginBottom: "15px" }}>
                                    Say yes with confidence
                                </h3>
                                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#333" }}>
                                    When you buy with Affirm, you always know exactly what you'll owe and when you'll be done paying.
                                    You’ll never pay a hidden fee or any fee, for that matter.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6" style={{ padding: "30px" }}>
                            <div style={{ marginBottom: "20px", borderBottom: "2px solid #eff0f3" }}>
                                <h5 style={{ color: "#14344a", fontWeight: "200", fontSize: "16px" }}>TRANSPARENT</h5>
                                <p style={{ color: "#333" }}>
                                    Never pay more than the amount disclosed up front.
                                </p>
                            </div>

                            <div style={{ marginBottom: "20px", borderBottom: "2px solid #eff0f3" }}>
                                <h5 style={{ color: "#14344a", fontWeight: "200", fontSize: "16px" }}>SIMPLE</h5>
                                <p style={{ color: "#333" }}>
                                    It only takes a moment, and checking eligibility will not impact credit.
                                    If you decide to pay with installments through Affirm, your payments may be reported to credit bureaus.
                                </p>
                            </div>

                            <div>
                                <h5 style={{ color: "#14344a", fontWeight: "200", fontSize: "16px" }}>FAIR</h5>
                                <p style={{ color: "#333" }}>
                                    Affirm won’t charge you late fees or penalties of any kind, ever.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center pt-4 mt-4 text-dark">* Your rate will be 0-36% APR based on credit, and is subject to an eligibility check. For example, a $700<br /> purchase might cost $63.18/mo over 12 months at 15% APR. Payment options through Affirm are provided<br /> by these lending partners: <Link style={{ textDecoration: "none" }} to="https://www.affirm.com/lenders">affirm.com/lenders</Link> . Options depend on your purchase amount and a down<br /> payment may be required.</p>
            </section>

            <section>
                <div className="container">
                    <div className="faq-section">
                        <h2 className="text-center mb-4">Frequently Asked Questions</h2>

                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq1"
                                    >
                                        CAN I PAY OFF MY PURCHASE EARLY?
                                    </button>
                                </h2>
                                <div
                                    id="faq1"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Yes! There’s no penalty for paying early.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq2"
                                    >
                                        HOW DO I MAKE MY PAYMENTS?
                                    </button>
                                </h2>
                                <div
                                    id="faq2"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        You can make or schedule payments at affirm.com or in the Affirm app for iOS or Android. Affirm will send you email and text reminders before payments are due.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq3"
                                    >
                                        DOES CHECKING MY ELIGIBILITY AFFECT MY CREDIT SCORE?
                                    </button>
                                </h2>
                                <div
                                    id="faq3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Checking eligibility will not impact credit. If you decide to pay with installments through Affirm, your payments may be reported to credit bureaus.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq4"
                                    >
                                        CAN I RETURN AN ITEM I BOUGHT WITH AFFIRM?
                                    </button>
                                </h2>
                                <div
                                    id="faq4"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Yes—You can return an item you bought with Affirm by initiating the return process with the store.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq5"
                                    >
                                        DO I NEED A MOBILE NUMBER TO USE AFFIRM?
                                    </button>
                                </h2>
                                <div
                                    id="faq5"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Yes, you’ll need a mobile phone number from the U.S. or U.S. territories. This helps Affirm verify it’s really you who is creating your account and signing in.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq6"
                                    >
                                        WHERE CAN I LEARN MORE ABOUT AFFIRM?
                                    </button>
                                </h2>
                                <div
                                    id="faq6"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        You can visit their website at affirm.com.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --- Section: Contact --- */}
            <section className="contact-section mb-4" >
                <div className="container contact-container" style={{ background: '#f0f4f7', padding: '48px' }}>
                    <div className="row align-items-center text-center contact-row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <h1>We're here to help.</h1>
                            <p className="contact-text">
                                Our expert gemologists are here to help.
                                <br />
                                We're available seven days a week to guide you on
                                <br />
                                diamonds, gemstones, and jewelry.
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                            <div className="reviews-link" style={{ borderRight: '1px solid #00000043' }}>
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <i style={{ fontSize: '30px', fontFamily: 'FontAwesome', color: '#00000043' }} className="fa-solid fa-comment-dots contact-icon"></i>
                                    <br />
                                    <span style={{ color: '#000' }}>Chat</span>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                            <div className="reviews-link" style={{ borderRight: '1px solid #00000043' }}>
                                <Link to="mailto:service@dilsejewels.com" style={{ textDecoration: 'none' }}>
                                    <i className="fa-solid fa-envelope contact-icon" style={{ fontSize: '30px', fontFamily: 'FontAwesome', color: '#00000043' }}></i>
                                    <br />
                                    <span style={{ color: '#000' }}>Email</span>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                            <div className="reviews-link">
                                <Link to="tel:1-+91 85115 44005" style={{ textDecoration: 'none' }}>
                                    <i className="fa-solid fa-phone contact-icon" style={{ fontSize: '30px', fontFamily: 'FontAwesome', color: '#00000043' }}></i>
                                    <br />
                                    <span style={{ color: '#000' }}>Phone</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default MonthlyPaymentOption;
