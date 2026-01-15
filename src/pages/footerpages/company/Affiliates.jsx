import React, { useState } from "react";
import Slider from "react-slick";
import OurJewelry from "./slidersComponent/OurJewelry";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// 🔹 Blog Section Component
// const BlogSection = ({ items, settings }) => {
//   return (
//     <section className="Exclusive_Offers_wrapper my-5 bg-secondary py-5">
//       <div className="container text-center">
//         <h1 className="mb-5" style={{ color: "#000" }}>
//           Our Jewelry
//         </h1>

//         <Slider {...settings} className="Exclusive_Offers">
//           {items.map((item, index) => (
//             <div key={index} className="text-center px-2">
//               <Link to={item.link} style={{ textDecoration: "none" }}>
//                 <div className="img-block mb-3">
//                   <img
//                     src={item.img}
//                     alt={item.label}
//                     className="img-fluid rounded"
//                   />
//                 </div>
//                 <p
//                   style={{
//                     color: "#000",
//                     fontSize: "18px",
//                     textTransform: "uppercase",
//                     letterSpacing: "1.44px",
//                     margin: "15px 0 0",
//                     fontWeight: 600,
//                     textAlign: "center",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   {item.label}
//                 </p>
//               </Link>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

const ReviewSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const reviews = [
    {
      text: "I just recieved my Lab diamond from Dilse Jewels...I got it shipped to Canada...it looks fantastic! They have great customer service as well as I ordered the wrong setting and I called the next day and it was taken care of no problem...I highly recommend them...best prices as well for better quality! Even with the duties and taxes I had to pay on top of the purchase price! Will be letting my friends know about them! ",
      writer: "Jonathan McKeown",
      rating: 5,
    },
    {
      text: "Where to begin. Okay so we purchased a 3ct diamond ring at Dilse Jewels. The team is 5 stars! The entire process almost felt too easy -- they were patient, super helpful, intelligent and went above and beyond.The diamond: We were spending a reasonable amount for the size of diamond so it was crucial the experience was transparent with as much help as we needed provided. I worked with Alex and Claudia and really learned a lot speaking to them both. If you're hesitant about a diamond or unsure, ask them and they will tell you their honest assessment- just because a diamond is in your budget, doesn't mean it's the best fit for you- so having people who know diamonds from this company advising really helped.The ring: I loved a halo style on their site- but of course the diamond I ended up selecting was a bit larger, so I wanted something that accomodated for that. The halo ring was rendered and shown to me with the specific dimensions I wanted- and the accent diamonds and everything were adjusted for me. I never expected to find such a high level of service from an online store. There were no local store here in Texas that even offered me anything close to this level of service. I'm beyond thrilled and would recommend these folks to anyone in a heartbeat. ",
      writer: "Taylor Stevenson",
      rating: 4,
    },
    {
      text: "My (now) fiance loved the ring! It was really easy to find diamonds and settings, and they display exactly what it will look like, so well. Highly recommend!",
      writer: "Jonny Gordon",
      rating: 5,
    },
    {
      text: "Dilse Jewels was a great place to find an engagement ring. I thought shopping online would be difficult but it came out greater than expected and my fiancé loved it. Will shop with them again.",
      writer: "Baron Pilot",
      rating: 5,
    },
    {
      text: `"OH MY GOD!!!" That's what I have decided to name the ring I purchased through Dilse Jewels. Whenever my fiance shows off her ring, which she loves to show off, she doesn't get an "Oh, pretty" or "How cute." Instead, there is a loud gasp followed by "Oh My God!" In fact, when I was proposing, she didn't just say, "Yes." She screamed, "HOLY ****! Is that real?!" followed by a "YES!!!" And that, my friends, is the response you want to get from an engagement ring. I ring-shopped for over a year. I looked at thousands of diamonds, bands, visited jewelers, websites, etc. I compared them all and found the best band (platinum with diamonds) and best diamond (3+ carat) at the best price through Dilse Jewels. They delivered exactly what they promised and exactly what I was looking for — a ring with a HUGE gorgeous diamond that sparkles so bright you can see it across the room. I love that my fiance loves this ring. And Dilse Jewels made it easy — they answered all of my questions and provided fantastic customer service. So if you're ring shopping, Dilse Jewels is the one to go with. Honestly, they cannot be beat.`,
      writer: "Mat Korade",
      rating: 5,
    },
    {
      text: "Absolutely beautiful ring and even better than I expected. I was extremely nervous buying a ring sight-unseen and looked for months and months for the right one. I somehow landed on Dilse Jewels and custom built my ring. They had it ready in exactly the time frame they mentioned, and how no issues whatsoever during the whole process. Would highly recommend--not to mention the fiancé is in LOVE with it.  ",
      writer: "Bradley Brunson",
      rating: 5,
    },
    {
      text: "Great product and even better service! ",
      writer: "Sean Kennedy",
      rating: 5,
    },
    {
      text: " Ring came, was beautiful and was at a great price, I recommend to all my friends",
      writer: "Bobby Wiles",
      rating: 5,
    },
    {
      text: "I had purchased an enhancement to my wedding ring and I love it. Easy to do business with and very helpful. ",
      writer: "kimberly buettner",
      rating: 5,
    },
    {
      text: " I had the best experience with Dilse Jewels. I was nervous about ordering a ring completely online, but it was absolutely gorgeous when I received it and looked even better than I could amazing.",
      writer: "Sarah K",
      rating: 5,
    },
    {
      text: "Dilse Jewels made my shopping experience so great and they went out of their way to exchange the diamond I originally had set in the ring to one that I liked. They were extremely efficient and prompt with all their communications and actions. Very satisfied customer! Can highly recommend it to anyone!",
      writer: "Erené Spies",
      rating: 5,
    },
    {
      text: "Such a great company to work with! The at-home previews were gorgeous and could pass as the real deal because the ring I purchased looked exactly like the preview ring. The phone and e-mail responses by customer service were so fast, polite, and helpful. I spent a day emailing them back and forth because I messed up my shipping address, and my MAX wait time for a reply was about an hour. I'm so excited to be able to give my girlfriend the ring she's referred to as my ring since she saw the preview ",
      writer: "Kelsey Buchmann",
      rating: 5,
    },
    {
      text: " Really great service, and helpful in finding my fiancée's engagement ring and love the matching wedding band. Would highly recommend. ",
      writer: "Sebastian Ivory",
      rating: 5,
    },
    {
      text: "I just recieved my Lab diamond from Dilse Jewels...I got it shipped to Canada...it looks fantastic! They have great customer service as well as I ordered the wrong setting and I called the next day and it was taken care of no problem...I highly recommend them...best prices as well for better quality! Even with the duties and taxes I had to pay on top of the purchase price! Will be letting my friends know about them!  ",
      writer: "Jonathan McKeown",
      rating: 5,
    },
    {
      text: "Where to begin. Okay so we purchased a 3ct diamond ring at Dilse Jewels. The team is 5 stars! The entire process almost felt too easy -- they were patient, super helpful, intelligent and went above and beyond.The diamond: We were spending a reasonable amount for the size of diamond so it was crucial the experience was transparent with as much help as we needed provided. I worked with Alex and Claudia and really learned a lot speaking to them both. If you're hesitant about a diamond or unsure, ask them and they will tell you their honest assessment- just because a diamond is in your budget, doesn't mean it's the best fit for you- so having people who know diamonds from this company advising really helped.The ring: I loved a halo style on their site- but of course the diamond I ended up selecting was a bit larger, so I wanted something that accomodated for that. The halo ring was rendered and shown to me with the specific dimensions I wanted- and the accent diamonds and everything were adjusted for me. I never expected to find such a high level of service from an online store. There were no local store here in Texas that even offered me anything close to this level of service. I'm beyond thrilled and would recommend these folks to anyone in a heartbeat.  ",
      writer: "Taylor Stevenson",
      rating: 5,
    },
    {
      text: " My (now) fiance loved the ring! It was really easy to find diamonds and settings, and they display exactly what it will look like, so well. Highly recommend!",
      writer: "Jonny Gordon",
      rating: 5,
    },
    {
      text: " Dilse Jewels was a great place to find an engagement ring. I thought shopping online would be difficult but it came out greater than expected and my fiancé loved it. Will shop with them again.",
      writer: "Baron Pilot",
      rating: 5,
    },
  ];
  return (
    <section
      style={{
        background: "#f8f9fa",
        padding: "40px 0",
        textAlign: "center",
      }}
    >
      <div style={{ width: "90%", margin: "0 auto" }} className="px-2">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2">
              <p
                style={{
                  fontSize: "16px",
                  fontStyle: "italic",
                  color: "#555",
                  lineHeight: "1.5",
                  marginBottom: "15px",
                }}
                className="px-2"
              >
                "{review.text}"
              </p>

              <h5
                style={{
                  fontWeight: "600",
                  color: "#222",
                  marginBottom: "10px",
                  fontSize: "16px",
                }}
              >
                — {review.writer}
              </h5>

              <div style={{ marginBottom: "15px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    style={{
                      color: i < review.rating ? "#143449" : "#ccc",
                      fontSize: "18px",
                      marginRight: "2px",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              <Link
                to="/reviews"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "25px",
                  padding: "8px 20px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "inline-block",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#000")}
              >
                More Reviews
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const Affiliates = () => {
  const [hoveredText, setHoveredText] = useState("");

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const engagementItems = [
    {
      img: "/images/affiliates/2.avif",
      label: "Engagement Rings",
      link: "/engagement-rings/rings",
    },
    { img: "/images/affiliates/3.avif", label: "Diamonds", link: "/diamond" },
    {
      img: "/images/affiliates/4.avif",
      label: "Wedding Bands",
      link: "/wedding/womens-wedding-rings",
    },
    {
      img: "/images/affiliates/5.avif",
      label: "Gemstone Rings",
      link: "/engagement-rings/style?menustyle=gemstone",
    },
    {
      img: "/images/affiliates/6.avif",
      label: "Diamond Earrings",
      link: "/diamond?menudiamond=lab-diamond",
    },
    {
      img: "/images/affiliates/7.avif",
      label: "Diamond Necklaces",
      link: "/jewelry-list?category=necklaces-32",
    },
  ];

  const logos = [
    {
      id: 1,
      img: "/images/reviews/Layer_7_b928e7c8-4a1d-428e-95c7-7749050efcf6.webp",
      text: "Startup taking the stress out of engagement ring shopping.",
    },
    {
      id: 2,
      img: "/images/reviews/Layer_8_b9c46a8a-c744-4e9b-a96d-20e8b35ad80d.webp",
      text: "Ranked #18 on the list of fastest-growing companies in The India.",
    },
    {
      id: 3,
      img: "/images/reviews/home-logo-sprite1.webp",
      text: "Excelling in crafting rose gold jewelry and engagement rings.",
    },
    {
      id: 4,
      img: "/images/reviews/Layer_10_c8d0a905-14eb-43ad-933f-d030d2540465.avif",
      text: "The smartest and most stress-free way to shop for her engagement ring online.",
    },
    {
      id: 5,
      img: "/images/reviews/home-logo-sprite-cnn_9bd63659-8aed-44b0-8eea-35568017ca18.webp",
      text: "Dilse Jewels crafts lab diamond engagement rings worth buying.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-4 mb-md-0"
              style={{ textAlign: "center", minHeight: "300px" }}
            >
              <h1 className="fw-bold display-6 display-md-4">
                Dilse Jewels <br />
                Affiliate Program
              </h1>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img
                src="/images/affiliates/affiliates-banner_1_990x.webp"
                alt="Affiliate Banner"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section
        className="py-4 py-md-5"
        style={{ background: "#f8f9fa", textAlign: "center" }}
      >
        <div className="container">
          <h1 className="mb-3 mb-md-4 h2">Who we are</h1>
          <p
            style={{ fontSize: "16px", lineHeight: "1.6" }}
            className="px-2 px-md-0"
          >
            Dilse Jewels is the only online, direct to consumer home try-on
            engagement ring company that marries affordability with expertise
            and convenience with a personal touch. We craft all jewelry in-house
            with purity, quality and authenticity. With our Home Preview
            Program, you can try replicas of your favorite engagement ring
            styles at home to make a confident decision. Deliberately different,
            with engagement rings for all. Rings you can browse online and try
            at home.
          </p>
        </div>
      </section>

      {/* Blog Slider Section */}
      {/* <BlogSection items={engagementItems} settings={sliderSettings} /> */}
      <OurJewelry />

      {/* Why Join Us Section */}
      <section>
        <div
          className="container"
          style={{ background: "#14344a", padding: "30px" }}
        >
          <div className="row align-items-center">
            <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
              <h1 className="text-white h2">Why Join us?</h1>
            </div>
            <div className="col-12 col-md-8 text-center text-md-start">
              <p
                style={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}
                className="mb-3"
              >
                Award winning growth, stellar customer service and attention to
                quality have made us the fastest growing engagement ring company
                in the country. Rapidly expanding jewelry collections and
                transparency at our core.
              </p>
              <Link
                to="https://ui.awin.com/merchant-profile/89517"
                style={{
                  background: "none",
                  color: "#fff",
                  border: "none",
                  borderBottom: "2px solid #fff",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Join now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section>
        <div className="container text-center p-3 p-md-4">
          <h1 className="pt-3 pt-md-4 radiance-title h2">Program details</h1>

          {/* ===== Cards ===== */}
          <div className="row pt-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <img
                src="/images/affiliates/8.svg"
                alt="Commissioned sales"
                className="radiance-card-img mx-auto d-block"
                style={{ width: "60px", height: "60px" }}
              />
              <h5 className="radiance-card-title mt-3 h6">
                COMMISSIONED SALES
              </h5>
              <p className="radiance-card-text small">
                Earn up to 8% commission on all diamond jewelry sold up to 45
                days of referral link.
              </p>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <img
                src="/images/affiliates/9.svg"
                alt="SHOPPERS LOVE US"
                className="radiance-card-img mx-auto d-block"
                style={{ width: "60px", height: "60px" }}
              />
              <h5 className="radiance-card-title mt-3 h6">SHOPPERS LOVE US</h5>
              <p className="radiance-card-text small">
                Free Shipping, Free Returns, Free Lifetime Warranty, Gemologists
                on call, Free Resizing make us the best choice to shop for a
                ring.
              </p>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <img
                src="/images/affiliates/10.svg"
                alt="VETTED GIA NATURAL & IGI LAB GROWN DIAMONDS"
                className="radiance-card-img mx-auto d-block"
                style={{ width: "60px", height: "60px" }}
              />
              <h5 className="radiance-card-title mt-3 h6">
                VETTED GIA NATURAL & IGI LAB GROWN DIAMONDS
              </h5>
              <p className="radiance-card-text small">
                All our diamonds are certified, vetted and high quality with
                competitive prices 30% less than retail stores.
              </p>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <img
                src="/images/affiliates/11.svg"
                alt="UNIQUE RING DESIGNS"
                className="radiance-card-img mx-auto d-block"
                style={{ width: "60px", height: "60px" }}
              />
              <h5 className="radiance-card-title mt-3 h6">
                UNIQUE RING DESIGNS
              </h5>
              <p className="radiance-card-text small">
                100's of customizable ring designs available on site. Easy
                customization and high quality with all rings made in house in
                NYC.
              </p>
            </div>

            {/* Card 5 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
              <img
                src="/images/affiliates/12.svg"
                alt="TECHNOLOGY ENABLED HOME PREVIEW"
                className="radiance-card-img mx-auto d-block"
                style={{ width: "60px", height: "60px" }}
              />
              <h5 className="radiance-card-title mt-3 h6">
                TECHNOLOGY ENABLED HOME PREVIEW
              </h5>
              <p className="radiance-card-text small">
                Customer preview rings at home and buy rings online. 3D printed,
                customized in over 8,500 ways and completely free to try. Earn
                on each Home Preview.
              </p>
            </div>

            {/* Card 6 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
              <img
                src="/images/affiliates/13.svg"
                alt="DEDICATED TEAM"
                className="radiance-card-img mx-auto d-block"
                style={{ width: "60px", height: "60px" }}
              />
              <h5 className="radiance-card-title mt-3 h6">DEDICATED TEAM</h5>
              <p className="radiance-card-text small">
                In House Affiliate Team to make sure you achieve your goals.
                Quick responses, tailor made programs.
              </p>
            </div>

            {/* Card 7 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 mx-auto">
              <img
                src="/images/affiliates/14.svg"
                alt="HIGH AVERAGE ORDER VALUE"
                className="radiance-card-img mx-auto d-block"
                style={{ width: "60px", height: "60px" }}
              />
              <h5 className="radiance-card-title mt-3 h6">
                HIGH AVERAGE ORDER VALUE
              </h5>
              <p className="radiance-card-text small">
                Average order value is over $5,000. One of the highest in the
                industry. Our product assortment also includes wedding bands,
                jewelry, lab and natual diamonds in all price points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section style={{ padding: "40px 0" }}>
        <div className="container">
          <h1 className="text-center h2 mb-4">We're the talk of the town.</h1>
          <div className="d-flex flex-wrap justify-content-center align-items-center border-top border-bottom py-4">
            {logos.map((logo, index) => (
              <div
                key={logo.id}
                className="text-center position-relative p-3 col-6 col-sm-4 col-md-2 mb-3"
                style={{
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  borderRight:
                    index < logos.length - 1 && window.innerWidth > 768
                      ? "1px solid #dee2e6"
                      : "none",
                }}
                onMouseEnter={() => setHoveredText(logo.text)}
                onMouseLeave={() => setHoveredText("")}
              >
                <img
                  src={logo.img}
                  alt={`Logo ${logo.id}`}
                  style={{
                    height: "40px",
                    width: "auto",
                    maxWidth: "120px",
                    filter: "grayscale(100%)",
                    opacity: "0.7",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = "grayscale(0%)";
                    e.target.style.opacity = "1";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = "grayscale(100%)";
                    e.target.style.opacity = "0.7";
                    e.target.style.transform = "scale(1)";
                  }}
                />
              </div>
            ))}
          </div>
          <div
            className="mt-4 fs-6 text-center"
            style={{
              color: "#000",
              transform: hoveredText ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.4s ease",
              minHeight: "25px",
              opacity: hoveredText ? 1 : 0,
            }}
          >
            {hoveredText ||
              "Startup taking the stress out of engagement ring shopping."}
          </div>

          <h1 className="text-center h2 mt-5">Tried, Tested & Loved</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              margin: "20px 0",
            }}
          >
            <img
              src="/images/affiliates/google-reviews-logo.png"
              alt="Google Reviews Logo"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <ReviewSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section mb-4">
        <div
          className="container contact-container"
          style={{ background: "#f0f4f7", padding: "30px 20px" }}
        >
          <div className="row align-items-center text-center contact-row">
            <div className="col-12 col-lg-6 col-md-12 mb-4 mb-lg-0">
              <h1 className="h3">We're here to help.</h1>
              <p className="contact-text">
                Our expert gemologists are here to help.
                <br />
                We're available seven days a week to guide you on
                <br />
                diamonds, gemstones, and jewelry.
              </p>
            </div>

            <div className="col-4 col-lg-2 col-md-4 col-sm-4 mb-3">
              <div
                className="reviews-link"
                style={{ borderRight: "1px solid #00000043" }}
              >
                <Link to="" style={{ textDecoration: "none" }}>
                  <i
                    style={{
                      fontSize: "24px",
                      fontFamily: "FontAwesome",
                      color: "#00000043",
                    }}
                    className="fa-solid fa-comment-dots contact-icon"
                  ></i>
                  <br />
                  <span style={{ color: "#000", fontSize: "14px" }}>Chat</span>
                </Link>
              </div>
            </div>

            <div className="col-4 col-lg-2 col-md-4 col-sm-4 mb-3">
              <div
                className="reviews-link"
                style={{ borderRight: "1px solid #00000043" }}
              >
                <Link
                  to="mailto:service@dilsejewels.com"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa-solid fa-envelope contact-icon"
                    style={{
                      fontSize: "24px",
                      fontFamily: "FontAwesome",
                      color: "#00000043",
                    }}
                  ></i>
                  <br />
                  <span style={{ color: "#000", fontSize: "14px" }}>Email</span>
                </Link>
              </div>
            </div>

            <div className="col-4 col-lg-2 col-md-4 col-sm-4 mb-3">
              <div className="reviews-link">
                <Link
                  to="tel:1-+91 85115 44005"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    className="fa-solid fa-phone contact-icon"
                    style={{
                      fontSize: "24px",
                      fontFamily: "FontAwesome",
                      color: "#00000043",
                    }}
                  ></i>
                  <br />
                  <span style={{ color: "#000", fontSize: "14px" }}>Phone</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Affiliates;
