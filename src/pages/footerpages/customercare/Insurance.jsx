import React from 'react'
import { Link } from 'react-router-dom'

const Insurance = () => {
    return (
        <>
            <section
                style={{
                    backgroundImage: 'url("/images/insurance/1.webp")',
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

                <h1 style={{ fontSize: "65px", color: 'black', fontWeight: "bold", marginBottom: "0px" }}>
                    Jewelry Insurance Made For You
                </h1>
            </section>

            <section style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: '30px'
            }}>
                <div className="container text-center">
                    <h1>Secure Your Diamond</h1>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                    }}>
                        <img src="/images/insurance/2.png" alt="" width="100%" />
                    </div>
                    <p style={{
                        fontSize: '14px',
                        lineHeight: '21px',
                        letterSpacing: '.28px',
                        maxWidth: '890px',
                        margin: '0 auto',
                        paddingBottom: '20px'
                    }}>Jewelers Mutual® Group has provided the content of this page.

                        Protect your jewelry with personalized insurance. Dilse Jewels understands the irreplaceable value and meaning your jewelry holds, so should something ever happen to your jewelry, take comfort in knowing that Jewelers Mutual® is here to help.</p>

                    {/* <Link style={{ background: 'none', border: '2px solid #000', textDecoration: 'none', padding: '5px 10px', color: '#000' }} className='' to="">GET A QUOTE</Link> */}
                </div>
            </section>

            <section>
                <div className="container text-center">
                    <h1 style={{ paddingTop: '30px' }}>Peace of Mind in Minutes</h1>
                    <p style={{
                        fontSize: '14px',
                        lineHeight: '21px',
                        letterSpacing: '.28px',
                        maxWidth: '890px',
                        margin: '0 auto',
                        paddingBottom: '20px'
                    }}>Dilse Jewels works directly alongside Jewelers Mutual, and cuts out the middleman. Clients can receive quick and easy coverage directly from Jewelers Mutual®, while working with their budget to figure out what works best for them. Receive protection with nearly every imaginable life risk in just minutes, so you don’t have to worry about the “what if.”</p>

                    <div>
                        <img src="/images/insurance/3.webp" alt="" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container text-center">
                    <h1 style={{ paddingTop: '30px' }}>About Jewelers Mutual</h1>
                    <p style={{
                        fontSize: '14px',
                        lineHeight: '21px',
                        letterSpacing: '.28px',
                        maxWidth: '890px',
                        margin: '0 auto',
                        paddingBottom: '20px'
                    }}>Since 1913, Jewelers Mutual® has an extensive history of supporting the jewelry industry, and the communities in which our policyholders and employees call home. They are closely connected with the jewelry industry through a Jewelry Industry Council of industry experts, jewelers, and other influential leaders in our industry, making them a trusted source when getting your jewelry insured. With their clients at the forefront of everything they do, they have protected the jewelry of over one million individuals.</p>

                    <div>
                        <h6>DISCLAIMER</h6>
                        <p style={{
                            fontSize: '14px',
                            lineHeight: '21px',
                            letterSpacing: '.28px',
                            maxWidth: '890px',
                            margin: '0 auto',
                            paddingBottom: '20px'
                        }}>If you have any questions about jewelry insurance from Jewelers Mutual, please email <strong>personaljewelry@jminsure.com</strong>  or call <strong>888-884-2424.</strong> </p>
                    </div>
                    <p style={{
                        fontSize: '14px',
                        lineHeight: '21px',
                        letterSpacing: '.28px',
                        maxWidth: '890px',
                        margin: '0 auto',
                        paddingBottom: '20px'
                    }}>*Insurance coverage only available in the India (all 50 states and the District of Columbia) and Canada (excluding Quebec). Must be at least 18 years of age to apply for insurance. Although Dilse Jewels may offer opinions to consumers about the importance of protecting their purchases, Dilse Jewels is not a licensed agent and does not sell or offer advice about insurance. Any/all decisions for protecting jewelry must be made by the consumer, following information gathering. The purchase of insurance must be done by direct interaction with an insurer or license insurance agent.</p>
                    <p style={{
                        fontSize: '14px',
                        lineHeight: '21px',
                        letterSpacing: '.28px',
                        maxWidth: '890px',
                        margin: '0 auto',
                        paddingBottom: '20px'
                    }}>Coverage is subject to the provisions, limitations, exclusions, and endorsements in the policy and the level of coverage you select. Coverage is offered by either Jewelers Mutual Insurance Company, SI (a stock insurer) or JM Specialty Insurance Company. Policyholders of both insurers are members of Jewelers Mutual Holding Company. Any coverage is subject to acceptance by the insurer and to policy terms and conditions.
                    </p>
                    <p style={{
                        fontSize: '14px',
                        lineHeight: '21px',
                        letterSpacing: '.28px',
                        maxWidth: '890px',
                        margin: '0 auto',
                        paddingBottom: '20px'
                    }}>By clicking the link above — “get my free quote” — you authorize Jewelers Mutual to use a secure system to retrieve and save details of this purchase from us for the purpose of calculating an insurance quote. Retrieved information may include your name and address.</p>
                </div>
            </section>
        </>
    )
}

export default Insurance