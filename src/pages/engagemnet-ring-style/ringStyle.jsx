import React from "react";
import { Link } from "react-router-dom";

export default function RingStyle() {
  return (
    <>
      <style>
        {`
          /* Hero Section */
          .engagement-rings-hero {
            background-image: url("/images/engagementringstyle/1.webp");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            min-height: 400px;
            color: #fff;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
            padding: 40px 20px;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
          }

          .engagement-rings-hero h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #fff;
          }

          .engagement-rings-hero span {
            font-size: 1.2rem;
            max-width: 600px;
            color: #fff;
          }

          /* Top Navigation */
          .engagement-rings-top-nav {
            display: flex;
            gap: 10px;
            font-weight: bold;
            margin-bottom: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .engagement-rings-top-nav a {
            text-decoration: none;
            color: #999;
            font-size: 0.9rem;
            transition: color 0.3s ease;
          }

          .engagement-rings-top-nav a:hover,
          .engagement-rings-top-nav a.active {
            color: #000;
            font-weight: bold;
          }

          .engagement-rings-top-nav span {
            color: #bbb;
          }

          /* Sidebar */
          .engagement-rings-sidebar-container {
            position: sticky;
            top: 20px;
          }

          .engagement-rings-sidebar {
            border-left: 3px solid #707070;
            padding-left: 0;
            margin-top: 10px;
            background: #fff;
            list-style: none;
            padding-left: 20px;
          }

          .engagement-rings-sidebar li {
            list-style: none;
            padding: 12px 15px;
            color: #999;
            cursor: pointer;
            border-bottom: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            font-size: 18px;
          }

          .engagement-rings-sidebar li:hover {
            background: #f8f9fa;
            color: #333;
          }

          .engagement-rings-sidebar li.active {
            font-weight: bold;
            color: #000;
            background: #f8f9fa;
          }

          /* Main Content */
          .engagement-rings-main-content {
            border-bottom: 1px solid #e0e0e0;
            padding: 30px 0;
            margin-bottom: 20px;
          }

          .engagement-rings-main-content:last-child {
            border-bottom: none;
          }

          .engagement-rings-main-content h1 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #333;
          }

          .engagement-rings-main-content h1 span {
            color: #666;
            font-size: 1.2rem;
            font-weight: normal;
          }

          .engagement-rings-details {
            display: flex;
            gap: 30px;
            align-items: flex-start;
            margin-bottom: 25px;
          }

          .engagement-rings-details p {
            flex: 2;
            line-height: 1.7;
            color: #555;
            font-size: 1rem;
            margin-bottom: 0;
          }

          .engagement-rings-img {
            flex: 1;
            max-width: 220px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          /* Related Posts */
          .engagement-rings-related-posts {
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
          }

          .engagement-rings-related-posts h2 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #333;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 10px;
          }

          .engagement-rings-related-posts ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .engagement-rings-related-posts li {
            margin-bottom: 8px;
            background: #fff;
            padding: 12px 15px;
            border-radius: 4px;
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
          }

          .engagement-rings-related-posts li:hover {
            background: #fff;
            border-left: 3px solid #14344a;
            transform: translateX(5px);
          }

          .engagement-rings-related-posts a {
            text-decoration: none;
            color: #14344a;
            font-weight: 500;
            display: block;
          }

          .engagement-rings-related-posts a:hover {
            color: #0d2535;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .engagement-rings-hero {
              min-height: 300px;
              padding: 30px 15px;
            }

            .engagement-rings-hero h1 {
              font-size: 2rem;
            }

            .engagement-rings-hero span {
              font-size: 1rem;
            }

            .engagement-rings-top-nav {
              justify-content: flex-start;
              overflow-x: auto;
              padding-bottom: 10px;
            }

            .engagement-rings-sidebar-container {
              position: relative;
              margin-bottom: 30px;
            }

            .engagement-rings-sidebar {
              border-left: none;
              border-top: 2px solid #ccc;
              display: flex;
              justify-content: space-around;
              padding-top: 10px;
              padding-left: 0;
            }

            .engagement-rings-sidebar li {
              border-bottom: none;
              border-left: none;
              padding: 8px 12px;
              text-align: center;
              flex: 1;
            }

            .engagement-rings-sidebar li.active {
              border-left: none;
              border-bottom: 3px solid #000;
            }

            .engagement-rings-details {
              flex-direction: column;
              gap: 20px;
            }

            .engagement-rings-img {
              max-width: 100%;
              order: -1;
            }

            .engagement-rings-main-content h1 {
              font-size: 1.7rem;
            }
          }

          @media (max-width: 576px) {
            .engagement-rings-hero h1 {
              font-size: 1.8rem;
            }

            .engagement-rings-main-content h1 {
              font-size: 1.5rem;
            }

            .engagement-rings-details p {
              font-size: 0.9rem;
            }

            .engagement-rings-related-posts {
              padding: 15px;
            }

            .engagement-rings-sidebar {
              flex-direction: column;
            }

            .engagement-rings-sidebar li {
              margin-bottom: 5px;
            }
          }

          /* Additional Utilities */
          .engagement-rings-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .engagement-rings-row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }

          .engagement-rings-col-md-3 {
            flex: 0 0 25%;
            max-width: 25%;
            padding: 0 15px;
          }

          .engagement-rings-col-md-9 {
            flex: 0 0 75%;
            max-width: 75%;
            padding: 0 15px;
          }

          .engagement-rings-pt-5 {
            padding-top: 3rem !important;
          }

          .engagement-rings-pb-4 {
            padding-bottom: 1.5rem !important;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="engagement-rings-hero">
        <h1>ENGAGEMENT RING EDUCATION</h1>
        <span>
          Learn about engagement ring setting styles, metal options, ring sizing and more.
        </span>
      </section>

      {/* Content Section */}
      <section className="engagement-rings-pt-5">
        <div className="engagement-rings-container">
          {/* Top Navigation */}
          <nav className="engagement-rings-top-nav">
            <Link to="#" className="active">ENGAGEMENT RINGS</Link><span>|</span>
            <Link to="/diamonds">DIAMONDS</Link><span>|</span>
            <Link to="/wedding-band-styles">WEDDING BANDS</Link><span>|</span>
            <Link to="/fine-jewelry-earrings">FINE JEWELRY</Link><span>|</span>
            <Link to="/gemstones-types-guide">GEMSTONE</Link>
          </nav>

          <div className="engagement-rings-row">
            {/* Sidebar */}
            <div className="engagement-rings-col-md-3">
              <div className="engagement-rings-sidebar-container">
                <ul className="engagement-rings-sidebar">
                  <li className="active">Style</li>

                </ul>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="engagement-rings-col-md-9">
              {/* Solitaire */}
              <div className="engagement-rings-main-content">
                <h1>Solitaire</h1>
                <div className="engagement-rings-details">
                  <p>
                    In the realm of jewelry, the term "solitaire" pertains to a singular diamond or gemstone placed within a diamond engagement ring or other jewelry item. Solitaire engagement rings involve two fundamental components: the diamond and its accompanying setting. The variety of solitaire lab grown diamond engagement ring settings is diverse and abundant. These rings may feature substantial carat weights or adopt a more understated elegance. Regardless of individual preferences, your perfect solitaire lab grown diamond engagement ring is waiting for you.
                  </p>
                  <img src="/images/engagementringstyle/2.jpg" alt="Solitaire ring" className="engagement-rings-img" />
                </div>
                <div className="engagement-rings-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>Halo vs. Solitaire – Which engagement ring style should you pick?</a></li>
                    <li><a>Solitaire Engagement Rings</a></li>
                    <li><a>Which Hand Does the Engagement Ring Go On?</a></li>
                  </ul>
                </div>
              </div>

              {/* Halo */}
              <div className="engagement-rings-main-content">
                <h1>Halo</h1>
                <div className="engagement-rings-details">
                  <p>
                    A halo diamond ring showcases a central diamond encircled by a dazzling array of petite round pavé or micro-pavé diamonds. They are renowned for catching and reflecting light, directing all eyes to a focal point. Halo diamond engagement rings may incorporate gemstones rather than diamonds as the central stone, yet lab grown diamond-centered halo engagement rings reign as the most sought-after variety. Echoing vintage elegance, they are found in heirloom pieces, boasting a larger, more striking presence compared to the classic solitaire lab diamond engagement ring.
                  </p>
                  <img src="/images/engagementringstyle/3.jpg" alt="Halo ring" className="engagement-rings-img" />
                </div>
                <div className="engagement-rings-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>About Halo Diamond Engagement Rings</a></li>
                    <li><a>What Is a Cushion Halo Ring? Is It The Same As a Cushion Cut Ring?</a></li>
                    <li><a>Best Vintage Halo Diamond Engagement Rings</a></li>
                  </ul>
                </div>
              </div>

              {/* Vintage */}
              <div className="engagement-rings-main-content">
                <h1>Vintage</h1>
                <div className="engagement-rings-details">
                  <p>
                    A vintage engagement ring stands as a captivating representation of the artistry and design aesthetics of past times, taking inspiration from historical periods such as Victorian, Art Nouveau, Art Deco and Retro. Each of these distinct categories possesses its defining characteristics, allowing individuals to express their personal style and capture the timeless charm of a specific historical era. Hence, these vintage lab created engagement rings hold a unique allure, forging a connection to the past while bestowing a profound sense of individuality upon their wearers.
                  </p>
                  <img src="/images/engagementringstyle/4.jpg" alt="Vintage ring" className="engagement-rings-img" />
                </div>
                <div className="engagement-rings-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>Unique Vintage Diamond Engagement Rings</a></li>
                    <li><a>Best Vintage Oval Engagement Rings</a></li>
                    <li><a>Best Vintage Halo Diamond Engagement Rings</a></li>
                  </ul>
                </div>
              </div>

              {/* Side Stone */}
              <div className="engagement-rings-main-content">
                <h1>Side Stone</h1>
                <div className="engagement-rings-details">
                  <p>
                    Extra sparkle and brilliance in a natural or lab grown diamond engagement ring are a always a good idea. Side stone lab grown diamond engagement rings hold smaller accent diamonds strategically positioned on either side of the central stone, elevating the engagement ring's overall allure with added sparkle and grace while achieving balance and symmetry. The configuration of these side stone engagement rings offers versatile customization possibilities, allowing for the creation of a one-of-a-kind and captivating diamond engagement ring.
                  </p>
                  <img src="/images/engagementringstyle/5.jpg" alt="Side stone ring" className="engagement-rings-img" />
                </div>
                <div className="engagement-rings-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>All About Grace Kelly's Engagement Ring</a></li>
                    <li><a>All About Jessica Biel's Engagement Ring</a></li>
                    <li><a>How Much Should An Engagement Ring Cost? (Hint: The Old Rule Is Outdated)</a></li>
                  </ul>
                </div>
              </div>

              {/* Three Stone */}
              <div className="engagement-rings-main-content">
                <h1>Three Stone</h1>
                <div className="engagement-rings-details">
                  <p>
                    A three-stone diamond engagement ring showcases a central diamond and two smaller side stones, forming an eye-catching design. Frequently known as past, present, and future rings, they embody the relationship narrative; the central stone signifies the couple's current love, while the flanking stones represent the past and future they have and will share. For some, it symbolizes fidelity, friendship, and love. For this reason, the three-stone natural or lab diamond ring is also called a trinity ring or a trilogy ring.</p>
                  <img src="/images/engagementringstyle/6.jpg" alt="Three stone ring" className="engagement-rings-img" />
                </div>
                <div className="engagement-rings-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>Three Stone Engagement Rings</a></li>
                    <li><a>Princess Cut Three Stone Engagement Rings That Celebrate This Angular Beauty</a></li>
                    <li><a>Make Your Lifelong Commitment Crystal Clear with a Cushion Cut Three Stone Engagement Ring</a></li>
                  </ul>
                </div>
              </div>

              {/* Pave */}
              <div className="engagement-rings-main-content">
                <h1>Pave</h1>
                <div className="engagement-rings-details">
                  <p>
                    Pavé, derived from the French word for "paving," represents a setting technique where multiple petite diamonds or gemstones adorn the primary stone, resulting in a dazzling mosaic of brilliance. Typically, these diamonds are nestled so closely together that the metal underneath becomes indistinguishable from the diamonds themselves. Many buyers opt for white gold bands, ensuring minimal visibility of the metal prongs. Whether aiming for a modern or vintage style pave engagement ring, the setting offers a remarkably adaptable choice.
                  </p>
                  <img src="/images/engagementringstyle/7.jpg" alt="Pave ring" className="engagement-rings-img" />
                </div>
                <div className="engagement-rings-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>Pave and Micro-Pave Diamond Engagement Rings</a></li>
                    <li><a>Pave Engagement Rings That Bring the Extra Sparkle</a></li>
                    <li><a>Here's What You Need to Know Before Buying a Pave Setting</a></li>
                  </ul>
                </div>
              </div>

              {/* Hidden Halo */}
              <div className="engagement-rings-main-content">
                <h1>Hidden Halo</h1>
                <div className="engagement-rings-details">
                  <p>
                    A hidden halo diamond engagement ring offers a fresh interpretation of the timeless halo setting by encircling the center stone with smaller diamonds from beneath, imparting an extra dose of radiance. This innovative design not only creates the optical illusion of a larger central diamond but also elevates the ring's overall luminosity. The hidden halo lab grown diamond engagement ring introduces depth and a contemporary twist to the conventional halo style, creating a harmonious fusion of classic and modern aesthetics.</p>
                  <img src="/images/engagementringstyle/8.jpg" alt="Hidden halo ring" className="engagement-rings-img" />
                </div>
                <div className="engagement-rings-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>The Secret Glamour of the Hidden Halo</a></li>
                    <li><a>Hidden Accent Engagement Ring Guide</a></li>
                    <li><a>Guide to Hidden Halo Engagement Rings</a></li>
                  </ul>
                </div>
              </div>

              {/* Something Blue */}
              <div className="engagement-rings-main-content">
                <h1>Something Blue</h1>
                <div className="engagement-rings-details">
                  <p>
                    A something blue engagement ring carries a wealth of symbolism toward ideals like purity, fidelity, and matrimonial fortune. The timeless significance of the color blue, synonymous with trust and loyalty, has long been intertwined with these virtues. Whether you opt for a blue gemstone or infuse your diamond ring's design with subtle blue accents, a something blue diamond ring provides a personalized touch and burst of color amidst the brilliance of diamonds, ensuring they captivate with their unique allure.</p>
                  <img src="/images/engagementringstyle/9.jpg" alt="Something blue ring" className="engagement-rings-img" />
                </div>
                <div className="engagement-rings-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>How to Integrate Something Blue into Your Engagement Ring</a></li>
                    <li><a>Make your 'something blue' Truly Special with Blue Sapphire Accents in your Diamond Engagement Ring</a></li>
                    <li><a>Something Blue, Something Borrowed Jewelry Guide</a></li>
                  </ul>
                </div>
              </div>

              {/* Luxe */}
              <div className="engagement-rings-main-content engagement-rings-pb-4" style={{ borderBottom: "1px solid black" }}>
                <h1>Luxe</h1>
                <div className="engagement-rings-details">
                  <p>
                    Distinguished by their lavish craftsmanship and exceptional design, luxury engagement rings epitomize elegance and grandeur. This collection ushers in a new era of extravagance, with every luxe diamond engagement ring featuring a center stone that begins at a substantial 3 carats. Lab created luxe engagement rings are a fiscally and environmentally responsible way to obtain a luxuriously glamorous look without the guilt. These rings present a level of refinement that harmonizes with the profound significance of your commitment.</p>
                  <img src="/images/engagementringstyle/10.jpg" alt="Luxe ring" className="engagement-rings-img" />
                </div>
                <div className="engagement-rings-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>The Luxe Collection by Dilse Jewels - it's Big, it's Bold and it's New</a></li>
                    <li><a>Getting Nervous? Here's What to Say When You Propose</a></li>
                    <li><a>How Long Before a Proposal Should You Buy the Ring?</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}