import React from 'react'
import { Link } from 'react-router-dom'

const WeddingBandStyle = () => {
    return (
        <>
            <style>
                {`
          /* Hero Section */
          .wedding-bands-hero {
            background-image: url("/images/weddingbandstyles/1.webp");
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

          .wedding-bands-hero h1 {
            font-size: 65px;
            line-height: 86px;
            font-weight: 500;
            letter-spacing: -1.69px;
            font-family: "Noto Serif Display";
            margin-bottom: 30px;
            text-shadow: 0px 3px 8px #00000080;
            color: #000;
          }

          .wedding-bands-hero span {
            font-size: 1.2rem;
            max-width: 600px;
            color: #000;
          }

          /* Top Navigation */
          .wedding-bands-top-nav {
            display: flex;
            gap: 10px;
            font-weight: bold;
            margin-bottom: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .wedding-bands-top-nav a {
            text-decoration: none;
            color: #999;
            font-size: 0.9rem;
            transition: color 0.3s ease;
          }

          .wedding-bands-top-nav a:hover,
          .wedding-bands-top-nav a.active {
            color: #000;
            font-weight: bold;
          }

          .wedding-bands-top-nav span {
            color: #bbb;
          }

          /* Sidebar */
          .wedding-bands-sidebar-container {
            position: sticky;
            top: 20px;
          }

          .wedding-bands-sidebar {
            border-left: 3px solid #707070;
            padding-left: 0;
            margin-top: 10px;
            background: #fff;
            list-style: none;
            padding-left: 20px;
          }

          .wedding-bands-sidebar li {
            list-style: none;
            padding: 12px 15px;
            color: #999;
            cursor: pointer;
            border-bottom: 1px solid #f0f0f0;
            transition: all 0.3s ease;
            font-size: 18px;
          }

          .wedding-bands-sidebar li:hover {
            background: #f8f9fa;
            color: #333;
          }

          .wedding-bands-sidebar li.active {
            font-weight: bold;
            color: #000;
            background: #f8f9fa;
          }

          /* Main Content */
          .wedding-bands-main-content {
            border-bottom: 1px solid #e0e0e0;
            padding: 30px 0;
            margin-bottom: 20px;
          }

          .wedding-bands-main-content:last-child {
            border-bottom: none;
          }

          .wedding-bands-main-content h1 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #333;
          }

          .wedding-bands-main-content h1 span {
            color: #666;
            font-size: 1.2rem;
            font-weight: normal;
          }

          .wedding-bands-details {
            display: flex;
            gap: 30px;
            align-items: flex-start;
            margin-bottom: 25px;
          }

          .wedding-bands-details p {
            flex: 2;
            line-height: 1.7;
            color: #555;
            font-size: 1rem;
            margin-bottom: 0;
          }

          .wedding-bands-img {
            flex: 1;
            max-width: 220px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          /* Related Posts */
          .wedding-bands-related-posts {
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
          }

          .wedding-bands-related-posts h2 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #333;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 10px;
          }

          .wedding-bands-related-posts ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .wedding-bands-related-posts li {
            margin-bottom: 8px;
            background: #fff;
            padding: 12px 15px;
            border-radius: 4px;
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
          }

          .wedding-bands-related-posts li:hover {
            background: #fff;
            border-left: 3px solid #14344a;
            transform: translateX(5px);
          }

          .wedding-bands-related-posts a {
            text-decoration: none;
            color: #14344a;
            font-weight: 500;
            display: block;
          }

          .wedding-bands-related-posts a:hover {
            color: #0d2535;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .wedding-bands-hero {
              min-height: 300px;
              padding: 30px 15px;
            }

            .wedding-bands-hero h1 {
              font-size: 2.5rem;
              line-height: 1.2;
            }

            .wedding-bands-hero span {
              font-size: 1rem;
            }

            .wedding-bands-top-nav {
              justify-content: flex-start;
              overflow-x: auto;
              padding-bottom: 10px;
            }

            .wedding-bands-sidebar-container {
              position: relative;
              margin-bottom: 30px;
            }

            .wedding-bands-sidebar {
              border-left: none;
              border-top: 2px solid #ccc;
              display: flex;
              justify-content: space-around;
              padding-top: 10px;
              padding-left: 0;
            }

            .wedding-bands-sidebar li {
              border-bottom: none;
              border-left: none;
              padding: 8px 12px;
              text-align: center;
              flex: 1;
            }

            .wedding-bands-sidebar li.active {
              border-left: none;
              border-bottom: 3px solid #000;
            }

            .wedding-bands-details {
              flex-direction: column;
              gap: 20px;
            }

            .wedding-bands-img {
              max-width: 100%;
              order: -1;
            }

            .wedding-bands-main-content h1 {
              font-size: 1.7rem;
            }
          }

          @media (max-width: 576px) {
            .wedding-bands-hero h1 {
              font-size: 2rem;
              line-height: 1.2;
            }

            .wedding-bands-main-content h1 {
              font-size: 1.5rem;
            }

            .wedding-bands-details p {
              font-size: 0.9rem;
            }

            .wedding-bands-related-posts {
              padding: 15px;
            }

            .wedding-bands-sidebar {
              flex-direction: column;
            }

            .wedding-bands-sidebar li {
              margin-bottom: 5px;
            }
          }

          /* Additional Utilities */
          .wedding-bands-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .wedding-bands-row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }

          .wedding-bands-col-md-3 {
            flex: 0 0 25%;
            max-width: 25%;
            padding: 0 15px;
          }

          .wedding-bands-col-md-9 {
            flex: 0 0 75%;
            max-width: 75%;
            padding: 0 15px;
          }

          .wedding-bands-pt-5 {
            padding-top: 3rem !important;
          }

          .wedding-bands-pb-4 {
            padding-bottom: 1.5rem !important;
          }
        `}
            </style>

            {/* Hero Section */}
            <section className="wedding-bands-hero">
                <h1>WEDDING BANDS EDUCATION</h1>
                <span>
                    Gain knowledge on wedding bands. Styles, Metals, Mens vs. Womens etc.
                </span>
            </section>

            {/* Content Section */}
            <section className="wedding-bands-pt-5">
                <div className="wedding-bands-container">
                    {/* Top Navigation */}
                    <nav className="wedding-bands-top-nav">
                        <Link to="/engagement-ring-style">ENGAGEMENT RINGS</Link><span>|</span>
                        <Link to="/diamonds">DIAMONDS</Link><span>|</span>
                        <Link to="#" className="active">WEDDING BANDS</Link><span>|</span>
                        <Link to="/fine-jewelry-earrings">FINE JEWELRY</Link><span>|</span>
                        <Link to="/gemstones-types-guide">GEMSTONE</Link>
                    </nav>

                    <div className="wedding-bands-row">
                        {/* Sidebar */}
                        <div className="wedding-bands-col-md-3">
                            <div className="wedding-bands-sidebar-container">
                                <ul className="wedding-bands-sidebar">
                                    <li className="active">Wedding Band Styles</li>
                                </ul>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="wedding-bands-col-md-9">
                            {/* Pavé Wedding Bands */}
                            <div className="wedding-bands-main-content">
                                <h1>Pavé Wedding Bands</h1>
                                <div className="wedding-bands-details">
                                    <p>
                                        Originating from the French word "pavé," the pave setting involves arranging a multitude of accent diamonds in close proximity to create the appearance of a singular, unbroken diamond surface. This technique imparts a consistent brilliance, creating the optical illusion of a larger and more abundant diamond presence. Moreover, it fosters a harmonious and unified design, seamlessly integrating all the diamonds. Pave wedding bands are extremely popular for their unconventional style and are preferred by the modern couple.
                                    </p>
                                    <img src="/images/weddingbandstyles/2.jpg" alt="Pavé wedding bands" className="wedding-bands-img" />
                                </div>
                                <div className="wedding-bands-related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><Link>Wedding Bands vs Anniversary Bands</Link></li>
                                        <li><Link>How To Care For Platinum Ring Bands</Link></li>
                                        <li><Link>A Guide to Women's Wedding Band Cost</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Anniversary Rings */}
                            <div className="wedding-bands-main-content">
                                <h1>Anniversary Rings</h1>
                                <div className="wedding-bands-details">
                                    <p>
                                        Anniversary bands symbolize enduring love and commitment. They celebrate marriage milestones with sparkling diamonds adorning the band. These rings feature an array of dazzling gemstones, such as diamonds or other precious stones, meticulously set in a continuous circle to represent the unbroken bond of marriage. Their timeless design makes anniversary bands a meaningful and elegant reminder of the years spent together. Contemporary couples often choose these elegant rings as a meaningful way to commemorate their journey and cherish their commitment.
                                    </p>
                                    <img src="/images/weddingbandstyles/3.jpg" alt="Anniversary rings" className="wedding-bands-img" />
                                </div>
                                <div className="wedding-bands-related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><Link>Wedding Bands vs Anniversary Band</Link></li>
                                        <li><Link>How to Wear an Anniversary Band</Link></li>
                                        <li><Link>Understanding the Differences: Wedding Band vs. Anniversary Band</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Eternity Wedding Rings */}
                            <div className="wedding-bands-main-content">
                                <h1>Eternity Wedding Rings</h1>
                                <div className="wedding-bands-details">
                                    <p>
                                        Eternity rings symbolize everlasting love and commitment, featuring a continuous band of precious stones, typically diamonds, encircling the entire ring. This unbroken loop represents the timeless nature of a couple's bond, with no beginning or end. Often exchanged on significant occasions like anniversaries or the birth of a child, eternity rings serve as a powerful and enduring symbol of love and fidelity. Eternity rings are a timeless expression of commitment and a beautiful way to celebrate the enduring nature of love.
                                    </p>
                                    <img src="/images/weddingbandstyles/4.jpg" alt="Eternity wedding rings" className="wedding-bands-img" />
                                </div>
                                <div className="wedding-bands-related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><Link>Eternity Ring Guide</Link></li>
                                        <li><Link>The Ultimate Guide to Eternity Bands</Link></li>
                                        <li><Link>Top 9 Anniversary and Eternity Bands that Work as Wedding Bands for a Statement Look</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Metal Wedding Bands */}
                            <div className="wedding-bands-main-content">
                                <h1>Metal Wedding Bands</h1>
                                <div className="wedding-bands-details">
                                    <p>
                                        Plain metal wedding bands are enduringly favored by couples for their simplicity, elegance, and resilience, making them a timeless choice. Crafted from various metals such as gold, platinum, titanium, white gold, or rose gold, each metal imparts unique qualities to the band. With finish options including high-polish, matte, and brushed, these bands effortlessly complement any style, offering versatility, affordability, and low maintenance. Their enduring design, budget-friendly nature, and durability make metal wedding bands an enduring symbol of love and commitment, transcending fashion trends.
                                    </p>
                                    <img src="/images/weddingbandstyles/5.webp" alt="Metal wedding bands" className="wedding-bands-img" />
                                </div>
                                <div className="wedding-bands-related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><Link>How To Care For Platinum Ring Bands</Link></li>
                                        <li><Link>Plain Metal Wedding Bands: Why They'll Always Remain in Vogue</Link></li>
                                        <li><Link>Men's Platinum Wedding Bands</Link></li>
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

export default WeddingBandStyle