import React from 'react'
import { Link } from "react-router-dom";

const Factsheet = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="w-100 text-center">
                                <h1 style={{ color: "#14344a" }}>Fact Sheet</h1>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img
                                src="https://www.dilsejewels.com/cdn/shop/files/in_the_news_desk_990x.jpg?v=1684248399"
                                alt=""
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-4 mb-4'>
                <div className="container">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: "1px solid #ddd",
                            paddingBottom: "10px"
                        }}
                    >
                        <Link
                            to="/press"
                            style={{
                                textDecoration: "none",
                                color: "#14344a",
                                paddingBottom: "5px",
                                fontSize: "19px"
                            }}
                        >
                            Press Coverage
                        </Link>

                        <Link
                            to="#"
                            style={{
                                textDecoration: "none",
                                color: "#14344a",
                                paddingBottom: "5px",
                                fontSize: "19px"
                            }}
                        >
                            Fact Sheet
                        </Link>

                        <Link
                            to="/media-assets"
                            style={{
                                textDecoration: "none",
                                color: "#14344a",
                                paddingBottom: "5px",
                                fontSize: "19px"
                            }}
                        >
                            Media Assets
                        </Link>

                        <Link
                            to="/contact"
                            style={{
                                textDecoration: "none",
                                color: "#14344a",
                                paddingBottom: "5px",
                                fontSize: "19px"
                            }}
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div className='text-center' style={{ padding: '40px 20px' }}>
                        <h1 style={{ color: '#14344a' }}>The Dilse Jewels Facts</h1>
                        <p style={{ fontSize: "17px" }}>The Dilse Jewels is the better way to shop for diamond engagement rings. We've married <br /> the best of online and offline shopping. Our focus is on offering impeccable quality, <br /> beautiful designs all at an affordable price.</p>
                    </div>

                    <div className="row text-center">
                        <div className="col-md-3">
                            <div>
                                <img src="https://www.dilsejewels.com/cdn/shop/files/fact_access_345x_6e014823-a3cc-459a-baab-aa9e30c41dee_345x.png?v=1695984600" alt="" width="70%" style={{ justifySelf: "center" }} />
                                <h2 className='text-uppercase' style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>ACCESS</h2>
                                <h3 className='text-uppercase' style={{ marginBottom: "20px", fontSize: "20px", color: "#14344a" }}>ONLINE'S LARGEST DIAMOND INVENTORY</h3>
                                <p style={{ fontSize: "18px" }}>Nearly 200,000 conflict free diamond options vetted in house, shown with real diamond images and video.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <img src="https://www.dilsejewels.com/cdn/shop/files/fact_nyc_345x_eb2348b6-c7d3-4a83-882b-dfa69030b207_345x.png?v=1695984621" alt="" width="70%" style={{ justifySelf: "center" }} />
                                <h2 className='text-uppercase' style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>NYC</h2>
                                <h3 className='text-uppercase' style={{ marginBottom: "20px", fontSize: "20px", color: "#14344a" }}>MADE IN Surat CITY</h3>
                                <p style={{ fontSize: "18px" }}>Made with care start to finish in NYC, all jewelry made in house and inspected by gemologists to ensure the perfect look</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <img src="https://www.dilsejewels.com/cdn/shop/files/fact_Years_of_Relationship_345x_a26b5cc1-9c32-4a88-863f-dca0ba11198b_345x.png?v=1695984643" alt="" width="70%" style={{ justifySelf: "center" }} />
                                <h2 className='text-uppercase' style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>35YR</h2>
                                <h3 className='text-uppercase' style={{ marginBottom: "20px", fontSize: "20px", color: "#14344a" }}>LEGACY IN DIAMOND AND JEWELRY INDUSTRY</h3>
                                <p style={{ fontSize: "18px" }}>Knowledge and experience in every aspect, from diamond cutting to designing rings to crafting jewelry.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <img src="https://www.dilsejewels.com/cdn/shop/files/fact_Preview_345x_36a5294a-c0a7-42ba-ade5-1581308fd0f9_345x.png?v=1695984666" alt="" width="70%" style={{ justifySelf: "center" }} />
                                <h2 className='text-uppercase' style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>PREVIEW</h2>
                                <h3 className='text-uppercase' style={{ marginBottom: "20px", fontSize: "20px", color: "#14344a" }}>A BETTER WAY TO SHOP FOR ENGAGEMENT RINGS</h3>
                                <p style={{ fontSize: "18px" }}>We offer a free at home preview for our rings so that you can feel confident about your purchase. We bridge the best of online and online shopping.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <img src="https://www.dilsejewels.com/cdn/shop/files/fact_Recycled_345x_e53f7c03-0135-4f9b-b67b-d99fc69d072d_345x.png?v=1695984683" alt="" width="70%" style={{ justifySelf: "center" }} />
                                <h2 className='text-uppercase' style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>RECYCLED</h2>
                                <h3 className='text-uppercase' style={{ marginBottom: "20px", fontSize: "20px", color: "#14344a" }}>RECYCLED METALS TO MINIMIZE IMPACT TO THE ENVIRONMENT</h3>
                                <p style={{ fontSize: "18px" }}>Made with care start to finish in NYC, all jewelry made in house and inspected by gemologists to ensure the perfect look</p>
                            </div></div>
                        <div className="col-md-3">
                            <div>
                                <img src="https://www.dilsejewels.com/cdn/shop/files/fact_PRICING_345x_c0cacd8c-48d7-4da7-bb23-de86057faec4_345x.png?v=1695984701" alt="" width="70%" style={{ justifySelf: "center" }} />
                                <h2 className='text-uppercase' style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>PRICING</h2>
                                <h3 className='text-uppercase' style={{ marginBottom: "20px", fontSize: "20px", color: "#14344a" }}>LEGACY IN DIAMOND AND JEWELRY INDUSTRY</h3>
                                <p style={{ fontSize: "18px" }}>The Dilse Jewels can be 30% less expensive than an in store shopping experience. We offer fair pricing for beautiful ring designs and GIA certified diamonds.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <img src="https://www.dilsejewels.com/cdn/shop/files/fact_customization_345x_75b5221f-fa92-4236-a285-dffa7acd37e8_345x.png?v=1695984717" alt="" width="70%" style={{ justifySelf: "center" }} />
                                <h2 className='text-uppercase' style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>CUSTOMIZATION</h2>
                                <h3 className='text-uppercase' style={{ marginBottom: "20px", fontSize: "20px", color: "#14344a" }}>ENDLESS CUSTOMIZATI ON OPPORTUNITIES</h3>
                                <p style={{ fontSize: "18px" }}>Ability to create custom designs to meet your every need with 7 Precious metals in all ring sizes, styles, accent diamonds size and type sizes.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <img src="https://www.dilsejewels.com/cdn/shop/files/fact_Conflict-Free_345x_3e55d7ba-e3ee-4133-a8e8-efca56c85e45_345x.png?v=1695984734" alt="" width="70%" style={{ justifySelf: "center" }} />
                                <h2 className='text-uppercase' style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>CONFLICT-FREE</h2>
                                <h3 className='text-uppercase' style={{ marginBottom: "20px", fontSize: "20px", color: "#14344a" }}>TRUSTED SUPPLIERS WITH ETHICAL STANDARDS</h3>
                                <p style={{ fontSize: "18px" }}>All The Dilse Jewels diamonds are vetted to be conflict free. Our relationships with our suppliers enable us to ensure that all diamonds are ethically sourced.</p>
                            </div>
                        </div>
                    </div>
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
                                <Link to="" style={{ textDecoration: 'none' }}>
                                    <i style={{ fontSize: '30px', fontFamily: 'FontAwesome', color: '#00000043' }} className="fa-solid fa-comment-dots contact-icon"></i>
                                    <br />
                                    <span style={{ color: '#000' }}>Chat</span>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                            <div className="reviews-link" style={{ borderRight: '1px solid #00000043' }}>
                                <Link to="mailto:service@dilsejewels.com" style={{ textDecoration: 'none' }}>
                                    <i
                                        className="fa-solid fa-envelope contact-icon"
                                        style={{ fontSize: '30px', fontFamily: 'FontAwesome', color: '#00000043' }}
                                    ></i>
                                    <br />
                                    <span style={{ color: '#000' }}>Email</span>
                                </Link>
                            </div>
                        </div>


                        <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                            <div className="reviews-link">
                                <Link to="tel:1-+91 85115 44005" style={{ textDecoration: 'none' }}>
                                    <i
                                        className="fa-solid fa-phone contact-icon"
                                        style={{ fontSize: '30px', fontFamily: 'FontAwesome', color: '#00000043' }}
                                    ></i>
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

export default Factsheet