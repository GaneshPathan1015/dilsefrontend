import React from 'react';
import { Link } from 'react-router-dom';

const Financing = () => {
    return (
        <>
            <section>

                <div className='text-center'>
                    <span style={{ fontSize: '20px', lineHeight: '1.4', textAlign: 'center' }}>Do you have a Caratcasa Credit Card? Manage your account</span>
                </div>

                <div className="container" style={{ paddingTop: '100px' }}>
                    <div style={{
                        backgroundImage: 'url("/images/financing/1.webp")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        textAlign: "center",
                        color: "#fff",
                        paddingBottom: "40px",
                        position: "relative",
                    }}>
                        <h1 style={{ color: '#000' }}>Caratcasa <br />
                            jewelry financing</h1>
                        <p>Beautiful bespoke jewelry at an affordable price with great <br /> financing options</p>
                    </div>
                </div>

            </section>

            <section>
                <div className="container text-center">
                    <h1 className='pb-4 pt-4'>How it works</h1>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
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

                            <img src="/images/financing/2.png" alt="" width={85} />
                            <h5>Add to Cart</h5>
                            <p style={{ fontSize: "15px" }}>Browse jewelry and add to your <br /> shopping cart.</p>
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

                            <img src="/images/financing/3.png" alt="" width={85} />
                            <h5>Secure Checkout</h5>
                            <p style={{ fontSize: "15px" }}>At checkout, select Caratcasa Credit <br />  Card as your payment option.</p>
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

                            <img src="/images/financing/4.png" alt="" width={85} />
                            <h5>apply for financing</h5>
                            <p style={{ fontSize: "15px" }}>Apply for Caratcasa Credit <br />  Card</p>
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

                            <img src="/images/financing/5.png" alt="" width={85} />
                            <h5>Order Complete</h5>
                            <p style={{ fontSize: "15px" }}>If approved, use your issued card <br /> number to complete your purchase.</p>
                        </div>
                    </div>

                    {/* <div className='pt-4'>
                        <Link style={{ background: 'none', border: '2px solid #000', textDecoration: 'none', padding: '5px 10px', color: '#000' }} className='' to="">APPLY NOW</Link>
                    </div> */}

                    

                    <div style={{ paddingTop: '60px', textAlign: 'center' }}>

                        <h1 className='pb-4'>Caratcasa credit card</h1>
                        <div className="row text-center">
                            <div className="col-md-6">
                                <h2>Non-Promotional Financing Available</h2>
                                <p>Purchases subject to credit approval and the standard terms of <br />your Caratcasa account.</p>
                            </div>

                            <div className="col-md-6">
                                <h2>No Interest if paid in full within 12 <br /> Months*</h2>
                                <p>On purchases of $199 or more (after discounts) with your With  <br />Clarity account. Interest will be charged to your account  <br />from the purchase date if the promotional purchase is not  <br />paid in full within 12 months. Minimum monthly payments required.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4 py-md-5">
                <div className="container text-center">
                    <div className="faq-section">
                        <h2 className="text-center mb-4">FAQs</h2>

                        <div className="accordion" id="faqAccordion">
                            {/* Q1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading1">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq1"
                                    >
                                        What is the Caratcasa store credit card?
                                    </button>
                                </h2>
                                <div
                                    id="faq1"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Caratcasa offers customers a credit card through Synchrony Bank with a revolving credit line to use again and again at withclarity.com.
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
                                        How do I apply for a Caratcasa store credit card?
                                    </button>
                                </h2>
                                <div
                                    id="faq2"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        You can apply for a Caratcasa Store Credit Card
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
                                        Where do I check the status of my account?
                                    </button>
                                </h2>
                                <div
                                    id="faq3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        To check the status of your Caratcasa Store Credit Card account, click here to learn more and manage your account on Synchrony Bank's website. After loging into your account, you will be able to:
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
                                        How can I make a payment on my Caratcasa store Credit Card?
                                    </button>
                                </h2>
                                <div
                                    id="faq4"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        1. Pay Online
                                        Click here to manage your account and make payments. <br />

                                        2. Pay by Phone
                                        Contact Synchrony Bank Customer Service at 1-866-396-8254. <br />

                                        Office Hours: <br />

                                        Mon thru Fri - 7:30am to 12:00 midnight EST Sat - 10:00am to 7:00pm EST Sun ? Closed <br />
                                        3. Pay by Mail<br />
                                        Mail payments to the address below. Please ensure that you have plenty of time for your payment to arrive prior to your due date.

                                        Synchrony BankPO Box 960061Orlando, FL 32896-0061
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div style={{ paddingTop: '80px', textAlign: 'center', alignItems: 'center' }}>
                        <Link style={{ background: 'none', border: '2px solid #000', textDecoration: 'none', padding: '5px 10px', color: '#000' }} className='' to="">APPLY NOW</Link>
                    </div> */}

                    <p style={{ textAlign: 'center', fontSize: '12px', paddingBottom: '80px', paddingTop: '50px' }}>Qualifying purchase amount must be on one receipt. No interest will be charged on the promo balance if you pay it off, in full, within the promo period. If you do not, interest will be charged on the <br /> promo balance from the purchase date. The required minimum monthly payments may or may not pay off the promo balance before the end of the promo period, depending on purchase amount, <br /> promo length and payment allocation. Regular account terms apply to non-promo purchases and, after promo period ends, to the promo balance New Accounts as of 07/31/2025: Purchase APR is 34.99%. Penalty APR <br /> is 39.99%. Min Interest Charge is $2. Existing cardholders: See your credit card agreement terms. Subject to credit approval. We reserve the right to discontinue or alter the terms of this offer anytime.</p>
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

export default Financing