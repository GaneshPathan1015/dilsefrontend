import React, { useState } from "react";
import { Link } from "react-router-dom";

const ClarityPlusDiamonds = () => {
    const [hoveredBtn, setHoveredBtn] = useState(null);
    const [hoveredBtn1, setHoveredBtn1] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs = [
        {
            title: "POLISH",
            heading: "Polish",
            description: "Polish is vital for gauging diamond quality, influencing its luster. It assesses imperfections from polishing and wear, demanding meticulous attention in the final cutting stages for superior results.",
            images: ["/images/clarityplusdiamonds/2.webp"],
        },
        {
            title: "EXTERNAL SYMMETRY",
            heading: "External Symmetry",
            description: "External symmetry is a crucial factor in evaluating diamond quality. It examines facet precision and arrangement, ensuring an even and radiant display of brightness, fire, and scintillation–a hallmark of high-quality diamonds.",
            images: ["/images/clarityplusdiamonds/3.webp"],
        },
        {
            title: "PROPORTIONS",
            heading: "Proportions",
            description: "Proportion is pivotal in assessing diamond quality, with only a select few meeting the ‘excellent’ grade for natural and lab-grown diamonds.",
            images: ["/images/clarityplusdiamonds/4.webp"],
        },
        {
            title: "OPTICAL BRILLIANCE",
            heading: "Optical Brilliance",
            description: "Optical brilliance, measured precisely to the thousandth decimal place, determines the diamond’s return of white light, showcasing areas of brilliance and minimizing light loss.",
            images: ["/images/clarityplusdiamonds/5.webp"],
        },
        {
            title: "FIRE",
            heading: "Fire",
            description: "Fire, created as white light passes through a diamond and transforms into a vibrant array of spectral colors, enhances sparkle and becomes most pronounced when the diamond moves.",
            images: ["/images/clarityplusdiamonds/6.webp"],
        },
        {
            title: "SCINTILLATION",
            heading: "Scintillation",
            description: "Scintillation, the captivating flashes of white light or sparkle, occurs as light reflects from a moving diamond. It’s evaluated by observing how light returns from nine different positions.",
            images: ["/images/clarityplusdiamonds/7.webp"],
        },
        {
            title: "OPTICAL SYMMETRY",
            heading: "Optical Symmetry",
            description: "Optical symmetry is crucial for assessing diamond quality, showcasing the facet shape precision and uniformity through a specialized photo in controlled lighting.",
            images: ["/images/clarityplusdiamonds/8.webp"],
        },
        {
            title: "HEARTS & ARROWS",
            heading: "Hearts & Arrows",
            description: "Hearts and arrows reveal precision faceting in round brilliant cut diamonds, a testament to superior facet placement and exact alignment under specific lighting conditions, crucial in determining diamond quality.",
            images: ["/images/clarityplusdiamonds/9.webp"],
        },
    ];

    const buttonStyle = (isHovered) => ({
        display: "block",
        fontSize: "14px",
        fontWeight: "700",
        padding: "7px 18px",
        color: "#fff",
        border: "2px solid #fff",
        background: "transparent",
        textDecoration: "none",
        borderRadius: "0px",
        transition: "all 0.3s ease",
        textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        boxShadow: isHovered ? "0px 4px 10px rgba(0, 0, 0, 0.5)" : "none",
    });

    const buttonStyle1 = (isHovered) => ({
        display: "block",
        fontSize: "14px",
        fontWeight: "700",
        padding: "7px 18px",
        color: "#14344a",
        width: '280px',
        border: "2px solid #14344a",
        background: "transparent",
        textDecoration: "none",
        borderRadius: "0px",
        transition: "all 0.3s ease",
        textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        boxShadow: isHovered ? "0px 4px 10px rgba(0, 0, 0, 0.5)" : "none",
    });

    return (
        <>
            {/* --- HERO SECTION --- */}
            <section
                style={{
                    backgroundImage: 'url("/images/clarityplusdiamonds/1.webp")',
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
                <p
                    style={{
                        color: "#fff",
                        fontWeight: "600",
                        letterSpacing: "1.52px",
                        marginTop: "14px",
                        fontSize: "24px",
                    }}
                >
                    DISCOVER OUR
                </p>
                <h1
                    style={{
                        fontSize: "65px",
                        lineHeight: "1.2",
                        fontWeight: "500",
                        letterSpacing: "-1.69px",
                        fontFamily: "Noto Serif Display",
                        marginBottom: "30px",
                        textShadow: "0px 3px 8px #00000080",
                    }}
                >
                    CLARITY PLUS™ Diamonds
                </h1>

                <div
                    className="slide-btn-wrapper"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "32px",
                    }}
                >
                    <Link
                        to="/diamond?menudiamond=lab-diamonds"
                        style={buttonStyle(hoveredBtn === 1)}
                        onMouseEnter={() => setHoveredBtn(1)}
                        onMouseLeave={() => setHoveredBtn(null)}
                    >
                        EXPERIENCE THE EXTRAORDINARY
                    </Link>
                </div>
            </section>

            {/* --- INTRO TEXT --- */}
            <section style={{ background: "#f6ecdf", marginBottom: "80px" }}>
                <div className="container text-center">
                    <div style={{ padding: "50px 0", margin: "0 auto" }}>
                        <p
                            style={{
                                color: "#000",
                                fontSize: "22px",
                                margin: "0",
                                lineHeight: "40px",
                                fontStyle: "italic",
                            }}
                        >
                            Behold our ultimate collection of diamonds, meticulously certified
                            for unrivaled excellence. Every <br /> facet of these gems, from
                            the impeccable polish to the enchanting fire and scintillation,
                            has been <br />
                            expertly selected to redefine luxury. Our premier diamonds undergo
                            rigorous analysis in 8 <br /> distinct ways, ensuring perfection in
                            every dazzling detail – a testament to their extraordinary <br />
                            elegance.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- 8 WAYS TO EXCELLENCE SECTION --- */}
            <section>
                <div className="container text-center">
                    <h1
                        style={{
                            color: "#000",
                            fontSize: "55px",
                            margin: "0",
                            lineHeight: "40px",
                            fontStyle: "italic",
                        }}
                    >
                        8 Ways To Excellence
                    </h1>
                    <p
                        style={{
                            color: "#000",
                            fontSize: "18px",
                            margin: "0",
                            lineHeight: "40px",
                        }}
                    >
                        Explore the eight cut quality factors that make these diamonds exceptional.
                    </p>

                    <div style={{ marginTop: "60px" }}>
                        {/* Tabs Header */}
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                borderBottom: "1px solid #ccc",
                                marginBottom: "40px",
                            }}
                        >
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    style={{
                                        cursor: "pointer",
                                        margin: "10px 20px",
                                        paddingBottom: "8px",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        color: activeIndex === index ? "#000" : "#777",
                                        borderBottom:
                                            activeIndex === index ? "2px solid #000" : "none",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    {tab.title}
                                </div>
                            ))}
                        </div>

                        {/* Active Tab Content */}
                        <div
                            style={{
                                padding: "20px",
                                minHeight: "400px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {/* Text Box */}
                                <div
                                    style={{
                                        flex: "1 1 400px",
                                        padding: "20px",
                                        textAlign: "left",
                                        maxWidth: "600px",
                                    }}
                                >
                                    <h2
                                        style={{
                                            fontSize: "40px",
                                            color: "#0d2235",
                                            marginBottom: "20px",
                                            fontFamily: "Playfair Display, serif",
                                        }}
                                    >
                                        {tabs[activeIndex].heading}
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: "17px",
                                            color: "#555",
                                            lineHeight: "1.7",
                                            marginBottom: "30px",
                                        }}
                                    >
                                        {tabs[activeIndex].description}
                                    </p>
                                    <Link to="/diamond?menudiamond=lab-diamonds"
                                        style={{
                                            display: "inline-block",
                                            padding: "10px 25px",
                                            border: "2px solid #0d2235",
                                            background: "transparent",
                                            color: "#0d2235",
                                            fontWeight: "600",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            textDecoration:'none'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.background = "#0d2235";
                                            e.target.style.color = "#fff";
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.background = "transparent";
                                            e.target.style.color = "#0d2235";
                                        }}
                                    >
                                        SHOP NOW
                                    </Link>
                                </div>

                                {/* Image Box */}
                                <div
                                    style={{
                                        flex: "1 1 300px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "20px",
                                        flexWrap: "wrap",
                                        minHeight: "250px",
                                    }}
                                >
                                    {tabs[activeIndex].images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={tabs[activeIndex].heading}
                                            style={{
                                                width: "180px",
                                                height: "180px",
                                                objectFit: "contain",
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container" style={{
                    backgroundImage: 'url("/images/clarityplusdiamonds/10.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "450px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    textAlign: "center",
                    color: "#fff",
                    paddingBottom: "40px",
                    position: "relative"
                }}>
                    <h4 style={{
                        color: "#fff",
                        fontSize: "22px",
                        margin: "0",
                        lineHeight: "40px",
                    }}>BUILD YOUR OWN</h4>
                    <h1 style={{
                        color: "#fff",
                        fontSize: "65px",
                        margin: "0",
                        lineHeight: "70px",
                        fontStyle: "italic",
                    }}>Engagement Ring</h1>
                    <p style={{
                        color: "#fff",
                        fontSize: "18px",
                    }}>Create your unique engagement ring by selecting from our exclusive collection of CLARITY PLUS™ diamonds.</p>

                    <div
                        className="slide-btn-wrapper"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "32px",
                        }}
                    >
                        <Link
                            to="/diamond?menudiamond=lab-diamonds"
                            style={buttonStyle(hoveredBtn === 2)}
                            onMouseEnter={() => setHoveredBtn(2)}
                            onMouseLeave={() => setHoveredBtn(null)}
                        >
                            EXPERIENCE THE EXTRAORDINARY
                        </Link>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <h4 style={{
                                    color: "#000",
                                    fontSize: "22px",
                                    margin: "0",
                                    lineHeight: "40px",
                                }}>EXPLORE OUR CURATED</h4>
                                <h1 style={{
                                    color: "#000",
                                    fontSize: "65px",
                                    margin: "0",
                                    lineHeight: "70px",
                                    fontStyle: "italic",
                                }}>Kaleidoscope Of Shapes</h1>
                                <p style={{
                                    color: "#000",
                                    fontSize: "18px",
                                }}>Explore our trio of exquisite diamond shapes, each a unique reflection of your love story.</p>
                                <Link
                                    to="/diamond?menudiamond=lab-diamonds"
                                    style={buttonStyle1(hoveredBtn1 === 3)}
                                    onMouseEnter={() => setHoveredBtn1(3)}
                                    onMouseLeave={() => setHoveredBtn1(null)}
                                >

                                    DESIGN YOUR CLARITY PLUS™ RING

                                </Link>

                            </div>
                        </div>
                        <div className="col-md-2 text-center">
                            <div>
                                <img src="/images/clarityplusdiamonds/11.webp" alt="" width="100%"/>
                                <span style={{
                                    color: "#14344a",
                                    fontSize: "18px",
                                    margin: "0",
                                    lineHeight: "70px",
                                    fontStyle: "italic",
                                    fontWeight: '700',
                                    fontFamily: 'Playfair Display'
                                }}>ROUND</span>
                            </div>
                        </div>
                        <div className="col-md-2 text-center">
                            <div>
                                <img src="/images/clarityplusdiamonds/12.webp" alt="" width="100%"/>
                                <span style={{
                                    color: "#14344a",
                                    fontSize: "18px",
                                    margin: "0",
                                    lineHeight: "70px",
                                    fontStyle: "italic",
                                    fontWeight: '700',
                                    fontFamily: 'Playfair Display'
                                }}>OVAL</span>
                            </div>
                        </div>
                        <div className="col-md-2 text-center">
                            <div>
                                <img src="/images/clarityplusdiamonds/13.webp" alt="" width="100%"/>
                                <span style={{
                                    color: "#14344a",
                                    fontSize: "18px",
                                    margin: "0",
                                    lineHeight: "70px",
                                    fontStyle: "italic",
                                    fontWeight: '700',
                                    fontFamily: 'Playfair Display'
                                }}>PRINCESS</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0' }}>
                <div className="container" style={{ background: '#f6ecdf' }}>
                    <div className="row" style={{ minHeight: "400px", alignItems: "center" }}>
                        <div className="col-md-7" style={{ position: "relative", 
                            height: "400px",   overflow: "hidden" }}>
                            <video
                                src="/images/clarityplusdiamonds/14.mp4"
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
                        <div className="col-md-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                            <div>
                                <h1 style={{
                                    fontSize: '42px',
                                    letterSpacing: '-.55px',
                                    marginTop: '-8px',
                                    color: '#000'
                                }}>
                                    How CLARITY PLUS™ <br /> Diamonds Earn Their <br /> Excellence
                                </h1>
                                <p style={{
                                    fontSize: '20px',
                                    lineHeight: '26px',
                                    margin: '10px 0 0',
                                    color: '#000'
                                }}>
                                    <span>Every CLARITY PLUS™</span> diamond is rigorously graded <br />
                                    for cut, symmetry, fire, and more to earn its <br />
                                    exceptional rating. Immerse yourself in the <br />
                                    experience of our enhanced grading system that <br />
                                    gives these diamonds their unique brilliance.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

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

export default ClarityPlusDiamonds;