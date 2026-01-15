import React from 'react';
import { Link } from "react-router-dom";
import BeforeAfterSection from "./BeforeAfterSection";
import BestsellingEngagementRings from "./BestsellingEngagementRings";

const HomePreview = () => {
    const buttonStyle = {
        backgroundColor: 'transparent',
        color: '#14344a',
        border: '2px solid #14344a',
        padding: '12px 30px',
        textDecoration: 'none',
        display: 'inline-block',
        borderRadius: '4px',
        fontWeight: '600',
        fontSize: '16px',
        transition: 'all 0.3s ease',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '10px 5px'
    };

    const buttonHoverStyle = {
        backgroundColor: '#14344a',
        color: '#fff'
    };

    const contactButtonStyle = {
        backgroundColor: 'transparent',
        color: '#14344a',
        border: 'none',
        padding: '10px 20px',
        textDecoration: 'none',
        display: 'inline-block',
        fontWeight: '500',
        fontSize: '16px',
        transition: 'all 0.3s ease',
        textAlign: 'center',
        cursor: 'pointer',
        width: '100%'
    };

    const contactButtonHoverStyle = {
        backgroundColor: '#14344a',
        color: '#fff',
        borderRadius: '4px'
    };

    return (
        <>
            <section style={{
                backgroundImage: 'url("/images/homepreview/1.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                height: '500px',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                textAlign: "center",
                color: "#fff",
                paddingBottom: "40px",
                position: "relative",
            }}>
                <div className="container">
                    <div className="col-md-6">
                        <div style={{ padding: '70px' }}>
                            <h1 style={{
                                color: '#14344a',
                                fontSize: '36px',
                                lineHeight: '45px',
                                marginBottom: '20px'
                            }}>
                                Browse. Try. Buy. A new <br /> way to find your ring.</h1>
                            <p style={{
                                color: '#000',
                                fontSize: '17px',
                                lineHeight: '25px',
                                marginBottom: '20px'
                            }}>Finely crafted engagement rings <br /> you can try on at home.</p>
                            {/* <Link
                                to=""
                                style={buttonStyle}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                                    e.target.style.color = buttonHoverStyle.color;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = buttonStyle.backgroundColor;
                                    e.target.style.color = buttonStyle.color;
                                }}
                                className="mt-4"
                            >
                                GET STARTED
                            </Link> */}
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </section>

            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <h1 style={{
                        color: '#14344a',
                        fontSize: '36px',
                        lineHeight: '45px',
                        marginBottom: '20px'
                    }}>How it works.</h1>
                    <p style={{
                        color: '#000',
                        fontSize: '17px',
                        lineHeight: '25px',
                        marginBottom: '40px'
                    }}>Our rings are made to last forever, so take your time to be sure it's the one. With over 8,000 customization options, our Home Preview lets you try on the ring at your own pace, now crafted to perfectly fit your ring size. We will charge your card ₹200 with complimentary shipping. You will receive a replica ring to try on. Return it within 7 days, and we'll credit you a ₹200 gift card for your future purchase, which can be applied to your final ring order.</p>

                    <div className="row" style={{ marginBottom: '40px' }}>
                        <div className="col-md-4 mb-4">
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <img
                                    src="/images/homepreview/2.webp"
                                    alt="Select Your Favorites"
                                    style={{ width: '100%', maxWidth: '300px', marginBottom: '20px' }}
                                />
                                <span style={{
                                    color: '#14344a',
                                    fontSize: '20px',
                                    fontWeight: 'bold'
                                }}>1.</span>
                                <h2 style={{
                                    color: '#14344a',
                                    fontSize: '24px',
                                    lineHeight: '34px',
                                    marginBottom: '15px'
                                }}>Select Your Favorites</h2>
                                <p style={{
                                    color: '#000',
                                    fontSize: '16px',
                                    lineHeight: '24px'
                                }}>Build your Home Preview box by selecting two rings and customize for metal, shape and carat.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <img
                                    src="/images/homepreview/3.webp"
                                    alt="Try At Home"
                                    style={{ width: '100%', maxWidth: '300px', marginBottom: '20px' }}
                                />
                                <span style={{
                                    color: '#14344a',
                                    fontSize: '20px',
                                    fontWeight: 'bold'
                                }}>2.</span>
                                <h2 style={{
                                    color: '#14344a',
                                    fontSize: '24px',
                                    lineHeight: '34px',
                                    marginBottom: '15px'
                                }}>Try At Home</h2>
                                <p style={{
                                    color: '#000',
                                    fontSize: '16px',
                                    lineHeight: '24px'
                                }}>Try on at home, ask your partner, ask your friend, take some selfies, return in 7 days.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <img
                                    src="/images/homepreview/4.webp"
                                    alt="Finalize Your Ring"
                                    style={{ width: '100%', maxWidth: '300px', marginBottom: '20px' }}
                                />
                                <span style={{
                                    color: '#14344a',
                                    fontSize: '20px',
                                    fontWeight: 'bold'
                                }}>3.</span>
                                <h2 style={{
                                    color: '#14344a',
                                    fontSize: '24px',
                                    lineHeight: '34px',
                                    marginBottom: '15px'
                                }}>Finalize Your Ring</h2>
                                <p style={{
                                    color: '#000',
                                    fontSize: '16px',
                                    lineHeight: '24px'
                                }}>Now that you've seen your rings, decide what you like or what you want to change. Come back on site to order the real ring.</p>
                            </div>
                        </div>
                    </div>

                    {/* <div style={{ textAlign: 'center' }}>
                        <Link
                            to={{}}
                            style={buttonStyle}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                                e.target.style.color = buttonHoverStyle.color;
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = buttonStyle.backgroundColor;
                                e.target.style.color = buttonStyle.color;
                            }}
                            className="mt-4"
                        >
                            GET STARTED
                        </Link>
                    </div> */}
                </div>
            </section>

            <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container text-center">
                    <div className="faq-section">
                        <h1 style={{
                            color: '#213245',
                            fontSize: '30px',
                            lineHeight: '1.2',
                            paddingBottom: '40px'
                        }}>We've got answers to your questions.</h1>

                        <div className="accordion" id="faqAccordion" style={{ background: 'none' }}>
                            {/* FAQ items remain the same */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading1">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq1"
                                    >
                                        How does the Home Preview work?
                                    </button>
                                </h2>
                                <div
                                    id="faq1"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Dilse Jewels's Home Preview makes it easy for you to pick the right ring in the comfort of your own home — no salespeople, no rush, no pressure. You can choose up to two replica rings to preview for 7 days. You decide whether you want to share with friends and family and your person, or you can discreetly find a ring style she'll love. After you're done examining the styles, simply use the prepaid shipping label and return the rings via FedEx in the original packaging. All replica orders ship USPS free of charge to and from your home.
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
                                        What’s included in the Home Preview?
                                    </button>
                                </h2>
                                <div
                                    id="faq2"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Each Home Preview includes up to 2 ring replicas. We’re always available to help you find the perfect ring style or tell you more about our rings to help you make the right choice. Don’t know where to start? Call or email us and tell us about her personality and style, and our design team can help you find the perfect ring, we promise!
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
                                        Is the Home Preview free?
                                    </button>
                                </h2>
                                <div
                                    id="faq3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        We want you to easily and conveniently find the perfect ring style. When you place a Home Preview order, Dilse Jewels will charge your card ₹200 per ring. This amount is fully redeemable as a ₹200 gift card toward your purchase upon return. If the replica rings are not returned for any reason, your card will be charged ₹200 per ring.
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
                                        What are replica rings?
                                    </button>
                                </h2>
                                <div
                                    id="faq4"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Our replica rings look exactly like real Dilse Jewels engagement rings. They’re 3D-printed made of white metallic alloy and a diamond simulant. It’s hard for the naked eye to tell a replica ring from a real diamond. Replica rings are intended only for visual purposes and not extended wear, which could result in damage or tarnish.
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
                                        When will it arrive?
                                    </button>
                                </h2>
                                <div
                                    id="faq5"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Our replica rings are made to order and can take up to 14 business days to craft. Once shipped via USPS, you’ll receive a confirmation email with tracking information.
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
                                        Where will my actual ring be made?
                                    </button>
                                </h2>
                                <div
                                    id="faq6"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Our team will guide you through the process of taking your ring from preview to purchase. Our rings and designs are always made in-house in Surat with a dedicated team of gemologists working on every order.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="container text-center">
                    <div>
                        <BestsellingEngagementRings />
                    </div>
                </div>
            </section>

            <BeforeAfterSection />

            <section style={{ padding: '60px 0' }}>
                <div className="container" style={{ backgroundColor: '#d5ebec' }}>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div>
                                <h1 style={{
                                    color: '#14344a',
                                    fontSize: '32px',
                                    lineHeight: '1.3',
                                    marginBottom: '20px'
                                }}>
                                    EXPERIENCE THE MAGIC AT <br /> HOME
                                </h1>
                                <p style={{
                                    color: '#000',
                                    fontSize: '17px',
                                    lineHeight: '1.6'
                                }}>
                                    At Dilse Jewels, we want you to shop with confidence and convenience.
                                    That's why our Home Preview program is key to easily finding your
                                    dream ring.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <video
                                    src="/images/homepreview/7.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "0px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container text-center">
                    <h1 className="mb-5" style={{ color: '#14344a', fontSize: '32px' }}>Customize your favorite ring styles in over 8000 ways.</h1>
                    <div className="row">
                        <div className="col-md-3 col-6 mb-4">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src="/images/homepreview/9.svg" alt="Feature 1" style={{ width: '80px', height: '80px' }} />
                                <p className="mt-3" style={{ fontSize: '14px', lineHeight: '1.4' }}>Well-cut simulant that looks and sparkles just like a real diamond.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-6 mb-4">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src="/images/homepreview/10.svg" alt="Feature 2" style={{ width: '80px', height: '80px' }} />
                                <p className="mt-3" style={{ fontSize: '14px', lineHeight: '1.4' }}>Metal alloy that mimics the look of real precious metals.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-6 mb-4">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src="/images/homepreview/11.svg" alt="Feature 3" style={{ width: '80px', height: '80px' }} />
                                <p className="mt-3" style={{ fontSize: '14px', lineHeight: '1.4' }}>Crafted with precision to reflect the quality of our real rings.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-6 mb-4">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src="/images/homepreview/12.svg" alt="Feature 4" style={{ width: '80px', height: '80px' }} />
                                <p className="mt-3" style={{ fontSize: '14px', lineHeight: '1.4' }}>Ring replicas are available in nearly every style. Try on what looks exactly like the final ring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
                <div className="container">
                    <div className='text-center justify-content-center mb-5'>
                        <h1 style={{ color: '#14344a', fontSize: '36px', marginBottom: '20px' }}>
                            Tried, Tested & Loved
                        </h1>
                        <div className="d-flex justify-content-center">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0411/6437/4183/files/google-reviews-logo.png?v=1682760780"
                                alt="Google Reviews"
                                style={{ maxWidth: '200px', marginBottom: '30px' }}
                            />
                        </div>
                    </div>

                    {/* Reviews Slider */}
                    <div
                        id="reviewsCarousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        style={{ maxWidth: '800px', margin: '0 auto' }}
                    >
                        <div className="carousel-indicators" style={{ bottom: '-50px' }}>
                            <button
                                type="button"
                                data-bs-target="#reviewsCarousel"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: '#14344a'
                                }}
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#reviewsCarousel"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: '#14344a'
                                }}
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#reviewsCarousel"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: '#14344a'
                                }}
                            ></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div
                                    className="card border-0 shadow-sm mx-auto"
                                    style={{
                                        maxWidth: '600px',
                                        borderRadius: '15px',
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <div className="card-body p-4 text-center">
                                        <div className="mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} style={{ color: '#FFD700', fontSize: '24px' }}>★</span>
                                            ))}
                                        </div>
                                        <p
                                            className="card-text mb-4"
                                            style={{
                                                color: '#333',
                                                fontSize: '16px',
                                                lineHeight: '1.6',
                                                fontStyle: 'italic'
                                            }}
                                        >
                                            "I just received my Lab diamond from Dilse Jewels... I got it shipped to Canada... it looks fantastic!
                                            They have great customer service as well as I ordered the wrong setting and I called the next day
                                            and it was taken care of no problem... I highly recommend them... best prices as well for better
                                            quality! Even with the duties and taxes I had to pay on top of the purchase price! Will be letting my
                                            friends know about them!"
                                        </p>
                                        <h6
                                            className="card-subtitle"
                                            style={{
                                                color: '#14344a',
                                                fontWeight: 'bold',
                                                fontSize: '18px'
                                            }}
                                        >
                                            JONATHAN MCKEOWN
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <div
                                    className="card border-0 shadow-sm mx-auto"
                                    style={{
                                        maxWidth: '600px',
                                        borderRadius: '15px',
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <div className="card-body p-4 text-center">
                                        <div className="mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} style={{ color: '#FFD700', fontSize: '24px' }}>★</span>
                                            ))}
                                        </div>
                                        <p
                                            className="card-text mb-4"
                                            style={{
                                                color: '#333',
                                                fontSize: '16px',
                                                lineHeight: '1.6',
                                                fontStyle: 'italic'
                                            }}
                                        >
                                            "Such a great company to work with! The at-home previews were gorgeous and could pass as the real deal because the ring I purchased looked exactly like the preview ring. The phone and e-mail responses by customer service were so fast, polite, and helpful. I spent a day emailing them back and forth because I messed up my shipping address, and my MAX wait time for a reply was about an hour. I’m so excited to be able to give my girlfriend the ring she’s referred to as “my ring” since she saw the preview! "
                                        </p>
                                        <h6
                                            className="card-subtitle"
                                            style={{
                                                color: '#14344a',
                                                fontWeight: 'bold',
                                                fontSize: '18px'
                                            }}
                                        >
                                            Kelsey Buchmann
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item active">
                                <div
                                    className="card border-0 shadow-sm mx-auto"
                                    style={{
                                        maxWidth: '600px',
                                        borderRadius: '15px',
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <div className="card-body p-4 text-center">
                                        <div className="mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} style={{ color: '#FFD700', fontSize: '24px' }}>★</span>
                                            ))}
                                        </div>
                                        <p
                                            className="card-text mb-4"
                                            style={{
                                                color: '#333',
                                                fontSize: '16px',
                                                lineHeight: '1.6',
                                                fontStyle: 'italic'
                                            }}
                                        >
                                            "Dilse Jewels made my shopping experience so great and they went out of their way to exchange the diamond I originally had set in the ring to one that I liked. They were extremely efficient and prompt with all their communications and actions. Very satisfied customer! Can highly recommend it to anyone!"
                                        </p>
                                        <h6
                                            className="card-subtitle"
                                            style={{
                                                color: '#14344a',
                                                fontWeight: 'bold',
                                                fontSize: '18px'
                                            }}
                                        >
                                            Erené Spies
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#reviewsCarousel"
                            data-bs-slide="prev"
                            style={{ width: '50px' }}
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                                style={{
                                    backgroundColor: '#14344a',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    backgroundSize: '20px'
                                }}
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#reviewsCarousel"
                            data-bs-slide="next"
                            style={{ width: '50px' }}
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                                style={{
                                    backgroundColor: '#14344a',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    backgroundSize: '20px'
                                }}
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="text-center mt-5">
                        <Link
                            to="/reviews"
                            style={buttonStyle}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                                e.target.style.color = buttonHoverStyle.color;
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = buttonStyle.backgroundColor;
                                e.target.style.color = buttonStyle.color;
                            }}
                        >
                            READ MORE REVIEWS
                        </Link>
                    </div>
                </div>
            </section>

            <section className="contact-section mb-4">
                <div className="container contact-container" style={{ background: '#f0f4f7', padding: '48px' }}>
                    <div className="row align-items-center text-center contact-row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <h1 style={{ color: '#14344a', marginBottom: '20px' }}>We're here to help.</h1>
                            <p className="contact-text" style={{ color: '#000', lineHeight: '1.6' }}>
                                Our expert gemologists are here to help.
                                <br />
                                We're available seven days a week to guide you on
                                <br />
                                diamonds, gemstones, and jewelry.
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                            <div className="reviews-link" style={{ borderRight: '1px solid #00000043', padding: '10px' }}>
                                <button
                                    style={contactButtonStyle}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = contactButtonHoverStyle.backgroundColor;
                                        e.target.style.color = contactButtonHoverStyle.color;
                                        e.target.style.borderRadius = contactButtonHoverStyle.borderRadius;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = contactButtonStyle.backgroundColor;
                                        e.target.style.color = contactButtonStyle.color;
                                        e.target.style.borderRadius = '0';
                                    }}
                                >
                                    <i style={{ fontSize: '30px', fontFamily: 'FontAwesome', color: '#00000043', marginBottom: '10px' }} className="fa-solid fa-comment-dots contact-icon"></i>
                                    <br />
                                    <span>Chat</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                            <div className="reviews-link" style={{ borderRight: '1px solid #00000043', padding: '10px' }}>
                                <Link to='mailto:service@dilsejewels.com'
                                    style={contactButtonStyle}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = contactButtonHoverStyle.backgroundColor;
                                        e.target.style.color = contactButtonHoverStyle.color;
                                        e.target.style.borderRadius = contactButtonHoverStyle.borderRadius;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = contactButtonStyle.backgroundColor;
                                        e.target.style.color = contactButtonStyle.color;
                                        e.target.style.borderRadius = '0';
                                    }}
                                >
                                    <i className="fa-solid fa-envelope contact-icon" style={{ fontSize: '30px', fontFamily: 'FontAwesome', color: '#00000043', marginBottom: '10px' }}></i>
                                    <br />
                                    <span>Email</span>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                            <div className="reviews-link" style={{ padding: '10px' }}>
                                <Link to='tel:1-+91 85115 44005'
                                    style={contactButtonStyle}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = contactButtonHoverStyle.backgroundColor;
                                        e.target.style.color = contactButtonHoverStyle.color;
                                        e.target.style.borderRadius = contactButtonHoverStyle.borderRadius;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = contactButtonStyle.backgroundColor;
                                        e.target.style.color = contactButtonStyle.color;
                                        e.target.style.borderRadius = '0';
                                    }}
                                >
                                    <i className="fa-solid fa-phone contact-icon" style={{ fontSize: '30px', fontFamily: 'FontAwesome', color: '#00000043', marginBottom: '10px' }}></i>
                                    <br />
                                    <span>Phone</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePreview