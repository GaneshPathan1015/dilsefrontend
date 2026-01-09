import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Appointment = () => {
    const [hoveredBtn, setHoveredBtn] = useState(null);

    const buttonStyle = (isHovered) => ({
        display: "block",
        fontSize: "14px",
        fontWeight: "700",
        padding: "7px 18px",
        color: "#fff",
        border: `2px solid ${isHovered ? "#000" : "#fff"}`,
        background: isHovered ? "#000" : "transparent",
        textDecoration: "none",
        borderRadius: "0px",
        transition: "all 0.3s ease",
        textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        boxShadow: isHovered ? "0px 4px 10px rgba(0, 0, 0, 0.5)" : "none",
    });


    return (
        <>
            <section
                style={{
                    backgroundImage: 'url("/images/appointment/1.webp")',
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
                <h1
                    style={{
                        fontSize: "65px",
                        lineHeight: "86px",
                        fontWeight: "500",
                        letterSpacing: "-1.69px",
                        fontFamily: "Noto Serif Display",
                        marginBottom: "30px",
                        textShadow: '0px 3px 8px #00000080'
                    }}
                >
                    MEET US IN SOHO, NYC
                </h1>

                <div
                    className="slide-btn-wrapper"
                    style={{
                        maxWidth: "none",
                        display: "flex",
                        justifyContent: "center",
                        gap: "32px",
                    }}
                >
                    <Link
                        to="/book-appointment"
                        style={buttonStyle(hoveredBtn === 1)}
                        onMouseEnter={() => setHoveredBtn(1)}
                        onMouseLeave={() => setHoveredBtn(null)}
                    >
                        SHOWROOM APPOINTMENT
                    </Link>

                    <Link
                        to="/book-appointment"
                        style={buttonStyle(hoveredBtn === 2)}
                        onMouseEnter={() => setHoveredBtn(2)}
                        onMouseLeave={() => setHoveredBtn(null)}
                    >
                        VIRTUAL APPOINTMENT
                    </Link>
                </div>
            </section>
            <section style={{ background: '#213245', marginBottom: '80px' }}>
                <div className="container text-center">
                    <div style={{ padding: '24px 0' }}>
                        <p style={{
                            color: '#fff',
                            fontSize: '19px',
                            margin: '0',
                            lineHeight: '1.4',

                        }}>Enjoy a personalized experience with a jewelry specialist, by appointment only.</p>
                        <h4 style={{
                            color: '#fff',
                            fontWeight: '500',
                            letterSpacing: '1.52px',
                            marginTop: '14px'
                        }}> 118 SPRING ST. NEW YORK, NY 10012</h4>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row" style={{ minHeight: "400px" }}>
                        {/* Left Column */}
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h2>YOUR SHOWROOM EXPERIENCE</h2>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                        >
                                            OUR EXCLUSIVE SELECTION
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOne"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Clients will have the opportunity to explore a curated collection of diamonds. We will offer ready to wear lab diamond jewelry for purchase, such as studs, bracelets, and pendant necklaces. Our showcases feature signature designs with jewelry from The Ceramic Series, The Luxe Collection, and The Reserve.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
                                            EDUCATION & SUPPORT
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Explore the world of diamonds in a fun, welcoming environment. Get to understand and discover what you love before you purchase. Come curious and ask away. Your jewelry specialist is here to answer all questions and will ensure that you have a comprehensive understanding while navigating all of the different elements.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >
                                            PERSONALIZED JOURNEY
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Your one-on-one appointment includes a jewelry specialist to assist you. This is an immersive experience. You will be seated at a private table to feel at ease throughout the entirety of your reservation. Your jewelry specialist will be your guide and walk you through a detailed process based on your personal preferences. We are excited to create a memorable experience for you.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Video) */}
                        <div className="col-md-6" style={{ position: "relative", height: "400px", overflow: "hidden" }}>
                            <video
                                src="/images/appointment/5.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ paddingTop: '40px',paddingBottom:'60px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/images/appointment/3.webp" alt="" width="100%"/>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center" >
                            <h2>YOUR VIRTUAL EXPERIENCE</h2>
                            <p>Our virtual appointments make the Caratcasa showroom experience accessible to all. Your jewelry specialist will have a dual-camera setup ensuring a seamless and immersive journey. Each virtual appointment follows the same structure as our in-person appointments.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ===== Features Section ===== */}
            <section className="radiance-features py-4 py-md-5">
                <h1 className="radiance-features-title text-center mb-4">NO DEALBREAKERS</h1>
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        {/* Item 1 */}
                        <div className="col-6 col-md-2 mb-4 radiance-feature-item" style={{borderRight:'2px solid #000'}}>
                            <img
                                src="/images/radiancerewards/easy-access.png"
                                alt="Easy Financing Options"
                                className="radiance-feature-img mx-auto"
                            />
                            <Link className="text-decoration-none" to="/our-policies">
                                <p className="radiance-feature-text mt-2">
                                    EASY FINANCING OPTIONS
                                </p>
                            </Link>
                        </div>

                        {/* Item 2 */}
                        <div className="col-6 col-md-2 mb-4 radiance-feature-item" style={{borderRight:'2px solid #000'}}>
                            <img
                                src="/images/radiancerewards/insurance.png"
                                alt="Lifetime Warranty"
                                className="radiance-feature-img mx-auto"
                            />
                            <Link className="text-decoration-none" to="/our-policies">
                                <p className="radiance-feature-text mt-2">
                                    LIFETIME WARRANTY
                                </p>
                            </Link>
                        </div>

                        {/* Item 3 */}
                        <div className="col-6 col-md-2 mb-4 radiance-feature-item" style={{borderRight:'2px solid #000'}}>
                            <img
                                src="/images/radiancerewards/30-days.png"
                                alt="Hassle Free Returns"
                                className="radiance-feature-img mx-auto"
                            />
                            <Link className="text-decoration-none" to="/our-policies">
                                <p className="radiance-feature-text mt-2">
                                    HASSLE FREE RETURNS
                                </p>
                            </Link>
                        </div>

                        {/* Item 4 */}
                        <div className="col-6 col-md-2 mb-4 radiance-feature-item" style={{borderRight:'2px solid #000'}}>
                            <img
                                src="/images/radiancerewards/diamond-ring.png"
                                alt="Free Resizing"
                                className="radiance-feature-img mx-auto"
                            />
                            <Link className="text-decoration-none" to="/our-policies">
                                <p className="radiance-feature-text mt-2">
                                    FREE RESIZING
                                </p>
                            </Link>
                        </div>

                        {/* Item 5 */}
                        <div className="col-6 col-md-2 mb-4 radiance-feature-item">
                            <img
                                src="/images/radiancerewards/diamond.png"
                                alt="Conflict Free Diamonds"
                                className="radiance-feature-img mx-auto"
                            />
                            <Link className="text-decoration-none" to="/our-policies">
                                <p className="radiance-feature-text mt-2">
                                    CONFLICT FREE DIAMONDS
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .radiance-features {
                    background: #dee9eb;
                }

                .radiance-features-title {
                    font-family: "Avenir Next";
                    color: #000;
                    font-size: 28px;
                    line-height: 36px;
                    font-weight: 500;
                    letter-spacing: -0.35px;
                }

                .radiance-feature-img {
                    width: 50px;
                    height: 50px;
                    display: block;
                }

                .radiance-feature-text {
                    margin: 0;
                    font-weight: 600;
                    text-align: center;
                    font-size: 12px;
                    line-height: 1.3;
                    color: #000;
                }

                .radiance-feature-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                    `}
            </style>
        </>
    );
};

export default Appointment;
