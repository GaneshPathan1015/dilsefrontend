import React from 'react';
import { Link } from "react-router-dom";

const Mediaassets = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="w-100 text-center">
                                <h1 style={{ color: "#14344a" }}>Media Assets</h1>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img
                                src="https://www.dilsejewels.com/cdn/shop/files/in_the_news_desk_1_990x.webp?v=1684335537"
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
                            to="/fact-sheet"
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
                        <h2 style={{ color: '#14344a' }}>Media Assets</h2>
                    </div>

                    <div className="row text-center justify-content-center">

                        <div className="col-md-6 d-flex justify-content-center mb-4">
                            <div className="card" style={{ width: "600px", minHeight: "600px" }}>
                                <img className="card-img-top" src="https://www.dilsejewels.com/cdn/shop/files/VIDEOS-AND-INTERVIEWS_780x.jpg?v=1684335565" alt="Card image cap" />
                                <div className="card-body" style={{ background: "#d5ebec" }}>
                                    <h5 className="card-title text-uppercase" style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>Videos and interviews</h5>
                                    <p className="card-text" style={{ fontSize: "18px" }}>Anubh divulges his insider secrets to help you get the most out of engagement ring shopping.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center mb-4">
                            <div className="card" style={{ width: "600px", minHeight: "600px" }}>
                                <img className="card-img-top" src="https://www.dilsejewels.com/cdn/shop/files/Dilse Jewels_box_780x.jpg?v=1684335582" alt="Card image cap" />
                                <div className="card-body" style={{ background: "#d5ebec" }}>
                                    <h5 className="card-title text-uppercase" style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>THE Dilse Jewels LOGO</h5>
                                    <p className="card-text" style={{ fontSize: "18px" }}>The Dilse Jewels official logo</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center mt-4">
                            <div className="card" style={{ width: "600px", minHeight: "600px" }}>
                                <img className="card-img-top" src="https://www.dilsejewels.com/cdn/shop/files/colorpalate_780x.jpg?v=1684335599" alt="Card image cap" />
                                <div className="card-body" style={{ background: "#d5ebec" }}>
                                    <h5 className="card-title text-uppercase" style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>FONTS AND COLORS</h5>
                                    <p className="card-text" style={{ fontSize: "18px" }}>The Dilse Jewels official fonts and Colors</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center mt-4">
                            <div className="card" style={{ width: "600px", minHeight: "600px" }}>
                                <img className="card-img-top" src="https://www.dilsejewels.com/cdn/shop/files/Dilse Jewels_box_780x.jpg?v=1684335582" alt="Card image cap" />
                                <div className="card-body" style={{ background: "#d5ebec" }}>
                                    <h5 className="card-title text-uppercase" style={{ margin: "25px 0 20px", fontSize: "24px", color: "#14344a" }}>PHOTOS</h5>
                                    <p className="card-text" style={{ fontSize: "18px" }}>The Dilse Jewels original Photos</p>
                                </div>
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
                            <div className="reviews-link" style={{ borderRight: '1px solid #00000043' }}>
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

export default Mediaassets