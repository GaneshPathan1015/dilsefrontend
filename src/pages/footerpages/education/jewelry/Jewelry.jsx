import React from "react";
import { Link } from "react-router-dom";

function Jewelry() {
  return (
    <>
      <style>
        {`
          /* Hero Section */
          .jewelry-hero {
            background-image: url("/images/jewelry/edu-fine-jewelry-banner-desk_2x_ed5996f7-ea60-4273-a027-e7941cff0326_4096x.webp");
            background-size: cover;
            background-position: right center;
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

          .jewelry-hero h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .jewelry-hero span {
            font-size: 1.2rem;
            max-width: 600px;
          }

          /* Top Navigation */
          .jewelry-top-nav {
            display: flex;
            gap: 10px;
            font-weight: bold;
            margin-bottom: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .jewelry-top-nav a {
            text-decoration: none;
            color: #999;
            font-size: 0.9rem;
            transition: color 0.3s ease;
          }

          .jewelry-top-nav a:hover,
          .jewelry-top-nav a.active {
            color: #000;
            font-weight: bold;
          }

          .jewelry-top-nav span {
            color: #bbb;
          }

          /* Sidebar */
          .jewelry-sidebar-container {
            position: sticky;
            top: 20px;
          }

          .jewelry-sidebar {
            border-left: 3px solid #707070;
            padding-left: 0;
            margin-top: 10px;
            background: #fff;
            list-style: none;
            padding-left: 20px;
          }

          .jewelry-sidebar li {
            list-style: none;
            padding: 12px 15px;
            color: #999;
            cursor: pointer;
            border-bottom: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            font-size: 18px;
          }

          .jewelry-sidebar li:hover {
            background: #f8f9fa;
            color: #333;
          }

          .jewelry-sidebar li.active {
            font-weight: bold;
            color: #000;
            background: #f8f9fa;
          }

          /* Main Content */
          .jewelry-main-content {
            border-bottom: 1px solid #e0e0e0;
            padding: 30px 0;
            margin-bottom: 20px;
          }

          .jewelry-main-content:last-child {
            border-bottom: none;
          }

          .jewelry-main-content h1 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #333;
          }

          .jewelry-main-content h1 span {
            color: #666;
            font-size: 1.2rem;
            font-weight: normal;
          }

          .jewelry-details {
            display: flex;
            gap: 30px;
            align-items: flex-start;
            margin-bottom: 25px;
          }

          .jewelry-details p {
            flex: 2;
            line-height: 1.7;
            color: #555;
            font-size: 1rem;
            margin-bottom: 0;
          }

          .jewelry-img {
            flex: 1;
            max-width: 220px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          /* Related Posts */
          .jewelry-related-posts {
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
          }

          .jewelry-related-posts h2 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #333;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 10px;
          }

          .jewelry-related-posts ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .jewelry-related-posts li {
            margin-bottom: 8px;
            background: #fff;
            padding: 12px 15px;
            border-radius: 4px;
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
          }

          .jewelry-related-posts li:hover {
            background: #fff;
            border-left: 3px solid #14344a;
            transform: translateX(5px);
          }

          .jewelry-related-posts a {
            text-decoration: none;
            color: #14344a;
            font-weight: 500;
            display: block;
          }

          .jewelry-related-posts a:hover {
            color: #0d2535;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .jewelry-hero {
              min-height: 300px;
              padding: 30px 15px;
            }

            .jewelry-hero h1 {
              font-size: 2rem;
            }

            .jewelry-hero span {
              font-size: 1rem;
            }

            .jewelry-top-nav {
              justify-content: flex-start;
              overflow-x: auto;
              padding-bottom: 10px;
            }

            .jewelry-sidebar-container {
              position: relative;
              margin-bottom: 30px;
            }

            .jewelry-sidebar {
              border-left: none;
              border-top: 2px solid #ccc;
              display: flex;
              justify-content: space-around;
              padding-top: 10px;
              padding-left: 0;
            }

            .jewelry-sidebar li {
              border-bottom: none;
              border-left: none;
              padding: 8px 12px;
              text-align: center;
              flex: 1;
            }

            .jewelry-sidebar li.active {
              border-left: none;
              border-bottom: 3px solid #000;
            }

            .jewelry-details {
              flex-direction: column;
              gap: 20px;
            }

            .jewelry-img {
              max-width: 100%;
              order: -1;
            }

            .jewelry-main-content h1 {
              font-size: 1.7rem;
            }
          }

          @media (max-width: 576px) {
            .jewelry-hero h1 {
              font-size: 1.8rem;
            }

            .jewelry-main-content h1 {
              font-size: 1.5rem;
            }

            .jewelry-details p {
              font-size: 0.9rem;
            }

            .jewelry-related-posts {
              padding: 15px;
            }

            .jewelry-sidebar {
              flex-direction: column;
            }

            .jewelry-sidebar li {
              margin-bottom: 5px;
            }
          }

          /* Additional Utilities */
          .jewelry-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .jewelry-row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }

          .jewelry-col-md-3 {
            flex: 0 0 25%;
            max-width: 25%;
            padding: 0 15px;
          }

          .jewelry-col-md-9 {
            flex: 0 0 75%;
            max-width: 75%;
            padding: 0 15px;
          }

          .jewelry-pt-5 {
            padding-top: 3rem !important;
          }

          .jewelry-pb-4 {
            padding-bottom: 1.5rem !important;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="jewelry-hero">
        <h1>FINE JEWELRY EDUCATION</h1>
        <span>
          Information on the different styles of earrings, necklaces and bracelets. Learn about Gifting Occasions as well.
        </span>
      </section>

      {/* Content Section */}
      <section style={{ paddingTop: '3rem' }}>
        <div className="jewelry-container">
          {/* Top Navigation */} 
          <nav className="jewelry-top-nav">
            <Link to="/engagement-ring-style">ENGAGEMENT RINGS</Link><span>|</span>
            <Link to="/diamonds">DIAMONDS</Link><span>|</span>
            <Link to="/wedding-band-styles">WEDDING BANDS</Link><span>|</span>
            <Link className="active">FINE JEWELRY</Link><span>|</span>
            <Link to="/gemstones-types-guide">GEMSTONE</Link>
          </nav>

          <div className="jewelry-row">
            {/* Sidebar */}
            <div className="jewelry-col-md-3">
              <div className="jewelry-sidebar-container">
                <ul className="jewelry-sidebar">
                  <li className="active">EARRINGS</li>
                </ul>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="jewelry-col-md-9">
              {/* Studs */}
              <div className="jewelry-main-content">
                <h1>Studs</h1>
                <div className="jewelry-details">
                  <p>
                    Diamond stud earrings are timeless and versatile, showcasing a single diamond in an elegant, understated design. They sit close to the earlobe, offering comfort for daily wear, and effortlessly elevate any outfit with a touch of sophistication. Round diamonds are a classic choice, prized for their symmetrical brilliance, while princess and cushion cuts provide a modern twist. For a hint of romance, consider oval-shaped diamonds, adding a touch of elegance to your collection. Lab grown diamond stud earrings are perfect for everyday or special occasions.
                  </p>
                  <img src="/images/jewelry/1.jpg" alt="Stud earrings" className="jewelry-img" />
                </div>
                <div className="jewelry-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>Lab Created Stud Earring Prices</a></li>
                    <li><a>Lab Diamond Studs</a></li>
                    <li><a>Hoops vs. Stud Earrings - What's the Difference</a></li>
                  </ul>
                </div>
              </div>

              {/* Hoops */}
              <div className="jewelry-main-content">
                <h1>Hoops</h1>
                <div className="jewelry-details">
                  <p>
                    Hoop earrings remain a classic choice, offering a wide range of styles to suit your preferences. From sleek and minimalistic huggies to glamorous diamond hoop earrings and elegant pearl hoops, there's an option for every occasion. Geometric hoops add a unique twist, while large statement hoops make a bold fashion statement. Double hoops complement most face shapes and hairstyles with their dual hoops and various designs. Whatever your style, hoops are here to stay, emphasizing your facial features and enhancing your overall look.
                  </p>
                  <img src="/images/jewelry/2.jpg" alt="Hoop earrings" className="jewelry-img" />
                </div>
                <div className="jewelry-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>A Guide To Gold Hoop Earrings</a></li>
                    <li><a>A Guide to Hoop Earrings</a></li>
                    <li><a>Hoops vs. Stud Earrings - What's the Difference</a></li>
                  </ul>
                </div>
              </div>

              {/* Drops */}
              <div className="jewelry-main-content">
                <h1>Drops</h1>
                <div className="jewelry-details">
                  <p>
                    Drop earrings and dangle earrings are often confused, but the key distinction lies in their length and mobility. Drop earrings are stationary and fall just below the earlobe, while dangle earrings are longer and designed to sway gracefully. Dangle earrings can vary in complexity, featuring intricate designs or a single chain with an ornament. Drop earrings have a timeless appeal, enjoying a resurgence in popularity due to their versatility and suitability for various occasions, from daily wear to elegant events.
                  </p>
                  <img src="/images/jewelry/3.jpg" alt="Drop earrings" className="jewelry-img" />
                </div>
                <div className="jewelry-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>Trend Alert: The Most Classy Drop Earring Styles of the Season</a></li>
                    <li><a>Guide to Clip-On Earrings</a></li>
                    <li><a>Guide to Drop Earrings</a></li>
                  </ul>
                </div>
              </div>

              {/* Halo */}
              <div className="jewelry-main-content">
                <h1>Halo</h1>
                <div className="jewelry-details">
                  <p>
                    Similar to halo-style engagement rings, halo earrings boast a central stone encircled by smaller diamonds, creating a halo-like effect that exudes trendiness and timeless elegance. These earrings, whether in stud, double halo, or drop style, bestow an aura of utmost sophistication upon the wearer, reminiscent of royalty. Their distinctive design and abundant use of diamonds result in exceptional sparkle and brilliance, setting them apart from other earring styles. For a more statement look, opt for lab grown diamond halo earrings.
                  </p>
                  <img src="/images/jewelry/4.jpg" alt="Halo earrings" className="jewelry-img" />
                </div>
                <div className="jewelry-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>What Are Halo Style Earrings and Why Are They a Good Choice?</a></li>
                    <li><a>Halo Earrings to Love Forever (No. 3 is Our Favorite!)</a></li>
                    <li><a>Everything You Need to Know About Earrings</a></li>
                  </ul>
                </div>
              </div>

              {/* Diamond Earrings */}
              <div className="jewelry-main-content">
                <h1>Diamond Earrings</h1>
                <div className="jewelry-details">
                  <p>
                    Unlike engagement rings or wedding bands, diamond earrings offer versatility and can change styles. Various types include classic diamond stud earrings, perfect for daily wear; diamond hoop earrings, available in different sizes and styles; halo earrings, which offer a dramatic yet practical choice for everyday wear; and dangle earrings, which come in diverse lengths and shapes, making them suitable for both casual and formal events. Men's earrings feature classic options like round diamond solitaire studs, simple metal crosses, and attention-grabbing dangles.                  </p>
                  <img src="/images/jewelry/5.jpg" alt="Diamond earrings" className="jewelry-img" />
                </div>
                <div className="jewelry-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>Men's Guide to Diamond Earrings</a></li>
                    <li><a>7 Best Diamond Stud Earrings You Should Gift This Holiday Season</a></li>
                    <li><a>Lab Diamond Studs for Everyday Wear</a></li>
                  </ul>
                </div>
              </div>

              {/* Earring Backs */}
              <div className="jewelry-main-content jewelry-pb-4" style={{borderBottom: "1px solid black" }}>
                <h1>Earring Backs & Post Types</h1>
                <div className="jewelry-details">
                  <p>
                    Earring backs are the unsung heroes of your jewelry collection, safeguarding your valuable and sentimental pieces. For versatile stud earrings, consider options like push backs for discreet simplicity, secure lock backs for added security, or screw backs for the ultimate in steadfastness. If you prefer dangle and hoop earrings, safety lock closures offer reliable support, while lever backs secure your earrings and add a touch of elegance. Regardless of your style, there's an earring back type to keep your precious jewelry safe and stylish.                  </p>
                  <img src="/images/jewelry/6.jpg" alt="Earring backs" className="jewelry-img" />
                </div>
                <div className="jewelry-related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a>What You Need to Know About Backless Earrings (and Secure Backs)</a></li>
                    <li><a>Earring Backing Guide</a></li>
                    <li><a>Men's Guide to Diamond Earrings</a></li>
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

export default Jewelry;