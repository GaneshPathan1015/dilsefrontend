import React from 'react'
import { Link } from 'react-router-dom'

const DiamondFooter = () => {
    return (
        <>
            <style>
                {`
          /* Hero Section */
          .diamonds-hero {
            background-image: url("/images/diamonds/1.webp");
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

          .diamonds-hero h1 {
            font-size: 65px;
            line-height: 86px;
            font-weight: 500;
            letter-spacing: -1.69px;
            font-family: "Noto Serif Display";
            margin-bottom: 30px;
            text-shadow: 0px 3px 8px #00000080;
            color: #000;
          }

          .diamonds-hero span {
            font-size: 1.2rem;
            max-width: 600px;
            color: #000;
          }

          /* Top Navigation */
          .diamonds-top-nav {
            display: flex;
            gap: 10px;
            font-weight: bold;
            margin-bottom: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .diamonds-top-nav a {
            text-decoration: none;
            color: #999;
            font-size: 0.9rem;
            transition: color 0.3s ease;
          }

          .diamonds-top-nav a:hover,
          .diamonds-top-nav a.active {
            color: #000;
            font-weight: bold;
          }

          .diamonds-top-nav span {
            color: #bbb;
          }

          /* Sidebar */
          .diamonds-sidebar-container {
            position: sticky;
            top: 20px;
          }

          .diamonds-sidebar {
            border-left: 3px solid #707070;
            padding-left: 0;
            margin-top: 10px;
            background: #fff;
            list-style: none;
            padding-left: 20px;
          }

          .diamonds-sidebar li {
            list-style: none;
            padding: 12px 15px;
            color: #999;
            cursor: pointer;
            border-bottom: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            font-size: 18px;
          }

          .diamonds-sidebar li:hover {
            background: #f8f9fa;
            color: #333;
          }

          .diamonds-sidebar li.active {
            font-weight: bold;
            color: #000;
            background: #f8f9fa;
          }

          /* Main Content */
          .diamonds-main-content {
            border-bottom: 1px solid #e0e0e0;
            padding: 30px 0;
            margin-bottom: 20px;
          }

          .diamonds-main-content:last-child {
            border-bottom: none;
          }

          .diamonds-main-content h1 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #333;
          }

          .diamonds-main-content h1 span {
            color: #666;
            font-size: 1.2rem;
            font-weight: normal;
          }

          .diamonds-details {
            display: flex;
            gap: 30px;
            align-items: flex-start;
            margin-bottom: 25px;
          }

          .diamonds-details p {
            flex: 2;
            line-height: 1.7;
            color: #555;
            font-size: 1rem;
            margin-bottom: 0;
          }

          .diamonds-img {
            flex: 1;
            max-width: 220px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          /* Related Posts */
          .diamonds-related-posts {
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
          }

          .diamonds-related-posts h2 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #333;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 10px;
          }

          .diamonds-related-posts ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .diamonds-related-posts li {
            margin-bottom: 8px;
            background: #fff;
            padding: 12px 15px;
            border-radius: 4px;
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
          }

          .diamonds-related-posts li:hover {
            background: #fff;
            border-left: 3px solid #14344a;
            transform: translateX(5px);
          }

          .diamonds-related-posts a {
            text-decoration: none;
            color: #14344a;
            font-weight: 500;
            display: block;
          }

          .diamonds-related-posts a:hover {
            color: #0d2535;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .diamonds-hero {
              min-height: 300px;
              padding: 30px 15px;
            }

            .diamonds-hero h1 {
              font-size: 2.5rem;
              line-height: 1.2;
            }

            .diamonds-hero span {
              font-size: 1rem;
            }

            .diamonds-top-nav {
              justify-content: flex-start;
              overflow-x: auto;
              padding-bottom: 10px;
            }

            .diamonds-sidebar-container {
              position: relative;
              margin-bottom: 30px;
            }

            .diamonds-sidebar {
              border-left: none;
              border-top: 2px solid #ccc;
              display: flex;
              justify-content: space-around;
              padding-top: 10px;
              padding-left: 0;
            }

            .diamonds-sidebar li {
              border-bottom: none;
              border-left: none;
              padding: 8px 12px;
              text-align: center;
              flex: 1;
            }

            .diamonds-sidebar li.active {
              border-left: none;
              border-bottom: 3px solid #000;
            }

            .diamonds-details {
              flex-direction: column;
              gap: 20px;
            }

            .diamonds-img {
              max-width: 100%;
              order: -1;
            }

            .diamonds-main-content h1 {
              font-size: 1.7rem;
            }
          }

          @media (max-width: 576px) {
            .diamonds-hero h1 {
              font-size: 2rem;
              line-height: 1.2;
            }

            .diamonds-main-content h1 {
              font-size: 1.5rem;
            }

            .diamonds-details p {
              font-size: 0.9rem;
            }

            .diamonds-related-posts {
              padding: 15px;
            }

            .diamonds-sidebar {
              flex-direction: column;
            }

            .diamonds-sidebar li {
              margin-bottom: 5px;
            }
          }

          /* Additional Utilities */
          .diamonds-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .diamonds-row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }

          .diamonds-col-md-3 {
            flex: 0 0 25%;
            max-width: 25%;
            padding: 0 15px;
          }

          .diamonds-col-md-9 {
            flex: 0 0 75%;
            max-width: 75%;
            padding: 0 15px;
          }

          .diamonds-pt-5 {
            padding-top: 3rem !important;
          }

          .diamonds-pb-4 {
            padding-bottom: 1.5rem !important;
          }
        `}
            </style>

            {/* Hero Section */}
            <section className="diamonds-hero">
                <h1>DIAMOND EDUCATION</h1>
                <span>
                    Read about the 4C's, the different diamond shapes and types as well as various certifications and how to care for loose diamonds.
                </span>
            </section>

            {/* Content Section */}
            <section className="diamonds-pt-5">
                <div className="diamonds-container">
                    {/* Top Navigation */}
                    <nav className="diamonds-top-nav">
                        <Link to="/engagement-ring-style">ENGAGEMENT RINGS</Link><span>|</span>
                        <Link className="active">DIAMONDS</Link><span>|</span>
                        <Link to="/wedding-band-styles">WEDDING BANDS</Link><span>|</span>
                        <Link to="/fine-jewelry-earrings">FINE JEWELRY</Link><span>|</span>
                        <Link to="/gemstones-types-guide">GEMSTONE</Link>
                    </nav>

                    <div className="diamonds-row">
                        {/* Sidebar */}
                        <div className="diamonds-col-md-3">
                            <div className="diamonds-sidebar-container">
                                <ul className="diamonds-sidebar">
                                    <li className="active">4Cs</li>
                                    
                                </ul>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="diamonds-col-md-9">
                            {/* Carat */}
                            <div className="diamonds-main-content">
                                <h1>Carat</h1>
                                <div className="diamonds-details">
                                    <p>
                                        Carat, one of the 4Cs of diamonds, is the globally recognized measurement for a diamond's weight (distinct from karat, which gauges gold purity) for natural and lab grown diamonds. A 1-carat diamond weighs 0.20 grams. It's important to note that the carat doesn't determine a diamond's size; that's determined by its dimensions in millimeters, specifically its diameter. Diamond carat weight really comes down to personal preferences in terms of the size and look of the engagement ring and how it looks on your finger.
                                    </p>
                                    <img src="/images/diamonds/2.jpg" alt="Carat diamond" className="diamonds-img" />
                                </div>
                                <div className="diamonds-related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a>Lab Diamond Carat & Cost</a></li>
                                        <li><a>Your Ultimate Guide to Understanding Diamond Carat and Size</a></li>
                                        <li><a>What You Need to Know About CTTW, or Carat Total Weight, Before Buying a Ring</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Cut */}
                            <div className="diamonds-main-content">
                                <h1>Cut</h1>
                                <div className="diamonds-details">
                                    <p>
                                        Diamonds are cut to enhance sparkle, fire, brilliance, and overall visual allure. Before being cut and polished, diamonds are referred to as rough diamonds, possessing an opaque surface with minimal to no sparkle due to the absence of facets. The sparkle of a diamond cut results from its ability to internally reflect and bounce light as it hits. The art of cutting a diamond, including facet angles, sizes, and locations, significantly influences its light performance and the extent of its sparkle.
                                    </p>
                                    <img src="/images/diamonds/3.webp" alt="Cut diamond" className="diamonds-img" />
                                </div>
                                <div className="diamonds-related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a>Lab Diamond Carat & Cost</a></li>
                                        <li><a>This Is The Most Expensive Diamond Cut, and Exactly Why It Costs More</a></li>
                                        <li><a>Lab Diamond Cut</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Clarity */}
                            <div className="diamonds-main-content">
                                <h1>Clarity</h1>
                                <div className="diamonds-details">
                                    <p>
                                        Diamond clarity refers to the natural imperfections, such as inclusions and blemishes, found in nearly all diamonds except the rarest ones. A higher level of clarity signifies fewer imperfections, resulting in enhanced sparkle and light performance. Though often microscopic, these imperfections can impact a diamond's brilliance by obstructing light refraction. To evaluate and compare clarity, gemologists use a standardized scale established by GIA, known as the diamond clarity scale, recognized across the industry for its precision and consistency
                                    </p>
                                    <img src="/images/diamonds/4.jpg" alt="Clarity diamond" className="diamonds-img" />
                                </div>
                                <div className="diamonds-related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a>Diamond Clarity</a></li>
                                        <li><a>Lab Diamond Clarity</a></li>
                                        <li><a>VS1 vs VS2: What's the Actual Difference Between These Clarity Grades?</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Color */}
                            <div className="diamonds-main-content">
                                <h1>Color</h1>
                                <div className="diamonds-details">
                                    <p>
                                        Both natural and lab grown diamonds come in a variety of colors, with clear stones, commonly known as white diamonds, and fancy-colored diamonds, exhibiting vivid hues like pink, green, and yellow. The Gemological Institute of America (GIA) uses a D-to-Z scale to standardize color grading for natural diamonds. At the same time, the International Gemological Institute (IGI) employs a similar scale for lab grown diamonds. Interestingly, diamond color grading assesses the absence of color, with higher grades indicating less color presence.
                                    </p>
                                    <img src="/images/diamonds/5.webp" alt="Color diamond" className="diamonds-img" />
                                </div>
                                <div className="diamonds-related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a>How Many Different Colored Diamonds Are Out There?</a></li>
                                        <li><a>Which Diamond Color Is Best? It's Not As Simple As D Color Diamonds</a></li>
                                        <li><a>Lab Diamond Color & Grading</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DiamondFooter