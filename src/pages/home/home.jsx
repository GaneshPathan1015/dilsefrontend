import React from "react";
import TrendingNow from "./TrendingNow";
import BestsellingRings from "./BestsellingRings";
import ExclusiveOffers from "./ExclusiveOffers";
import "./home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero_section_wrapper">
        <div className="container-fluid p-0 position-relative h-100">
          <video autoPlay muted loop preload="metadata">
            <source src="/vedio/main-banner-vedio.mp4" type="video/mp4" />
          </video>
          <div className="wrapper position-absolute text-center w-100">
            <h2 className="fs-1 slide-title text-white">
              The Perfect Beginning
            </h2>
            <div className="content">
              <p className="text-white">
                Enjoy a Free Diamond Necklace with purchases of 1000, or receive
                Free Diamond Studs with a spend of 2500
              </p>
            </div>
            <div className="slide-btn-wrapper justify-content-center align-items-center gap-5">
              <Link
                to="/engagement-rings/engagement-rings"
                className="text-white btn border-button border my-2 p-2 rounded-0 fw-bold border-white"
              >
                SHOP ENGAGEMENT RINGS
              </Link>
              <Link
                to="/jewelry-list"
                className="text-white btn border-button border my-2 p-2 rounded-0 fw-bold border-white"
              >
                SHOP JEWELRY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      <TrendingNow />
      <section className="build_engagement_wrapper py-2">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
              <div className="row">
                {/* Top Text */}
                <div className="col-12">
                  <div className="content text-center text-md-start mb-4">
                    <h2 className="section-header-lg section-header-md mb-3">
                      Build Your <br /> Engagement Ring
                    </h2>
                    <p className="mb-4">
                      Choose a setting, select a diamond, &amp; complete your
                      ring.
                    </p>
                    <Link
                      to="/engagement-rings/engagement-rings"
                      className="btn border-button border p-2 rounded-0 fw-bold border-dark"
                    >
                      START DESIGNING
                    </Link>
                  </div>
                </div>

                {/* Bottom Image */}
                <div className="col-12">
                  <img
                    src="https://images.unsplash.com/photo-1716366192997-817bb5e88d52?w=800&auto=format&fit=crop&q=80"
                    alt="Build Engagement Ring"
                    className="img-fluid w-100 shadow-sm"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row">
                {/* Top Image */}
                <div className="col-12">
                  <img
                    src="https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509236.jpg?ga=GA1.1.1364773145.1746277227&semt=ais_hybrid&w=740"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                {/* Bottom Text */}
                <div className="col-12">
                  <div className="content text-center text-md-start mt-4">
                    <h2 className="section-header-lg section-header-md mb-3">
                      Preset <br /> Engagement Rings
                    </h2>
                    <p className="mb-4">
                      Find your perfect match with our assortment of ready to
                      purchase designs.
                    </p>
                    <Link
                      to="/engagement-rings/preset-rings"
                      className="btn border-button border p-2 rounded-0 fw-bold border-dark"
                    >
                      EXPLORE NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bond_wrapper_block my-2">
        <div className="container">
          <div className="vedio_block">
            <video
              width="100%"
              height="100%"
              playsInline
              preload="metadata"
              muted
              loop
              autoPlay
            >
              <source src="vedio/VEDIO_BLOCK.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="content text-center">
            <h2 className="section-header-lg section-header-md">The Bond</h2>
            <p>
              Inspired by our iconic emblem, each design is a masterwork of
              hundreds of micro-pavé diamonds; an ode to eternity and the power
              of an everlasting bond.
            </p>
            <div className="button-wrapper flex flex-wrap justify-content_center">
              <Link
                to="/wedding/womens-diamond-wedding-rings"
                className="btn border-button border p-2 rounded-0 fw-bold border-dark"
              >
                EXPLORE THE COLLECTION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best selling section  */}
      <BestsellingRings />
      <ExclusiveOffers />

      <section className="Home_Preview_wrapper py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-4 col-md-5 col-12 text-center text-md-start mb-4 mb-md-0">
              <div className="grid__content">
                <span className="sub-title text-uppercase d-block mb-2">
                  TRY BEFORE YOU BUY
                </span>
                <h2 className="section-header-lg mb-3">Home Preview</h2>
                <p className="mb-3">
                  Seeking love at first sight?
                  <br />
                  Try two rings at home &amp; find the right one for you.
                </p>
                <ul className="home-preview-features list-unstyled mb-3">
                  <li>3D PRINTED</li>
                  <li>FINELY CRAFTED</li>
                  <li>CUSTOM REPLICA</li>
                  <li>COMPLIMENTARY CONSULTATION</li>
                </ul>
                <Link
                  to="/home-preview"
                  className="btn border-button border p-2 rounded-0 fw-bold border-dark"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-8 col-md-7 col-12">
              <div className="text-center text-md-end">
                <img
                  src="https://images.unsplash.com/photo-1559006864-38a01f201f95?w=1000&auto=format&fit=crop&q=80"
                  alt="Diamond Ring"
                  className="img-fluid  shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-preview-wrapper my-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Video Column */}
            <div className="col-lg-8 col-md-6 order-md-1 order-1">
              <div className="video-wrapper text-center">
                <video
                  width="100%"
                  height="100%"
                  playsInline
                  preload="metadata"
                  muted
                  loop
                  autoPlay
                >
                  <source src="vedio/side.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Text Column */}
            <div className="col-lg-4 col-md-6 order-md-2 order-2">
              <div className="grid__content text-center text-md-start">
                <span className="sub-title text-uppercase">
                  TAILORED TO YOU
                </span>
                <h2 className="section-header-lg mt-2">Virtual or In-Person</h2>
                <p className="mt-2">
                  Meet our jewelry specialists, virtually or in-person at our
                  SoHo showroom, for expert guidance on finding your perfect
                  engagement ring or gift.
                </p>
                <Link
                  to="/book-an-appointment"
                  className="btn border-button border my-3 p-2 rounded-0 fw-bold border-dark"
                >
                  SCHEDULE YOUR APPOINTMENT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bond_wrapper_block my-5">
        <div className="container">
          <div className="vedio_block">
            <video
              width="100%"
              height="100%"
              playsInline
              preload="metadata"
              muted
              loop
              autoPlay
            >
              <source src="vedio/VEDIO_BLOCK.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="content text-center mt-4">
            <span className="sub-title text-uppercase">
              DISCOVER THE WORLD OF
            </span>
            <h2 className="section-header-lg section-header-md">The Reserve</h2>
            <p className="mb-3">
              Uncover a sanctuary of one of a kind diamond artistry and immerse
              yourself in brilliance.
            </p>
            <div className="button-wrapper flex flex-wrap justify-content_center">
              <Link
                to="/reserve"
                className="btn border-button border mx-3 p-2 rounded-0 fw-bold border-dark"
              >
                DISCOVER THE RESERVE
              </Link>
              <Link
                to="/luxe"
                className="btn border-button border mx-3 p-2 rounded-0 fw-bold border-dark"
              >
                EXPLORE LUXE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
