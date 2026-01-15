import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ExtendedWarranty = () => {
    const [hover, setHover] = useState(false);

    const buttonStyle = {
        display: "inline-block",
        padding: "6px 17px",
        border: "2px solid #000",
        color: hover ? "#fff" : "#000",
        backgroundColor: hover ? "#000" : "transparent",
        textDecoration: "none",
        fontSize: "12px",
        fontWeight: "500",
        borderRadius: "0px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        letterSpacing: "1px",
    };

    const features = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    stroke="#2b2b2b"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M3 21v-4a2 2 0 0 1 2-2h3m8 6v-4a2 2 0 0 0-2-2h-3m4-10V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2m0 0H5a2 2 0 0 0-2 2v3m16-5h2a2 2 0 0 1 2 2v3m-2 12v-4a2 2 0 0 0-2-2h-3" />
                </svg>
            ),
            titleItalic: "Complimentary",
            titleNormal: "Repair",
            desc: "Be assured that if your jewelry breaks, chips, scratches, or cracks it will be repaired or replaced.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    stroke="#2b2b2b"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
                </svg>
            ),
            titleItalic: "Protection",
            titleNormal: "of Value",
            desc: "Make sure your jewelry’s value remains the same with the support of Clarity Commitment.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    stroke="#2b2b2b"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M4 4h16v4H4zM4 10h16v10H4z" />
                    <path d="M8 14h8v2H8z" />
                </svg>
            ),
            titleItalic: "Quick",
            titleNormal: "Approval Process",
            desc: "Instantly initiate a claim with our easy to understand process.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    stroke="#2b2b2b"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <text x="3" y="18" fontSize="18">
                        $0
                    </text>
                </svg>
            ),
            titleItalic: "",
            titleNormal: "No Deductible",
            desc: "There is no deductible charged for the purchase of any Clarity Commitment plan.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    stroke="#2b2b2b"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l4 6-4 6-4-6z" />
                    <circle cx="12" cy="18" r="2" />
                </svg>
            ),
            titleItalic: "Comfort",
            titleNormal: "of Saving",
            desc: "Clarity Commitment is a fraction of the cost compared to purchasing a repair or replacement.",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    stroke="#2b2b2b"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 20h9" />
                    <path d="M16 16v4m0-4h4m-4 0h-4m0 0v4m4-4v4" />
                    <path d="M3 5h6l3 7-3 7H3z" />
                </svg>
            ),
            titleItalic: "",
            titleNormal: "Flexible Options",
            desc: "Choose between our three plan options and what works best for you. Decide between 1 year, 3 year, and the Lifetime* Plan.",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section
                style={{
                    backgroundImage: 'url("/images/extendedwarranty/1.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "500px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    textAlign: "center",
                    color: "#fff",
                    paddingBottom: "40px",
                    position: "relative",
                }}
            >
                <h5
                    style={{
                        color: "#fff",
                        textShadow: "0px 3px 6px rgba(0, 0, 0, .16)",
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "1",
                        letterSpacing: "1.92px",
                        marginBottom: "10px",
                    }}
                >
                    CLARITY COMMITMENT
                </h5>
                <h1
                    style={{
                        fontSize: "65px",
                        lineHeight: "1.2",
                        fontWeight: "500",
                        letterSpacing: "-1.69px",
                    }}
                >
                    JEWELRY PROTECTION PLAN
                </h1>
                <p
                    style={{
                        fontSize: "18px",
                        lineHeight: "1.3",
                        marginTop: "15px",
                        color: "#fff",
                    }}
                >
                    Your jewelry is meant to last forever, so make sure it does.
                </p>
            </section>

            {/* Benefits Section */}
            <section style={{ padding: "80px 20px" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
                    <h1
                        style={{
                            fontSize: "36px",
                            fontWeight: "600",
                            marginBottom: "60px",
                            letterSpacing: "1px",
                        }}
                    >
                        Clarity Commitment Benefits
                    </h1>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            textAlign: "left",
                        }}
                    >
                        {features.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    width: "48%",
                                    display: "flex",
                                    marginBottom: "50px",
                                    alignItems: "flex-start",
                                }}
                            >
                                <div style={{ marginRight: "15px" }}>{item.icon}</div>
                                <div>
                                    <h3 style={{ margin: "0", fontStyle: "italic", display: "inline" }}>
                                        {item.titleItalic}
                                    </h3>
                                    <span style={{ fontWeight: "500" }}> {item.titleNormal}</span>
                                    <p
                                        style={{
                                            marginTop: "5px",
                                            fontFamily: "Arial, sans-serif",
                                            color: "#444",
                                            lineHeight: "1.6",
                                        }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section style={{ padding: "60px 20px" }}>
                <div className="container" style={{ justifyContent: 'center' }}>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 style={{ color: "#888", letterSpacing: "1px" }}>IN-HOUSE TRUST</h5>
                            <h1 style={{ fontSize: "40px", fontWeight: "600" }}>
                                Why <span style={{ color: "#000" }}>Clarity Commitment?</span>
                            </h1>
                            <p
                                style={{
                                    color: "#444",
                                    lineHeight: "1.8",
                                    fontSize: "16px",
                                    margin: "20px 0",
                                }}
                            >
                                Our completely in-house warranty program removes the middleman,
                                ensuring your experience is valued and trusted through us. Our team
                                aims to provide you a seamless experience, offering you peace of mind
                                by ensuring transparency in the handling of your jewelry.
                            </p>

                            {/* Styled Button */}
                            {/* <Link
                                to="#"
                                style={buttonStyle}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                READ MORE DETAILS
                            </Link> */}
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src="/images/extendedwarranty/2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ paddingBottom: '40px' }}>
                <div className="container text-center">
                    <h1>The Clarity Commitment Journey</h1>
                    <p>Through our simple three-step process, filing a claim has never been easier.</p>
                    <div className="row" style={{ paddingBottom: '30px' }}>
                        <div className="col-md-4" style={{ borderRight: '1px solid #000' }}>
                            <div>
                                <h2
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        border: "2px solid #213245",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "24px",
                                        fontWeight: "600",
                                        color: "#213245",
                                        margin: "0 auto",
                                    }}
                                >
                                    1
                                </h2>

                                <p style={{ color: '#000', fontWeight: '500' }}>Email or call us to initiate your <br /> claim and answer  a few questions.</p>
                            </div>
                        </div>
                        <div className="col-md-4" style={{ borderRight: '1px solid #000' }}>
                            <div >
                                <h2
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        border: "2px solid #213245",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "24px",
                                        fontWeight: "600",
                                        color: "#213245",
                                        margin: "0 auto",
                                    }}
                                >
                                    2
                                </h2>

                                <p style={{ color: '#000', fontWeight: '500' }}>Send your jewelry back for an easy <br /> approval process and receive an <br /> email assessment of our plan.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h2
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        border: "2px solid #213245",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "24px",
                                        fontWeight: "600",
                                        color: "#213245",
                                        margin: "0 auto",
                                    }}
                                >
                                    3
                                </h2>

                                <p style={{ color: '#000', fontWeight: '500' }}>Sign off and receive your finished <br /> jewelry in 2-3 weeks.</p>
                            </div>
                        </div>


                    </div>
                    <Link to="mailto:service@dilsejewels.com" style={{
                        display: "inline-block",
                        padding: "9px 25px",
                        border: "2px solid #000",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: "500",
                        borderRadius: "0px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        letterSpacing: "1px",
                        color: '#000'
                    }}>START A CLAIM</Link>
                </div>
            </section>

            <section style={{ background: '#edf3f4', padding: '60px' }}>
                <div className="container text-center">

                    <div className="faq-section">
                        <h1 style={{
                            color: '#213245', fontSize: '50px',
                            lineHeight: '67px',
                            paddingBottom: '20px'
                        }}>Frequently Asked Questions</h1>

                        <div className="accordion" id="faqAccordion" style={{ background: 'none !important' }}>
                            {/* Q1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading1">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq1"
                                    >
                                        How do I add Clarity Commitment?
                                    </button>
                                </h2>
                                <div
                                    id="faq1"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        During the checkout process, simply add your plan on each jewelry piece.
                                    </div>
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading2">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq2"
                                    >
                                        During the checkout process, simply add your plan on each jewelry piece.
                                    </button>
                                </h2>
                                <div
                                    id="faq2"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Your plan is on a per-item basis.
                                    </div>
                                </div>
                            </div>

                            {/* Q3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading3">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq3"
                                    >
                                        What is included in Clarity Commitment Protection Plan?
                                    </button>
                                </h2>
                                <div
                                    id="faq3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        To check the status of your Dilse Jewels Store Credit Card account, click here to learn more and manage your account on Synchrony Bank's website. After loging into your account, you will be able to:
                                        1. Make a payment
                                        2. View your balance
                                        3. Update your account information
                                        4. Schedule up to your next 12 payments
                                    </div>
                                </div>
                            </div>

                            {/* Q4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading4">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq4"
                                    >
                                        What if I need to return my product?
                                    </button>
                                </h2>
                                <div
                                    id="faq4"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        <img src="/images/extendedwarranty/3.png" alt="" width="100%" />
                                    </div>
                                </div>
                            </div>

                            {/* Q5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading5">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq5"
                                    >
                                        How long before I can process a claim?
                                    </button>
                                </h2>
                                <div
                                    id="faq5"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        There is a 30 day waiting period from the time of purchase before processing a claim.
                                    </div>
                                </div>
                            </div>

                            {/* Q6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading6">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq6"
                                    >
                                        Can I upgrade my plan?
                                    </button>
                                </h2>
                                <div
                                    id="faq6"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Yes, we offer the ability to upgrade your plan. However, repurchase at full price. Contact the customer service team to upgrade your plan.                                    </div>
                                </div>
                            </div>

                            {/* Q7 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading7">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq7"
                                    >
                                        What is the Lifetime Plan?
                                    </button>
                                </h2>
                                <div
                                    id="faq7"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        The Lifetime Plan avails all the benefits of the Protection Plan for a period of 10 years                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExtendedWarranty;
