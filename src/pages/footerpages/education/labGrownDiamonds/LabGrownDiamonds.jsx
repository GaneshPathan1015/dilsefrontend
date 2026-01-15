import React from "react";
import "./LabGrownDiamonds.css";
import { Link } from "react-router-dom";

function LabGrownDiamonds() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row pb-4">
            <div className="col-md-6 LabGrownDiamonds-column">
              <div className="hero-image-lab">
                <img
                  src="/images/labGrownDiamonds/Diamond_Vid_990x.webp"
                  alt=""
                  width={650}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center text-center">
              <div className="here-rightside">
                <h1 className="heading-section">LAB GROWN DIAMONDS</h1>
                <span className="heaing-para">
                  All about lab grown diamonds and rings.
                </span>
                <div className="hero-button pt-3">
                  <Link to="/diamond?menudiamond=lab-diamonds" className="hero_btn btn">SHOP LAB-GROWN DIAMONDS</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shapes-container" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px'
          }}>
            {[
              { src: "Round_Shape-icon_fb1f11ce-66d0-4f90-8478-d27cf9f40525.png", alt: "Round", label: "Round" },
              { src: "Princess_Shape-icion_86fa796c-38c5-4006-a5f0-180e1f1e7560.png", alt: "Princess", label: "Princess" },
              { src: "Cushion_Shape-icon_4a8377f1-e2bf-4068-8d98-8925167123ea.png", alt: "Cushion", label: "Cushion" },
              { src: "Radiant_Shape-icon_33a74998-113b-45da-8a0f-b3c08154ff81.png", alt: "Radiant", label: "Radiant" },
              { src: "Asscher_Shape-icon.avif", alt: "Asscher", label: "Asscher" },
              { src: "Emerald_Shape-icon.avif", alt: "Emerald", label: "Emerald" },
              { src: "Oval_Shape-icon_7aee2647-81e1-40c1-a37c-392fcbe84a89.png", alt: "Oval", label: "Oval" },
              { src: "Pear_Shape-icon.avif", alt: "Pear", label: "Pear" },
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <img
                  src={`/images/labGrownDiamonds/${item.src}`}
                  alt={item.alt}
                  style={{ width: '150px', height: 'auto', marginBottom: '10px' }}
                />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5">DIAMOND CERTIFICATION</h1>
          <div className="container my-5">
            <div className="row g-4">
              {/* GIA */}
              <div className="col-md-4 d-flex justify-content-center">
                <div className="text-center">
                  <img
                    src="/images/labGrownDiamonds/01.avif"
                    alt="GIA"
                    width={100}
                    className="mb-3 mx-auto d-block"
                  />
                  <h5>01</h5>
                  <h5>VALUE</h5>
                  <p>
                    Lab created diamonds are more affordable in comparison to
                    natural diamonds. You can expect to pay 15% to 30% less on a
                    lab diamond than you would on a mined diamond. This price
                    difference is because mined diamonds go through a longer
                    supply chain and require more costly resources.
                  </p>
                </div>
              </div>

              {/* AWDC */}
              <div className="col-md-4 d-flex justify-content-center">
                <div className="text-center">
                  <img
                    src="/images/labGrownDiamonds/03.avif"
                    alt="AWDC"
                    width={100}
                    className="mb-3 mx-auto d-block"
                  />
                  <h5>02</h5>
                  <h5>EXCEPTIONAL QUALITY & BEAUTY</h5>
                  <p>
                    Lab grown or man made diamonds are identical to their
                    naturally grown, and mined counterparts. They have the same
                    beautiful visual, robust physical, and chemical traits. And
                    are known as the hardest substance known to man.
                  </p>
                </div>
              </div>

              {/* AGS */}
              <div className="col-md-4 d-flex justify-content-center">
                <div className="text-center">
                  <img
                    src="/images/labGrownDiamonds/02.avif"
                    alt="AGS"
                    width={100}
                    className="mb-3 mx-auto d-block"
                  />
                  <h5>03</h5>
                  <h5>CONFLICT-FREE</h5>
                  <p>
                    Both natural and lab diamonds require carbon, and intense
                    heat and high pressure to grow. While mined diamonds form
                    within the Earth, lab grown diamonds are made in an
                    environment with cutting-edge equipment that mirrors the
                    Earth’s mantle conditions. Therefore, no mining deposits are
                    needed!
                  </p>
                </div>
              </div>
            </div>


            <div className="row pt-4">
              <div className="col-md-6">
                <h2>What is a Lab Created Diamond?</h2>
                <span>
                  When someone purchases a diamond, the consumer should be
                  knowledgable whether their diamond is natural or lab grown.
                  Many might think that lab created diamonds are not real, but
                  that is false. Lab grown, lab created, or man made diamonds
                  are the hardest substance known to man (with mined diamonds).
                  These kind of diamonds have the same visual, physical, and
                  chemical features to their natural counterparts. Like natural
                  diamonds, lab created diamonds also require carbon, intense
                  heat, and high pressure to grow.
                </span>
              </div>
              <div className="col-md-6">
                <div className="hero-image">
                  <img
                    src="/images/labGrownDiamonds/lab-created_990x.webp"
                    alt=""
                    width={650}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5">Lab-Created vs Mined Table</h1>
          <p className="text-center pt-3">
            How are lab diamonds made, how long is the process to create a lab
            diamond, how are lab-created diamonds grown?
          </p>

          <h3 className="text-center pt-2">LAB DIAMONDS</h3>
          <h3 className="text-center pt-3">NATURAL DIAMONDS</h3>

          <table className="diamond-table-labgrow">
            <thead>
              <tr>
                <th>Chemical Composition</th>
                <th>Origin</th>
                <th>Duration of Diamond Formation</th>
                <th>Conflict-free</th>
                <th>Price</th>
                <th>Last Forever</th>
                <th>Durability (Rating on Moths scale)</th>
                <th>Is a Real Diamond</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C (carbon)</td>
                <td>Lab</td>
                <td>At least 2 weeks (depending on carat weight)</td>
                <td>Yes</td>
                <td>$$ / $$$$ (15% - 30% less than mined diamonds)</td>
                <td>Yes</td>
                <td>10/10</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>C (carbon)</td>
                <td>Earth (mining deposits)</td>
                <td>Unknown. But can take millions of years.</td>
                <td>
                  Depending (Dilse Jewels only sells conflict-free diamonds)
                </td>
                <td>$$$ / $$$$</td>
                <td>Yes</td>
                <td>10/10</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5">DIAMOND CERTIFICATION</h1>
          <div className="container my-5">
            <div className="row g-4">
              {/* GIA */}
              <div className="col-md-4">
                <div className="text-center">
                  <img
                    src="/images/labGrownDiamonds/GIA-logo-2.png"
                    alt="GIA"
                    width={100}
                    className="mb-3 mx-auto d-block"
                  />
                  <h5>GIA</h5>
                  <p>
                    <strong>Gemological Institute of America</strong>
                    <br />
                    The Gemological Institute of America is a nonprofit institute that has an international authority on diamonds, gemstones, and pearls. GIA was founded in 1931, and in the 1940s, established the “4Cs” (Cut, Color, Clarity, and Carat Weight) or the “International Diamond Grading System.” The GIA is arguably the leading source of knowledge for all gemstones and jewelry, which is why all Dilse Jewels Natural Diamonds are graded by GIA.
                  </p>
                </div>
              </div>

              {/* AWDC */}
              <div className="col-md-4">
                <div className="text-center">
                  <img
                    src="/images/labGrownDiamonds/logo-AWDC-HR.png"
                    alt="AWDC"
                    width={100}
                    className="mb-3 mx-auto d-block"
                  />
                  <h5>AWDC</h5>
                  <p>
                    <strong>Antwerp World Diamond Center</strong>
                    <br />
                    Antwerp World Diamond Center is recognized as one of the leaders in the diamond industry. For more than five centuries, Antwerp in the country of Belgium has been the capital for international diamond trade. They stand for transparency, integrity, quality, and sustainability. Their mission is to inspire current and future generations to keep Antwerp at the forefront of the diamond trade industry.
                  </p>
                </div>
              </div>

              {/* AGS */}
              <div className="col-md-4">
                <div className="text-center">
                  <img
                    src="/images/labGrownDiamonds/ags_logo.png"
                    alt="AGS"
                    width={100}
                    className="mb-3 mx-auto d-block"
                  />
                  <h5>AGS</h5>
                  <p>
                    <strong>American Gem Society</strong>
                    <br />
                    The American Gem Society started in 1943 to protect jewelry consumers. While the Gemological Institute of America (GIA) is the industry’s leading diamond lab, the AGS is not far behind. Like GIA, AGS is also a nonprofit organization. AGS stands out amongst other diamond grading systems because they use a 0 to 10 scale, with 0 as the best and 10 as the worst.
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-4 mt-3">
              {/* IGI */}
              <div className="col-md-6">
                <div className="text-center">
                  <img
                    src="/images/labGrownDiamonds/igi-logo-png-transparent.avif"
                    alt="IGI"
                    width={100}
                    className="mb-3 mx-auto d-block"
                  />
                  <h5>IGI</h5>
                  <p>
                    <strong>International Gemological Institute</strong>
                    <br />
                    The International Gemological Institute is the world’s largest independent gemstone grading organization. Established in 1975, IGI now has offices all over the globe, with 18 lab locations. This laboratory carefully studies colored stones and jewelry, along with lab grown diamonds, to determine authenticity. They also have 14 schools of gemology.
                  </p>
                </div>
              </div>

              {/* GSI */}
              <div className="col-md-6">
                <div className="text-center">
                  <img
                    src="/images/labGrownDiamonds/GSI_Logo.avif"
                    alt="GSI"
                    width={100}
                    className="mb-3 mx-auto d-block"
                  />
                  <h5>GSI</h5>
                  <p>
                    <strong>Gemological Science International</strong>
                    <br />
                    At Gemological Science International, hundreds of researchers use advanced technology and intelligent software to automate the diamond grading process. GSI diamond grading reports stand for “innovation, integrity, and professionalism.” Their labs in the India, India, Belgium, and Israel follow the alphabetical grading system.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="faq-section">
            <h2 className="text-center mb-4">FAQs</h2>

            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    What are lab diamonds, and are they real diamonds?
                  </button>
                </h2>
                <div
                  id="faq1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Lab diamonds are identical in the chemical, molecular and
                    visual way to natural, earth mined diamonds. These diamonds
                    are grown or created in a lab, using the same principles of
                    heat and pressure that create a mined diamond within the
                    earth’s surface. Lab diamonds are 100% real diamonds just
                    like their natural counterparts.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    Where do lab-created diamonds come from?
                  </button>
                </h2>
                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Lab created diamonds are manufactured in a lab by skilled
                    technicians who use a combination of heat and pressure to
                    replicate the growth conditions of a natural diamond within
                    the earth. A diamond seed is used to grow additional layers
                    of diamond. Ultimately, rough lab diamonds are cut into the
                    same shapes as natural diamonds.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    Are lab-created diamonds the same as natural diamonds?
                  </button>
                </h2>
                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Lab diamonds have all the same properties as natural
                    diamonds. Certified lab diamonds are graded on the same 4
                    C’s scale of cut, color, clarity and carat by gemological
                    labs, making them comparable to natural diamonds.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    What are synthetic diamonds, are they the same as simulated
                    diamonds?
                  </button>
                </h2>
                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Synthetic or simulated diamonds are diamond alternatives
                    like cubic zirconia. These do not have the same visual or
                    chemical properties of lab or natural diamonds. They also do
                    not have the durability or sparkle. Learn more about Natural
                    vs Synthetic Diamonds.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq5"
                  >
                    How to tell if a diamond is natural or lab-grown?
                  </button>
                </h2>
                <div
                  id="faq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Only a trained gemologist may be able to tell the difference
                    between a natural or lab grown diamond with inspection. The
                    best way to know the difference is to buy a diamond that is
                    certified by an accredited lab like GIA or IGI.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq6"
                  >
                    What is an IGI certificate for a lab grown diamond?
                  </button>
                </h2>
                <div
                  id="faq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    IGI is a leading gemological lab that grades and certifies
                    diamonds. Their expertise is in looking at the 4 C’s of
                    diamond grading like cut, color, clarity and carat in
                    conjunction with aspects like symmetry, polish and beyond to
                    assign diamonds grades on an alphabetical scale starting
                    with D.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq7"
                  >
                    Should I buy lab diamonds in-store or online?
                  </button>
                </h2>
                <div
                  id="faq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Purchase your lab diamond wherever you feel the most
                    comfortable with the jeweler and their policies. Ensure that
                    your diamond ring purchase is protected by a return policy
                    and lifetime warranty. Overall, pricing is less expensive
                    and selection is wider online. So if you’re looking to
                    maximize what you can get for your budget, online shopping
                    is the better option.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default LabGrownDiamonds;
