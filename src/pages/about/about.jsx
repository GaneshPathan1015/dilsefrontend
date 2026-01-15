import React, { useState } from "react";

export default function About() {
  const [hoverText, setHoverText] = useState(
    "Best Lab-Grown Diamonds 2024 | Expert Reviewed"
  );

  const mediaItems = [
    {
      name: "Forbes",
      img: "/images/about/22.png",
      text: "Best Lab-Grown Diamonds 2024 | Expert Reviewed",
    },
    {
      name: "The Knot",
      img: "/images/about/23.png",
      text: "Everything to Know About East-West Engagement Rings, One of 2025's Top Trends.",
    },
    {
      name: "Vogue",
      img: "/images/about/24.png",
      text: "The Perfect Gifts for the Ones Who Love The Finer Details",
    },
    {
      name: "WWD",
      img: "/images/about/25.webp",
      text: "NFL Releases Wedding Bands Collection With Fine Jewelry Label Dilse Jewels..",
    },
    {
      name: "Brides",
      img: "/images/about/26.png",
      text: "How to Choose a Coordinated Wedding Wardrobe Alongside Your Partner",
    },
    {
      name: "People",
      img: "/images/about/27.png",
      text: "Justin Theroux and Nicole Brydon Bloom Got Married with Custom Wedding Rings. This Is How They Designed Them (Exclusive)",
    },
    {
      name: "Bazaar",
      img: "/images/about/28.png",
      text: "All the Red-Carpet Looks From the 2024 SAG Awards",
    },
  ];

  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section
        style={{
          backgroundImage: 'url("/images/Header_Banner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          textAlign: "center",
          paddingBottom: "60px",
        }}
      >
        <div className="container">
          <h1
            style={{
              color: "#fff",
              fontSize: "36px",
              fontWeight: "600",
              lineHeight: "1.3",
              marginBottom: "10px",
            }}
          >
            About Us
          </h1>
          <p
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "300",
              lineHeight: "22px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            From concept to creation, our artisans transform the Surat style
            into jewelry where luxury is made personal.
          </p>
        </div>
      </section>

      {/* ---------- FOUNDERS SECTION ---------- */}
      {/* <section style={{ padding: "40px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src="/images/about/1.webp" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h1>The Founders</h1>
                <p style={{ color: "#000" }}>
                  It all began in Surat City, where Anubh and Slisha
                  Kankariya fell in love against the backdrop of the city’s
                  energy and charm. When it came time to find the perfect
                  engagement ring, they realized how overwhelming, confusing,
                  and outdated the process felt. Determined to create something
                  better, they set out to build a simpler, more transparent
                  experience — one that matched the way today’s consumer wants
                  to shop. Dilse Jewels was born out of that vision: to take the
                  stress out of buying lab grown diamond engagement rings to
                  fine jewelry and replace it Dilse Jewels, confidence, and joy.
                  <br />
                  <br />
                  More than 10 years later, Dilse Jewels has evolved into a
                  brand shaped by modern values and a deep appreciation for
                  timeless yet ornate design. Inspired by Surat’s vibrancy
                  and elegance, the brand combines advanced technology with
                  artisanal craftsmanship to create jewelry that is both
                  personal and unique — jewelry that honors tradition while
                  speaking to the style and spirit of today.
                  <br />
                  <br />
                  In 2024, we proudly opened our flagship showroom in SoHo, New
                  York, where clients can experience our jewelry in person and
                  enjoy the same personal, guided experience that defines our
                  brand.
                </p>
              </div>
            </div>

            <div className="col-md-12 text-center mt-4">
              <video
                src="/images/about/11.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "auto",
                  minHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* ---------- CRAFTED SECTION ---------- */}
      <section style={{ padding: "40px" }}>
        <div className="container">
          <div className="text-center">
            <h1>Crafted With Artisanal Excellence</h1>
            <p>
              Combining superior artisanship and carefully curated materials
              with advanced three-dimensional techniques, your jewelry is
              handcrafted from start to finish– completely through us. The
              meticulous attention to detail, mastery of skill, and passion of
              our artisans brings your vision to life for jewelry that is
              redefining luxury. From diamond engagement rings and wedding bands
              to necklaces and earrings, each piece reflects this commitment to
              excellence.
            </p>

            {/* <a
              to="/engagement-rings/preset-rings"
              style={{
                border: "2px solid #14344a",
                textDecoration: "none",
                color: "#14344a",
                textTransform: "uppercase",
                fontSize: "9px",
                lineHeight: "11px",
                padding: "4px 8px",
                display: "inline-block",
                marginTop: "10px",
              }}
            >
              Discover the collection
            </a> */}
          </div>

          <div
            className="row mt-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-md-6">
              <div>
                <h1>An Experience Built On Trust</h1>
                <p>
                  Buying jewelry is more than a shopping experience, it’s a
                  memorable journey and we thrive on helping our clients create
                  pieces that mean the world to them, every step of the way.
                  With full integrity upon our offerings, nothing leaves our
                  office without us being in love with it. We value our
                  experience to be comfortable and reliable—always alongside as
                  a trusted guide.
                </p>
                <img
                  src="/images/about/3.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  src="/images/about/2.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEAM SECTION ---------- */}
      <section style={{ padding: "40px" }}>
        <div className="container text-center">
          <h1>Our Team</h1>
          <p>
            At Dilse Jewels, we deeply value diversity and inclusion. As a
            company where 70% of our team is women, we are proud to prioritize
            representation and amplify voices that have historically been
            underrepresented in the jewelry and tech industries. We believe that
            diverse perspectives fuel creativity, innovation, and stronger
            connections with the people we serve.
          </p>
          <img src="/images/about/5.webp" alt="" className="img-fluid" />
          <h1 className="mt-4">Rooted In Sustainability</h1>
          <p>
            Committed to eco-friendly practices, sustainability lies at our
            core. Our mark in the jewelry industry is invaluable to us, and to
            uphold this commitment we are proud members of the Global Diamond
            Trade Organization (GDTO). The Dilse Jewels manufacturing process
            received a green rating, reflecting our standard. This includes our
            collections of lab grown diamonds, diamond engagement rings, wedding
            bands, necklaces, earrings, and bracelets. To further our impact in
            the community, we have minimized our environmental footprint by
            planting over 52,000 trees worldwide, saving 1,155,000 kg of carbon
            emissions.
          </p>
        </div>
      </section>

      {/* ---------- TALK OF THE TOWN SECTION ---------- */}
      <section className="mb-4"
        style={{
          backgroundColor: "#e5edf0",
          padding: "60px 0",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "500",
            color: "#1b1b1b",
            marginBottom: "40px",
          }}
        >
          We're the talk of the town
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "30px",
            marginBottom: "30px",
          }}
        >
          {mediaItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoverText(item.text)}
              onMouseLeave={() =>
                setHoverText(
                  "Everything to Know About East-West Engagement Rings, One of 2025's Top Trends."
                )
              }
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  height: "40px",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  opacity: "0.8",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.opacity = "0.8";
                }}
              />
              {index !== mediaItems.length - 1 && (
                <div
                  style={{
                    width: "1px",
                    height: "35px",
                    backgroundColor: "#aaa",
                    margin: "0 20px",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "16px",
            color: "#1b1b1b",
            fontWeight: "300",
            transition: "all 0.3s ease",
          }}
        >
          {hoverText}
        </p>
      </section>
    </>
  );
}
