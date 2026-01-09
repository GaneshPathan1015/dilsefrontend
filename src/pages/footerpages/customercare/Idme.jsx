import React from 'react';
import { Link } from 'react-router-dom';

const Idme = () => {
    return (
        <>
            <section
                style={{
                    backgroundImage: 'url("/images/idme/1.webp")',
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
                <span className="sub-title-idme" style={{ fontSize: "24px", marginBottom: "0px" }}>
                    ★★★
                </span>
                <h1 style={{ fontSize: "35px", fontWeight: "bold", marginBottom: "0px" }}>
                    Heroes, Enjoy $150 Off*
                </h1>
                <p style={{ fontSize: "13px", lineHeight: "1.6", color: '#fff' }}>
                    Thank you for your service. We proudly offer a discount through ID.me to military members,
                    veterans, first responders, and nurses.
                </p>
            </section>
            <section
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: '30px'
                }}
            >
                <div className="container">
                    <h3
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px",
                            textAlign: "center",
                        }}
                    >
                        How to Redeem
                        <span>
                            <img src="/images/idme/2.webp" alt="" width={60} />
                        </span>
                    </h3>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            flexWrap: "wrap",
                        }}
                    >
                        <div
                            className="cards"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <h6>STEP 1</h6>
                            <img src="/images/idme/3.svg" alt="" width={60} />
                            <p style={{ fontSize: "10px" }}>Select your jewelry</p>
                        </div>

                        <div
                            className="cards"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <h6>STEP 2</h6>
                            <img src="/images/idme/4.svg" alt="" width={60} />
                            <p style={{ fontSize: "10px" }}>Add to cart & verify your ID</p>
                        </div>

                        <div
                            className="cards"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            <h6>STEP 3</h6>
                            <img src="/images/idme/5.svg" alt="" width={60} />
                            <p style={{ fontSize: "10px" }}>Receive your discount</p>
                        </div>
                    </div>
                    <h5 className='text-center m-4'>START SHOPPING</h5>

                    <div className='row text-center'>
                        <div className="col-md-3">
                            <Link to="/engagement-rings/rings">
                                <img src="/images/idme/6.webp" alt="" />
                                <label style={{ color: '#14344a', fontSize: '13px' }} htmlFor="">ENGAGEMENT RINGS</label>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/wedding/womens-wedding-rings">
                                <img src="/images/idme/7.webp" alt="" />
                                <label style={{ color: '#14344a', fontSize: '13px' }} htmlFor="">WEDDING BANDS</label>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/diamond?menudiamond=natural-diamond">
                                <img src="/images/idme/8.webp" alt="" />
                                <label style={{ color: '#14344a', fontSize: '13px' }} htmlFor="">LOOSE DIAMONDS</label>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/jewelry-list">
                                <img src="/images/idme/9.webp" alt="" />
                                <label style={{ color: '#14344a', fontSize: '13px' }} htmlFor="">JEWELRY</label>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-4'>
                <div className="container text-center">
                    <h5 style={{
                        color: '#000',
                        fontSize: '18px',
                        lineHeight: '22px',
                        fontWeight: '700',
                        letterSpacing: '1.44px',
                        marginBottom: '20px',
                    }}>FAQS</h5>
                    <h6 style={{
                        color: '#000',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontWeight: '700',
                        letterSpacing: '1.12px',
                        marginBottom: '10px',
                    }}>WHAT IS ID.ME?</h6>
                    <p style={{
                        color: '#213245',
                        fontSize: '12px',
                        lineHeight: '14px',
                    }}>A trusted technology partner and platform to government agencies and healthcare providers. With high-tech and <br />
                        secure authentication, military members, first responders, and nurses are able to prove their legal identity in exchange for great brand discounts.</p>

                    <h6 style={{
                        color: '#000',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontWeight: '700',
                        letterSpacing: '1.12px',
                        marginBottom: '10px',
                    }}>WHAT IS THE DISCOUNT OFFERED?</h6>
                    <p style={{
                        color: '#213245',
                        fontSize: '12px',
                        lineHeight: '14px',
                    }}>Eligible id card holders can get $150 off their purchase over $2000. The discount is valid towards all full price items including necklaces, earrings, wedding bands, bracelets,<br /> loose diamonds, anniversary rings, eternity rings and engagement rings from our preset or custom ring collections. The discount is taken off the total order value in your cart.</p>

                    <h6 style={{
                        color: '#000',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontWeight: '700',
                        letterSpacing: '1.12px',
                        marginBottom: '10px',
                    }}>HOW DO I ACCESS MY DISCOUNT?</h6>
                    <p style={{
                        color: '#213245',
                        fontSize: '12px',
                        lineHeight: '14px',
                    }}>Simply sign up for a verified ID.me account to get access to the Caratcasa discount. You can also complete this step in your Caratcasa cart.</p>

                    <h6 style={{
                        color: '#000',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontWeight: '700',
                        letterSpacing: '1.12px',
                        marginBottom: '10px',
                    }}>HOW IS MY PERSONAL DATA PROTECTED?</h6>
                    <p style={{
                        color: '#213245',
                        fontSize: '12px',
                        lineHeight: '14px',
                    }}>We've partnered with ID.me to ensure that all your private and sensitive data is kept 100% secure. We never share any customer data with anyone else.
                    </p>

                    <h6 style={{
                        color: '#000',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontWeight: '700',
                        letterSpacing: '1.12px',
                        marginBottom: '10px',
                    }}>CAN I SHARE MY DISCOUNT?</h6>
                    <p style={{
                        color: '#213245',
                        fontSize: '12px',
                        lineHeight: '14px',
                        paddingBottom: '20px'
                    }}>The discount is only available for any active or veteran members of the  military, nurses or first responders.<br />
                        The billing information on the order must match the information on the ID that is being verified.</p>
                </div>
            </section>

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
                                <Link to="mailto:service@TheCaratecasa.com" style={{ textDecoration: 'none' }}>
                                    <i className="fa-solid fa-envelope contact-icon" style={{ fontSize: '30px', fontFamily: 'FontAwesome', color: '#00000043' }}></i>
                                    <br />
                                    <span style={{ color: '#000' }}>Email</span>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                            <div className="reviews-link">
                                <Link to="tel:1-844-234-6463" style={{ textDecoration: 'none' }}>
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
    )
}

export default Idme